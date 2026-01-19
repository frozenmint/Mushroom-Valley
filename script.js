/* =========================================
   1. 游戏核心数据配置 (Mushroom Database)
   ========================================= */

const MUSHROOMS = [

    {
        id: 'wood_ear',
        name: '黑木耳',
        type: 'wood',
        weeks: 1, cost: 10, price: 25,
        product: '凉拌木耳',
        img: './images/m_wood_ear.png',
        dishImg: './images/d_wood_ear.png',
        difficulty: 10, 
        intro: `&emsp;&emsp;黑木耳，学名 Auricularia heimuer。过去很长一段时间，学术界沿用欧洲的标准将其称为 Auricularia auricula-judae，直到近年我国学者通过鉴定，确认中国广泛栽培的黑木耳是一个独立的物种。在分类学上，它并非植物，而是一种典型的<b>腐生真菌</b>，自然状态下多生长在<b>栎、榆、杨等阔叶树的腐朽树干</b>上。其子实体呈耳状，质地呈胶质感，喜欢<b>温暖、潮湿且通风良好</b>的环境。<br><br>
&emsp;&emsp;中国有着悠久的黑木耳食用与栽培历史，从早期的原木砍花、<b>段木栽培</b>，发展到如今的代料栽培。黑木耳不仅口感爽脆，营养价值也极高，富含<b>铁元素</b>和具有免疫调节活性的<b>木耳多糖</b>，其丰富的膳食纤维有助于促进肠道蠕动，因此也有了“<b>人体清道夫</b>”的美誉。<br><br>
&emsp;&emsp;但在日常食用中，有一条必须严守的安全红线：<b>切勿长时间泡发黑木耳</b>。如果在室温下浸泡时间过长，容易滋生椰毒假单胞菌，产生耐高温的剧毒毒素——<b>米酵菌酸</b>，且无特效解毒药。建议遵循“吃多少泡多少”的原则，一旦发现水浑浊或有黏液，请务必果断丢弃。`,
        recipe: `<b>【食材】</b>：干木耳一把、蒜末、小米辣、陈醋、生抽。<br>
         <b>【做法】</b>：<br>
         1. 木耳温水泡发，去根洗净，焯水3分钟捞出过凉。<br>
         2. 碗中加入蒜末、辣椒、一勺陈醋、半勺生抽调成汁。<br>
         3. 将料汁淋在木耳上，搅拌均匀即可开胃食用。`,
    },
    {
        id: 'enoki',
        name: '金针菇',
        type: 'wood', // 腐木/瓶栽
        weeks: 1, cost: 10, price: 30,
        product: '金针菇肥牛卷',
        img: './images/m_enoki.png',
        dishImg: './images/d_enoki.png',
        difficulty: 15, // 很容易熟
        intro: `&emsp;&emsp;金针菇，学名 Flammulina filiformis（注：过去常沿用欧洲的 F. velutipes，现已确认东亚栽培种为独立物种）。属于真菌界、担子菌门、伞菌目、膨瑚菌科、金针菇属。这是一个非常有意思的物种，因为我们在超市里见到的金针菇，和它在野外的真实面貌简直判若两人。野生的金针菇通常生长在<b>阔叶树的枯干</b>上，菌盖呈黄褐色。而我们餐桌上那种通体雪白、细长如针的样子，其实是人工“强行”控出来的——通过<b>严格控制光照</b>（避免产生色素）和<b>高浓度的二氧化碳</b>（抑制菌盖张开、促进菌柄伸长），才长成了这副我们熟悉的“豆芽”模样。<br><br>
&emsp;&emsp;它还有一个响亮的别名叫“冬菇”，因为它是一种<b>极耐低温</b>的真菌，是极少数能在寒冷深冬采摘的野生菌之一。金针菇富含赖氨酸和精氨酸，对儿童智力发育有益，常被宣传为“增智菇”。<br><br>
&emsp;&emsp;至于它那个著名的外号“See You Tomorrow（明天见）”，并非因为无法消化，而是因为它含有一种叫“<b>真菌几丁质</b>”的物质。这种膳食纤维非常耐酸碱，加上金针菇口感爽滑，咀嚼不充分就吞下后很难被完全分解。不过别担心，菌体里的蛋白质等营养成分其实已经被身体吸收了。`,
        recipe: `<b>【食材】</b>：金针菇、肥牛卷、生抽、蚝油、糖。<br>
         <b>【做法】</b>：<br>
         1. 金针菇切去根部洗净，撕成小撮。<br>
         2. 取一片肥牛卷，将金针菇卷在中间，收口朝下码放。<br>
         3. 锅中少油，将肥牛卷煎至变色，倒入调好的酱汁。<br>
         4. 中火焖煮2分钟至汤汁浓稠，撒上白芝麻。`,
    },
    {
        id: 'oyster',
        name: '平菇',
        type: ['wood', 'soil'], 
        weeks: 2, cost: 15, price: 40,
        product: '椒盐炸平菇',
        img: './images/m_oyster.png',
        dishImg: './images/d_oyster.png',
        difficulty: 20,
        intro: `&emsp;&emsp;平菇，学名 Pleurotus ostreatus。在分类学上，它属于真菌界、担子菌门、伞菌目、侧耳科、侧耳属。因为它的菌盖形状像牡蛎的壳，或者是半圆形的扇面，且菌柄通常偏生，西方形象地称之为“蚝菇”（Oyster Mushroom）。成熟的平菇菌盖颜色丰富，受光照和温度影响，会呈现深灰、白色甚至深褐色，菌盖下方密集排列着向下延伸至菌柄的白色菌褶，这是辨别平菇的重要形态依据。<br><br>
&emsp;&emsp;平菇是著名的<b>木腐菌</b>，在自然界中生命力极强，广泛分布于<b>阔叶林</b>中。它对环境的适应能力几乎是食用菌中的“特种兵”，不仅耐低温也耐高温，只要有纤维素丰富的地方就能扎根。它是人工栽培最容易的品种之一——从<b>棉籽壳、玉米芯到废弃的咖啡渣</b>，平菇几乎不挑食，这也意味着它既能在腐木上生长，也能在<b>营养丰富的培养土</b>中茁壮成长。<br><br>
&emsp;&emsp;值得一提的是，看似温顺的平菇其实是个隐秘的“猎手”。在营养匮乏时，平菇的菌丝体能够分泌毒素，麻痹并捕食土壤中的线虫以补充氮源。不过这种特性仅存于微观层面，送上餐桌的平菇口感肥厚，绝对安全且平价。`,
        recipe: `<b>【食材】</b>：鲜平菇、鸡蛋、面粉、淀粉、椒盐。<br>
         <b>【做法】</b>：<br>
         1. 平菇撕条，<b>用力挤干水分</b>（否则炸不脆）。<br>
         2. 鸡蛋加面粉调成酸奶状面糊，裹满平菇。<br>
         3. 油温六成热下锅，炸至定型捞出。<br>
         4. 油温升高后<b>复炸30秒</b>至金黄，撒椒盐粉。`,
    },
    {
        id: 'straw',
        name: '草菇',
        type: 'soil',
        weeks: 1, cost: 15, price: 35,
        product: '草菇肉片',
        img: './images/m_straw.png',
        dishImg: './images/d_straw.png',
        difficulty: 15,
        intro: `&emsp;&emsp;草菇，学名 Volvariella volvacea。它属于真菌界、担子菌门、伞菌目、光线菌科、草菇属，是一种典型的“高温型”真菌，起源于中国华南地区。草菇最具辨识度的特征在于其根部有一个杯状的“菌托”，这是它幼年时期包裹全身的保护膜残留。市面上最受欢迎的是未开伞的“蛋形期”，口感最为脆嫩；一旦成熟开伞，风味会大减。<br><br>
&emsp;&emsp;作为一种腐生真菌，草菇正如其名，最喜欢生长在<b>潮湿腐烂的稻草堆</b>上，在人工栽培中则极度依赖<b>富含腐殖质的肥沃土壤</b>和培养料。它生长速度极快，在高温高湿的夏季，从播种到采收往往只需要十几天。<br><br>
&emsp;&emsp;同时，草菇也是出了名的“娇气”，极难储存。它非常怕冷，如果放入冰箱冷藏（低于15℃），它会迅速发生冷害，导致自溶出水、变软腐烂。因此，购买草菇后最好随买随吃，切忌放入冰箱过夜。`,
        recipe: `<b>【食材】</b>：草菇、里脊肉、青红椒、蒜片。<br>
         <b>【做法】</b>：<br>
         1. 草菇对半切开，焯水去除土腥味；肉片腌制上浆。<br>
         2. 热锅凉油滑熟肉片，盛出备用。<br>
         3. 底油爆香蒜片，下草菇和青红椒大火快炒。<br>
         4. 倒入肉片，加盐和蚝油调味，翻炒均匀出锅。`,
    },
    {
        id: 'shiitake',
        name: '香菇',
        type: 'wood',
        weeks: 2, cost: 20, price: 45,
        product: '香菇炖鸡',
        img: './images/m_shiitake.png',
        dishImg: './images/d_shiitake.png',
        difficulty: 15,
        intro: `&emsp;&emsp;香菇，学名 Lentinula edodes。隶属于真菌界、担子菌门、光线菌科、香菇属。它是一种典型的<b>生长在木材上的真菌</b>，也是世界著名的“山珍”之一。香菇的子实体通常单生或群生，菌盖呈圆盘状，表面覆盖着深褐色的表皮和鳞片。如果在生长过程中遭遇昼夜温差大、空气干燥的特殊气候，菌盖表皮会破裂形成白色花纹，这便是香菇中的上品“花菇”。<br><br>
&emsp;&emsp;作为一种变温结实性真菌，香菇的生长往往需要低温刺激。在自然界中，它们主要生长在<b>倒伏的壳斗科树木（如栗树、栎树）</b>上。中国是香菇栽培的起源地，从古老的“砍花法”到如今普及的<b>木屑菌棒</b>种植，人们始终在模拟其野外<b>腐木环境</b>的需求。<br><br>
&emsp;&emsp;香菇之所以能被称为“香”菇，是因为它含有一种独特的风味物质——香菇精。此外，香菇还富含鸟苷酸和独特的香菇多糖，被认为具有调节人体免疫功能的潜力。晒干的香菇不仅风味更浓缩，麦角甾醇转化为维生素D后，营养价值往往比鲜香菇更胜一筹。`,
        recipe: `<b>【食材】</b>：土鸡、干香菇、姜葱、八角、料酒。<br>
         <b>【做法】</b>：<br>
         1. 干香菇温水泡发，<b>泡菇水沉淀后留用</b>。<br>
         2. 鸡块冷水下锅焯水，洗净浮沫。<br>
         3. 炒锅爆香姜葱八角，下鸡块炒至微黄出油。<br>
         4. 倒入香菇和泡菇水，补足开水。<br>
         5. 砂锅小火慢炖40分钟，最后加盐调味。`,
    },
    {
        id: 'cordyceps_flower',
        name: '虫草花',
        type: 'soil', // 人工培养基类似土
        weeks: 2, cost: 20, price: 50,
        product: '虫草花鸡汤',
        img: './images/m_cordyceps_flower.png',
        dishImg: './images/d_cordyceps_flower.png',
        difficulty: 20,
        intro: `&emsp;&emsp;虫草花，学名 Cordyceps militaris（蛹虫草）。属于真菌界、子囊菌门、肉座菌目、蛹虫草科、虫草属。虽然名字是“虫草花”，但它<b>既不是虫，也不是花</b>，而是一种人工培养的食用真菌。与冬虫夏草不同，它不需要寄生在珍稀的蝙蝠蛾幼虫上，而是像种蘑菇一样，在小麦、大米组成的<b>营养培养基</b>上生长出来。我们吃到的金橙色细长条，实际上是它的子实体（真菌本身）。<br><br>
&emsp;&emsp;千万不要因为它便宜就小看它，虫草花是名副其实的“实力派平替”。科学检测表明，它含有丰富的蛋白质、氨基酸以及30多种人体所需的微量元素。更令人惊讶的是，其标志性的活性成分——<b>虫草素（Cordycepin）</b>的含量，在优化培育条件下，甚至比昂贵的野生冬虫夏草还要高。它那种诱人的金橙色，则源于其富含的<b>类胡萝卜素</b>。<br><br>
&emsp;&emsp;在烹饪时，虫草花最大的特点是“<b>自带金汤</b>”。无需过多的调料，只需将其放入汤中，天然色素瞬间就会将汤汁染成高级的金黄色，且久煮不烂，口感脆嫩。因为它是人工环境生长，非常干净，烹饪前只需<b>快速冲洗</b>即可。`,
        recipe: `<b>【食材】</b>：虫草花、鸡块、红枣、姜片。<br>
         <b>【做法】</b>：<br>
         1. 虫草花用冷水冲洗一下即可（不要泡太久，以免金黄色流失）。<br>
         2. 鸡块冷水下锅焯水，洗净浮沫。<br>
         3. 所有食材放入炖锅，加水大火烧开转小火炖1小时，汤色金黄即可。`,
    },
    {
        id: 'button',
        name: '口蘑',
        type: 'soil',
        weeks: 2, cost: 25, price: 60,
        product: '奶油蘑菇汤',
        img: './images/m_button.png',
        dishImg: './images/d_button.png',
        difficulty: 25,
        intro: `&emsp;&emsp;口蘑，广义上多指双孢蘑菇，学名 Agaricus bisporus，也就是西方餐桌上常见的“Button Mushroom”。分类学上属于真菌界、担子菌门、伞菌目、蘑菇科、蘑菇属。它的子实体洁白圆润，菌盖呈半球形，菌柄粗短。这是一种世界性的食用菌，也是目前全球人工栽培产量最大的蘑菇。它是一种典型的<b>粪草腐生菌</b>，主要生长在<b>富含粪肥和秸秆的堆肥</b>上。<br><br>
&emsp;&emsp;其实，“口蘑”原本指的是生长在蒙古草原上的野生白色蘑菇，因汇集在张家口贸易而得名。后来随着双孢蘑菇的广泛栽培，因外形相似且产量巨大，逐渐成为了市场上“口蘑”的代名词。<br><br>
&emsp;&emsp;我们在超市看到的双孢蘑菇通常是白色的，但切开后菌肉变成浅褐色属于正常的氧化反应。但如果菌褶完全变成了黑褐色，说明蘑菇已经过度成熟。口蘑富含谷氨酸等鲜味物质，不管是用黄油煎烤还是炖汤，都能迸发出惊人的鲜美滋味。`,
        recipe: `<b>【食材】</b>：口蘑、洋葱、黄油、面粉、牛奶、淡奶油。<br>
         <b>【做法】</b>：<br>
         1. 口蘑切片，洋葱切碎；部分口蘑打成泥。<br>
         2. 锅中融化黄油，炒香面粉制成<b>油面酱(Roux)</b>。<br>
         3. 少量多次加入牛奶，搅拌至无颗粒顺滑状。<br>
         4. 加入口蘑泥和洋葱碎，煮开。<br>
         5. 倒入淡奶油和口蘑片，小火熬煮至浓稠。<br>
         6. 撒上黑胡椒碎和欧芹叶装饰。`,
    },
    {
        id: 'tea_tree',
        name: '茶树菇',
        type: ['wood', 'soil'],
        weeks: 3, cost: 30, price: 70,
        product: '干锅茶树菇',
        img: './images/m_tea_tree.png',
        dishImg: './images/d_tea_tree.png',
        difficulty: 30, // 干锅容易焦
        intro: `&emsp;&emsp;茶树菇，现行学名 Cyclocybe aegerita，中文正式名称通常叫柱状田头菇。它属于真菌界、担子菌门、伞菌目、球盖菇科、田头菇属。之所以得名“茶树菇”，是因为在野外，它们最喜欢生长在<b>油茶树的枯干或树桩</b>上。这种蘑菇菌柄细长且脆嫩，口感上最大的特点就是“脆”和“韧”，非常有嚼头。<br><br>
&emsp;&emsp;虽然名字绑定了茶树，但现在的茶树菇早已实现了利用<b>棉籽壳、木屑</b>等代料的大规模人工栽培。它既适应原始的<b>腐木环境</b>，也能在富含养分的<b>菌袋</b>中生长。<br><br>
&emsp;&emsp;作为一种药食同源的真菌，茶树菇非常适合<b>干制</b>。干燥后的茶树菇香味会进一步浓缩，比鲜品更加馥郁。在煲汤届它有着不可撼动的地位，无论是炖老鸭还是煲鸡汤，只要放上一把干茶树菇，汤底瞬间就会变得鲜美醇厚，是滋补佳品。`,
        recipe: `<b>【食材】</b>：茶树菇、五花肉、干辣椒、蒜苗、洋葱。<br>
         <b>【做法】</b>：<br>
         1. 茶树菇洗净切段，焯水2分钟捞出控干。<br>
         2. 热锅煸炒五花肉片，直到<b>煸出猪油</b>且肉片卷曲。<br>
         3. 加入姜蒜干辣椒爆香，倒入茶树菇大火翻炒去水气。<br>
         4. 加盐、生抽调味，最后撒入蒜苗段翻匀出锅。`,
    },
    {
        id: 'shaggy',
        name: '鸡腿菇',
        type: 'soil',
        weeks: 3, cost: 35, price: 80,
        product: '油焖鸡腿菇',
        img: './images/m_shaggy.png',
        dishImg: './images/d_shaggy.png',
        difficulty: 35,
        intro: `&emsp;&emsp;鸡腿菇，学名 Coprinus comatus。属于真菌界、担子菌门、伞菌目、蘑菇科、鬼伞属。之所以叫这个名字，是因为它幼嫩时的菌盖呈洁白色的圆柱形，顶端浑圆，表面覆盖着像羽毛般翘起的鳞片，形似一只去皮的鲜嫩鸡腿。这种蘑菇肉质细嫩，鲜美中带着淡淡的甜味，没有丝毫渣滓，兼具了鸡肉的丝滑与蘑菇的清香。<br><br>
&emsp;&emsp;想要在野外找到它，目光不要局限于森林深处。鸡腿菇是一种典型的<b>土生腐生菌</b>，尤其喜欢氮元素丰富的环境。因此在<b>土壤极其肥沃</b>的区域，如雨后的草坪、<b>施过肥的菜地</b>和废弃的土堆旁，最容易发现它们成群结队的身影。<br><br>
&emsp;&emsp;鸡腿菇也被称为“毛头鬼伞”，具有奇特的“自溶”现象。一旦成熟放置稍长，菌褶会迅速转黑，最后整朵蘑菇融化成黑色的墨汁（Shaggy Ink Cap）。这个过程不可逆且速度极快，因此必须在菌盖紧包、菌褶洁白时迅速采收烹饪，那是它最美味的高光时刻。`,
        recipe: `<b>【食材】</b>：鸡腿菇、青椒、蚝油、生抽。<br>
         <b>【做法】</b>：<br>
         1. 鸡腿菇洗净，不需要切太细，切成滚刀块。<br>
         2. 油热下锅，中火慢煎，直到菇体表面出现焦黄色。<br>
         3. 倒入蚝油和少许水，盖盖焖煮5分钟收汁即可。`
    },
    {
        id: 'lions_mane',
        name: '猴头菇',
        type: 'wood',
        weeks: 4, cost: 50, price: 120,
        product: '猴头菇养胃汤',
        img: './images/m_lions_mane.png',
        dishImg: './images/d_lions_mane.png',
        difficulty: 30,
        intro: `&emsp;&emsp;猴头菇，学名 Hericium erinaceus。属于真菌界、担子菌门、红菇目、猴头菌科、猴头菌属。与普通蘑菇有菌盖和菌柄的“伞状”结构不同，猴头菇长得十分奇特——它的子实体呈肉质的块状，周身密布着下垂的长针状菌刺，远远望去，既像金丝猴毛茸茸的脑袋，又像是一只蜷缩的刺猬。在自然界中，它们多生长在深山老林里，特别是<b>栎树、胡桃树等阔叶树干的伤口或枯木</b>上。<br><br>
&emsp;&emsp;在中国饮食文化中，猴头菇与熊掌、海参、鱼翅并称为“四大名菜”。猴头菇肉质洁白肥厚，烹饪后口感鲜嫩多汁，酷似禽肉，是很多素食者用来模仿肉类口感的首选食材。此外，传统医学和现代研究都认为猴头菇具有良好的<b>养胃功效</b>，其含有的猴头菇多糖和多肽成分，对修复胃黏膜十分有益。`,
        recipe: `<b>【食材】</b>：干猴头菇、排骨、山药、红枣。<br>
         <b>【做法】</b>：<br>
         1. 猴头菇用温水泡发，像海绵一样<b>反复挤压吸水</b>。<br>
         2. 换水重复清洗至少5次，直到水变清（去苦味）。<br>
         3. 将猴头菇撕成小块，排骨焯水备用。<br>
         4. 所有食材放入炖盅，加入清水。<br>
         5. 隔水炖煮2小时，起锅前加枸杞和盐。`,
    },
    {
        id: 'boletus',
        name: '红葱牛肝菌',
        type: 'forest',
        weeks: 3, cost: 80, price: 200,
        product: '蒜爆牛肝菌',
        img: './images/m_boletus.png',
        dishImg: './images/d_boletus.png',
        difficulty: 45, // ⚠️ 见手青，容易中毒(失败)
        intro: `&emsp;&emsp;红葱牛肝菌，学名 Lanmaoa asiatica。属于真菌界、担子菌门、牛肝菌目、牛肝菌科。它就是大名鼎鼎、让无数云南人又爱又恨的“见手青”家族代表。它的样貌十分艳丽，有着深红色的菌盖。最显著的特征在于，只要用手轻轻一按或切开，受损部位会迅速发生氧化反应，瞬间变成青蓝色——这也是“见手青”名号的由来。<br><br>
&emsp;&emsp;这是一种典型的<b>外生菌根菌</b>，意味着它在腐木或木屑上独立生长，必须依赖与<b>特定树木的根系共生</b>。因此，寻找它的踪迹需要将目光投向<b>植被茂密的山林</b>，特别是<b>云南松、华山松</b>等松科植物混交的地带。<br><br>
&emsp;&emsp;红葱菌的风味浓郁，鲜味直冲天灵盖。但这种美味伴随着极高的风险，如果烹饪受热不均匀，食用者可能会出现幻觉，看到“小人跳舞”。不过这种毒素是热不稳定的，只要保证<b>高温爆炒</b>足够长的时间，确保<b>菌体完全熟透</b>，它就是餐桌上绝对安全的珍馐。`,
        recipe: `<b>【食材】</b>：红葱菌、大量蒜片、干辣椒、花椒。<br>
         <b>【做法】</b>：<br>
         1. 菌子切薄片（切开变蓝是正常的氧化反应）。<br>
         2. 多放油，先下蒜片和干辣椒爆出香味。<br>
         3. 倒入菌片，<b>大火爆炒至少5分钟</b>。<br>
         4. 出锅前尝一片，确保<b>完全熟透</b>，否则会中毒致幻！`,
    },
    {
        id: 'morel',
        name: '羊肚菌',
        type: ['forest', 'soil'],
        weeks: 4, cost: 100, price: 260,
        product: '羊肚菌酿虾滑',
        img: './images/m_morel.png',
        dishImg: './images/d_morel.png',
        difficulty: 40, // 酿肉容易散，且要熟透
        intro: `&emsp;&emsp;羊肚菌，学名 Morchella spp.（属内包含多个物种）。它在分类上比较特别，属于真菌界、<b>子囊菌门</b>、盘菌目、羊肚菌科。与大多数长得像伞一样的蘑菇（担子菌）不同，羊肚菌的样子非常古怪：它的菌盖表面凹凸不平，布满了像蜂巢一样的网状棱纹，且<b>内部是完全中空的</b>。在自然界中，羊肚菌主要在春季萌发，喜欢生长在<b>阔叶林或针阔混交林的腐殖质层</b>上。<br><br>
&emsp;&emsp;它还有一个非常神秘的习性——<b>喜火</b>。如果一片树林前一年发生了山火，第二年春天往往会爆发性地生长出大量羊肚菌。这种不稳定的习性曾让驯化难如登天，但值得骄傲的是，中国科学家近年发明了“<b>外源营养袋</b>”技术，成功实现了<b>农田里</b>的羊肚菌大规模稳产。<br><br>
&emsp;&emsp;在食用方面，羊肚菌风味混合了坚果、泥土和肉类的香气。不过，有一个极其重要的安全提示：<b>羊肚菌绝对不能生吃！</b> 生的羊肚菌中含有一类名为“联氨”的毒素，直接食用可能中毒。好在它对热不稳定，只要经过<b>高温充分烹饪（煮熟煮透）</b>，毒素就会分解，变得绝对安全且美味。`,
        recipe: `<b>【食材】</b>：羊肚菌、鲜虾滑、胡萝卜碎、鲍鱼汁。<br>
         <b>【做法】</b>：<br>
         1. 羊肚菌温水泡发，轻轻搓洗网格里的沙土，剪开一侧。<br>
         2. 鲜虾去壳剁成泥，加入蛋清、淀粉摔打上劲。<br>
         3. 将虾滑<b>小心地挤入羊肚菌的空心肚内</b>，不要挤破。<br>
         4. 水开上汽，大火蒸8分钟。<br>
         5. 锅中用鲍鱼汁和水淀粉勾薄芡，淋在蒸好的羊肚菌上。`,
    },
    {
        id: 'bamboo',
        name: '竹荪',
        type: ['forest', 'soil'],
        weeks: 4, cost: 120, price: 300,
        product: '竹荪鸡汤',
        img: './images/m_bamboo.png',
        dishImg: './images/d_bamboo.png',
        difficulty: 40,
        intro: `&emsp;&emsp;竹荪，学名 Phallus indusiatus。在分类学上属于真菌界、担子菌门、鬼笔目、鬼笔科。这个科的真菌大多长相怪异，但竹荪却是公认的“颜值担当”。它从像鸡蛋一样的菌蕾中破壳而出，柄顶有着深绿色的菌盖，最迷人的是那圈从菌盖下垂散开的洁白网状“裙子”，因此便有了“雪裙仙子”的雅号。不过它菌盖顶端的孢子液通常带有一股怪味（为了吸引苍蝇传播后代），烹饪前通常需要洗净或摘除。<br><br>
&emsp;&emsp;野生状态下的竹荪偏爱生长在<b>潮湿竹林腐烂的竹根和落叶层</b>中。而现代农业早已利用木屑、秸秆作为基质，配合覆盖<b>营养土</b>，实现了大规模的人工栽培。这让它成为了一种亲民的健康食材，竹荪富含多种氨基酸和生物碱，且作为一种高纤维食物，它有着极佳的“刮油”效果，能帮助肠道蠕动，还可以抑制脂肪的吸收，因此在很多减肥食谱中备受推崇。<br><br>
&emsp;&emsp;在餐桌上，竹荪被誉为“菌中皇后”。它最大的魔力不在于自身的味道，而在于那特殊的网状海绵结构，极其善于<b>吸附汤汁</b>。无论是炖鸡还是涮火锅，吸饱了鲜汤的竹荪一口咬下去，脆嫩爽口，汁水四溢。`,
        recipe: `<b>【食材】</b>：干竹荪、鸡汤底、枸杞。<br>
         <b>【做法】</b>：<br>
         1. 竹荪淡盐水泡发，<b>剪去菌盖和闭合根部</b>。<br>
         2. 提前炖好一锅清鸡汤，撇去浮油。<br>
         3. 将处理好的竹荪段放入鸡汤。<br>
         4. 仅需煮10分钟即可，煮太久网裙会烂掉。`,
    },
    {
        id: 'matsutake',
        name: '松茸',
        type: 'forest',
        weeks: 5, cost: 200, price: 500,
        product: '黄油煎松茸',
        img: './images/m_matsutake.png',
        dishImg: './images/d_matsutake.png',
        difficulty: 50, // 🔥 顶级难度，容易煎坏
        intro: `&emsp;&emsp;松茸，学名 Tricholoma matsutake，属于真菌界、担子菌门、伞菌目、口蘑科。松茸至今<b>无法实现人工栽培</b>，每一朵都必须源自大自然的馈赠。它的样子朴实无华，菌盖呈褐色，菌柄洁白粗壮，肉质紧实。它身价不菲的原因，除了数量稀少，更在于它强悍的营养配置——它含有一种世界上独一无二的抗癌物质“松茸醇”，以及高活性的松茸多糖。<br><br>
&emsp;&emsp;作为一种绝对的野生菌，松茸对环境的挑剔程度近乎“洁癖”。它是一种外生菌根菌，必须依附于50年以上树龄的<b>赤松或栎树的根系共生</b>。如果想寻找它，目光必须锁定在海拔较高、从未受过污染的<b>原始松林</b>中，特别是那些<b>地表覆盖着松针</b>、透气性好且半阴半阳的山坡。哪怕环境有一点细微的变化，或者人为破坏了地下的菌塘，松茸就可能再也不长了。<br><br>
&emsp;&emsp;对待这种集美味与养生于一体的食材，最顶级的吃法往往最简单。新鲜的松茸甚至可以直接切片生吃，感受那股混合了松脂清香与泥土芬芳的复杂风味；或者用炭火微微炙烤，撒上一点海盐，利用高温逼出它内部的油脂和香气。若是炖汤，也只需清水或清鸡汤，切忌放入过多的调料，以免掩盖了它那口珍贵的“山野灵气”和丰富的营养精华。`,
        recipe: `<b>【食材】</b>：新鲜松茸、无盐黄油、海盐。<br>
         <b>【做法】</b>：<br>
         1. <b>切忌水洗</b>！用湿布擦去松茸表面泥土，切成厚片。<br>
         2. 平底锅小火融化黄油，平铺松茸片。<br>
         3. 慢煎至两面金黄微焦，撒少许海盐即可出锅。`,
    },
    {
        id: 'cordyceps',
        name: '冬虫夏草',
        type: 'forest', // 高山灌丛
        weeks: 5, cost: 250, price: 550, // 比松茸还贵
        product: '虫草皇鸽汤',
        img: './images/m_cordyceps.png',
        dishImg: './images/d_cordyceps.png',
        difficulty: 45, // 炖汤讲究火候
        intro: `&emsp;&emsp;冬虫夏草，学名 Ophiocordyceps sinensis。属于真菌界、子囊菌门、肉座菌目、线虫草科、线虫草属。它并非是“冬天变虫、夏天变草”的怪物，而是一场微观世界的“寄生战役”。冬季，真菌菌丝侵入蛰伏在土壤中的蝙蝠蛾幼虫体内，吸干其营养导致幼虫僵死（冬虫）；夏季，菌丝充满虫体后，从死虫头顶长出地面，形成一根深色的棒状子座（夏草）。<br><br>
&emsp;&emsp;这是一种极其珍稀的<b>野生资源</b>，至今无法实现商业化的大规模人工“种植”（市面上的皆为野生采挖）。它对环境要求极其严苛，只生长在海拔3000-5000米雪线附近的<b>高山草甸或灌丛</b>中。每一根虫草的发现，都需采集者匍匐在地一寸寸寻找，因此价格常年居高不下，被誉为“软黄金”。<br><br>
&emsp;&emsp;在营养药理方面，冬虫夏草的成分极其复杂且珍贵。它含有丰富的<b>核苷类</b>（如腺苷）、<b>甾醇类</b>、以及独特的<b>冬虫夏草多糖</b>。现代研究表明，这些成分在调节免疫系统、抗疲劳以及肾脏保护方面具有显著活性。虽然它名气极大，但食用时无需过度神话，最经典的做法是用它炖鸭或泡水，利用脂溶性环境或水溶提取其精华。注意：清洗时要用软毛刷快速刷去泥土，<b>切忌浸泡</b>，以免活性成分流失。`,
        recipe: `<b>【食材】</b>：冬虫夏草3根、乳鸽一只、瘦肉、姜片。<br>
         <b>【做法】</b>：<br>
         1. 虫草用软毛刷轻轻刷去表面泥土，<b>切忌用力搓洗</b>。<br>
         2. 乳鸽焯水去除血水，放入炖盅。<br>
         3. 倒入矿泉水，<b>隔水炖煮</b>3小时，出锅前撒入几颗枸杞和少许盐。`,
    }
];


