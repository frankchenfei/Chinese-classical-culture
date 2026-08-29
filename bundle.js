try{var _d=document.createElement("div");_d.id="diagBundle";_d.style.cssText="position:fixed;top:0;left:0;background:#8B0000;color:#fff;padding:2px 8px;z-index:99999;font-size:12px";_d.textContent="BUNDLE LOADED "+new Date().toLocaleTimeString();document.body.appendChild(_d);}catch(e){}
// === i18n.js ===
﻿// i18n.js — all UI translation strings
const I18N = { ui: {
siteTitle:{'zh-CN':'华夏文脉','zh-TW':'華夏文脈','en':'Chinese Cultural Heritage','es':'Herencia Cultural China','pt':'Herança Cultural Chinesa'},
siteSub:{'zh-CN':'中华国学典籍网','zh-TW':'中華國學典籍網','en':'Portal of Chinese Classics','es':'Portal de Clásicos Chinos','pt':'Portal de Clássicos Chineses'},
siteDesc:{'zh-CN':'从山海经的上古传说，到历朝历代的经史子集，以朝代时间轴为线索，带您走进中华五千年文化的浩瀚星河。','zh-TW':'從山海經的上古傳說，到歷朝歷代的經史子集，以朝代時間軸為線索，帶您走進中華五千年文化的浩瀚星河。','en':'From the myths of the Classic of Mountains and Seas to the classics and histories of every dynasty, follow our dynastic timeline into the vast galaxy of five thousand years of Chinese culture.','es':'Desde los mitos del Clásico de las Montañas y los Mares hasta los clásicos de cada dinastía, siga nuestra línea de tiempo dinástica hacia la vasta galaxia de cinco mil años de cultura china.','pt':'Dos mitos do Clássico das Montanhas e Mares aos clássicos e histórias de cada dinastia, siga nossa linha do tempo dinástica na vasta galáxia de cinco mil anos de cultura chinesa.'},
exploreTimeline:{'zh-CN':'探索时间轴','zh-TW':'探索時間軸','en':'Explore Timeline','es':'Explorar la Línea de Tiempo','pt':'Explorar a Linha do Tempo'},
browseClassics:{'zh-CN':'浏览典籍','zh-TW':'瀏覽典籍','en':'Browse Classics','es':'Explorar Clásicos','pt':'Explorar Clássicos'},
scrollDown:{'zh-CN':'向下探索','zh-TW':'向下探索','en':'Scroll to Explore','es':'Desplázate para Explorar','pt':'Role para Explorar'},
navHome:{'zh-CN':'首页','zh-TW':'首頁','en':'Home','es':'Inicio','pt':'Início'},
navTimeline:{'zh-CN':'时间轴','zh-TW':'時間軸','en':'Timeline','es':'Cronología','pt':'Linha do Tempo'},
navClassics:{'zh-CN':'典籍','zh-TW':'典籍','en':'Classics','es':'Clásicos','pt':'Clássicos'},
navRushiDao:{'zh-CN':'谈天说地','zh-TW':'談天說地','en':'Forum','es':'Foro','pt':'Fórum'},
navSurname:{'zh-CN':'姓氏','zh-TW':'姓氏','en':'Surnames','es':'Apellidos','pt':'Sobrenomes'},
navShop:{'zh-CN':'商城','zh-TW':'商城','en':'Shop','es':'Tienda','pt':'Loja'},
navAccount:{'zh-CN':'账户','zh-TW':'賬戶','en':'Account','es':'Cuenta','pt':'Conta'},
navLogin:{'zh-CN':'登录','zh-TW':'登錄','en':'Login','es':'Iniciar Sesión','pt':'Entrar'},
navRegister:{'zh-CN':'注册','zh-TW':'註冊','en':'Register','es':'Registrarse','pt':'Registrar'},
navLogout:{'zh-CN':'退出登录','zh-TW':'退出登錄','en':'Logout','es':'Cerrar Sesión','pt':'Sair'},
timelineTitle:{'zh-CN':'朝代时间轴','zh-TW':'朝代時間軸','en':'Dynastic Timeline','es':'Cronología Dinástica','pt':'Linha do Tempo Dinástica'},
timelineSub:{'zh-CN':'点击朝代展开详情','zh-TW':'點擊朝代展開詳情','en':'Click a dynasty for details','es':'Haga clic en una dinastía para ver detalles','pt':'Clique em uma dinastia para ver detalhes'},
statDynasties:{'zh-CN':'朝代','zh-TW':'朝代','en':'Dynasties','es':'Dinastías','pt':'Dinastias'},
statFigures:{'zh-CN':'收录名人','zh-TW':'收錄名人','en':'Figures','es':'Personajes','pt':'Figuras'},
statClassics:{'zh-CN':'经典著作','zh-TW':'經典著作','en':'Classics','es':'Clásicos','pt':'Clássicos'},
statYears:{'zh-CN':'跨越年数','zh-TW':'跨越年數','en':'Years Span','es':'Años Abarcados','pt':'Anos Abrangidos'},
classicsSection:{'zh-CN':'传世经典','zh-TW':'傳世經典','en':'Timeless Classics','es':'Clásicos Eternos','pt':'Clássicos Eternos'},
classicsSub:{'zh-CN':'经史子集，灿若星河','zh-TW':'經史子集，燦若星河','en':'Classics, histories, philosophers, literary collections — a brilliant galaxy','es':'Clásicos, historias, filósofos y colecciones literarias — una galaxia brillante','pt':'Clássicos, histórias, filósofos e coleções literárias — uma galáxia brilhante'},
bookAll:{'zh-CN':'全部','zh-TW':'全部','en':'All','es':'Todos','pt':'Todos'},
figuresLabel:{'zh-CN':'代表名人','zh-TW':'代表名人','en':'Notable Figures','es':'Figuras Notables','pt':'Figuras Notáveis'},
classicsLabel:{'zh-CN':'经典著作','zh-TW':'經典著作','en':'Classic Works','es':'Obras Clásicas','pt':'Obras Clássicas'},
freeAccess:{'zh-CN':'免费','zh-TW':'免費','en':'Free','es':'Gratis','pt':'Grátis'},
memberAccess:{'zh-CN':'会员','zh-TW':'會員','en':'Member','es':'Miembro','pt':'Membro'},
premium:{'zh-CN':'付费','zh-TW':'付費','en':'Premium','es':'Premium','pt':'Premium'},
loginTitle:{'zh-CN':'登录华夏文脉','zh-TW':'登錄華夏文脈','en':'Login to Chinese Heritage','es':'Iniciar Sesión','pt':'Entrar na Herança Chinesa'},
regTitle:{'zh-CN':'注册华夏文脉','zh-TW':'註冊華夏文脈','en':'Register for Chinese Heritage','es':'Registrarse','pt':'Registrar-se'},
emailLabel:{'zh-CN':'邮箱','zh-TW':'郵箱','en':'Email','es':'Correo Electrónico','pt':'Email'},
pwdLabel:{'zh-CN':'密码','zh-TW':'密碼','en':'Password','es':'Contraseña','pt':'Senha'},
nameLabel:{'zh-CN':'用户名','zh-TW':'用戶名','en':'Username','es':'Nombre de Usuario','pt':'Nome de Usuário'},
loginBtn:{'zh-CN':'登录','zh-TW':'登錄','en':'Login','es':'Iniciar Sesión','pt':'Entrar'},
regBtn:{'zh-CN':'注册','zh-TW':'註冊','en':'Register','es':'Registrarse','pt':'Registrar'},
noAccount:{'zh-CN':'还没有账号？','zh-TW':'還沒有賬號？','en':"Don\'t have an account?",'es':'¿No tienes cuenta?','pt':'Não tem uma conta?'},
haveAccount:{'zh-CN':'已有账号？','zh-TW':'已有賬號？','en':'Already have an account?','es':'¿Ya tienes cuenta?','pt':'Já tem uma conta?'},
clickHere:{'zh-CN':'点击注册','zh-TW':'點擊註冊','en':'Register here','es':'Regístrate aquí','pt':'Registre-se aqui'},
clickLogin:{'zh-CN':'点击登录','zh-TW':'點擊登錄','en':'Login here','es':'Inicia sesión aquí','pt':'Entre aqui'},
creditsLabel:{'zh-CN':'积分','zh-TW':'積分','en':'Credits','es':'Créditos','pt':'Créditos'},
accountTitle:{'zh-CN':'我的账户','zh-TW':'我的賬戶','en':'My Account','es':'Mi Cuenta','pt':'Minha Conta'},
creditsBalance:{'zh-CN':'当前积分','zh-TW':'當前積分','en':'Credit Balance','es':'Saldo de Créditos','pt':'Saldo de Créditos'},
buyCredits:{'zh-CN':'购买积分','zh-TW':'購買積分','en':'Buy Credits','es':'Comprar Créditos','pt':'Comprar Créditos'},
myBooks:{'zh-CN':'我的典籍','zh-TW':'我的典籍','en':'My Classics','es':'Mis Clásicos','pt':'Meus Clássicos'},
myPurchases:{'zh-CN':'购买记录','zh-TW':'購買記錄','en':'Purchase History','es':'Historial de Compras','pt':'Histórico de Compras'},
creditPkg1:{'zh-CN':'体验套餐','zh-TW':'體驗套餐','en':'Starter Pack','es':'Paquete Inicial','pt':'Pacote Inicial'},
creditPkg2:{'zh-CN':'标准套餐','zh-TW':'標準套餐','en':'Standard Pack','es':'Paquete Estándar','pt':'Pacote Padrão'},
creditPkg3:{'zh-CN':'尊享套餐','zh-TW':'尊享套餐','en':'Premium Pack','es':'Paquete Premium','pt':'Pacote Premium'},
creditPkg4:{'zh-CN':'至尊套餐','zh-TW':'至尊套餐','en':'Ultimate Pack','es':'Paquete Definitivo','pt':'Pacote Definitivo'},
recommended:{'zh-CN':'推荐','zh-TW':'推薦','en':'Recommended','es':'Recomendado','pt':'Recomendado'},
buyNow:{'zh-CN':'立即购买','zh-TW':'立即購買','en':'Buy Now','es':'Comprar Ahora','pt':'Comprar Agora'},
readBtn:{'zh-CN':'开始阅读','zh-TW':'開始閱讀','en':'Start Reading','es':'Comenzar a Leer','pt':'Começar a Ler'},
introOnly:{'zh-CN':'仅看简介','zh-TW':'僅看簡介','en':'View Intro Only','es':'Ver Solo Introducción','pt':'Ver Apenas Introdução'},
memberFreeCh:{'zh-CN':'会员免费看10章','zh-TW':'會員免費看10章','en':'Members Read 10 Chapters Free','es':'Miembros Leen 10 Capítulos Gratis','pt':'Membros Leem 10 Capítulos Grátis'},
buyFullAccess:{'zh-CN':'购买积分看全部','zh-TW':'購買積分看全部','en':'Buy Credits for Full Access','es':'Compra Créditos para Acceso Completo','pt':'Compre Créditos para Acesso Completo'},
buyLangAccess:{'zh-CN':'购买更多积分看其他语言版本','zh-TW':'購買更多積分看其他語言版本','en':'Buy More Credits for Other Languages','es':'Compra Más Créditos para Otros Idiomas','pt':'Compre Mais Créditos para Outros Idiomas'},
unlockWith:{'zh-CN':'积分解锁','zh-TW':'積分解鎖','en':'Unlock with','es':'Desbloquear con','pt':'Desbloquear com'},
credits:{'zh-CN':'积分','zh-TW':'積分','en':'credits','es':'créditos','pt':'créditos'},
confirmUnlock:{'zh-CN':'确认解锁','zh-TW':'確認解鎖','en':'Confirm Unlock','es':'Confirmar Desbloqueo','pt':'Confirmar Desbloqueio'},
notEnoughCredits:{'zh-CN':'积分不足，请先购买积分','zh-TW':'積分不足，請先購買積分','en':'Not enough credits. Please buy more.','es':'Créditos insuficientes. Compra más.','pt':'Créditos insuficientes. Compre mais.'},
goBuyCredits:{'zh-CN':'去购买积分','zh-TW':'去購買積分','en':'Buy Credits','es':'Comprar Créditos','pt':'Comprar Créditos'},
chapter:{'zh-CN':'章','zh-TW':'章','en':'Chapter','es':'Capítulo','pt':'Capítulo'},
bookIntro:{'zh-CN':'作品简介','zh-TW':'作品簡介','en':'Introduction','es':'Introducción','pt':'Introdução'},
bookAuthor:{'zh-CN':'作者','zh-TW':'作者','en':'Author','es':'Autor','pt':'Autor'},
bookDynasty:{'zh-CN':'朝代','zh-TW':'朝代','en':'Dynasty','es':'Dinastía','pt':'Dinastia'},
bookChapters:{'zh-CN':'章节','zh-TW':'章節','en':'Chapters','es':'Capítulos','pt':'Capítulos'},
shopTitle:{'zh-CN':'国学周边商城','zh-TW':'國學周邊商城','en':'Chinese Culture Shop','es':'Tienda de Cultura China','pt':'Loja de Cultura Chinesa'},
shopSub:{'zh-CN':'琴棋书画 · 姓氏研究 · 茶叶陶瓷 · 易学周边 · 文房雅物','zh-TW':'琴棋書畫 · 姓氏研究 · 茶葉陶瓷 · 易學周邊 · 文房雅物','en':'Music·Chess·Calligraphy·Painting · Surnames · Tea · Ceramics · I-Ching','es':'Música·Ajedrez·Caligrafía·Pintura · Apellidos · Té · Cerámica','pt':'Música·Xadrez·Caligrafia·Pintura · Sobrenomes · Chá · Cerâmica'},
shopAll:{'zh-CN':'全部','zh-TW':'全部','en':'All','es':'Todos','pt':'Todos'},
shopMusic:{'zh-CN':'琴','zh-TW':'琴','en':'Music','es':'Música','pt':'Música'},
shopChess:{'zh-CN':'棋','zh-TW':'棋','en':'Chess','es':'Ajedrez','pt':'Xadrez'},
shopCalligraphy:{'zh-CN':'书','zh-TW':'書','en':'Calligraphy','es':'Caligrafía','pt':'Caligrafia'},
shopPainting:{'zh-CN':'画','zh-TW':'畫','en':'Painting','es':'Pintura','pt':'Pintura'},
shopSurname:{'zh-CN':'姓氏研究','zh-TW':'姓氏研究','en':'Surname Study','es':'Estudio de Apellidos','pt':'Estudo de Sobrenomes'},
shopTea:{'zh-CN':'茶叶','zh-TW':'茶葉','en':'Tea','es':'Té','pt':'Chá'},
shopCeramic:{'zh-CN':'陶瓷','zh-TW':'陶瓷','en':'Ceramics','es':'Cerámica','pt':'Cerâmica'},
shopYijing:{'zh-CN':'易学周边','zh-TW':'易學周邊','en':'I-Ching Items','es':'Artículos de I Ching','pt':'Artigos do I Ching'},
shopStationery:{'zh-CN':'文房雅物','zh-TW':'文房雅物','en':'Stationery','es':'Utensilios de Escritorio','pt':'Utensílios de Mesa'},
addToCart:{'zh-CN':'加入购物车','zh-TW':'加入購物車','en':'Add to Cart','es':'Añadir al Carrito','pt':'Adicionar ao Carrinho'},
addedToCart:{'zh-CN':'已添加到购物车','zh-TW':'已添加到購物車','en':'Added to Cart','es':'Añadido al Carrito','pt':'Adicionado ao Carrinho'},
cart:{'zh-CN':'购物车','zh-TW':'購物車','en':'Cart','es':'Carrito','pt':'Carrinho'},
footerSlogan:{'zh-CN':'为中华国学之崛起而建 · 传承经典 · 继往开来','zh-TW':'為中華國學之崛起而建 · 傳承經典 · 繼往開來','en':'Built for the revival of Chinese classical studies · Preserving tradition · Opening the future','es':'Construido para el renacimiento de los estudios clásicos chinos · Preservando la tradición · Abriendo el futuro','pt':'Construído para o renascimento dos estudos clássicos chineses · Preservando a tradição · Abrindo o futuro'},
langZhCN:{'zh-CN':'简体','zh-TW':'簡體','en':'简体','es':'简体','pt':'简体'},
langZhTW:{'zh-CN':'繁体','zh-TW':'繁體','en':'繁体','es':'繁体','pt':'繁体'},
langEN:{'zh-CN':'EN','zh-TW':'EN','en':'EN','es':'EN','pt':'EN'},
langES:{'zh-CN':'ES','zh-TW':'ES','en':'ES','es':'ES','pt':'ES'},
langPT:{'zh-CN':'PT','zh-TW':'PT','en':'PT','es':'PT','pt':'PT'},
needLogin:{'zh-CN':'请先登录','zh-TW':'請先登錄','en':'Please login first','es':'Inicia sesión primero','pt':'Faça login primeiro'},
loginToRead:{'zh-CN':'登录后可阅读前10章','zh-TW':'登錄後可閱讀前10章','en':'Login to read first 10 chapters','es':'Inicia sesión para leer los primeros 10 capítulos','pt':'Faça login para ler os primeiros 10 capítulos'},
registerSuccess:{'zh-CN':'注册成功！欢迎加入华夏文脉！','zh-TW':'註冊成功！歡迎加入華夏文脈！','en':'Registration successful! Welcome to Chinese Heritage!','es':'¡Registro exitoso! ¡Bienvenido a la Herencia China!','pt':'Registro bem-sucedido! Bem-vindo à Herança Chinesa!'},
loginSuccess:{'zh-CN':'登录成功！','zh-TW':'登錄成功！','en':'Login successful!','es':'¡Inicio de sesión exitoso!','pt':'Login bem-sucedido!'},
creditPurchaseSuccess:{'zh-CN':'购买成功！积分已到账。','zh-TW':'購買成功！積分已到賬。','en':'Purchase successful! Credits added.','es':'¡Compra exitosa! Créditos añadidos.','pt':'Compra bem-sucedida! Créditos adicionados.'},
productPurchaseSuccess:{'zh-CN':'购买成功！感谢您的支持。','zh-TW':'購買成功！感謝您的支持。','en':'Purchase successful! Thank you for your support.','es':'¡Compra exitosa! Gracias por tu apoyo.','pt':'Compra bem-sucedida! Obrigado pelo seu apoio.'},
chapterUnlocked:{'zh-CN':'章节已解锁！','zh-TW':'章節已解鎖！','en':'Chapter unlocked!','es':'¡Capítulo desbloqueado!','pt':'Capítulo desbloqueado!'},
unlockChapterConfirm:{'zh-CN':'确认使用 ','zh-TW':'確認使用 ','en':'Use ','es':'Usar ','pt':'Usar '},
readFullBook:{'zh-CN':'积分解锁全部章节','zh-TW':'積分解鎖全部章節','en':'Unlock all chapters','es':'Desbloquear todos los capítulos','pt':'Desbloquear todos os capítulos'},
noBooksOwned:{'zh-CN':'还没有购买的典籍','zh-TW':'還沒有購買的典籍','en':'No classics purchased yet','es':'Aún no has comprado clásicos','pt':'Nenhum clássico comprado ainda'},
emptyCart:{'zh-CN':'购物车为空','zh-TW':'購物車為空','en':'Cart is empty','es':'El carrito está vacío','pt':'O carrinho está vazio'},
checkout:{'zh-CN':'结算','zh-TW':'結算','en':'Checkout','es':'Finalizar Compra','pt':'Finalizar Compra'},
registerBonus:{'zh-CN':'注册送10积分','zh-TW':'註冊送10積分','en':'Get 10 free credits on registration','es':'Obtén 10 créditos gratis al registrarte','pt':'Ganhe 10 créditos grátis ao se registrar'},
rsdTitle:{'zh-CN':'谈天说地','zh-TW':'談天說地','en':'Discussion Forum','es':'Foro de Discusión','pt':'Fórum de Discussão'},
rsdSub:{'zh-CN':'自由交流国学心得，分享经典感悟','zh-TW':'自由交流國學心得，分享經典感悟','en':'Share your thoughts on Chinese classics','es':'Comparte tus pensamientos sobre los clásicos chinos','pt':'Compartilhe seus pensamentos sobre os clássicos chineses'},
rsdConfucius:{'zh-CN':'儒家','zh-TW':'儒家','en':'Confucianism','es':'Confucianismo','pt':'Confucionismo'},
rsdBuddha:{'zh-CN':'佛家','zh-TW':'佛家','en':'Buddhism','es':'Budismo','pt':'Budismo'},
rsdTaoism:{'zh-CN':'道家','zh-TW':'道家','en':'Taoism','es':'Taoísmo','pt':'Taoísmo'},
rsdKeyFigures:{'zh-CN':'代表人物','zh-TW':'代表人物','en':'Key Figures','es':'Figuras Clave','pt':'Figuras Chave'},
rsdCoreTexts:{'zh-CN':'核心经典','zh-TW':'核心經典','en':'Core Texts','es':'Textos Fundamentales','pt':'Textos Fundamentais'},
rsdKeyConcepts:{'zh-CN':'核心思想','zh-TW':'核心思想','en':'Key Concepts','es':'Conceptos Clave','pt':'Conceitos Chave'},
playAudio:{'zh-CN':'朗诵','zh-TW':'朗誦','en':'Recite','es':'Recitar','pt':'Recitar'},
pauseAudio:{'zh-CN':'暂停','zh-TW':'暫停','en':'Pause','es':'Pausa','pt':'Pausar'},
stopAudio:{'zh-CN':'停止','zh-TW':'停止','en':'Stop','es':'Detener','pt':'Parar'},
audioPlaying:{'zh-CN':'朗诵中...','zh-TW':'朗誦中...','en':'Reciting...','es':'Recitando...','pt':'Recitando...'},
surnameTitle:{'zh-CN':'中华姓氏研究','zh-TW':'中華姓氏研究','en':'Chinese Surname Study','es':'Estudio de Apellidos Chinos','pt':'Estudo de Sobrenomes Chineses'},
surnameSub:{'zh-CN':'探寻百家姓氏之源流，追溯家族历史之脉络','zh-TW':'探尋百家姓氏之源流，追溯家族歷史之脈絡','en':'Trace the origins of Chinese surnames and explore family histories','es':'Rastrea los orígenes de los apellidos chinos y explora historias familiares','pt':'Rastreie as origens dos sobrenomes chineses e explore histórias familiares'},
surnameTop100:{'zh-CN':'百家姓','zh-TW':'百家姓','en':'Hundred Surnames','es':'Cien Apellidos','pt':'Cem Sobrenomes'},
surnameSearch:{'zh-CN':'搜索姓氏','zh-TW':'搜索姓氏','en':'Search Surname','es':'Buscar Apellido','pt':'Pesquisar Sobrenome'},
surnameOrigin:{'zh-CN':'姓氏起源','zh-TW':'姓氏起源','en':'Origin','es':'Origen','pt':'Origem'},
surnameFamous:{'zh-CN':'历史名人','zh-TW':'歷史名人','en':'Famous People','es':'Personajes Famosos','pt':'Pessoas Famosas'},
crossRef:{'zh-CN':'交叉参考','zh-TW':'交叉參考','en':'Cross Reference','es':'Referencia Cruzada','pt':'Referência Cruzada'},
rsdCompare:{'zh-CN':'三家对比','zh-TW':'三家對比','en':'Compare Three Teachings','es':'Comparar Tres Enseñanzas','pt':'Comparar Três Ensinamentos'},
shopDigital:{'zh-CN':'数字资源','zh-TW':'數字資源','en':'Digital Resources','es':'Recursos Digitales','pt':'Recursos Digitais'},newPost:{'zh-CN':'发帖','zh-TW':'發帖','en':'New Post','es':'Nuevo Post','pt':'Novo Post'},postTitle:{'zh-CN':'标题','zh-TW':'標題','en':'Title','es':'Título','pt':'Título'},postContent:{'zh-CN':'内容','zh-TW':'內容','en':'Content','es':'Contenido','pt':'Conteúdo'},submitPost:{'zh-CN':'发布','zh-TW':'發布','en':'Submit','es':'Publicar','pt':'Publicar'},addImage:{'zh-CN':'添加图片','zh-TW':'添加圖片','en':'Add Image','es':'Añadir Imagen','pt':'Adicionar Imagem'},addVideo:{'zh-CN':'添加视频','zh-TW':'添加視頻','en':'Add Video','es':'Añadir Video','pt':'Adicionar Vídeo'},reply:{'zh-CN':'回复','zh-TW':'回覆','en':'Reply','es':'Responder','pt':'Responder'},noPosts:{'zh-CN':'暂无帖子','zh-TW':'暫無帖子','en':'No posts yet','es':'No hay posts','pt':'Nenhum post ainda'},enterTitle:{'zh-CN':'请输入标题','zh-TW':'請輸入標題','en':'Enter title','es':'Ingrese título','pt':'Insira o título'},enterContent:{'zh-CN':'请输入内容','zh-TW':'請輸入內容','en':'Enter content','es':'Ingrese contenido','pt':'Insira o conteúdo'},imagePlaceholder:{'zh-CN':'图片链接（可选）','zh-TW':'圖片鏈接（可選）','en':'Image URL (optional)','es':'URL de imagen (opcional)','pt':'URL da imagem (opcional)'},videoPlaceholder:{'zh-CN':'视频链接（可选）','zh-TW':'視頻鏈接（可選）','en':'Video URL (optional)','es':'URL de video (opcional)','pt':'URL do vídeo (opcional)'},uploadImageLabel:{'zh-CN':'上传图片','zh-TW':'上傳圖片','en':'Upload Image','es':'Subir Imagen','pt':'Fazer Upload de Imagem'},deleteBtn:{'zh-CN':'删除','zh-TW':'刪除','en':'Delete','es':'Eliminar','pt':'Excluir'},confirmDelete:{'zh-CN':'确认删除？','zh-TW':'確認刪除？','en':'Confirm delete?','es':'¿Confirmar eliminación?','pt':'Confirmar exclusão?'},shopHeritage:{'zh-CN':'非遗传承','zh-TW':'非遺傳承','en':'Intangible Heritage','es':'Patrimonio Inmaterial','pt':'Patrimônio Imaterial'}}};var MSG_DATA=I18N.ui;
function t(key){const lang=window._lang||'zh-CN';const obj=I18N.ui[key];return obj?(obj[lang]||obj['zh-CN']):key;}
function langShort(l){const m={'zh-CN':'简体','zh-TW':'繁体','en':'EN','es':'ES','pt':'PT'};return m[l]||l;}


