// ===== BUG FIX: Use IIFE to capture originals before function declarations hoist over them =====
(function(){
  const origRenderReader = typeof renderReader === "function" ? renderReader : function(){};
  const origRdrOpen = typeof rdrOpen === "function" ? rdrOpen : function(){};

  // Fix: renderReader - call original via closure, not global reference
  window.renderReader = function rdr(){
    origRenderReader();
    const sec=document.getElementById("reader-page");if(!sec||!_currentBook)return;
    const b=_currentBook,chs=b.chapters&&(b.chapters[_lang]||b.chapters["zh-CN"]||[]);
    if(!chs||!chs.length)return;
    const cd=sec.querySelector(".reader-content");
    if(cd&&!cd.querySelector(".tts-bar")){
      const tb=document.createElement("div");tb.className="tts-bar";
      tb.innerHTML="<button class=\"tts-btn\" onclick=\"playAllRecitation()\">🔊 "+t("playAudio")+"</button><button class=\"tts-btn\" onclick=\"stopRecitation()\">⏹ "+t("stopAudio")+"</button><span class=\"tts-status\" id=\"ttsStatus\"></span>";
      cd.insertBefore(tb,cd.firstChild);
    }
  };

  // Fix: rdrOpen - use window reference for TTS (adds TTS bar when opening chapter)
  window.rdrOpen = function ro(i){
    origRdrOpen(i);
    const dv=document.querySelector("#reader-page .reader-content");
    if(dv&&!dv.querySelector(".tts-bar")){
      const tb=document.createElement("div");tb.className="tts-bar";
      tb.innerHTML="<button class=\"tts-btn\" onclick=\"speakText(document.querySelector('.reader-content .chapter-text').textContent,'"+_lang+"')\">🔊 "+t("playAudio")+"</button><button class=\"tts-btn\" onclick=\"stopRecitation()\">⏹ "+t("stopAudio")+"</button><span class=\"tts-status\" id=\"ttsStatus\"></span>";
      dv.insertBefore(tb,dv.firstChild);
    }
  };
})();
// ===== NAV OVERRIDE =====
function renderNav(){
  const nav=document.getElementById("mainNav");if(!nav)return;
  const pgs=["home","timeline","classics","forum","surname","shop"];
  const ks=["navHome","navTimeline","navClassics","navRushiDao","navSurname","navShop"];
  nav.innerHTML=pgs.map((p,i)=>"<button class=\"nav-link\" data-page=\""+p+"\" onclick=\"navTo('"+p+"')\">"+t(ks[i])+"</button>").join("")+
    "<span class=\"nav-spacer\"></span>"+
    (_user?"<button class=\"nav-link\" data-page=\"account\" onclick=\"navTo('account')\">"+t("navAccount")+"<span class=\"cart-count\" id=\"cartBadge\" style=\"display:none\">0</span></button>"
    :"<button class=\"nav-link\" onclick=\"showAuth('login')\">"+t("navLogin")+"/"+t("navRegister")+"</button>");
  updateCartCount();
}
// ===== PAGE ROUTE OVERRIDE =====
function renderPage(p){
  document.querySelectorAll(".page").forEach(el=>el.classList.remove("active"));
  const tg=document.getElementById(p+"-page");if(tg)tg.classList.add("active");
  document.querySelectorAll(".nav-link").forEach(n=>n.classList.toggle("active",n.dataset.page===p));
  if(p==="classics")renderClassics();
  if(p==="shop")renderShop();
  if(p==="account")renderAccount();
  if(p==="reader"&&_currentBook)renderReader();
  if(p==="forum")renderForum();
  if(p==="surname")renderSurname();
}
// ===== SHOP OVERRIDES =====
function renderShop(){const g=document.getElementById("shopGrid");if(!g)return;
  const cats=[...new Set(SHOP_PRODUCTS.map(p=>p.cat))];
  const ck={music:"shopMusic",chess:"shopChess",calligraphy:"shopCalligraphy",painting:"shopPainting",surname:"shopSurname",tea:"shopTea",ceramic:"shopCeramic",yijing:"shopYijing",stationery:"shopStationery"};
  const fb=document.getElementById("shopFilter");if(fb)fb.innerHTML="<button class=\"active\" onclick=\"filShop('all',this)\">"+t("shopAll")+"</button>"+cats.map(c=>"<button onclick=\"filShop('"+c+"',this)\">"+t(ck[c]||c)+"</button>").join("");
  renderShopGrid(SHOP_PRODUCTS);
}
function renderShopGrid(prods){const g=document.getElementById("shopGrid");if(!g)return;
  const ck={music:"shopMusic",chess:"shopChess",calligraphy:"shopCalligraphy",painting:"shopPainting",surname:"shopSurname",tea:"shopTea",ceramic:"shopCeramic",yijing:"shopYijing",stationery:"shopStationery"};
  g.innerHTML=prods.map(p=>{const n=p.name[_lang]||p.name["zh-CN"],d=p.desc[_lang]||p.desc["zh-CN"];return "<div class=\"shop-card\"><div class=\"sc-img\">"+p.img+"</div><div class=\"sc-body\"><h4>"+n+"</h4><div class=\"sc-cat\">"+t(ck[p.cat]||p.cat)+"</div><div class=\"sc-desc\">"+d+"</div><div class=\"sc-price\">"+p.price+" "+t("credits")+"</div><button class=\"shop-btn\" onclick=\"addCart('"+p.id+"')\">"+t("addToCart")+"</button></div></div>";}).join("");
}
function filShop(c,btn){document.querySelectorAll("#shopFilter button").forEach(b=>b.classList.remove("active"));if(btn)btn.classList.add("active");renderShopGrid(c==="all"?SHOP_PRODUCTS:SHOP_PRODUCTS.filter(p=>p.cat===c));}
// ===== RUSHI DAO =====
const RSD_DATA={confucius:{key:"rsdConfucius",figures:["孔子","孟子","荀子","董仲舒","朱熹","王阳明","程颐","程颢"],texts:["《论语》","《孟子》","《大学》","《中庸》","《诗经》","《尚书》","《礼记》","《周易》","《春秋》"],concepts:[{c:"仁",en:"Benevolence",desc:"爱人、修己、安人"},{c:"礼",en:"Ritual Propriety",desc:"克己复礼，天下归仁"},{c:"中庸",en:"The Mean",desc:"不偏不倚，中和之道"},{c:"孝悌",en:"Filial Piety",desc:"孝为仁之本"},{c:"仁义礼智信",en:"Five Constants",desc:"五常：仁、义、礼、智、信"}],cross:[{other:"buddha",match:"慈悲→仁"},{other:"taoism",match:"上善若水→仁"}]},
buddha:{key:"rsdBuddha",figures:["释迦牟尼","玄奘","慧能","达摩","鸠摩罗什","鉴真","道安","慧远"],texts:["《金刚经》","《心经》","《六祖坛经》","《楞严经》","《法华经》","《华严经》","《维摩诘经》","《大般涅槃经》"],concepts:[{c:"空",en:"Emptiness",desc:"诸法皆空，色即是空"},{c:"因果",en:"Karma",desc:"因果报应，业力轮回"},{c:"禅",en:"Zen/Chan",desc:"明心见性，直指本心"},{c:"慈悲",en:"Compassion",desc:"无缘大慈，同体大悲"},{c:"般若",en:"Prajna/Wisdom",desc:"智慧到彼岸，心无挂碍"}],cross:[{other:"confucius",match:"仁→慈悲"},{other:"taoism",match:"道可道→空"}]},
taoism:{key:"rsdTaoism",figures:["老子（李耳）","庄子","列子","张道陵","葛洪","陈抟","王重阳","张三丰"],texts:["《道德经》","《庄子》","《列子》","《淮南子》","《抱朴子》","《周易参同契》","《黄庭经》","《太上感应篇》"],concepts:[{c:"道",en:"The Way",desc:"道法自然，天地之始"},{c:"无为",en:"Non-action",desc:"无为而治，顺其自然"},{c:"自然",en:"Nature/Ziran",desc:"自然而然，道之本性"},{c:"阴阳",en:"Yin-Yang",desc:"阴阳平衡，万物化生"},{c:"逍遥",en:"Carefree",desc:"逍遥自在，物我两忘"}],cross:[{other:"buddha",match:"空→道"},{other:"confucius",match:"中庸→守中"}]}};
function renderRsd(){const sec=document.getElementById("rsd-page-content");if(!sec)return;
  const trad=["confucius","buddha","taoism"];
  sec.innerHTML="<div class=\"rsd-tabs\">"+trad.map((k,i)=>"<button class=\"rsd-tab"+(i===0?" active":"")+"\" onclick=\"switchRsdTab('"+k+"')\">"+t(RSD_DATA[k].key)+"</button>").join("")+"</div>"+
    trad.map((k,i)=>"<div class=\"rsd-panel"+(i===0?" active":"")+"\" id=\"rsdPanel"+k+"\"></div>").join("");
  switchRsdTab("confucius");
}
function switchRsdTab(t){
  Object.keys(RSD_DATA).forEach(k=>{const el=document.getElementById("rsdPanel"+k);if(el)el.classList.remove("active");});
  document.querySelectorAll(".rsd-tab").forEach(b=>b.classList.toggle("active",b.textContent.trim()===t(RSD_DATA[t]?.key||"")));
  const panel=document.getElementById("rsdPanel"+t);if(!panel)return;panel.classList.add("active");
  const d=RSD_DATA[t];if(!d)return;
  let h="<div class=\"rsd-3col\"><div class=\"rsd-col\"><h5>"+t("rsdKeyFigures")+"</h5><ul>"+d.figures.map(f=>"<li>"+f+"</li>").join("")+"</ul></div>"+
    "<div class=\"rsd-col\"><h5>"+t("rsdCoreTexts")+"</h5><ul>"+d.texts.map(tt=>"<li>"+tt+"</li>").join("")+"</ul></div>"+
    "<div class=\"rsd-col\"><h5>"+t("rsdKeyConcepts")+"</h5><ul>"+d.concepts.map(c=>"<li><strong>"+c.c+"</strong> ("+c.en+")<br><small>"+c.desc+"</small></li>").join("")+"</ul></div></div>";
  h+="<div class=\"rsd-cross\"><h5>"+t("crossRef")+"</h5><div class=\"rsd-cross-grid\">"+
    d.cross.map(c=>{const on=t(RSD_DATA[c.other]?.key||"");return "<div class=\"rsd-cross-card\"><div class=\"rcc-item\">"+c.match+"</div><div class=\"rcc-arrow\">↔</div><div class=\"rcc-item\">"+on+"</div></div>";}).join("")+
    "</div></div>";panel.innerHTML=h;
}
// ===== SURNAME =====
const SURNAMES=[
  {n:"李",origin:"嬴姓，颛顼后裔，始祖李利贞。得姓于商朝，以官为氏（大理）。",famous:["老子（李耳）","李世民","李白","李清照"]},
  {n:"王",origin:"姬姓，周灵王太子晋后裔。以爵为氏，王族之后。",famous:["王羲之","王维","王安石","王阳明"]},
  {n:"张",origin:"姬姓，黄帝五子青阳之子挥，首创弓矢，官为弓长，以职为氏。",famous:["张良","张衡","张仲景","张择端"]},
  {n:"刘",origin:"祁姓，帝尧后裔。刘累之后，以封地为氏。",famous:["刘邦","刘备","刘禹锡","刘勰"]},
  {n:"陈",origin:"妫姓，虞舜后裔。周武王封舜后裔于陈，子孙以国为氏。",famous:["陈胜","陈抟","陈寅恪"]},
  {n:"杨",origin:"姬姓，周宣王子尚父封为杨侯，子孙以国为氏。",famous:["杨坚","杨万里","杨绛"]},
  {n:"赵",origin:"嬴姓，造父为周穆王御者，封于赵城，子孙以邑为氏。",famous:["赵匡胤","赵孟頫","赵云"]},
  {n:"黄",origin:"嬴姓，少昊后裔。陆终之后封于黄，以国为氏。",famous:["黄庭坚","黄公望","黄宗羲"]},
  {n:"周",origin:"姬姓，周朝王室后裔。平王之子封于汝川，以周为氏。",famous:["周敦颐","周瑜","周恩来"]},
  {n:"吴",origin:"姬姓，周太王之子太伯、仲雍让位南奔，建立吴国，以国为氏。",famous:["吴道子","吴承恩","吴敬梓"]},
  {n:"孙",origin:"姬姓，卫武公子惠孙之后，以字为氏。另一支为芈姓，孙叔敖之后。",famous:["孙武","孙膑","孙权","孙中山"]},
  {n:"马",origin:"嬴姓，赵奢封马服君，子孙以马为氏。",famous:["马援","马致远"]},
  {n:"朱",origin:"曹姓，颛顼后裔。周武王封曹挟于邾，后去邑为朱。",famous:["朱熹","朱元璋","朱自清"]},
  {n:"胡",origin:"妫姓，虞舜后裔。周武王封虞满于陈，谥号胡公，子孙以谥为氏。",famous:["胡安国","胡适"]},
  {n:"郭",origin:"姬姓，周文王弟虢叔封于虢，后以郭为氏。",famous:["郭守敬","郭隗","郭璞"]},
  {n:"林",origin:"子姓，比干为商纣王叔父，被剖心而死。其子坚逃于长林，以林为氏。",famous:["林逋","林则徐","林语堂"]},
  {n:"高",origin:"姜姓，姜太公后裔。齐文公之子公子高封于高，以邑为氏。",famous:["高适","高鹗"]},
  {n:"罗",origin:"熊姓，祝融后裔。春秋时封于罗，以国为氏。",famous:["罗贯中","罗隐"]},
  {n:"曹",origin:"姬姓，周文王第六子叔振铎封于曹，以国为氏。",famous:["曹操","曹丕","曹植","曹雪芹"]},
  {n:"郑",origin:"姬姓，周厉王子友封于郑，子孙以国为氏。",famous:["郑和","郑板桥","郑玄"]},
  {n:"谢",origin:"姜姓，申伯为周宣王元舅，封于谢，以邑为氏。",famous:["谢安","谢灵运"]},
  {n:"宋",origin:"子姓，商朝后裔。周武王封微子启于宋，以国为氏。",famous:["宋玉","宋应星","宋慈"]},
  {n:"唐",origin:"祁姓，帝尧后裔。周成王封弟叔虞于唐，以国为氏。",famous:["唐寅（唐伯虎）","唐婉"]},
  {n:"韩",origin:"姬姓，周武王封子于韩，以国为氏。",famous:["韩非（韩非子）","韩愈","韩信"]},
  {n:"冯",origin:"姬姓，周文王第十五子毕公高后裔，封于冯城，以邑为氏。",famous:["冯梦龙","冯道"]},
  {n:"许",origin:"姜姓，周武王封伯夷后裔于许，以国为氏。",famous:["许慎","许由"]},
  {n:"邓",origin:"曼姓，商武丁封叔父于邓，以国为氏。",famous:["邓禹","邓艾"]},
  {n:"萧",origin:"嬴姓，伯益后裔。周时封于萧，以国为氏。",famous:["萧何","萧衍","萧统"]},
  {n:"程",origin:"风姓，重黎之后。周宣王封程伯休父于程，以邑为氏。",famous:["程颐","程颢","程咬金"]},
  {n:"曾",origin:"姒姓，夏禹后裔。少康封子曲烈于鄫，后世去邑为曾。",famous:["曾参（曾子）","曾国藩"]},
  {n:"蔡",origin:"姬姓，周武王封弟叔度于蔡，以国为氏。",famous:["蔡伦","蔡元培","蔡邕"]},
  {n:"魏",origin:"姬姓，周武王封毕公高于毕，其后毕万封于魏，以国为氏。",famous:["魏徵","魏源"]},
  {n:"彭",origin:"颛顼后裔，陆终第三子篯铿封于彭，以国为氏。",famous:["彭祖","彭端淑"]},
  {n:"苏",origin:"己姓，颛顼后裔。周武王封苏忿生于苏城，以邑为氏。",famous:["苏轼","苏辙","苏洵"]},
  {n:"叶",origin:"芈姓，沈尹戍封于叶，以邑为氏。",famous:["叶适"]},
  {n:"潘",origin:"芈姓，楚王孙季连之后。潘崇为楚太师，以名为氏。",famous:["潘安","潘天寿"]},
  {n:"杜",origin:"祁姓，帝尧后裔。周成王封唐杜氏，子孙以杜为氏。",famous:["杜甫","杜牧","杜佑"]},
  {n:"钟",origin:"嬴姓，伯益后裔。钟离为楚邑，子孙以钟为氏。",famous:["钟繇","钟嵘","钟馗"]},
  {n:"汪",origin:"姬姓，鲁成公子汪之后，以名为氏。",famous:["汪藻","汪曾祺"]},
  {n:"田",origin:"妫姓，陈完奔齐，改姓田氏。后田氏代齐。",famous:["田单","田横"]},
  {n:"姜",origin:"姜姓，炎帝神农氏生于姜水，以地为氏。",famous:["姜子牙（姜尚）","姜夔"]},
  {n:"范",origin:"祁姓，帝尧后裔。晋大夫士封于范，以邑为氏。",famous:["范仲淹","范成大","范蠡"]},
  {n:"沈",origin:"姬姓，周文王第十子聃季载封于沈，以国为氏。",famous:["沈括","沈从文","沈约"]}
];
function renderSurname(){const sec=document.getElementById("surname-page-content");if(!sec)return;
  let h="<div class=\"surname-search\"><input type=\"text\" id=\"surnameInput\" placeholder=\""+t("surnameSearch")+"...\" oninput=\"filterSurnames()\" autocomplete=\"off\"></div><div class=\"surname-list\" id=\"surnameList\">";
  SURNAMES.forEach(s=>{h+="<div class=\"surname-card\"><div class=\"sc-char\">"+s.n+"</div><div class=\"sc-body\"><div class=\"sc-origin\">"+s.origin+"</div><div class=\"sc-famous\"><small>"+t("surnameFamous")+": "+s.famous.join("、")+"</small></div></div></div>";});
}
function filterSurnames(){const v=document.getElementById("surnameInput").value;document.querySelectorAll(".surname-card").forEach(c=>{c.style.display=c.querySelector(".sc-char").textContent.includes(v)||c.querySelector(".sc-origin").textContent.includes(v)||c.querySelector(".sc-famous").textContent.includes(v)?"flex":"none";});}
// ===== TTS =====
function speakText(text,lang){let s;try{s=window.speechSynthesis||null}catch(e){s=null}
  if(!s){const st=document.getElementById("ttsStatus");if(st)st.textContent="Browser does not support TTS";return;}
  s.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=lang==="zh-CN"||lang==="zh-TW"?"zh-CN":lang;u.rate=0.85;u.pitch=1;
  u.onstart=()=>{const st=document.getElementById("ttsStatus");if(st)st.textContent="🔊 "+t("audioPlaying");};
  u.onend=()=>{const st=document.getElementById("ttsStatus");if(st)st.textContent="";};s.speak(u);
}
function playAllRecitation(){if(!_currentBook)return;const chs=_currentBook.chapters&&(_currentBook.chapters[_lang]||_currentBook.chapters["zh-CN"]);if(!chs||!chs.length)return;speakText(chs.map(c=>c.c).join("\n"),_lang);}
function stopRecitation(){try{const s=window.speechSynthesis||null;if(s)s.cancel();const st=document.getElementById("ttsStatus");if(st)st.textContent="";}catch(e){}}

