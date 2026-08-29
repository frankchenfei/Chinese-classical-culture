var SURNAME_TREE={name:"中华姓氏",children:[
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