// === app.js ===
﻿// GLOBAL ERROR HANDLER
window.onerror=function(msg,url,line,col,err){
  try{console.error(msg,url,line,err)}catch(e){}
};

// STATE
var _lang="zh-CN";try{_lang=localStorage.getItem("ch_lang")||"zh-CN"}catch(e){}
window._lang=_lang;
var _user=null;try{_user=JSON.parse(localStorage.getItem("ch_user")||"null")}catch(e){} 
var _cart=[];try{_cart=JSON.parse(localStorage.getItem("ch_cart")||"[]")}catch(e){}
var _currentBook=null;
var _currentChapter=null;

function langShort(l){var m={"zh-CN":"\u7b80\u4f53","zh-TW":"\u7e41\u4f53","en":"EN","es":"ES","pt":"PT"};return m[l]||l;}
function setLang(l){_lang=l;window._lang=l;try{localStorage.setItem("ch_lang",l)}catch(e){}applyLang();renderTopBar();renderNav();renderPage(document.querySelector(".page.active")?.id?.replace("-page","")||"home");}
function applyLang(){document.documentElement.lang=_lang;document.querySelectorAll("[data-t]").forEach(function(el){el.innerHTML=t(el.dataset.t);});}
function renderTopBar(){var bar=document.getElementById("topBarUser");if(!bar)return;bar.innerHTML=_user?'<span class="credits-badge">'+t("creditsLabel")+": "+_user.credits+'</span><a href="#" onclick="navTo(\''+(_user?"account":"")+'\');return false">'+(_user?_user.name:t("navLogin"))+'</a>'+(_user?'<a href="#" onclick="logout();return false">'+t("navLogout")+"</a>":""):"";var ls=document.getElementById("langSwitch");if(ls)ls.innerHTML=["zh-CN","zh-TW","en","es","pt"].map(function(l){return'<button class="lang-btn'+(l===_lang?" active":"")+'" onclick="setLang(\''+l+'\')">'+langShort(l)+"</button>";}).join("");}
function navTo(p){renderPage(p);}
function setupEventListeners(){document.getElementById("authOverlay")?.addEventListener("click",function(e){if(e.target===this)closeAuth();});}
function updateCartCount(){var b=document.getElementById("cartBadge");if(b){b.textContent=_cart.length;b.style.display=_cart.length?"inline-flex":"none";}}
function showAuth(mode){document.getElementById("authOverlay").classList.add("active");var f=document.getElementById("authForm");if(!f)return;f.innerHTML='<h3>'+(mode==="login"?t("loginTitle"):t("regTitle"))+'</h3><div id="authMsg"></div>'+(mode==="register"?('<div class="form-group"><label>'+t("nameLabel")+'</label><input type="text" id="authName"></div>'):"")+'<div class="form-group"><label>'+t("emailLabel")+'</label><input type="email" id="authEmail"></div><div class="form-group"><label>'+t("pwdLabel")+'</label><input type="password" id="authPwd"></div><button class="btn-primary" onclick="'+(mode==="login"?"doLogin()":"doRegister()")+'">'+(mode==="login"?t("loginBtn"):t("regBtn"))+'</button>';}
function closeAuth(){document.getElementById("authOverlay").classList.remove("active");}
function doLogin(){var e=document.getElementById("authEmail")?.value;var p=document.getElementById("authPwd")?.value;var u=JSON.parse(localStorage.getItem("ch_users")||"{}");if(!u[e]||u[e].pwd!==p){alert("Invalid credentials");return}_user=u[e];localStorage.setItem("ch_user",JSON.stringify(_user));closeAuth();renderTopBar();renderNav();}
function doRegister(){var n=document.getElementById("authName")?.value;var e=document.getElementById("authEmail")?.value;var p=document.getElementById("authPwd")?.value;if(!n||!e||!p)return;var u=JSON.parse(localStorage.getItem("ch_users")||"{}");if(u[e]){alert("Email exists");return}u[e]={name:n,email:e,pwd:p,credits:10,ownedBooks:[]};localStorage.setItem("ch_users",JSON.stringify(u));_user=u[e];localStorage.setItem("ch_user",JSON.stringify(_user));closeAuth();renderTopBar();renderNav();}
function logout(){_user=null;localStorage.removeItem("ch_user");renderTopBar();renderNav();navTo("home");}
function renderPage(p){document.querySelectorAll(".page").forEach(function(el){el.classList.remove("active");});var tg=document.getElementById(p+"-page");if(tg)tg.classList.add("active");document.querySelectorAll(".nav-link").forEach(function(n){n.classList.toggle("active",n.dataset.page===p);});if(p==="classics"&&typeof renderClassics==="function")renderClassics();if(p==="shop"&&typeof renderShop==="function")renderShop();if(p==="account"&&typeof renderAccount==="function")renderAccount();if(p==="reader"&&_currentBook&&typeof renderReader==="function")renderReader();if(p==="forum"&&typeof renderForum==="function")renderForum();if(p==="surname"&&typeof renderSurname==="function")renderSurname();}
function renderNav(){var n=document.getElementById("mainNav");if(!n)return;var pages=["home","timeline","classics","forum","surname","shop"];var keys=["navHome","navTimeline","navClassics","navRushiDao","navSurname","navShop"];n.innerHTML=pages.map(function(pi,i){return'<button class="nav-link" data-page="'+pi+'" onclick="navTo(\''+pi+'\')">'+t(keys[i])+"</button>";}).join("")+'<span class="nav-spacer"></span>'+(_user?'<button class="nav-link" data-page="account" onclick="navTo(\'account\')">'+t("navAccount")+'<span class="cart-count" id="cartBadge" style="display:none">0</span></button>':'<button class="nav-link" onclick="showAuth(\'login\')">'+t("navLogin")+"/"+t("navRegister")+"</button>");updateCartCount();}