// ===== CLASSICS SEARCH & FILTER =====
var _classicsFilter = 'all';
var _classicsSearch = '';
function renderClassics(){
  var g=document.getElementById('classicsGrid');if(!g)return;
  var fb=document.getElementById('classicsFilter');
  if(fb){
    var types=['all'].concat([...new Set(BOOKS_DATA.map(function(b){return b.type;}))]);
    fb.innerHTML=types.map(function(t){
      var label=t==='all'?'全部':t;
      var cls=_classicsFilter===t?'active':'';
      return '<button class="'+cls+'" onclick="setClassicsFilter(\''+t+'\')">'+label+'</button>';
    }).join('');
  }
  var filtered=BOOKS_DATA.filter(function(b){
    if(_classicsFilter!=='all'&&b.type!==_classicsFilter)return false;
    if(_classicsSearch){
      var q=_classicsSearch.toLowerCase();
      var n=(b.name[_lang]||b.name['zh-CN']).toLowerCase();
      var a=(b.author[_lang]||b.author['zh-CN']).toLowerCase();
      if(n.indexOf(q)===-1&&a.indexOf(q)===-1)return false;
    }
    return true;
  });
  g.innerHTML=filtered.map(function(b){
    var n=b.name[_lang]||b.name['zh-CN'];
    var a=b.author[_lang]||b.author['zh-CN'];
    var d=b.dynasty[_lang]||b.dynasty['zh-CN'];
    var it=(b.intro[_lang]||b.intro['zh-CN']).substring(0,70)+'...';
    var owned=_user&&(_user.ownedBooks||[]).indexOf(b.id)!==-1;
    return '<div class="book-card" onclick="openReader(\''+b.id+'\')"><div class="bc-lock '+(owned?'free':'')+'">'+(owned?t('freeAccess'):'&#128274;')+'</div><h4>'+n+'</h4><div class="bc-meta"><span>'+t('bookAuthor')+': '+a+'</span><span>'+t('bookDynasty')+': '+d+'</span></div><p>'+it+'</p><div class="bc-tags"><span class="tag">'+b.type+'</span>'+(b.totalChapters>0?'<span class="tag">'+b.totalChapters+' '+t('bookChapters')+'</span>':'<span class="tag">'+t('introOnly')+'</span>')+'</div></div>';
  }).join('');
  
}
function setClassicsFilter(t){
  _classicsFilter=t;
  document.querySelectorAll('#classicsFilter button').forEach(function(b){
    b.classList.toggle('active',b.textContent===t||(t==='all'&&b.textContent==='全部'));
  });
  renderClassics();
}
function filterClassics(){
  var inp=document.getElementById('classicsSearch');
  _classicsSearch=inp?inp.value:'';
  renderClassics();
}// ===== SURNAME TREE DATA =====
var SURNAME_TREE={name:"中华姓氏",children:[
{name:"上古八大姓",children:[
{name:"姬姓",desc:"黄帝之姓，周朝国姓。衍生姓氏：周、吴、郑、王、杨、蔡、卫、蒋、韩、冯、沈、魏、唐、贾、曹、魏、成、霍、管等"},
{name:"姜姓",desc:"炎帝之姓，源自姜水。衍生姓氏：齐、吕、许、高、谢、邱、崔、骆、丁、申、章、贺、卢等"},
{name:"嬴姓",desc:"少昊之姓，秦朝国姓。衍生姓氏：秦、赵、黄、徐、江、梁、马、葛、廉、李、谷、钟等"},
{name:"姒姓",desc:"夏朝国姓，大禹之姓。衍生姓氏：夏、禹、鲍、谭、曾、计、欧阳等"},
{name:"妘姓",desc:"祝融之姓。衍生姓氏：郐、鄢、路、逼阳等"},
{name:"妫姓",desc:"虞舜之姓。衍生姓氏：陈、田、胡、袁、姚、薛、虞、王、孙、陆等"},
{name:"姚姓",desc:"虞舜之后。衍生姓氏：姚、虞、陈、王、胡、孙、田、袁等"},
{name:"姞姓",desc:"黄帝二十五子之一。衍生姓氏：燕、雍、鄂、密、须等"}
]},
{name:"商周封国",children:[
{name:"子姓（商）",desc:"商朝国姓。衍生姓氏：宋、孔、林、戴、殷、商、祖、武、钟、王、郝、邓、汤、萧等"},
{name:"芈姓（楚）",desc:"楚国国姓。衍生姓氏：熊、屈、景、昭、庄、项、白、叶、楚、兰、麻等"},
{name:"曹姓",desc:"颛顼后裔，周封邾国。衍生姓氏：曹、朱、邹、颜、倪等"},
{name:"祁姓（尧）",desc:"帝尧之姓。衍生姓氏：刘、唐、杜、范、士、留、随等"},
{name:"风姓（伏羲）",desc:"伏羲之姓。衍生姓氏：伏、任、宿、须句、颛臾等"},
{name:"己姓（少昊）",desc:"少昊之姓。衍生姓氏：苏、温、董、顾、费、郯等"},
{name:"任姓（黄帝）",desc:"黄帝后裔。衍生姓氏：任、薛、章、游、奚等"}
]},
{name:"少数民族改姓",children:[
{name:"北魏改姓",desc:"北魏孝文帝改革，鲜卑族改汉姓。衍生：元、陆、穆、贺、刘、楼、于、尉等"},
{name:"辽金元改姓",desc:"辽金元时期少数民族改汉姓。衍生：金、王、李、张、刘、陈等"},
{name:"满清改姓",desc:"清朝满族改汉姓。衍生：金、关、赵、马、舒、那、郎等"},
{name:"其他民族改姓",desc:"回、藏、蒙等各族改姓汉化。衍生：白、海、铁、脱等"}
]}
]};
var IMPERIAL_SURNAMES = [
{name:"刘姓（汉朝）",desc:"刘邦建立西汉，刘秀建立东汉。中国最强盛王朝之一，共历400余年。著名皇帝：刘邦、刘恒、刘启、刘彻、刘秀、刘备（蜀汉）。"},
{name:"李姓（唐朝）",desc:"李渊建立唐朝，李世民开创贞观之治。唐朝是中国古典文化的巅峰时期。著名皇帝：李渊、李世民、李隆基。"},
{name:"赵姓（宋朝）",desc:"赵匡胤建立宋朝，重文轻武，文化鼎盛。著名皇帝：赵匡胤、赵光义、赵祯。"},
{name:"朱姓（明朝）",desc:"朱元璋建立明朝，驱逐元朝恢复中华。著名皇帝：朱元璋、朱棣（永乐大帝）。"},
{name:"嬴姓（秦朝）",desc:"秦始皇嬴政统一六国，建立中国第一个大一统王朝。秦朝虽短命但影响深远。"},
{name:"司马姓（晋朝）",desc:"司马懿之孙司马炎建立晋朝，短暂统一三国。"},
{name:"杨姓（隋朝）",desc:"杨坚建立隋朝，杨广开凿大运河，再次统一中国。"},
{name:"曹姓（三国魏）",desc:"曹操奠基、曹丕建立曹魏，三国最强势力。"},
{name:"孙姓（三国吴）",desc:"孙权建立东吴，建都建业（南京）。"},
{name:"萧姓（南朝梁）",desc:"萧衍建立梁朝，文化繁荣佛教鼎盛。"},
{name:"陈姓（南朝陈）",desc:"陈霸先建立陈朝，南朝最后一个朝代。"},
{name:"孛儿只斤姓（元朝）",desc:"成吉思汗建立蒙古帝国，忽必烈建立元朝，疆域空前辽阔。"},
{name:"爱新觉罗姓（清朝）",desc:"努尔哈赤建立后金，皇太极改国号为清。奠定现代中国版图。著名皇帝：康熙、雍正、乾隆。"}
];

