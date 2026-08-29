// GLOBAL ERROR HANDLER
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



// ===== TIMELINE =====
function renderTimeline(){var c=document.getElementById("timelineContainer");if(!c||typeof DYNASTIES==="undefined")return;c.innerHTML=DYNASTIES.map(function(d,i){return'<div class="tl-item" onclick="toggleTimeline('+i+')"><div class="tl-dot"></div><div class="tl-year">'+d.year+'</div><div class="tl-name">'+d.name+'</div><div class="tl-sub">'+(d.subtitle||"")+'</div><div class="tl-preview">'+(d.summary||"")+'</div></div>';}).join("");}
function toggleTimeline(i){document.querySelectorAll(".tl-item").forEach(function(el,j){el.classList.toggle("active",j===i);});}
function renderStats(){var e1=document.getElementById("statDynasties");if(e1&&typeof DYNASTIES!=="undefined")e1.textContent=DYNASTIES.length;var e2=document.getElementById("statFigures");if(e2&&typeof DYNASTIES!=="undefined")e2.textContent=new Set(DYNASTIES.flatMap(function(d){return d.figures})).size;var e3=document.getElementById("statClassics");if(e3&&typeof DYNASTIES!=="undefined")e3.textContent=DYNASTIES.reduce(function(s,d){return s+(d.classics?d.classics.length:0);},0);var e4=document.getElementById("statYears");if(e4)e4.textContent="\u7ea65000";}

// ===== READER =====
function openReader(id){_currentBook=(typeof BOOKS_DATA!=="undefined"?BOOKS_DATA.find(function(b){return b.id===id;}):null);navTo("reader");}
function renderReader(){var sec=document.getElementById("reader-page");if(!sec||!_currentBook)return;var b=_currentBook;sec.innerHTML='<div class="reader-header"><button class="btn-secondary btn-sm" onclick="navTo(\'classics\')">&larr; '+t("navClassics")+'</button><h2>'+(b.name[_lang]||b.name["zh-CN"]||"")+'</h2></div><div class="reader-content"><p>'+(b.intro[_lang]||b.intro["zh-CN"]||"")+'</p></div>';}

// ===== SHOP =====
function addCart(id){_cart.push(id);try{localStorage.setItem("ch_cart",JSON.stringify(_cart))}catch(e){}updateCartCount();}
function showToast(m){var t=document.getElementById("cartToast");if(!t)return;t.textContent=m;t.classList.add("show");setTimeout(function(){t.classList.remove("show");},2500);}

// ===== ACCOUNT PAGE =====
function renderAccount(){var sec=document.getElementById("account-page-content");if(!sec)return;if(!_user){sec.innerHTML='<div style="text-align:center;padding:3rem"><h3>'+t("navLogin")+'</h3><p>'+t("needLogin")+'</p><button onclick="showAuth(\'login\')">'+t("navLogin")+'</button></div>';return;}sec.innerHTML='<div class="credit-balance"><div class="cb-num">'+_user.credits+'</div><div class="cb-label">'+t("creditsBalance")+'</div></div>';}

// ===== RENDER CLASSICS (fallback) =====
function renderClassics(){var g=document.getElementById("classicsGrid");if(!g||typeof BOOKS_DATA==="undefined")return;g.innerHTML=BOOKS_DATA.map(function(b){var n=b.name[_lang]||b.name["zh-CN"]||"";var a=b.author[_lang]||b.author["zh-CN"]||"";return'<div class="book-card"><h4>'+n+'</h4><div class="bc-meta"><span>'+a+'</span></div></div>';}).join("");}

// ===== REGISTER_BONUS_CREDITS =====
var REGISTER_BONUS_CREDITS=10;
var UNLOCK_CREDITS={book:20,langVersion:30};
var CREDIT_PACKAGES=[{id:"small",credits:20,price:"$2"},{id:"medium",credits:100,price:"$8",recommended:true},{id:"large",credits:300,price:"$20"}];
var MEMBER_FREE_CHAPTERS=10;

document.addEventListener("DOMContentLoaded",init);