function init(){
  try{
    applyLang();renderTopBar();renderNav();navTo("home");setupEventListeners();updateCartCount();
  }catch(e){
    try{
      var d=document.body;
      if(d)d.innerHTML+='<div style="position:fixed;bottom:0;left:0;right:0;background:red;color:white;padding:10px;z-index:99999">INIT ERROR: '+e.message+"</div>";
    }catch(e2){}
  }
}

document.addEventListener("DOMContentLoaded",init);




function renderTimeline(){var c=document.getElementById("timelineContainer");if(!c||typeof DYNASTIES==="undefined")return;c.innerHTML=DYNASTIES.map(function(d,i){return'<div class="tl-item" onclick="toggleTimeline('+i+')"><div class="tl-dot"></div><div class="tl-year">'+d.year+'</div><div class="tl-name">'+d.name+'</div><div class="tl-sub">'+(d.subtitle||"")+'</div><div class="tl-preview">'+(d.summary||"")+'</div></div>';}).join("");}
function toggleTimeline(i){document.querySelectorAll(".tl-item").forEach(function(el,j){el.classList.toggle("active",j===i);});}
function renderStats(){var e1=document.getElementById("statDynasties");if(e1&&typeof DYNASTIES!=="undefined")e1.textContent=DYNASTIES.length;var e2=document.getElementById("statFigures");if(e2&&typeof DYNASTIES!=="undefined")e2.textContent=new Set(DYNASTIES.flatMap(function(d){return d.figures})).size;var e3=document.getElementById("statClassics");if(e3&&typeof DYNASTIES!=="undefined")e3.textContent=DYNASTIES.reduce(function(s,d){return s+(d.classics?d.classics.length:0);},0);var e4=document.getElementById("statYears");if(e4)e4.textContent="\u7ea65000";}