/* =========================================
   2. 全局游戏状态 (Game State)
   ========================================= */

let currentMoney = 0;
let currentMonth = 1;
// 记录拥有的蘑菇数量 (Key: mushroom.id, Value: 数量)
let mushroomInventory = {}; 
// 记录拥有的菜品数量 (Key: mushroom.id, Value: 数量)
let dishInventory = {};

// 土地状态数据
let plots = {
    'plot-wood':   { id: 'plot-wood',   envName: '腐木环境', status: 'empty', mushroom: null, weeksLeft: 0 },
    'plot-soil':   { id: 'plot-soil',   envName: '营养土环境', status: 'empty', mushroom: null, weeksLeft: 0 },
    
    // 👇👇👇 修改这里：把 envName 改成 '野外林地' 👇👇👇
    'plot-forest': { id: 'plot-forest', envName: '野外林地', status: 'empty', mushroom: null, weeksLeft: 0 }
};

// 临时变量：用于种植弹窗记录选中项
let selectedPlotId = null;
let selectedMushroomId = null;

/* =========================================
   3. 工具函数
   ========================================= */

function getRandomStartMoney() {
    return Math.floor(Math.random() * 11) * 10 + 50; // 50~150
}

function updateMoneyUI() {
    document.getElementById('money-count').innerText = currentMoney;
}