// ===== SURNAME TREE RENDER =====
function renderSurnameTree(){var sec=document.getElementById("surname-page-content");if(!sec)return;
  var h="<div style=\"text-align:center;margin-bottom:.8rem\"><button class=\"rsd-tab active\" onclick=\"switchSurnameView('cards')\">姓氏列表</button><button class=\"rsd-tab\" onclick=\"switchSurnameView('tree')\">姓氏树状图</button><button class=\"rsd-tab" onclick=\"switchSurnameView('imperial')\">帝王姓氏</button></div>";
  h+="<div id=\"surnameCardsView\">"+renderSurnameCards()+"</div>";
  h+="<div id=\"surnameTreeView\" style=\"display:none\">"+renderTree(SURNAME_TREE)+"</div>";
  h+="<div id=\"surnameImperialView\" style=\"display:none\">";
  h+="<div class=\"imperial-section\"><h3>帝王姓氏（历代帝王之姓）</h3>";
  h+="<p style=\"color:#7a6a5a;margin-bottom:.8rem\">中国历史上曾建立王朝或称帝的姓氏</p>";
  h+="<div class=\"imperial-list\" style=\"display:flex;flex-wrap:wrap;gap:.6rem\">";
  if(typeof IMPERIAL_SURNAMES !== "undefined"){
    (typeof IMPERIAL_SURNAMES!=="undefined"&&IMPERIAL_SURNAMES?IMPERIAL_SURNAMES:[]).forEach(function(s){
      h+="<div class=\"imperial-card\" style=\"background:#fffbf0;border:1px solid #e0d5c8;border-radius:6px;padding:.8rem;flex:1 1 280px\">";
      h+="<h4 style=\"font-size:.95rem;color:#5c3d2e;margin-bottom:.3rem\">"+s.name+"</h4>";
      h+="<p style=\"font-size:.82rem;color:#7a6a5a\">"+s.desc+"</p>";
      h+="</div>";
    });
  }
  h+="</div></div></div>";
  sec.innerHTML=h;
}
function renderSurnameCards(){var h="<div class=\"surname-search\"><input type=\"text\" id=\"surnameInput\" placeholder=\""+t("surnameSearch")+"...\" oninput=\"filterSurnames()\" autocomplete=\"off\"></div><div class=\"surname-list\" id=\"surnameList\">";
  SURNAMES.forEach(function(s){h+="<div class=\"surname-card\"><div class=\"sc-char\">"+s.n+"</div><div class=\"sc-body\"><div class=\"sc-origin\">"+s.origin+"</div><div class=\"sc-famous\"><small>"+t("surnameFamous")+": "+s.famous.join("、")+"</small></div></div></div>";});
  h+="</div>";return h;
}
function renderTree(node,depth){depth=depth||0;
  if(!node.children)return"";
  var cls=depth===0?"tree-root":depth===1?"tree-branch":"tree-leaf";
  var h="<ul class=\""+cls+"\">";
  node.children.forEach(function(c){
    var hasChild=c.children&&c.children.length;
    h+="<li"+(hasChild?" class=\"tree-collapsible\"":"")+">";
    if(hasChild)h+="<span class=\"tree-toggle\" onclick=\"toggleTreeBranch(this)\">▶</span>";
    else h+="<span class=\"tree-dot\">•</span>";
    h+="<strong>"+c.name+"</strong>";
    if(c.desc)h+="<span class=\"tree-desc\"> — "+c.desc+"</span>";
    if(hasChild)h+="<div class=\"tree-children\">"+renderTree(c,depth+1)+"</div>";
    h+="</li>";
  });
  h+="</ul>";return h;
}
function toggleTreeBranch(el){el.textContent=el.textContent==="▶"?"▼":"▶";el.parentNode.querySelector(".tree-children").style.display=el.textContent==="▼"?"block":"none";}
function switchSurnameView(view){
  document.querySelectorAll(".rsd-tab").forEach(function(b){b.classList.toggle("active",b.textContent.indexOf(view==="cards"?"列表":view==="tree"?"树状":"帝王")!==-1);});
  document.getElementById("surnameCardsView").style.display=view==="cards"?"block":"none";
  document.getElementById("surnameTreeView").style.display=view==="tree"?"block":"none";document.getElementById("surnameImperialView").style.display=view==="imperial"?"block":"none";
}
// ===== OVERRIDE renderSurname WITH TABS =====
function renderSurname(){renderSurnameTree();}
// ===== DIGITAL PURCHASE TRACKING =====
function chkItem(id){if(!_user)return;var p=SHOP_PRODUCTS.find(function(pp){return pp.id===id;});if(!p)return;
  if(_user.credits<p.price){showToast(t("notEnoughCredits"));navTo("account");return;}
  _user.credits-=p.price;
  if(p.cat==="digital"){_user.ownedItems=_user.ownedItems||[];_user.ownedItems.push(id);}
  saveUser();_cart=_cart.filter(function(c){return c!==id;});localStorage.setItem("ch_cart",JSON.stringify(_cart));
  updateCartCount();renderTopBar();renderAccount();showToast(t("productPurchaseSuccess"));
}
// ===== OVERRIDE renderAccount WITH DOWNLOADS =====
function renderAccount(){var sec=document.getElementById("account-page-content");if(!sec)return;
  if(!_user){sec.innerHTML="<div style=\"text-align:center;padding:3rem 1rem\"><h3>"+t("navLogin")+"</h3><p style=\"margin:1rem 0\">"+t("needLogin")+"</p><button class=\"btn-primary\" onclick=\"showAuth('login')\">"+t("navLogin")+"</button> <button class=\"btn-secondary\" onclick=\"showAuth('register')\">"+t("navRegister")+"</button></div>";return;}
  var h="<div class=\"credit-balance\"><div class=\"cb-num\">"+_user.credits+"</div><div class=\"cb-label\">"+t("creditsBalance")+"</div></div>";
  h+="<h4 style=\"margin-bottom:.8rem\">"+t("buyCredits")+"</h4><div class=\"credit-packages\">"+CREDIT_PACKAGES.map(function(p){return "<div class=\"credit-pkg"+(p.recommended?" recommended":"")+"\" onclick=\"buyCredits('"+p.id+"')\"><div class=\"cp-credits\">"+p.credits+"</div>"+t("creditsLabel")+"<div style=\"font-size:.78rem;color:#7a6a5a;margin:.15rem 0\">"+p.price+"</div>"+(p.recommended?"<div class=\"cp-badge\">"+t("recommended")+"</div>":"")+"<div><button class=\"shop-btn cp-btn\">"+t("buyNow")+"</button></div></div>";}).join("")+"</div>";
  var own=_user.ownedBooks||[];
  h+="<h4 style=\"margin:1.5rem 0 .8rem\">"+t("myBooks")+"</h4>";
  if(!own.length)h+="<p style=\"color:#7a6a5a;font-size:.85rem\">"+t("noBooksOwned")+"</p>";
  else h+="<div style=\"display:flex;flex-wrap:wrap;gap:.5rem\">"+own.map(function(bId){var b=BOOKS_DATA.find(function(bb){return bb.id===bId;});return b?"<span class=\"tag\" style=\"cursor:pointer;background:#8B0000;color:#f5f0e8;border-color:#8B0000\" onclick=\"openReader('"+bId+"')\">"+(b.name[_lang]||b.name["zh-CN"])+"</span>":"";}).join("")+"</div>";
  // Downloads section
  var items=_user.ownedItems||[];
  if(items.length){h+="<h4 style=\"margin:1.5rem 0 .8rem\">我的下载</h4>";
    items.forEach(function(id){var p=SHOP_PRODUCTS.find(function(pp){return pp.id===id;});if(!p)return;var n=p.name[_lang]||p.name["zh-CN"];
      var dl={};
      dl["vip-chen"]="陈氏总谱.pdf";dl["vip-chen-zibei1"]="全国陈氏字辈1.pdf";dl["vip-chen-zibei2"]="全国陈氏字辈2.pdf";
      var f=dl[id];if(!f)return;
      h+="<div style=\"display:flex;justify-content:space-between;align-items:center;padding:.4rem 0;border-bottom:1px solid #e0d5c8;font-size:.85rem\"><span>📄 "+n+"</span><a href=\""+f+"\" class=\"shop-btn\" download>⬇ 下载</a></div>";});}
  // Cart
  h+="<h4 style=\"margin:1.5rem 0 .8rem\">"+t("cart")+" ("+_cart.length+")</h4>";
  if(!_cart.length)h+="<p style=\"color:#7a6a5a;font-size:.85rem\">"+t("emptyCart")+"</p>";
  else{[...new Set(_cart)].forEach(function(id){var p=SHOP_PRODUCTS.find(function(pp){return pp.id===id;});if(!p)return;var n=p.name[_lang]||p.name["zh-CN"];h+="<div style=\"display:flex;justify-content:space-between;align-items:center;padding:.4rem 0;border-bottom:1px solid #e0d5c8;font-size:.85rem\"><span>"+p.img+" "+n+" ("+p.price+" "+t("credits")+")</span><button class=\"btn-secondary btn-sm\" onclick=\"chkItem('"+id+"')\">"+t("checkout")+"</button></div>";});}
}
// ===== OVERRIDE SHOP FUNCTIONS WITH DIGITAL CATEGORY =====
function renderShop(){var g=document.getElementById("shopGrid");if(!g)return;
  var cats=[...new Set(SHOP_PRODUCTS.map(function(p){return p.cat;}))];
  var ck={music:"shopMusic",chess:"shopChess",calligraphy:"shopCalligraphy",painting:"shopPainting",surname:"shopSurname",tea:"shopTea",ceramic:"shopCeramic",yijing:"shopYijing",stationery:"shopStationery",digital:"shopDigital"};
  var fb=document.getElementById("shopFilter");if(fb)fb.innerHTML="<button class=\"active\" onclick=\"filShop('all',this)\">"+t("shopAll")+"</button>"+cats.map(function(c){return "<button onclick=\"filShop('"+c+"',this)\">"+t(ck[c]||c)+"</button>";}).join("");
  renderShopGrid(SHOP_PRODUCTS);
}
function renderShopGrid(prods){var g=document.getElementById("shopGrid");if(!g)return;
  var ck={music:"shopMusic",chess:"shopChess",calligraphy:"shopCalligraphy",painting:"shopPainting",surname:"shopSurname",tea:"shopTea",ceramic:"shopCeramic",yijing:"shopYijing",stationery:"shopStationery",digital:"shopDigital"};
  g.innerHTML=prods.map(function(p){var n=p.name[_lang]||p.name["zh-CN"],d=p.desc[_lang]||p.desc["zh-CN"];return "<div class=\"shop-card\"><div class=\"sc-img\">"+p.img+"</div><div class=\"sc-body\"><h4>"+n+"</h4><div class=\"sc-cat\">"+t(ck[p.cat]||p.cat)+"</div><div class=\"sc-desc\">"+d+"</div><div class=\"sc-price\">"+p.price+" "+t("credits")+"</div><button class=\"shop-btn\" onclick=\"addCart('"+p.id+"')\">"+t("addToCart")+"</button></div></div>";}).join("");
}