function openReader(id){_currentBook=(typeof BOOKS_DATA!=="undefined"?BOOKS_DATA.find(function(b){return b.id===id;}):null);navTo("reader");}
function renderReader(){var sec=document.getElementById("reader-page");if(!sec||!_currentBook)return;var b=_currentBook;sec.innerHTML='<div class="reader-header"><button class="btn-secondary btn-sm" onclick="navTo(\'classics\')">&larr; '+t("navClassics")+'</button><h2>'+(b.name[_lang]||b.name["zh-CN"]||"")+'</h2></div><div class="reader-content"><p>'+(b.intro[_lang]||b.intro["zh-CN"]||"")+'</p></div>';}


function addCart(id){_cart.push(id);try{localStorage.setItem("ch_cart",JSON.stringify(_cart))}catch(e){}updateCartCount();}
function showToast(m){var t=document.getElementById("cartToast");if(!t)return;t.textContent=m;t.classList.add("show");setTimeout(function(){t.classList.remove("show");},2500);}


function renderAccount(){var sec=document.getElementById("account-page-content");if(!sec)return;if(!_user){sec.innerHTML='<div style="text-align:center;padding:3rem"><h3>'+t("navLogin")+'</h3><p>'+t("needLogin")+'</p><button onclick="showAuth(\'login\')">'+t("navLogin")+'</button></div>';return;}sec.innerHTML='<div class="credit-balance"><div class="cb-num">'+_user.credits+'</div><div class="cb-label">'+t("creditsBalance")+'</div></div>';}


