(function(){
var more=[
{id:'m-dict1',type:'字典',n:'康熙字典',a:'张玉书等',d:'清',i:'古代最大字典，收字47035个。'},
{id:'m-dict2',type:'字典',n:'尔雅',a:'佚名',d:'汉',i:'中国最早的解释词义的词典。'},
{id:'m-dict3',type:'字典',n:'广韵',a:'陈彭年等',d:'宋',i:'宋代官修韵书，中古音系的重要记录。'},
{id:'m-dict4',type:'字典',n:'集韵',a:'丁度等',d:'宋',i:'收字53525个的宋代韵书。'},
{id:'m-dict5',type:'字典',n:'方言',a:'扬雄',d:'汉',i:'中国第一部方言词汇著作。'},
{id:'m-dict6',type:'字典',n:'释名',a:'刘熙',d:'汉',i:'以声训推求事物得名之由的训诂书。'},
{id:'m-dict7',type:'字典',n:'经籍籑诂',a:'阮元',d:'清',i:'唐代以前经籍训诂的总汇。'},
{id:'m-dict8',type:'字典',n:'中华大字典',a:'徐元诰等',d:'民国',i:'收字48000多，汉语大字典的前身。'},
{id:'m-dict9',type:'字典',n:'辞源',a:'陆尔奎等',d:'民国',i:'中国第一部现代大型汉语词典。'},
{id:'m-dict10',type:'字典',n:'辞海',a:'舒新城等',d:'民国',i:'大型综合性词典，兼收百科条目。'},
{id:'m-arch1',type:'建筑',n:'营造法式',a:'李诫',d:'宋',i:'宋代建筑技术百科全书。'},
{id:'m-arch2',type:'建筑',n:'园冶',a:'计成',d:'明',i:'中国第一部园林艺术专著。'},
{id:'m-arch3',type:'建筑',n:'中国建筑史',a:'梁思成',d:'民国',i:'中国建筑史学的开山奠基之作。'},
{id:'m-arch4',type:'建筑',n:'清式营造则例',a:'梁思成',d:'民国',i:'清代官式建筑的标准化研究。'},
{id:'m-arch5',type:'建筑',n:'中国雕塑史',a:'梁思成',d:'民国',i:'中国雕塑艺术史的开拓之作。'},
{id:'m-arch6',type:'建筑',n:'考工记',a:'佚名',d:'战国',i:'记载先秦手工业技术的珍贵文献。'},
{id:'m-arch7',type:'建筑',n:'长物志',a:'文震亨',d:'明',i:'明代文人园林居室清赏雅玩之书。'},
{id:'m-arch8',type:'建筑',n:'闲情偶寄·居室部',a:'李渔',d:'清',i:'李渔的园林居室设计理论。'}
];
var startId=90000;
more.forEach(function(b){
if(typeof BOOKS_DATA==="undefined"||BOOKS_DATA.find(function(x){return x.id==="m"+b.id}))return;
BOOKS_DATA.push({id:"m"+(startId++),type:b.type||b.t,name:{"zh-CN":b.n,"zh-TW":b.n,"en":b.n,"es":b.n,"pt":b.n},author:{"zh-CN":b.a,"zh-TW":b.a,"en":b.a,"es":b.a,"pt":b.a},dynasty:{"zh-CN":b.d,"zh-TW":b.d,"en":b.d,"es":b.d,"pt":b.d},intro:{"zh-CN":b.i,"zh-TW":b.i,"en":b.i,"es":b.i,"pt":b.i},totalChapters:0});});
})();