// ===== CLASSICS SEARCH & FILTER =====
var _classicsFilter='all',_classicsSearch='';
function renderClassics(){var g=document.getElementById("classicsGrid");if(!g)return;
  var fb=document.getElementById("classicsFilter");
  if(fb&&!fb.children.length){var types=["all"].concat([...new Set(BOOKS_DATA.map(function(b){return b.type;}))]);
    fb.innerHTML=types.map(function(t){return "<button"+(t===_classicsFilter?" class=\"active\"":"")+" onclick=\"setClassicsFilter('"+t+"')\">"+(t==="all"?"全部":t)+"</button>";}).join("");}
  var filtered=BOOKS_DATA.filter(function(b){
    if(_classicsFilter!=="all"&&b.type!==_classicsFilter)return false;
    if(_classicsSearch){var q=_classicsSearch.toLowerCase();var n=(b.name[_lang]||b.name["zh-CN"]).toLowerCase();var a=(b.author[_lang]||b.author["zh-CN"]).toLowerCase();if(n.indexOf(q)===-1&&a.indexOf(q)===-1)return false;}
    return true;
  });
  g.innerHTML=filtered.map(function(b){var n=b.name[_lang]||b.name["zh-CN"];var a=b.author[_lang]||b.author["zh-CN"];var d=b.dynasty[_lang]||b.dynasty["zh-CN"];var it=(b.intro[_lang]||b.intro["zh-CN"]).substring(0,70)+"...";var owned=_user&&(_user.ownedBooks||[]).indexOf(b.id)!==-1;return "<div class=\"book-card\" onclick=\"openReader('"+b.id+"')\"><div class=\"bc-lock "+(owned?"free":"")+"\">"+(owned?t("freeAccess"):"\uD83D\uDD12")+"</div><h4>"+n+"</h4><div class=\"bc-meta\"><span>"+t("bookAuthor")+": "+a+"</span><span>"+t("bookDynasty")+": "+d+"</span></div><p>"+it+"</p><div class=\"bc-tags\"><span class=\"tag\">"+b.type+"</span>"+(b.totalChapters>0?"<span class=\"tag\">"+b.totalChapters+" "+t("bookChapters")+"</span>":"<span class=\"tag\">"+t("introOnly")+"</span>")+"</div></div>";}).join("");
}
function setClassicsFilter(t){_classicsFilter=t;document.querySelectorAll("#classicsFilter button").forEach(function(b){b.classList.toggle("active",b.textContent===t||(t==="all"&&b.textContent.indexOf("全部")!==-1));});renderClassics();}
function filterClassics(){var inp=document.getElementById("classicsSearch");_classicsSearch=inp?inp.value:"";renderClassics();}
// ===== FORUM =====
var _forumView="list",_forumData=null;
function getForumData(){try{_forumData=JSON.parse(localStorage.getItem("ch_forum")||"[]")}catch(e){_forumData=[]};if(!_forumData||_forumData.length<20&&typeof autoSeedForum==="function"){try{autoSeedForum();_forumData=JSON.parse(localStorage.getItem("ch_forum")||"[]")}catch(e){}};return _forumData}function setForumData(){localStorage.setItem("ch_forum",JSON.stringify(_forumData))}
function renderNav(){var n=document.getElementById("mainNav");if(!n)return;
var p=["home","timeline","classics","forum","surname","shop"];
var k=["navHome","navTimeline","navClassics","navRushiDao","navSurname","navShop"];
n.innerHTML=p.map(function(p,i){return '<button class="nav-link" data-page="'+p+'" onclick="navTo(\''+p+'\')">'+t(k[i])+'</button>'}).join("")+'<span class="nav-spacer"></span>'+
(_user?'<button class="nav-link" data-page="account" onclick="navTo(\'account\')">'+t("navAccount")+'<span class="cart-count" id="cartBadge" style="display:none">0</span></button>'
:'<button class="nav-link" onclick="showAuth(\'login\')">'+t("navLogin")+'/'+t("navRegister")+'</button>');updateCartCount();}
function renderPage(p){document.querySelectorAll(".page").forEach(function(e){e.classList.remove("active");});
var tg=document.getElementById(p+"-page");if(tg)tg.classList.add("active");
document.querySelectorAll(".nav-link").forEach(function(n){n.classList.toggle("active",n.dataset.page===p);});
if(p==="classics")renderClassics();if(p==="shop")renderShop();if(p==="account")renderAccount();
if(p==="reader"&&_currentBook)renderReader();if(p==="forum")renderForum();if(p==="surname")renderSurname();}
function renderForum(){var s=document.getElementById("forum-page-content");if(!s)return;
if(_forumView==="new"){renderNewPost(s);return;}
if(_forumView&&_forumView.indexOf("p-")===0){renderOnePost(s,_forumView.slice(2));return;}
renderForumList(s);}
function renderForumList(s){var d=getForumData();
var h='<div style="text-align:right;margin-bottom:1rem"><button class="btn-primary" onclick="toForum(\'new\')">'+t("newPost")+'</button></div>';
if(!d.length)h+='<div style="text-align:center;padding:3rem 1rem;color:#7a6a5a">'+t("noPosts")+'</div>';
else{h+='<div class="forum-list">';d.sort(function(a,b){return b.d-a.d;}).forEach(function(p){
h+='<div class="forum-post" onclick="toForum(\'p-'+p.id+'\')"><div class="forum-post-title">'+esc(p.t)+'</div><div class="forum-post-meta">'+p.a+" · "+fmt(p.d)+" · "+(p.r?p.r.length:0)+" \u56DE\u590D</div><div class=\"forum-post-excerpt\">"+esc((p.c||"").substring(0,120))+"</div>"+(p.r&&p.r.length?'<div class="forum-post-last">\u6700\u540E\u56DE\u590D: '+fmt(p.r[p.r.length-1].d)+"</div>":"")+"</div>";
});h+="</div>";}s.innerHTML=h;}
function renderNewPost(s){s.innerHTML='<div style="margin-bottom:1rem"><button class="btn-secondary btn-sm" onclick="toForum(\'list\')">\u2190 \u8FD4\u56DE</button></div><div class="forum-form"><h3>'+t("newPost")+'</h3><div class="form-group"><label>'+t("postTitle")+'</label><input type="text" id="fTitle" class="forum-form-input" placeholder="'+t("enterTitle")+'"></div><div class="form-group"><label>'+t("postContent")+'</label><textarea id="fContent" class="forum-form-input" rows="5" placeholder="'+t("enterContent")+'"></textarea></div><div class="form-group"><label>'+t("addImage")+'</label><input type="text" id="fImg" class="forum-form-input" placeholder="'+t("imagePlaceholder")+'"><div style="margin-top:.3rem"><input type="file" accept="image/*" onchange="upImg(this)" style="font-size:.82rem"> <span style="color:#7a6a5a;font-size:.75rem">'+t("uploadImageLabel")+'</span></div><div id="fImgs" style="display:flex;flex-wrap:wrap;gap:.3rem;margin-top:.3rem"></div></div><div class="form-group"><label>'+t("addVideo")+'</label><input type="text" id="fVid" class="forum-form-input" placeholder="'+t("videoPlaceholder")+'"></div><button class="btn-primary" onclick="savePost()">'+t("submitPost")+'</button></div>';}
function renderOnePost(s,id){var d=getForumData();var p=d.find(function(x){return x.id===id;});if(!p){s.innerHTML='<div style="text-align:center;padding:2rem">\u5E16\u5B50\u4E0D\u5B58\u5728</div>';return;}
var h='<div style="margin-bottom:1rem"><button class="btn-secondary btn-sm" onclick="toForum(\'list\')">\u2190 '+t("navForum")+'</button></div><div class="forum-post-detail"><h3>'+esc(p.t)+'</h3><div class="forum-post-meta">'+p.a+" \u00B7 "+fmt(p.d)+"</div><div class=\"forum-post-content\">"+esc(p.c).replace(/\n/g,"<br>")+"</div>";
if(p.i&&p.i.length)h+='<div class="forum-media">'+p.i.map(function(u){return '<img src="'+u+'" class="forum-media-item">'}).join("")+"</div>";
if(p.v&&p.v.length)h+='<div class="forum-media">'+p.v.map(function(u){return '<iframe src="'+u+'" class="forum-media-video" frameborder="0" allowfullscreen></iframe>'}).join("")+"</div>";
if(_user&&_user.name)h+='<button class="btn-secondary btn-sm" style="margin-top:.5rem" onclick="delPost(\''+id+'\')">'+t("deleteBtn")+'</button>';h+="</div>";
if(p.r&&p.r.length){h+='<h4 style="margin:1.5rem 0 .8rem">\u56DE\u590D ('+p.r.length+')</h4><div class="forum-replies">';
p.r.forEach(function(r){h+='<div class="forum-reply"><div class="forum-post-meta">'+r.a+" \u00B7 "+fmt(r.d)+"</div><div>"+esc(r.c).replace(/\n/g,"<br>")+"</div>";
if(r.i&&r.i.length)h+='<div class="forum-media">'+r.i.map(function(u){return '<img src="'+u+'" class="forum-media-item">'}).join("")+"</div>";
if(_user&&_user.name)h+='<button class="btn-secondary btn-sm" onclick="delReply(\''+id+"','"+r.id+"')\">"+t("deleteBtn")+'</button>';h+="</div>";});h+="</div>";}
if(_user){h+='<div class="forum-form" style="margin-top:1.5rem"><h4>'+t("reply")+'</h4><div class="form-group"><textarea id="fReply" class="forum-form-input" rows="3" placeholder="'+t("enterContent")+'"></textarea></div><button class="btn-primary" onclick="saveReply(\''+id+"')\">"+t("submitPost")+'</button></div>';}
s.innerHTML=h;}
function toForum(v){_forumView=v;renderForum();}
function esc(h){return String(h).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function fmt(t){var d=new Date(Number(t));return d.getFullYear()+"-"+(d.getMonth()+1).toString().padStart(2,"0")+"-"+d.getDate().toString().padStart(2,"0")+" "+d.getHours().toString().padStart(2,"0")+":"+d.getMinutes().toString().padStart(2,"0")}
function savePost(){var t=document.getElementById("fTitle");var c=document.getElementById("fContent");if(!t||!c||!t.value.trim()){alert(t("enterTitle"));return;}if(!c.value.trim()){alert(t("enterContent"));return;}
var p={id:Date.now().toString(),t:t.value.trim(),c:c.value.trim(),a:_user?_user.name:"\u533F\u540D",d:Date.now(),i:[],v:[],r:[]};
var img=document.getElementById("fImg");if(img&&img.value.trim())p.i.push(img.value.trim());
document.querySelectorAll("#fImgs input").forEach(function(x){if(x.value)p.i.push(x.value);});
var vid=document.getElementById("fVid");if(vid&&vid.value.trim())p.v.push(gEmb(vid.value.trim()));
getForumData();_forumData.push(p);setForumData();_forumView="list";renderForum();}
function saveReply(id){var c=document.getElementById("fReply");if(!c||!c.value.trim())return;
getForumData();var p=_forumData.find(function(x){return x.id===id;});if(!p)return;
p.r=p.r||[];p.r.push({id:Date.now().toString(),a:_user?_user.name:"\u533F\u540D",d:Date.now(),c:c.value.trim(),i:[]});
setForumData();_forumView="p-"+id;renderForum();}
function delPost(id){if(!confirm(t("confirmDelete")))return;getForumData();_forumData=_forumData.filter(function(p){return p.id!==id;});setForumData();_forumView="list";renderForum();}
function delReply(pid,rid){if(!confirm(t("confirmDelete")))return;getForumData();var p=_forumData.find(function(x){return x.id===pid;});if(p)p.r=(p.r||[]).filter(function(r){return r.id!==rid;});setForumData();_forumView="p-"+pid;renderForum();}
function upImg(i){var f=i.files[0];if(!f)return;var r=new FileReader();r.onload=function(e){var d=document.createElement("div");d.style.position="relative";d.innerHTML='<img src="'+e.target.result+'" style="max-width:150px;max-height:150px;border-radius:4px;border:1px solid #d4c9b8"><input type="hidden" value="'+e.target.result+'"><span style="position:absolute;top:-4px;right:-4px;background:#8B0000;color:#fff;border-radius:50%;width:16px;height:16px;font-size:10px;cursor:pointer;text-align:center;line-height:16px" onclick="this.parentNode.remove()">x</span>';document.getElementById("fImgs").appendChild(d);};r.readAsDataURL(f);}
function gEmb(u){var m=u.match(/(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([a-zA-Z0-9_-]{11})/);if(m)return"https://www.youtube.com/embed/"+m[1];m=u.match(/bilibili\.com\/video\/(BV[a-zA-Z0-9]+)/);if(m)return"https://player.bilibili.com/player.html?bvid="+m[1];return u;}
function getForumData(){try{_forumData=JSON.parse(localStorage.getItem("ch_forum")||"[]");}catch(e){_forumData=[];}
if(!_forumData||_forumData.length<20)_forumData=autoSeedForum();return _forumData;}
function setForumData(){localStorage.setItem("ch_forum",JSON.stringify(_forumData));}
function autoSeedForum(){var n=Date.now(),h=36e5,m=6e4;
var us=['清风明月','墨香居士','古道西风','南华真人','北冥有鱼','东篱采菊','西山红叶','竹林隐士','松间明月','石上清泉','闲云野鹤','流水高山','春风化雨','秋水长天','梅花三弄','兰亭序客','赤壁怀古','桃花源主','岳阳楼记','滕王阁序'];
var rp=['读书人甲','读书人乙','国学爱好者','古文学徒','经史子集','诗词达人','历史迷','易学新手','儒释道信徒','中医养生'];
var ts=['「道德经」「道可道非常道」大家怎么理解？','「红楼梦」中最打动你的人物是谁？','王阳明心学对现代人的启示','周易到底该怎么学？','你心中排名第一的唐诗是？','孔子说的「仁」到底是什么？','中医到底有没有科学依据？','「孙子兵法」在现代商业中的应用','禅宗「明心见性」是什么意思？','书法入门从哪种字体开始？','「山海经」是神话还是历史？','曾国藩家书中的处世智慧','诸子百家你最喜欢哪一家？','如何理解「心经」的「色即是空」？','中国古典音乐和西方音乐的根本差异','风水是科学还是迷信？','「资治通鉴」值得通读吗？','孔子和老子思想的最大分歧','大家来分享喜欢的对联','古籍阅读从哪些入门比较好？'];
var ct=['最近重读道德经，第一章「道可道非常道」让我反复琢磨。老子开篇就说可以说的道就不是永恒的道，那到底什么是道？是通过静坐体悟还是在日常生活中体验？各位同修有何高见？','最近三刷红楼梦，每次都有不同的感受。以前最喜欢林黛玉的才华与真性情，现在反而更理解薛宝钗的处世智慧。大家最喜欢红楼梦中的哪个人物？','最近读了传习录，王阳明的「知行合一」思想太契合当代了。我们读了很多书懂了很多道理却常常做不到。先生说的「知而不行只是未知」一语惊醒梦中人。','想学周易很久了，但翻开书就蒙了——卦象爻辞错综复杂。求问各位前辈学易有什么好的入门方法？要不要先背八卦？再学五行生克？','唐诗浩如烟海，每个人心中都有自己的诗王。我第一个想到的是张若虚的春江花月夜——孤篇压全唐不是吹的。各位来分享你的最爱！','论语中「仁」出现了109次，孔子对每个弟子的回答都不同。对颜回说「克己复礼为仁」，对仲弓说「己所不欲勿施于人」。到底什么是仁的本质？','一直对中医很感兴趣但也经常听到质疑的声音。有人说是玄学有人说千年实践就是最好的证明。大家怎么看中医的科学性？','都说商场如战场。最近重读孙子兵法发现很多思想用在商业竞争中非常实用。「知己知彼百战不殆」简直就是市场调研的圣经。大家有实践心得吗？','读六祖坛经，慧能大师说「菩提本无树明镜亦非台本来无一物何处惹尘埃」。这个「本来无一物」的境界怎么理解？在日常生活中如何修行？','零基础想学书法但不知道从何入手。楷书四大家该学谁的？还是从隶书开始比较好？求前辈指导入门路径！','最近看山海经里面那些奇形怪状的异兽荒诞离奇的地理，到底是古人的想象还是失落的文明记忆？有些学者认为山海经记载的是全球地理是真的吗？','读曾国藩家书感受到他不仅是一代名臣更是一个慈祥的父亲。他教导子弟「读书变化气质戒傲戒惰」。这些家训放在今天依然振聋发聩。','春秋战国百家争鸣是人类思想史上最璀璨的时代。儒家道家法家墨家兵家纵横家每家的思想都有独到之处。大家来聊聊自己最喜欢哪一家。','心经说「色即是空空即是色」，初看觉得很矛盾。明明眼前的山河大地都是实实在在的怎么说它是空呢？这个「空」是不是就是什么都没有的意思？','最近听了一些古琴曲发现和西方古典音乐完全是两个审美体系。西乐讲究和声对位宏大叙事，中乐追求意境留白弦外之音。两者的根本差异在哪里？','最近家里装修朋友建议我找风水师看看布局。我半信半疑——说它迷信吧有些讲究确实有道理，说它科学吧又很玄。大家怎么看待风水？','294卷的资治通鉴让人望而生畏。但司马光耗尽19年编成的这部巨著据说毛主席读了17遍。大家觉得普通人值得通读吗？有什么好的读法？','孔子和老子是同时代人据说孔子还问礼于老子，但他们的思想路径截然不同。一个入世一个出世一个讲仁义一个讲道德。这两种思想有什么根本分歧？','最近学对联发现汉字真的神奇——平平仄仄之间对仗工整之妙。我先来一个：杭州岳王庙「青山有幸埋忠骨白铁无辜铸佞臣」。大家来分享喜欢的对联！','每次去书店看到国学区那么多书就头晕。从三字经千字文开始会不会太简单？直接读四书五经又怕啃不动。大家推荐一下古籍阅读的循序渐进的路径。'];
var rcs=['说得好！很有启发。','受教了，感谢分享！','这个观点很新颖，值得深入思考。','我也有同感，最近也在研究这个。','推荐一本相关的书：《》，写得很透彻。','完全同意！这也是我一直以来的想法。','不太认同这个观点，我觉得应该从另一个角度看...','有意思，我之前没想过这个问题。','学习了，回去好好研究一下。','这个问题确实值得讨论，大家继续交流。','好问题！我也一直在思考。','深度好文，收藏了！'];
var posts=[];ts.forEach(function(t,i){var pt=n-(19-i)*h*4;var po={id:String(pt),t:t,c:ct[i],a:us[i%us.length],d:pt,i:[],v:[],r:[]};
var rc=Math.floor(3+Math.random()*4);for(var j=0;j<rc;j++){po.r.push({id:String(pt+j*m),a:rp[(i+j)%rp.length],d:pt+(j+1)*m,c:rcs[Math.floor(Math.random()*rcs.length)],i:[]});}
posts.push(po);});
localStorage.setItem("ch_forum",JSON.stringify(posts));return posts;}













// ===== FORUM DATA HELPERS =====
function getForumData(){
  try{_forumData=JSON.parse(localStorage.getItem("ch_forum")||"[]");}catch(e){_forumData=[];}
  if(!_forumData||_forumData.length<20)_forumData=autoSeedForum();
  return _forumData;
}
function setForumData(){
  localStorage.setItem("ch_forum",JSON.stringify(_forumData));
}