function renderClassics(){var g=document.getElementById("classicsGrid");if(!g||typeof BOOKS_DATA==="undefined")return;g.innerHTML=BOOKS_DATA.map(function(b){var n=b.name[_lang]||b.name["zh-CN"]||"";var a=b.author[_lang]||b.author["zh-CN"]||"";return'<div class="book-card"><h4>'+n+'</h4><div class="bc-meta"><span>'+a+'</span></div></div>';}).join("");}


var REGISTER_BONUS_CREDITS=10;
var UNLOCK_CREDITS={book:20,langVersion:30};
var CREDIT_PACKAGES=[{id:"small",credits:20,price:"$2"},{id:"medium",credits:100,price:"$8",recommended:true},{id:"large",credits:300,price:"$20"}];
var MEMBER_FREE_CHAPTERS=10;

document.addEventListener("DOMContentLoaded",init);

// === app-features.js ===
﻿
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

function speakText(text,lang){let s;try{s=window.speechSynthesis||null}catch(e){s=null}
  if(!s){const st=document.getElementById("ttsStatus");if(st)st.textContent="Browser does not support TTS";return;}
  s.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=lang==="zh-CN"||lang==="zh-TW"?"zh-CN":lang;u.rate=0.85;u.pitch=1;
  u.onstart=()=>{const st=document.getElementById("ttsStatus");if(st)st.textContent="🔊 "+t("audioPlaying");};
  u.onend=()=>{const st=document.getElementById("ttsStatus");if(st)st.textContent="";};s.speak(u);
}
function playAllRecitation(){if(!_currentBook)return;const chs=_currentBook.chapters&&(_currentBook.chapters[_lang]||_currentBook.chapters["zh-CN"]);if(!chs||!chs.length)return;speakText(chs.map(c=>c.c).join("\n"),_lang);}
function stopRecitation(){try{const s=window.speechSynthesis||null;if(s)s.cancel();const st=document.getElementById("ttsStatus");if(st)st.textContent="";}catch(e){}}


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
}
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


