// Append to data-products.js - add digital VIP products
var VIP_PRODUCTS = [
  {id:'vip-chen',cat:'digital',name:{'zh-CN':'陈氏总谱（VIP下载）','en':'Chen Genealogy (VIP Download)','es':'Genealogía Chen (VIP)','pt':'Genealogia Chen (VIP)'},
    desc:{'zh-CN':'完整的陈氏家族总谱，涵盖陈氏源流、迁徙分布、历代名人、世系图谱等。限VIP会员下载。','en':'Complete Chen family genealogy covering origins, migration, notable figures, lineage charts. VIP only.','es':'Genealogía completa de la familia Chen. Solo VIP.','pt':'Genealogia completa da família Chen. Apenas VIP.'},
    price:200,img:'📄'},
  {id:'vip-chen-zibei1',cat:'digital',name:{'zh-CN':'全国陈氏字辈（卷一）','en':'Chen Family Names Vol.1','es':'Nombres de Familia Chen Vol.1','pt':'Nomes de Família Chen Vol.1'},
    desc:{'zh-CN':'全国陈氏字辈汇编上册，收录各省陈氏字辈排行，寻根问祖必备。','en':'National Chen family generation names, Volume 1. Essential for ancestry research.','es':'Nombres generacionales de la familia Chen, Volumen 1.','pt':'Nomes geracionais da família Chen, Volume 1.'},
    price:100,img:'📜'},
  {id:'vip-chen-zibei2',cat:'digital',name:{'zh-CN':'全国陈氏字辈（卷二）','en':'Chen Family Names Vol.2','es':'Nombres de Familia Chen Vol.2','pt':'Nomes de Família Chen Vol.2'},
    desc:{'zh-CN':'全国陈氏字辈汇编下册，续接卷一，更全面的字辈收录。','en':'National Chen family generation names, Volume 2. Complete set with Vol.1.','es':'Nombres generacionales de la familia Chen, Volumen 2.','pt':'Nomes geracionais da família Chen, Volume 2.'},
    price:100,img:'📜'}
];
// Add to SHOP_PRODUCTS
VIP_PRODUCTS.forEach(function(p){SHOP_PRODUCTS.push(p);});
