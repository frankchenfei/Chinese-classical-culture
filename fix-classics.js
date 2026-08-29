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