function renderSurnameTree(){var sec=document.getElementById("surname-page-content");if(!sec)return;
  var h="<div style=\"text-align:center;margin-bottom:.8rem\"><button class=\"rsd-tab active\" onclick=\"switchSurnameView('cards')\">姓氏列表</button><button class=\"rsd-tab\" onclick=\"switchSurnameView('tree')\">姓氏树状图</button><button class=\"rsd-tab\" onclick=\"switchSurnameView('imperial')\">帝王姓氏</button></div>";
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

function renderSurname(){renderSurnameTree();}

function chkItem(id){if(!_user)return;var p=SHOP_PRODUCTS.find(function(pp){return pp.id===id;});if(!p)return;
  if(_user.credits<p.price){showToast(t("notEnoughCredits"));navTo("account");return;}
  _user.credits-=p.price;
  if(p.cat==="digital"){_user.ownedItems=_user.ownedItems||[];_user.ownedItems.push(id);}
  saveUser();_cart=_cart.filter(function(c){return c!==id;});localStorage.setItem("ch_cart",JSON.stringify(_cart));
  updateCartCount();renderTopBar();renderAccount();showToast(t("productPurchaseSuccess"));
}

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














function getForumData(){
  try{_forumData=JSON.parse(localStorage.getItem("ch_forum")||"[]");}catch(e){_forumData=[];}
  if(!_forumData||_forumData.length<20)_forumData=autoSeedForum();
  return _forumData;
}
function setForumData(){
  localStorage.setItem("ch_forum",JSON.stringify(_forumData));
}

// === app-forum-l10n.js ===
﻿var SURNAME_TREE={name:"中华姓氏",children:[
{name:"上古八大姓",children:[
{name:"姬姓",desc:"黄帝之姓，周朝国姓。衍生：周、吴、郑、王、杨、蔡、卫、蒋、韩、冯、沈、魏、唐、贾、曹、成、霍、管、毛、应、方、潘、戴、汪、庞、万、贺、卓、颜、荀、于、邵、石、段、施、温、常、盛、狄、岑、支、丛、翁、苟、羊、富、焦、宫、谷、浦、蔺、芮、鄂、白、咸、伍、井、乐、许、江、巴、夔、共、詹、聂、毋、幸、阴、冀、步、蒯、却、阎、栾、鄂、申、简、芮、雍、毕、原、郕、郇、茅、胙、祭等300余姓"},
{name:"姜姓",desc:"炎帝之姓，源自姜水。衍生：齐、吕、许、高、谢、邱、崔、骆、丁、申、章、贺、卢、薄、赖、连、晏、柴、充、淳于、东郭、望、盖、谷、国、翰、井、年、壬、日、骆、桓、景、栾、庆、尚、棠、隰、孝、懿、宇文等200余姓"},
{name:"嬴姓",desc:"少昊之姓，秦朝国姓。衍生：秦、赵、黄、徐、江、梁、马、葛、廉、李、谷、钟、许、费、郯、谷、阮、裴、瞿、蔺、谷、侯、缪、秦、沈、谷、养、郏、桑、裴、白、谷、曲、梁丘、将梁、江、黄、徐、赵、秦等100余姓"},
{name:"姒姓",desc:"夏朝国姓，大禹之姓。衍生：夏、禹、鲍、谭、曾、计、欧阳、娄、邓、窦、顾、扈、嵇、计、楼、佀、莘、蓰、夏、相、鲍、谭、巢、扈、杞、缯、有、费、淅、戈、逄、关等80余姓"},
{name:"妘姓",desc:"祝融之姓。衍生：郐、鄢、路、逼阳、鄅、妘、郧、芸、郐、鄢、罗、赖、冯等30余姓"},
{name:"妫姓",desc:"虞舜之姓。衍生：陈、田、胡、袁、姚、薛、虞、王、孙、陆、车、夏、司徒、北宫、文、敬、穰、慈、靖、尝、威、法、负、遂、圭、沮、投等80余姓"},
{name:"姚姓",desc:"虞舜之后。衍生：姚、虞、陈、王、胡、孙、田、袁、夏、陆、车、薛、司徒等60余姓"},
{name:"姞姓",desc:"黄帝二十五子之一。衍生：燕、雍、鄂、密、须、阚、严、光、羊、杨、孔、尹、蔡、鲁、允、断、敦、偪、郅等40余姓"}

]},
{name:"商周封国",children:[
{name:"子姓（商）",desc:"商朝国姓。衍生：宋、孔、林、戴、殷、商、祖、武、钟、王、郝、邓、汤、萧、宋、邓、钟、武、谈、邹、时、宗、牛、边、戎、向、合、同、鲜、及、权、滦、邹、林、邓、武、戴等120余姓"},
{name:"芈姓（楚）",desc:"楚国国姓。衍生：熊、屈、景、昭、庄、项、白、叶、楚、兰、麻、成、潘、左、申、伍、沈、班、孙、苗、贲、权、蒍、卓、蓝、巫等90余姓"},
{name:"曹姓",desc:"颛顼后裔。衍生：曹、朱、邹、颜、倪、邾、郳、牟、曹等30余姓"},
{name:"祁姓（尧）",desc:"帝尧之姓。衍生：刘、唐、杜、范、士、留、随、司空、范、隰、乐、彘等50余姓"},
{name:"风姓（伏羲）",desc:"伏羲之姓。衍生：伏、任、宿、须句、颛臾、风、密、任等20余姓"},
{name:"己姓（少昊）",desc:"少昊之姓。衍生：苏、温、董、顾、费、郯、己、谭、莒、舒等30余姓"},
{name:"任姓（黄帝）",desc:"黄帝后裔。衍生：任、薛、章、游、奚、挚、谢、舒、终等30余姓"}
]},
{name:"少数民族改姓",children:[
{name:"北魏改姓",desc:"北魏孝文帝改革鲜卑改汉姓。衍生：元、陆、穆、贺、刘、楼、于、尉、长孙、宇文、慕容、独孤、拓跋、乞伏、沮渠、段、万俟等50余姓"},
{name:"辽金元改姓",desc:"辽金元时期改汉姓。衍生：金、王、李、张、刘、陈、赵、完颜、耶律、石抹、萧、术虎等30余姓"},
{name:"满清改姓",desc:"清朝满族改汉姓。衍生：金、关、赵、马、舒、那、郎、富、佟、文、齐、章、铁、爱新觉罗、叶赫那拉、瓜尔佳等40余姓"},
{name:"其他民族改姓",desc:"回藏蒙各族改姓汉化。衍生：白、海、铁、脱、火、回、沙、摆、绽、红、改、偏、闪、黑等20余姓"}
]}
]};



function autoSeedForum(){var n=Date.now(),h=36e5,m=6e4,lang=_lang||"zh-CN";
if(lang==="en"){var us=['Sinophile','DaoSeeker','TeaLover','CalligFan','ConfuciusRead','ChineseLearner','TaiChiMaster','PoetryFan','ArtOfWarFan','TeaExpert'];var rp=['CultureVulture','BeijingBob','ShanghaiSam','NihaoNancy','DimSumDan','ChinaHand','MiddleKing','GreatWallGuy','JadeDragon','SilkRoad'];
var ts=['Understanding the Dao: A Westerner Journey','My First Tai Chi Experience Changed My Life','Confucius Wisdom I Use Every Day','Learning to Write Chinese Characters is Hard','The Art of War in Modern Business Strategy','Chinese Tea Ceremony: A Complete Beginner Guide','Yin and Yang: The Key to a Balanced Life','My Journey Learning Classical Chinese','Eastern vs Western Philosophy: Key Differences','The Beauty of Tang Poetry in English Translation'];
var cs=['I started reading the Dao De Jing last year and it completely changed how I see the world. The concept of Wu Wei (effortless action) is so counterintuitive to Western thinking but makes so much sense. Anyone else have this experience?','I tried Tai Chi for the first time during a trip to Shanghai. I was skeptical at first but after just one session I felt more relaxed than ever. The slow movements are like moving meditation. Highly recommend it!','I read the Analects every morning as part of my daily routine. The saying about not doing to others what you dont want done to yourself is universal wisdom. What is your favorite Confucius quote?','I have been practicing Chinese calligraphy for 6 months now and its the hardest thing I have ever learned. Each stroke has a specific order and meaning. But the beauty of a well-written character makes it all worth it.','I applied Sun Tzu principles to negotiate a business deal last week and it worked perfectly. Knowing yourself and knowing your opponent is key. Anyone else use military strategy in business?','The Chinese tea ceremony is not just about drinking tea - it is a spiritual practice. The way the water is poured, the aroma of the leaves, the peaceful atmosphere. I tried Gongfu tea ceremony and it was transformative.','The concept of Yin and Yang helps me make better decisions in life. When I feel stressed I seek calm. When I am too passive I push myself to act. Balance is everything. How do you apply Yin and Yang in daily life?','After 2 years of studying Classical Chinese I can finally read simple passages from the Analects in the original. The grammar is completely different from modern Chinese but the beauty of the ancient language is unmatched.','The biggest difference I see between Eastern and Western philosophy is that Eastern thought focuses on harmony while Western focuses on truth. Both are valuable but approaching problems from both perspectives gives the best results.','I discovered Tang poetry through translation and was blown away by Li Bai. His poem about drinking alone under the moon is so vivid and emotional. Even in translation the beauty shines through. What are your favorite translated Chinese poems?'];
var rcs=['Great post! Very insightful.','I had a similar experience. Thanks for sharing!','This is fascinating. Where can I learn more?','I disagree with some points but overall a good read.','Thanks for explaining this so clearly.','This changed my perspective. Well written!','I have been studying this too. Would love to chat more.','Excellent analysis. Bookmarking this!'];
generateAndSave(us,rp,ts,cs,rcs);return;}
if(lang==="es"){var us=['AmanteChina','BuscadorDao','AprendizCalig','ViajeroChina','AmigoConfucio','EstudianteCN','MaestroTaichi','AmantePoesia','Estratega','ExpertoTe'];
var rp=['MadridMiguel','BarcelonaBea','Andalusí','CervantesCN','DonQuijoteCN','Garcilaso','LopeChina','QuevedoCN','UnamunoCN','OrtegaCN'];
var ts=['El Dao: Perspectiva de un Occidental','Mi Primera Experiencia con Tai Chi Cambió Mi Vida','La Sabiduría de Confucio en la Vida Moderna','Aprendiendo Caligrafía China es Difícil','El Arte de la Guerra en los Negocios Modernos','Guía de la Ceremonia del Té China para Principiantes','Yin y Yang: La Clave de una Vida Equilibrada','Mi Viaje Aprendiendo Chino Clásico','Filosofía Oriental vs Occidental: Diferencias Clave','La Belleza de la Poesía Tang en Traducción'];
var cs=['Empecé a leer el Dao De Jing el año pasado y cambió completamente mi forma de ver el mundo. El concepto de Wu Wei (acción sin esfuerzo) es tan contraintuitivo para el pensamiento occidental pero tiene tanto sentido. Alguien más ha tenido esta experiencia?','Probé Tai Chi por primera vez durante un viaje a Shanghai. Era escéptico pero después de una sesión me sentí más relajado que nunca. Los movimientos lentos son como meditación en movimiento. Lo recomiendo mucho!','Leo las Analectas cada mañana como parte de mi rutina diaria. El dicho sobre no hacer a otros lo que no quieres que te hagan a ti es sabiduría universal. Cuál es tu cita favorita de Confucio?','Llevo 6 meses practicando caligrafía china y es lo más difícil que he aprendido. Cada trazo tiene un orden y significado específicos. Pero la belleza de un carácter bien escrito hace que valga la pena.','Apliqué los principios de Sun Tzu para negociar un acuerdo comercial la semana pasada y funcionó perfectamente. Conocerse a uno mismo y conocer al oponente es clave. Alguien más usa estrategia militar en los negocios?'];
var rcs=['Gran publicación! Muy interesante.','Tuve una experiencia similar. Gracias por compartir!','Esto es fascinante. Dónde puedo aprender más?','No estoy de acuerdo con algunos puntos pero en general es buena lectura.','Gracias por explicarlo tan claramente.','Excelente análisis. Lo guardo en favoritos!'];
generateAndSave(us,rp,ts,cs,rcs);return;}
if(lang==="pt"){var us=['AmanteChina','BuscadorDao','AprendizCalig','ViajanteChina','AmigoConfucio','EstudanteCN','MestreTaichi','AmantePoesia','Estratega','ExpertCha'];
var rp=['LisboaLuis','PortoPedro','CoimbraCarla','BrasiliaBruno','SaoPauloSilva','RioRenato','MinasMiguel','BahiaBia','CearaCarlos','AmazoniaAna'];
var ts=['O Dao: Perspectiva de um Ocidental','Minha Primeira Experiência com Tai Chi Mudou Minha Vida','A Sabedoria de Confúcio na Vida Moderna','Aprender Caligrafia Chinesa é Difícil','A Arte da Guerra nos Negócios Modernos','Guia da Cerimônia do Chá Chinês para Iniciantes','Yin e Yang: A Chave para uma Vida Equilibrada','Minha Jornada Aprendendo Chinês Clássico','Filosofia Oriental vs Ocidental: Diferenças Chave','A Beleza da Poesia Tang em Tradução'];
var cs=['Comecei a ler o Dao De Jing no ano passado e mudou completamente minha forma de ver o mundo. O conceito de Wu Wei (ação sem esforço) é tão contraintuitivo para o pensamento ocidental mas faz tanto sentido. Alguém mais teve essa experiência?','Experimentei Tai Chi pela primeira vez durante uma viagem a Xangai. Eu estava cético mas depois de apenas uma sessão me senti mais relaxado do que nunca. Os movimentos lentos são como meditação em movimento. Super recomendo!','Leio os Analectos toda manhã como parte da minha rotina diária. O ditado sobre não fazer aos outros o que você não quer que façam a você é sabedoria universal. Qual é a sua citação favorita de Confúcio?','Estou praticando caligrafia chinesa há 6 meses e é a coisa mais difícil que já aprendi. Cada traço tem uma ordem e significado específicos. Mas a beleza de um caractere bem escrito faz valer a pena.','Apliquei os princípios de Sun Tzu para negociar um acordo comercial na semana passada e funcionou perfeitamente. Conhecer a si mesmo e conhecer o oponente é a chave. Alguém mais usa estratégia militar nos negócios?'];
var rcs=['Ótima publicação! Muito interessante.','Tive uma experiência similar. Obrigado por compartilhar!','Isso é fascinante. Onde posso aprender mais?','Discordo de alguns pontos mas no geral é uma boa leitura.','Obrigado por explicar tão claramente.','Excelente análise. Vou salvar nos favoritos!'];
generateAndSave(us,rp,ts,cs,rcs);return;}
generateAndSave(['\u6E05\u98CE\u660E\u6708'],['\u8BFB\u4E66\u4EBA\u7532'],['\u300C\u9053\u5FB7\u7ECF\u300D\u300C\u9053\u53EF\u9053\u975E\u5E38\u9053\u300D\u5927\u5BB6\u600E\u4E48\u7406\u89E3\uFF1F'],['\u6700\u8FD1\u91CD\u8BFB\u9053\u5FB7\u7ECF...'],['\u8BF4\u5F97\u597D\uFF01']);}
function generateAndSave(us,rp,ts,cs,rcs){var n=Date.now(),h=36e5,m=6e4;var posts=[];ts.forEach(function(t,i){var pt=n-(19-i)*h*4;var po={id:String(pt),t:t,c:cs[i%cs.length]||'',a:us[i%us.length],d:pt,i:[],v:[],r:[]};var rc=Math.floor(3+Math.random()*4);for(var j=0;j<rc;j++){po.r.push({id:String(pt+j*m),a:rp[(i+j)%rp.length],d:pt+(j+1)*m,c:rcs[Math.floor(Math.random()*rcs.length)],i:[]});}posts.push(po);});_forumData=posts;localStorage.setItem("ch_forum",JSON.stringify(posts));}







// === fix-forum-zh.js ===
function autoSeedForum(){var n=Date.now(),h=36e5,m=6e4;var us=['清风明月','墨香居士','古道西风','南华真人','北冥有鱼','东篱采菊','西山红叶','竹林隐士','松间明月','石上清泉','闲云野鹤','流水高山','春风化雨','秋水长天','梅花三弄','兰亭序客','赤壁怀古','桃花源主','岳阳楼记','滕王阁序'];var rp=['读书人甲','读书人乙','国学爱好者','古文学徒','经史子集','诗词达人','历史迷','易学新手','儒释道信徒','中医养生'];var ts=['「道德经」「道可道非常道」大家怎么理解？','「红楼梦」中最打动你的人物是谁？','王阳明心学对现代人的启示','周易到底该怎么学？','你心中排名第一的唐诗是？','孔子说的「仁」到底是什么？','中医到底有没有科学依据？','「孙子兵法」在现代商业中的应用','禅宗「明心见性」是什么意思？','书法入门从哪种字体开始？','「山海经」是神话还是历史？','曾国藩家书中的处世智慧','诸子百家你最喜欢哪一家？','如何理解「心经」的「色即是空」？','中国古典音乐和西方音乐的根本差异','风水是科学还是迷信？','「资治通鉴」值得通读吗？','孔子和老子思想的最大分歧','大家来分享喜欢的对联','古籍阅读从哪些入门比较好？'];var ct=['最近重读道德经...','红楼梦让我反复琢磨...','知行合一的智慧...','周易卦象错综复杂...','春江花月夜孤篇压全唐...','仁的本质是什么？','中医千年实践的证明...','商场如战场...','明心见性的境界...','零基础学书法...','山海经是神话还是历史？','曾国藩家书的智慧...','最喜欢哪一家诸子百家？','色即是空的理解...','中乐与西乐的根本差异...','风水的科学性讨论...','资治通鉴的通读价值...','孔子与老子的分歧...','对联的平仄之美...','古籍阅读的入门路径...'];var rcs=['说得好！很有启发。','受教了，感谢分享！','这个观点很新颖。','我也有同感，学习了！','完全同意！深度好文！'];generateAndSave(us,rp,ts,ct,rcs);}function generateAndSave(us,rp,ts,cs,rcs){var n=Date.now(),h=36e5,m=6e4;var posts=[];ts.forEach(function(t,i){var pt=n-(19-i)*h*4;var po={id:String(pt),t:t,c:cs[i%cs.length]||'',a:us[i%us.length],d:pt,i:[],v:[],r:[]};var rc=Math.floor(3+Math.random()*4);for(var j=0;j<rc;j++){po.r.push({id:String(pt+j*m),a:rp[(i+j)%rp.length],d:pt+(j+1)*m,c:rcs[Math.floor(Math.random()*rcs.length)],i:[]})}posts.push(po)});_forumData=posts;localStorage.setItem("ch_forum",JSON.stringify(posts))}
// === fix-classics.js ===
var SCHOOL_RU = ["论语","孟子","大学","中庸","荀子","孔子家语","盐铁论","说苑","新序","法言","申鉴","中说","传习录","近思录","朱子语类","大学衍义","大学衍义补","日知录","明夷待访录","思问录","张子正蒙","二程遗书","象山全集","阳明全书","恒言录","潜书","焚书","藏书","明儒学案","宋元学案","孝经"];
var SCHOOL_DAO = ["道德经","庄子","列子","文子","淮南子","抱朴子","周易参同契","黄庭经","太上感应篇","阴符经","清静经","悟真篇","坐忘论","化书","无能子","太平经","老子想尔注","云笈七签"];
var SCHOOL_FO = ["金刚经","心经","六祖坛经","楞严经","法华经","华严经","维摩诘经","大般涅槃经","圆觉经","阿弥陀经","无量寿经","观无量寿经","地藏菩萨本愿经","药师经","四十二章经","八大人觉经","百喻经","梵网经","楞伽经","解深密经","大乘起信论","唯识三十论颂"];
var SISHU_WUJING_BOOKS = ["大学","中庸","论语","孟子","诗经","尚书","礼记","周易","春秋"];
var _classicsSubFilter = "";

function getSchool(b){
  if(!b||!b.name) return "";
  var n = b.name["zh-CN"] || "";
  var a = (b.author&&b.author["zh-CN"]) || "";
  if(n==="中论") return a.indexOf("徐幹")>=0 ? "儒" : "佛";
  if(SCHOOL_RU.indexOf(n)>=0) return "儒";
  if(SCHOOL_DAO.indexOf(n)>=0||a.indexOf("老子")>=0||a.indexOf("庄周")>=0||a.indexOf("列御寇")>=0||a.indexOf("刘安")>=0||a.indexOf("葛洪")>=0) return "道";
  if(SCHOOL_FO.indexOf(n)>=0||a.indexOf("鸠摩罗什")>=0||a.indexOf("玄奘")>=0||a.indexOf("慧能")>=0) return "佛";
  return "";
}

function makeBookCard(b){
  var n = b.name[_lang]||b.name["zh-CN"]||"";
  var a = b.author[_lang]||b.author["zh-CN"]||"";
  var d = b.dynasty[_lang]||b.dynasty["zh-CN"]||"";
  var it = (b.intro[_lang]||b.intro["zh-CN"]||"").substring(0,70)+"...";
  var owned = _user&&(_user.ownedBooks||[]).indexOf(b.id)>=0;
  var school = getSchool(b);
  var badge = school ? "<span class=\"school-badge\" style=\"position:absolute;bottom:4px;right:4px;background:#8B0000;color:#f5e8d0;font-size:10px;line-height:1.3;padding:1px 5px;border-radius:3px\">"+school+"</span>" : "";
  return "<div class=\"book-card\" style=\"position:relative\" onclick=\"openReader('"+b.id+"')\"><div class=\"bc-lock "+(owned?"free":"")+"\">"+(owned?"\u2705":"\ud83d\udd12")+"</div><h4>"+n+"</h4><div class=\"bc-meta\"><span>"+t("bookAuthor")+": "+a+"</span><span>"+t("bookDynasty")+": "+d+"</span></div><p>"+it+"</p><div class=\"bc-tags\"><span class=\"tag\">"+b.type+"</span>"+(b.totalChapters>0?"<span class=\"tag\">"+b.totalChapters+" "+t("bookChapters")+"</span>":"<span class=\"tag\">"+t("introOnly")+"</span>")+"</div>"+badge+"</div>";
}

function renderClassics(){
  var g=document.getElementById("classicsGrid");if(!g)return;
  var fb=document.getElementById("classicsFilter");
  if(fb&&!fb.children.length){
    var types=["all"].concat([...new Set(BOOKS_DATA.map(function(b){return b.type;}))]).filter(function(t){return t&&t!=="undefined"&&t!=="null";});
    if(types.indexOf("四书五经")===-1) types.splice(1,0,"四书五经");
    fb.innerHTML=types.map(function(t){return "<button"+(t===_classicsFilter?" class=\"active\"":"")+" onclick=\"setClassicsFilter('"+t+"')\">"+(t==="all"?"全部":t)+"</button>";}).join("");
  }
  var ru=[],shi=[],dao=[],all=[],sub=_classicsSubFilter||"";
  if(_classicsFilter==="四书五经") all=BOOKS_DATA.filter(function(b){return SISHU_WUJING_BOOKS.indexOf(b.name["zh-CN"])>=0;});
  else if(_classicsFilter==="儒释道"){
    BOOKS_DATA.filter(function(b){return b.type==="儒释道"||getSchool(b);}).forEach(function(b){var s=getSchool(b);if(s==="儒")ru.push(b);else if(s==="佛")shi.push(b);else if(s==="道")dao.push(b);});
    if(sub==="儒") all=ru; else if(sub==="释") all=shi; else if(sub==="道") all=dao; else all=ru.concat(shi).concat(dao);
  }else if(_classicsFilter==="all") all=BOOKS_DATA.slice();
  else all=BOOKS_DATA.filter(function(b){return b.type===_classicsFilter;});
  if(_classicsSearch){var q=_classicsSearch.toLowerCase();all=all.filter(function(b){return(b.name[_lang]||b.name["zh-CN"]||"").toLowerCase().indexOf(q)>=0||(b.author[_lang]||b.author["zh-CN"]||"").toLowerCase().indexOf(q)>=0;});}
  if(_classicsFilter==="儒释道"){
    var h='<div style="display:flex;gap:0;border:1px solid #d4c9b8;border-radius:3px;overflow:hidden;margin-bottom:.5rem">';
    [["",!sub?"active":""],["儒",sub==="儒"?"active":""],["释",sub==="释"?"active":""],["道",sub==="道"?"active":""]].forEach(function(t){h+='<span style="padding:.1rem .5rem;cursor:pointer;font-size:.78rem;border-right:1px solid #d4c9b8'+(!t[1]?"":";background:#8B0000;color:#f5e8d0")+'" onclick="_classicsSubFilter=\"'+t[0]+'\";renderClassics()">'+(t[0]||"全部")+"</span>";});
    h+="</div>";
    if(sub){h+=all.map(function(b){return makeBookCard(b);}).join("");}else{
      if(ru.length) h+='<h4 style="font-size:.82rem;margin:.4rem 0 .2rem;color:#8B0000">儒家</h4><div class="book-grid">'+ru.map(function(b){return makeBookCard(b);}).join("")+"</div>";
      if(shi.length) h+='<h4 style="font-size:.82rem;margin:.4rem 0 .2rem;color:#8B0000">佛家</h4><div class="book-grid">'+shi.map(function(b){return makeBookCard(b);}).join("")+"</div>";
      if(dao.length) h+='<h4 style="font-size:.82rem;margin:.4rem 0 .2rem;color:#8B0000">道家</h4><div class="book-grid">'+dao.map(function(b){return makeBookCard(b);}).join("")+"</div>";
    }
    g.innerHTML=h||"";
  }else{
    g.innerHTML=all.map(function(b){return makeBookCard(b);}).join("");
  }
}
function setClassicsFilter(t){_classicsFilter=t;_classicsSubFilter="";document.querySelectorAll("#classicsFilter button").forEach(function(b){b.classList.toggle("active",b.textContent===t||t==="all"&&b.textContent.indexOf("全部")>=0||t==="四书五经"&&b.textContent==="四书五经");});renderClassics();}
function filterClassics(){_classicsSearch=(document.getElementById("classicsSearch")||{}).value||"";renderClassics();}


setTimeout(function(){
  var d=document.createElement("div");
  d.style.cssText="position:fixed;bottom:40px;right:0;background:lime;color:black;padding:4px;z-index:99999;font-size:12px";
  d.textContent="DIAG: init="+(typeof init==="function"?"OK":"MISS")+" applyLang="+(typeof applyLang==="function"?"OK":"MISS")+" I18N="+(typeof I18N!=="undefined"?"OK":"MISS");
  document.body.appendChild(d);
},1500);