// 初始化库存函数 (加到 initGame 里)
function initInventory() {
    MUSHROOMS.forEach(m => {
        mushroomInventory[m.id] = 0; // 蘑菇数量归零
        dishInventory[m.id] = 0;     // 菜品数量归零
    });
}

// 核心：更新地块 UI 显示
function updatePlotUI(plotId, data) {
    const plotElement = document.getElementById(plotId);
    if (!plotElement) return;

    const actionText = plotElement.querySelector('.action-text');
    const overlayElement = plotElement.querySelector('.plot-overlay');

    // 清除旧颜色
    overlayElement.classList.remove('status-growing', 'status-mature', 'status-rotten');

    // 根据状态更新文字
    if (data.status === 'empty') {
        actionText.innerHTML = "点击种植";
    } 
    else if (data.status === 'growing') {
        overlayElement.classList.add('status-growing');
        // 🔧 修复点：这里要用 data.mushroom.name
        const mName = data.mushroom ? data.mushroom.name : '未知';
        actionText.innerHTML = `🍄 ${mName}<br><span style="font-size:0.8em">⏳ 剩 ${data.weeksLeft} 月</span>`;
    } 
    else if (data.status === 'mature') {
        overlayElement.classList.add('status-mature');
        const mName = data.mushroom ? data.mushroom.name : '未知';
        actionText.innerHTML = `✨ ${mName}<br>点击收割`;
    } 
    else if (data.status === 'rotten') {
        overlayElement.classList.add('status-rotten');
        actionText.innerHTML = `☠️ 已腐烂<br>点击清理`;
    }
}

