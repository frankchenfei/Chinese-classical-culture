-- ============================================================================
-- 华夏文脉 · Supabase 完整数据库脚本
-- 包含：会员档案、论道论坛、支付订单、商品媒体云同步、在线对局
-- 使用：Supabase → SQL Editor → 全选粘贴执行
-- 特性：幂等，可重复执行；保留已有数据，不删除原表
-- ============================================================================

-- 0) public schema 基础权限
grant usage on schema public to postgres, anon, authenticated, service_role;
grant create on schema public to postgres;
grant all on schema public to postgres;

-- ============================================================================
-- 1) 会员档案
-- ============================================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  email text,
  gender text default '',
  avatar text default '',
  credits integer default 20,
  owned_books jsonb default '[]',
  progress jsonb default '{}',
  cart jsonb default '[]',
  plan text default '',
  plan_exp timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles add column if not exists name text;
alter table public.profiles add column if not exists email text;
alter table public.profiles add column if not exists gender text default '';
alter table public.profiles add column if not exists avatar text default '';
alter table public.profiles add column if not exists credits integer default 20;
alter table public.profiles add column if not exists owned_books jsonb default '[]';
alter table public.profiles add column if not exists progress jsonb default '{}';
alter table public.profiles add column if not exists cart jsonb default '[]';
alter table public.profiles add column if not exists plan text default '';
alter table public.profiles add column if not exists plan_exp timestamptz;
alter table public.profiles add column if not exists created_at timestamptz default now();
alter table public.profiles add column if not exists updated_at timestamptz default now();

alter table public.profiles enable row level security;
drop policy if exists "own_profile_all" on public.profiles;
create policy "own_profile_all" on public.profiles
  for all
  using (auth.uid() = id)
  with check (auth.uid() = id);

grant select, insert, update, delete on public.profiles to authenticated;

-- 通用 updated_at 触发器
create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_profiles_updated_at on public.profiles;
create trigger trg_profiles_updated_at
  before update on public.profiles
  for each row execute function public.touch_updated_at();

-- ============================================================================
-- 2) 论道论坛
-- ============================================================================
create table if not exists public.forum_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  name text default '',
  avatar text default '',
  title text not null,
  content text not null,
  replies jsonb default '[]',
  flags integer default 0,
  hidden boolean default false,
  category text default '',
  created_at timestamptz default now()
);

alter table public.forum_posts add column if not exists name text default '';
alter table public.forum_posts add column if not exists avatar text default '';
alter table public.forum_posts add column if not exists replies jsonb default '[]';
alter table public.forum_posts add column if not exists flags integer default 0;
alter table public.forum_posts add column if not exists hidden boolean default false;
alter table public.forum_posts add column if not exists category text default '';
alter table public.forum_posts add column if not exists created_at timestamptz default now();

alter table public.forum_posts enable row level security;
drop policy if exists "forum_read_all" on public.forum_posts;
create policy "forum_read_all" on public.forum_posts for select using (true);
drop policy if exists "forum_insert_own" on public.forum_posts;
create policy "forum_insert_own" on public.forum_posts for insert to authenticated with check (auth.uid() = user_id);
drop policy if exists "forum_update_own" on public.forum_posts;
create policy "forum_update_own" on public.forum_posts for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
drop policy if exists "forum_delete_own" on public.forum_posts;
create policy "forum_delete_own" on public.forum_posts for delete to authenticated using (auth.uid() = user_id);

grant select on public.forum_posts to anon, authenticated;
grant insert, update, delete on public.forum_posts to authenticated;
create index if not exists forum_posts_created_at_idx on public.forum_posts (created_at desc);

-- ============================================================================
-- 3) 支付订单
-- ============================================================================
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  method text default '',
  amount integer default 0,
  credits integer default 0,
  status text default 'pending',
  created_at timestamptz default now()
);

alter table public.orders add column if not exists method text default '';
alter table public.orders add column if not exists amount integer default 0;
alter table public.orders add column if not exists credits integer default 0;
alter table public.orders add column if not exists status text default 'pending';
alter table public.orders add column if not exists created_at timestamptz default now();

alter table public.orders enable row level security;
drop policy if exists "orders_own" on public.orders;
create policy "orders_own" on public.orders
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

grant select, insert, update, delete on public.orders to authenticated;

-- ============================================================================
-- 4) 商品媒体：管理员白名单 + product_media + Storage
-- ============================================================================
create table if not exists public.app_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz default now()
);

alter table public.app_admins enable row level security;
drop policy if exists "app_admins_self_read" on public.app_admins;
create policy "app_admins_self_read" on public.app_admins
  for select to authenticated using (auth.uid() = user_id);
grant select on public.app_admins to authenticated;

create or replace function public.is_app_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists(select 1 from public.app_admins where user_id = auth.uid());
$$;

revoke all on function public.is_app_admin() from public;
grant execute on function public.is_app_admin() to authenticated;

create table if not exists public.product_media (
  product_id text not null,
  kind text not null,
  slot smallint not null,
  url text not null,
  path text default '',
  uploaded_by uuid references auth.users(id) on delete set null,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  primary key (product_id, kind, slot),
  constraint product_media_kind_slot_check check (
    (kind = 'image' and slot between 0 and 7) or
    (kind = 'video' and slot between 0 and 1)
  )
);

alter table public.product_media add column if not exists url text;
alter table public.product_media add column if not exists path text default '';
alter table public.product_media add column if not exists uploaded_by uuid references auth.users(id) on delete set null;
alter table public.product_media add column if not exists created_at timestamptz default now();
alter table public.product_media add column if not exists updated_at timestamptz default now();