/* =========================================
   4. 种植弹窗逻辑 (你需要补上这部分)
   ========================================= */

function openPlantingModal(plotId) {
    selectedPlotId = plotId;
    selectedMushroomId = null;
    
    // 获取地块环境代码 (wood/soil/forest)
    const envCode = plotId.split('-')[1];

    const modal = document.getElementById('plant-modal');
    const grid = document.getElementById('mushroom-selection-grid');
    const confirmBtn = document.getElementById('btn-confirm-plant');

    modal.classList.remove('hidden');
    confirmBtn.disabled = true;
    confirmBtn.innerText = "请选择菌种";
    grid.innerHTML = ''; 

    // 生成列表
    MUSHROOMS.forEach(m => {
        const card = document.createElement('div');
        card.className = 'mushroom-card';
        
        const canAfford = currentMoney >= m.cost;
        if (!canAfford) {
            card.classList.add('locked');
            card.title = "资金不足";
        }

        card.innerHTML = `
            <img src="${m.img}">
            <div class="card-name">
                ${m.name} <span font-weight:normal">($${m.cost})</span>
            </div>
        `;

        if (canAfford) {
            card.onclick = function() {
                document.querySelectorAll('.mushroom-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                selectedMushroomId = m.id;
                confirmBtn.disabled = false;
                confirmBtn.innerText = `确认购买 (-$${m.cost})`;
            };
        }
        grid.appendChild(card);
    });
}

function setupPlantingEvents() {
    // 取消
    document.getElementById('btn-cancel-plant').onclick = function() {
        document.getElementById('plant-modal').classList.add('hidden');
    };
    // 确认种植
    document.getElementById('btn-confirm-plant').onclick = function() {
        if (!selectedPlotId || !selectedMushroomId) return;

        const mushroom = MUSHROOMS.find(m => m.id === selectedMushroomId);
        
        // 扣钱
        currentMoney -= mushroom.cost;
        updateMoneyUI();

        // 更新数据
        const plot = plots[selectedPlotId];
        plot.status = 'growing';
        plot.mushroom = mushroom; 
        plot.weeksLeft = mushroom.weeks;

        updatePlotUI(selectedPlotId, plot);
        document.getElementById('plant-modal').classList.add('hidden');
    };
}

/* =========================================
   5. 游戏初始化逻辑
   ========================================= */

function initGame() {
    currentMoney = getRandomStartMoney();
    updateMoneyUI();
    currentMonth = 1;
    initInventory(); 

    for (let key in plots) {
        plots[key].status = 'empty';
        plots[key].mushroom = null;
        plots[key].weeksLeft = 0;
        updatePlotUI(key, plots[key]);
    }
    console.log(`游戏已重置，初始资金: ${currentMoney}`);
}

/* =========================================
   6. 事件绑定 (Window Onload)
   ========================================= */

window.onload = function() {
    
    initGame();
    setupPlantingEvents(); // 初始化弹窗按钮

    // --- 重置功能 ---
    const btnReset = document.getElementById('btn-reset');
    const resetModal = document.getElementById('reset-modal');
    
    if (btnReset) {
        btnReset.onclick = () => resetModal.classList.remove('hidden');
    }
    if (document.getElementById('btn-confirm-reset')) {
        document.getElementById('btn-confirm-reset').onclick = () => {
            initGame();
            resetModal.classList.add('hidden');
        };
    }
    if (document.getElementById('btn-cancel-reset')) {
        document.getElementById('btn-cancel-reset').onclick = () => {
            resetModal.classList.add('hidden');
        };
    }

    // --- 玩法指南按钮 ---
    const btnRules = document.getElementById('btn-rules');
    const ruleModal = document.getElementById('rule-modal');
    const btnCloseRules = document.getElementById('btn-close-rules');

    if (btnRules) {
        btnRules.onclick = function() {
            ruleModal.classList.remove('hidden');
        };
    }

    if (btnCloseRules) {
        btnCloseRules.onclick = function() {
            ruleModal.classList.add('hidden');
        };
    }

    // --- 市场按钮 (跳转到界面2) ---
    const btnMarket = document.getElementById('btn-market');
    if (btnMarket) {
        btnMarket.onclick = function() {
            // 1. 隐藏田园，显示市场
            document.getElementById('view-farm').classList.add('hidden');
            document.getElementById('view-market').classList.remove('hidden');
            
            // 2. (重要) 这里以后要调用“刷新图鉴”的函数
            renderMarket(); 

            console.log("进入市场，准备渲染图鉴...");
        };
    }

    // --- 市场返回按钮 (回到界面1) ---
    const btnBack = document.getElementById('btn-back-home');
    if (btnBack) {
        btnBack.onclick = function() {
            // 1. 隐藏市场，显示田园
            document.getElementById('view-market').classList.add('hidden');
            document.getElementById('view-farm').classList.remove('hidden');
        };
    }


    // --- 下一个月 (时间系统) ---
    const btnNext = document.getElementById('btn-next-month');
    if (btnNext) {
        btnNext.onclick = function() {
            currentMonth++;
            
            ['plot-wood', 'plot-soil', 'plot-forest'].forEach(id => {
                const p = plots[id];
                // 🔧 简化点：自动获取环境类型
                const plotEnvType = id.split('-')[1];

                if (p.status === 'growing') {
                    // 1. 检查环境是否匹配 (支持多环境)
                    // 获取该蘑菇支持的环境列表
                    // 如果是数组就直接用，如果是字符串(如'wood')就包成数组 ['wood']
                    const allowedTypes = Array.isArray(p.mushroom.type) 
                                         ? p.mushroom.type 
                                         : [p.mushroom.type];

                    // 核心判断：如果当前地块环境(plotEnvType) 不在 支持列表里
                    if (!allowedTypes.includes(plotEnvType)) {
                        // 环境不对，直接腐烂
                        p.status = 'rotten';
                    } else {
                        // 环境正确，继续生长
                        p.weeksLeft--;
                        if (p.weeksLeft <= 0) {
                            p.status = 'mature';
                            p.weeksLeft = 2; 
                        }
                    }
                }
                else if (p.status === 'mature') {
                    p.weeksLeft--;
                    if (p.weeksLeft <= 0) {
                        p.status = 'rotten';
                    }
                }
                updatePlotUI(id, p);
            });
        };
    }

    // --- 地块点击逻辑 ---
    ['plot-wood', 'plot-soil', 'plot-forest'].forEach(id => {
        const plotDiv = document.getElementById(id);
        if (!plotDiv) return;

        const overlay = plotDiv.querySelector('.plot-overlay');
        if (overlay) {
            overlay.onclick = function() {
                const p = plots[id];

                if (p.status === 'empty') {
                    openPlantingModal(id);
                }
                // 情况B：已成熟 -> 收割 (存入仓库)
                else if (p.status === 'mature') {
                    // 1. 库存 +1
                    mushroomInventory[p.mushroom.id]++;
                    console.log(`收获 ${p.mushroom.name}, 当前库存: ${mushroomInventory[p.mushroom.id]}`);
                    
                    // 2. 飘字提示 (可选，为了反馈感)
                    // alert(`收获了 ${p.mushroom.name}！已存入储藏室。`); 
                    
                    // 3. 地块重置 (不加钱了！)
                    p.status = 'empty';
                    p.mushroom = null;
                    updatePlotUI(id, p);
                }
                else if (p.status === 'rotten') {
                    // 清理逻辑
                    p.status = 'empty';
                    p.mushroom = null;
                    updatePlotUI(id, p);
                }
            };
        }
    });
};


/* =========================================
   8. 市场/图鉴渲染逻辑 (Market System)
   ========================================= */

function renderMarket() {
    // 1. 获取容器
    const mushroomGrid = document.getElementById('grid-mushrooms');
    const dishGrid = document.getElementById('grid-dishes');
    
    // 清空现有内容
    mushroomGrid.innerHTML = '';
    dishGrid.innerHTML = '';

    // 2. 渲染左边：蘑菇图鉴 (全部显示，没库存的变灰)
    MUSHROOMS.forEach(m => {
        const count = mushroomInventory[m.id] || 0; // 获取当前库存
        
        // 创建格子
        const slot = document.createElement('div');
        slot.className = 'item-slot'; // 调用 CSS 里的样式
        
        // 如果没库存，加个 locked 样式变灰
        if (count === 0) {
            slot.classList.add('locked');
            slot.title = "未拥有";
        } else {
            slot.title = `拥有: ${count} 份`;
        }

        // 填充内容：图片 + 角标数量
        slot.innerHTML = `
            <img src="${m.img}" alt="${m.name}">
            <div class="item-count">${count}</div>
            <div class="item-name">${m.name}</div>
        `;

        // 点击事件 (打开详情弹窗 - 下一步做)
        slot.onclick = function() {
            openMushroomDetail(m); // 这个函数待会儿写
        };

        mushroomGrid.appendChild(slot);
    });

    // 3. 渲染右边：菜品图鉴 (只显示已拥有的)
    MUSHROOMS.forEach(m => {
        const count = dishInventory[m.id] || 0; // 获取菜品库存
        
        // 只有做出来过(或者库存>0)才显示
        if (count > 0) {
            const slot = document.createElement('div');
            slot.className = 'item-slot dish-slot'; // 加个 dish-slot 方便以后区分
            
            // 这里我们需要菜品的图片，暂时用蘑菇图片代替，
            // 或者你可以去 generate 对应的菜品图，命名为 d_shiitake.png 等
            // 假设菜品图片路径是 ./images/d_id.png
            // 为了先不报错，我们暂时还用 m.img，但加个滤镜区分一下
            
            slot.innerHTML = `
                <img src="${m.dishImg}" alt="${m.product}"> 
                <div class="item-count">${count}</div>
                <div class="item-name">${m.product}</div>
            `;
            
            // 点击事件 (卖出菜品 - 下一步做)
            slot.onclick = function() {
                openDishDetail(m); // 这个函数待会儿写
            };

            dishGrid.appendChild(slot);
        }
    });
}

/* =========================================
   9. 图鉴使用
   ========================================= */

// 全局变量：记录当前正在查看哪个蘑菇，方便烹饪函数调用
let currentViewingMushroom = null;

function openMushroomDetail(mushroom) {
    currentViewingMushroom = mushroom; // 记录当前对象
    
    // 1. 获取弹窗元素
    const modal = document.getElementById('detail-modal');
    
    // 2. 填充基本信息
    document.getElementById('detail-title').innerText = mushroom.name + " 档案";
    document.getElementById('detail-img').src = mushroom.img;
    document.getElementById('detail-cost').innerText = "$" + mushroom.cost;
    document.getElementById('detail-diff').innerText = mushroom.difficulty + "%"; // 显示难度
    document.getElementById('detail-price').innerText = "$" + mushroom.price;
    
    // 3. 填充科普文案 (注意：这里用 innerHTML 因为文案里可能有 <b> 标签)
    // 如果你还没写文案，用默认文字代替
    const introText = mushroom.intro ? mushroom.intro : "暂无详细科普信息...";
    document.getElementById('detail-intro').innerHTML = introText;

    // 4. 处理烹饪按钮状态
    const count = mushroomInventory[mushroom.id] || 0;
    document.getElementById('detail-own').innerText = count;

    const btnCook = document.getElementById('btn-cook');
    if (count > 0) {
        // 有库存：激活按钮
        btnCook.disabled = false;
        btnCook.innerText = `🍳 烹饪 (消耗 1/${count})`;
        btnCook.classList.remove('btn-disabled'); // 确保样式正确
    } else {
        // 无库存：禁用按钮
        btnCook.disabled = true;
        btnCook.innerText = `烹饪 (未拥有)`;
    }

    // 5. 显示弹窗
    modal.classList.remove('hidden');

    // --- 绑定按钮事件 ---
    
    // 关闭按钮
    document.getElementById('btn-close-detail').onclick = function() {
        modal.classList.add('hidden');
    };

    // 烹饪按钮 (核心逻辑下一步写，先打印一下)
    btnCook.onclick = function() {
        console.log("尝试烹饪:", mushroom.name);
        // 这里会调用 startCooking() 函数
        startCooking(mushroom);
    };
}

// 核心烹饪逻辑
function startCooking(mushroom) {
    // 0. 安全检查：库存够不够？
    if (mushroomInventory[mushroom.id] <= 0) {
        alert("库存不足，无法烹饪！");
        return;
    }

    // 1. 消耗原材料 (立即扣除)
    mushroomInventory[mushroom.id]--;
    
    // ⚠️ 关键点：立即更新底下那个详情弹窗的“拥有数量”显示
    // 这样玩家关闭结果弹窗后，会发现数量已经变了，逻辑很顺
    document.getElementById('detail-own').innerText = mushroomInventory[mushroom.id];
    
    // 如果扣完变成0了，把底下的烹饪按钮禁用
    if (mushroomInventory[mushroom.id] <= 0) {
        const btnCook = document.getElementById('btn-cook');
        btnCook.disabled = true;
        btnCook.innerText = "烹饪 (未拥有)";
    }

    // 2. 概率判定 (生成 0~99 的随机数)
    const chance = Math.random() * 100;
    // 假设 difficulty 是 30，意味着 30% 概率烧糊
    // 如果 chance (比如 15) < 30，那就是烧糊了
    const isBurned = chance < mushroom.difficulty;

    // 3. 准备结果弹窗元素
    const resultModal = document.getElementById('result-modal');
    const resultTitle = document.getElementById('result-title');
    const resultIcon = document.getElementById('result-icon');
    const resultText = document.getElementById('result-text');
    const resultActions = document.getElementById('result-actions');
    
    resultModal.classList.remove('hidden');
    resultActions.innerHTML = ''; // 清空旧按钮

    if (isBurned) {
        // ================= 失败逻辑 =================
        resultTitle.innerText = "☠️ 烹饪失败";
        resultTitle.className = "modal-title text-fail";
        
        resultIcon.innerHTML = "⚫"; // 黑炭图标
        resultText.innerHTML = `
            哎呀！火候没掌握好...<br>
            <b>${mushroom.name}</b> 变成了一坨焦炭。<br>
            <small>(损失了1个库存)</small>
        `;

        // 失败按钮：只有“知道了”
        const btnOk = document.createElement('button');
        btnOk.className = "btn btn-cancel";
        btnOk.innerText = "忍痛接受";
        btnOk.onclick = function() {
            resultModal.classList.add('hidden');
            // 关闭后，一定要重新渲染市场背景的格子，因为库存变了
            renderMarket();
        };
        resultActions.appendChild(btnOk);

    } else {
        // ================= 成功逻辑 =================
        resultTitle.innerText = "✨ 烹饪成功！";
        resultTitle.className = "modal-title text-success";
        
        resultIcon.innerHTML = `
            <img src="${mushroom.dishImg}" style="width:100px; height:100px; object-fit:contain; filter: drop-shadow(0 5px 5px rgba(0,0,0,0.3));">
        `;
        
        // ... 后面的代码不变 ...
        
        resultText.innerHTML = `
            香气扑鼻！你制作了：<br>
            <b style="font-size:20px; color:#f57c00">${mushroom.product}</b><br>
            <small>售价: $${mushroom.price}</small>
        `;

        // 选项A：放入陈列展 (存入库存)
        const btnStore = document.createElement('button');
        btnStore.className = "btn btn-store";
        btnStore.innerText = "放入陈列展 📥 ";
        btnStore.onclick = function() {
            // 菜品库存 +1
            dishInventory[mushroom.id]++;
            resultModal.classList.add('hidden');
            renderMarket(); // 刷新背景网格，让右边出现新菜品
        };

        // 选项B：直接卖出 (变现)
        const btnSell = document.createElement('button');
        btnSell.className = "btn btn-sell";
        btnSell.innerText = `💰 卖出 (+$${mushroom.price})`;
        btnSell.onclick = function() {
            // 加钱
            currentMoney += mushroom.price;
            updateMoneyUI();
            
            resultModal.classList.add('hidden');
            renderMarket(); // 刷新背景网格
        };

        /* --- 烹饪结果按钮 (加大版) --- */

        resultActions.appendChild(btnStore);
        resultActions.appendChild(btnSell);
    }
}


/* --- 菜品弹窗 --- */

// 全局记录当前查看的菜品
let currentViewingDish = null;

function openDishDetail(mushroom) {
    currentViewingDish = mushroom;
    
    // 1. 获取弹窗元素
    const modal = document.getElementById('dish-modal');
    
    // 2. 填充信息
    document.getElementById('dish-detail-title').innerText = mushroom.product;
    document.getElementById('dish-detail-img').src = mushroom.dishImg;
    document.getElementById('dish-detail-price').innerText = "$" + mushroom.price;
    
    // 填充菜谱 (如果没有写菜谱，给个默认提示)
    const recipeText = mushroom.recipe ? mushroom.recipe : "暂无详细食谱记录...";
    document.getElementById('dish-detail-recipe').innerHTML = recipeText;

    // 3. 更新库存显示 & 按钮状态
    updateDishModalState(mushroom);

    // 4. 显示弹窗
    modal.classList.remove('hidden');

    // --- 绑定事件 ---
    
    // 关闭
    document.getElementById('btn-close-dish').onclick = function() {
        modal.classList.add('hidden');
        // 关键：关闭时一定要刷新市场网格，
        // 否则如果卖光了，那个格子还会留在那里
        renderMarket();
    };

    // 卖出一份
    document.getElementById('btn-sell-one').onclick = function() {
        const count = dishInventory[mushroom.id];
        
        if (count > 0) {
            // 1. 扣库存，加钱
            dishInventory[mushroom.id]--;
            currentMoney += mushroom.price;
            
            // 2. 刷新界面
            updateMoneyUI(); // 左上角钱数
            updateDishModalState(mushroom); // 弹窗里的数字和按钮
            renderMarket(); // 后台刷新一下网格 (虽然被挡住了)
        }
    };
}

// 辅助函数：专门用来刷新弹窗里的数字和按钮
function updateDishModalState(mushroom) {
    const count = dishInventory[mushroom.id] || 0;
    document.getElementById('dish-detail-own').innerText = count;

    const btnSell = document.getElementById('btn-sell-one');
    
    if (count > 0) {
        btnSell.disabled = false;
        btnSell.innerText = `💰 卖出一份 (+$${mushroom.price})`;
        btnSell.style.backgroundColor = ""; 
        btnSell.style.color = "";
        btnSell.style.boxShadow = "";
        btnSell.style.transform = "";
    } else {
        // 卖光了
        btnSell.disabled = true;
        btnSell.innerText = "❌ 已售罄";
        btnSell.style.backgroundColor = "#bdbdbd"; // 变灰
        btnSell.style.color = "#fff";
        btnSell.style.boxShadow = "none";
        btnSell.style.transform = "none";
    }
}