alter table public.product_media enable row level security;
drop policy if exists "product_media_read_all" on public.product_media;
create policy "product_media_read_all" on public.product_media for select using (true);
drop policy if exists "product_media_admin_write" on public.product_media;
create policy "product_media_admin_write" on public.product_media
  for all to authenticated
  using (public.is_app_admin())
  with check (public.is_app_admin());

grant select on public.product_media to anon, authenticated;
grant insert, update, delete on public.product_media to authenticated;
create index if not exists product_media_product_idx on public.product_media (product_id);

drop trigger if exists trg_product_media_updated_at on public.product_media;
create trigger trg_product_media_updated_at
  before update on public.product_media
  for each row execute function public.touch_updated_at();

-- Storage 公共桶：所有人可读，只有 app_admins 可写
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'product-media',
  'product-media',
  true,
  52428800,
  array['image/jpeg','image/png','image/webp','image/gif','video/mp4','video/webm','video/quicktime']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "product_media_storage_read" on storage.objects;
create policy "product_media_storage_read" on storage.objects
  for select using (bucket_id = 'product-media');

drop policy if exists "product_media_storage_insert" on storage.objects;
create policy "product_media_storage_insert" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'product-media' and public.is_app_admin());

drop policy if exists "product_media_storage_update" on storage.objects;
create policy "product_media_storage_update" on storage.objects
  for update to authenticated
  using (bucket_id = 'product-media' and public.is_app_admin())
  with check (bucket_id = 'product-media' and public.is_app_admin());

drop policy if exists "product_media_storage_delete" on storage.objects;
create policy "product_media_storage_delete" on storage.objects
  for delete to authenticated
  using (bucket_id = 'product-media' and public.is_app_admin());

-- ============================================================================
-- 5) 在线对局：房间与走子
-- ============================================================================
create table if not exists public.game_rooms (
  id text primary key,
  kind text not null,
  host uuid not null,
  host_name text default '',
  status text default 'waiting',
  players jsonb default '[]',
  settings jsonb default '{}',
  state jsonb default '{}',
  turn int default 1,
  winner int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.game_rooms add column if not exists host_name text default '';
alter table public.game_rooms add column if not exists status text default 'waiting';
alter table public.game_rooms add column if not exists players jsonb default '[]';
alter table public.game_rooms add column if not exists settings jsonb default '{}';
alter table public.game_rooms add column if not exists state jsonb default '{}';
alter table public.game_rooms add column if not exists turn int default 1;
alter table public.game_rooms add column if not exists winner int default 0;
alter table public.game_rooms add column if not exists created_at timestamptz default now();
alter table public.game_rooms add column if not exists updated_at timestamptz default now();

alter table public.game_rooms enable row level security;
drop policy if exists "gr_select" on public.game_rooms;
create policy "gr_select" on public.game_rooms for select using (true);
drop policy if exists "gr_insert" on public.game_rooms;
create policy "gr_insert" on public.game_rooms for insert to authenticated with check (auth.uid() = host);
drop policy if exists "gr_update" on public.game_rooms;
create policy "gr_update" on public.game_rooms for update to authenticated using (true) with check (true);
drop policy if exists "gr_delete" on public.game_rooms;
create policy "gr_delete" on public.game_rooms for delete to authenticated using (auth.uid() = host);

grant select on public.game_rooms to anon, authenticated;
grant insert, update, delete on public.game_rooms to authenticated;

create table if not exists public.game_moves (
  id bigint generated by default as identity primary key,
  room_id text not null references public.game_rooms(id) on delete cascade,
  uid uuid,
  seat int default 0,
  move jsonb not null,
  created_at timestamptz default now()
);

alter table public.game_moves add column if not exists uid uuid;
alter table public.game_moves add column if not exists seat int default 0;
alter table public.game_moves add column if not exists created_at timestamptz default now();

alter table public.game_moves enable row level security;
drop policy if exists "gm_select" on public.game_moves;
create policy "gm_select" on public.game_moves for select using (true);
drop policy if exists "gm_insert" on public.game_moves;
create policy "gm_insert" on public.game_moves for insert to authenticated with check (auth.uid() = uid);
drop policy if exists "gm_delete" on public.game_moves;
create policy "gm_delete" on public.game_moves for delete to authenticated using (auth.uid() = uid);

grant select on public.game_moves to anon, authenticated;
grant insert, delete on public.game_moves to authenticated;
grant usage, select on all sequences in schema public to authenticated;
create index if not exists game_moves_room_idx on public.game_moves (room_id, id);

drop trigger if exists trg_game_rooms_updated_at on public.game_rooms;
create trigger trg_game_rooms_updated_at
  before update on public.game_rooms
  for each row execute function public.touch_updated_at();

create or replace function public.cleanup_game_rooms()
returns void
language sql
security definer
set search_path = public
as $$
  delete from public.game_rooms where updated_at < now() - interval '7 days';
$$;

revoke all on function public.cleanup_game_rooms() from public;
grant execute on function public.cleanup_game_rooms() to authenticated;

-- ============================================================================
-- 6) 管理员初始化
-- 把邮箱换成你的管理员账号邮箱，然后执行这一条
-- ============================================================================
-- insert into public.app_admins (user_id)
-- select id from auth.users where email = 'your-admin@example.com'
-- on conflict (user_id) do nothing;