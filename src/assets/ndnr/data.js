let data = [
    {
        category: "动作",
        child: [{
            name: "挤牛奶",
            code: "",
            image: "动作图示/挤牛奶.png",
            description: `
| 对象 | 牛 |
|---|---|
| 产出 | 牛奶*1 |
| 险 | 无 |
| 相关CD | 1天后产1瓶 |
| 最大存量 | 1瓶 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "挤鹿奶",
            code: "",
            image: "动作图示/挤鹿奶.png",
            description: `
| 对象 | 无眼鹿 |
|---|---|
| 产出 | 鹿奶*1 |
| 险 | 引起无眼鹿的仇恨 |
| 相关CD | 1天后产1瓶 |
| 最大存量 | 1瓶 |
            `,
            recipe: "",
            tech: ""
        }]
    }, {
        category: "料理",
        child:[{
            name: "家常菜",
            image: "家常菜.png",
            code: "ndnr_chinesefood",
            recipe: "肉>=1+蛋+奶+菜>=1",
            description: `
三围：110饱食，5血，30理智
保质期：15天

让每个中国人都能吃上肉蛋奶!
            `,
            tech: "烹饪锅"
        }, {
            name: "蘑菇酒",
            image: "蘑菇酒.png",
            code: "ndnr_mushroom_wine",
            recipe: "烤四色蘑菇",
            description: `
三围：0饱食，0血，-50理智
保质期：永久

可以给蟾蜍王喝，蟾蜍王喝完后一天内晕晕呼呼，种不了种。
猪人不胜酒力，给予猪人酒喝，猪人会发疯。
            `,
            tech: "烹饪锅"
        }, {
            name: "蛇酒",
            image: "蛇酒.png",
            code: "ndnr_snakewine",
            recipe: "蛇+冰+2填充",
            description: `
三围：9.375饱食，8血，10理智
保质期：10天

食用后会晕倒一段时间，4分钟内防御力增加50%（仅限玩家）。
猪人不胜酒力，给予猪人酒喝，猪人会发疯。
            `,
            tech: "烹饪锅"
        }, {
            name: "龙心灌蛋",
            image: "龙心灌蛋.png",
            code: "ndnr_dragoonheartlavaeegg",
            recipe: "龙心+岩浆虫卵+2填充",
            description: `
三围：75饱食，20血，5理智
保质期：10天

【食用效果】
食用后攻击力翻倍，效果持续一天。
同时具备总时长两天，不断衰减的发光效果。
龙心灌蛋具有15秒升温效果，升温阈值随新鲜度衰减，最高为60度，不会因为升温导致过热。

【后遗症】
攻击力提升的效果结束后有后遗症，一段时间内持续掉血共60点。
后遗症可食用鹿奶消除
            `,
            tech: "烹饪锅"
        }, {
            name: "无花果布丁",
            image: "无花果布丁.png",
            code: "ndnr_figpudding",
            recipe: "无花果+乳制品>=2+甜度>=1",
            description: `
三围：25饱食，40血，15理智
保质期：6天

Q弹可口的布丁。
食用后获得舒缓茶的精神回复效果
            `,
            tech: "烹饪锅"
        }, {
            name: "瑶柱汤",
            image: "瑶柱汤.png",
            code: "ndnr_scallopsoup",
            recipe: "瑶柱*2+乳制品>=1+冰",
            description: `
三围：37.5饱食，40血，-5理智
保质期：10天

作者都不知道瑶柱是什么。
            `,
            tech: "烹饪锅"
        }, {
            name: "东坡肉",
            image: "东坡肉.png",
            code: "ndnr_dongpopork",
            recipe: "大肉>=2+甜度>=1+芦苇",
            description: `
三围：75饱食，8血，33理智
保质期：15天

红的透亮，色如玛瑙，软而不烂，肥而不腻。
            `,
            tech: "烹饪锅"
        }, {
            name: "黄油",
            image: "黄油.png",
            code: "butter",
            recipe: "乳制品>=4",
            description: `
三围：25饱食，40血，0理智
保质期：40天

当你很需要黄油时，何不自己精炼一锅呢？

注意，虽然这黄油是锅里出来的，但并不是料理。
            `,
            tech: "烹饪锅"
        }, {
            name: "番茄炒蛋",
            image: "番茄炒蛋.png",
            code: "ndnr_tomato_egg",
            recipe: "蛋>=2+番茄>=2",
            description: `
三围：75饱食，40血，5理智
保质期：8天

料理入门的第一道菜！
            `,
            tech: "烹饪锅"
        }, {
            name: "菠萝包",
            image: "菠萝包.png",
            code: "ndnr_pineapplebun",
            recipe: "蛋>=2+黄油+乳制品>=1",
            description: `
三围：37.5饱食，40血，5理智
保质期：20天

菠萝包里没有菠萝。
            `,
            tech: "烹饪锅"
        }, {
            name: "哈根达斯",
            image: "哈根达斯.png",
            code: "ndnr_haagendazs",
            recipe: "黄油+乳制品+冰+蜂王浆",
            description: `
三围：12.5饱食，100血，50理智
保质期：2天

玩家吃了会获得舒缓茶的精神回复效果，非玩家生物吃了会受到5层冰冻效果。
            `,
            tech: "烹饪锅"
        }, {
            name: "红伞伞炒饭",
            image: "红伞伞炒饭.png",
            code: "ndnr_stewedmushroom",
            recipe: "红蘑菇*3+肉",
            description: `
三围：37.5饱食，-40血，-15理智
保质期：10天

玩家食用后会保持半天的零理智状态，效果结束后理智值恢复
            `,
            tech: "烹饪锅"
        }, {
            name: "烧麦",
            image: "烧麦.png",
            code: "ndnr_steamedporkdumplings",
            recipe: "肉+胡萝卜+玉米+蛋",
            description: `
三围：37.5饱食，3血，5理智
保质期：6天

用来充饥再合适不过了。

一次收获两个。
            `,
            tech: "烹饪锅"
        }, {
            name: "椰子鸡",
            image: "椰子鸡.png",
            code: "ndnr_coconutchicken",
            recipe: "椰子+鸡腿*2+胡萝卜",
            description: `
三围：60饱食，20血，5理智
保质期：6天

这是哪里的特色菜
            `,
            tech: "烹饪锅"
        }, {
            name: "毛蛋",
            image: "毛蛋.png",
            code: "ndnr_coconutchicken",
            recipe: "孵化中的高鸟蛋+芦苇*3",
            description: `
三围：25饱食，8血，-15理智
保质期：20天

一道鸡蛋里挑骨头的黑暗料理。
猪人吃了黑暗料理会发疯。
            `,
            tech: "烹饪锅"
        }, {
            name: "虾扯蛋",
            image: "虾扯蛋.png",
            code: "ndnr_shrimppullegg",
            recipe: "龙虾+蛋>=2+冰",
            description: `
三围：37.5饱食，60血，33理智
保质期：6天

这不瞎扯淡呢么？
            `,
            tech: "烹饪锅"
        }, {
            name: "馄饨",
            image: "馄饨.png",
            code: "ndnr_wonton",
            recipe: "蛋+冰+干海带+肉",
            description: `
三围：37.5饱食，40血，33理智
保质期：15天

在你们那，它叫馄饨还是饺子？
            `,
            tech: "烹饪锅"
        }, {
            name: "猫屎咖啡",
            image: "猫屎咖啡.png",
            code: "ndnr_kopiluwak",
            recipe: "猫屎*3+甜度 | 猫屎*4",
            description: `
三围：0饱食，0血，-15理智
保质期：10天

食用者获得咖啡（仅玩家）和蘑菇慕斯的buff效果
            `,
            tech: "烹饪锅"
        }, {
            name: "泡芙",
            image: "泡芙.png",
            code: "ndnr_puff",
            recipe: "蛋+乳制品>=2+甜度>=1",
            description: `
三围：37.5饱食，40血，33理智
保质期：6天

源自意大利的零食。
            `,
            tech: "烹饪锅"
        }, {
            name: "酸奶",
            image: "酸奶.png",
            code: "ndnr_yogurt",
            recipe: "水果+乳制品>=2+甜度>=1",
            description: `
三围：20饱食，40血，50理智
保质期：8天

牛奶的好去处。
            `,
            tech: "烹饪锅"
        }, {
            name: "大海捞珍",
            image: "大海捞珍.png",
            code: "ndnr_seatreasure",
            recipe: "龙虾+鱼肉>=1+瑶柱*2",
            description: `
三围：75饱食，100血，50理智
保质期：6天

这料理非常滴珍贵，大佬先吃！
            `,
            tech: "烹饪锅"
        }, {
            name: "甜筒",
            image: "甜筒.png",
            code: "ndnr_icecream",
            recipe: "乳制品+蛋+冰+甜度>=1",
            description: `
三围：12.5饱食，8血，15理智
保质期：1天

夏天能吃一个简直太幸福了，就是冻的头有点疼。

一次收获两个。

食用者会受到三层冰冻效果（蓝色猎犬死亡时效果为两层）
            `,
            tech: "烹饪锅"
        }, {
            name: "咖啡",
            image: "咖啡.png",
            code: "ndnr_coffee",
            recipe: "烤咖啡豆*3+甜度>=1 | 烤咖啡豆*4",
            description: `
三围：9.375饱食，3血，-5理智
保质期：10天

食用后获得11/6倍移速，效果持续半天。
            `,
            tech: "烹饪锅"
        }, {
            name: "药酒",
            image: "药酒.png",
            code: "dish_medicinalliquor",
            recipe: "熊獾绒毛+冰+2填充",
            description: `
三围：9.375饱食，8血，10理智
保质期：永久

1. 8分钟内增加50%攻击力（仅限玩家）
2. 不胜酒力的角色会晕倒一段时间，酒量一般的角色会晕呼呼一小段时间，酒量出奇的角色不会有醉酒反应。
3. 猪人吃了会发疯

特别鸣谢棱镜作者的授权！本模组与棱镜同时开启时，将调用棱镜的药酒食谱。
            `,
            tech: "烹饪锅"
        }, {
            name: "椰子汁",
            image: "椰子汁.png",
            code: "ndnr_coconutjuice",
            recipe: "椰子+冰+蜂蜜+芦苇",
            description: `
三围：0饱食，1血，20理智
保质期：3天

回复中量精神，食用的10秒降低40温度。
炎炎夏日就来一杯冰爽的椰子汁吧！
            `,
            tech: "烹饪锅"
        }, {
            name: "奶油丸子汤",
            image: "奶油丸子汤.png",
            code: "ndnr_creamballsoup",
            recipe: "乳制品+肉+冰",
            description: `
三围：37.5饱食，20血，15理智
保质期：10天

充满着奶味的肉汤
            `,
            tech: "烹饪锅"
        }]
    }, {
        category: "物品",
        child: [{
            name: "岩浆",
            image: "岩浆_高温.png",
            code: "ndnr_magma_milk",
            recipe: "",
            description: `
来源：龙蝇

持续放热，保暖效果是暖石的2倍，持续发光，高温，中温，低温三个阶段的光照和范围逐级递减，可引燃附近的可燃物。

可在上面烤食物，10%概率食物被烤成灰烬。

0-20度时为低温，20-50度时为中温，50-90度时为高温。不同温度阶段的外观及发光范围不同，可由龙蝇火炉，篝火等热源加热

低于0度或落入水中时变成1-2个黑曜石
            `,
            tech: ""
        }, {
            name: "天候棒",
            image: "天候棒.png",
            code: "ndnr_weatherpole",
            recipe: "",
            description: `
来源：蚁蛳

借来的天候棒是未激活的，镶嵌不同宝石激活不同能力。
            `,
            tech: ""
        }, {
            name: "毒腺",
            image: "毒腺.png",
            code: "ndnr_venomgland",
            recipe: "",
            description: `
食用可解蛇毒，但会扣75点生命(不会致死，保留最后1点)。
可给武器抹毒，被有毒的武器打中会中蛇毒，持续70天;
被中毒的生物打中有1/3概率也会中蛇毒，持续3天。
中毒期间每2秒损失4点生命。
            `,
            tech: ""
        }, {
            name: "蛇油",
            image: "蛇油.png",
            code: "ndnr_snakeoil",
            recipe: "",
            description: `
涂抹在身上后，青蛙舔一下会立即死亡;
不受孢子云伤害且站在孢子云中食物新鲜度不受影响;
不会因中毒生物的攻击而中毒。
效果持续一天
            `,
            tech: ""
        }, {
            name: "黑曜石",
            image: "黑曜石.png",
            code: "ndnr_obsidian",
            recipe: "",
            description: `
可用于制作或修补黑曜石物品。
            `,
            tech: ""
        }, {
            name: "蓝孢子种子",
            image: "蓝色孢子种子.png",
            code: "ndnr_blue_sporeseed",
            recipe: "",
            description: `
从蟾蜍王处挤孢子有概率获得。
外观、漂浮方式、保鲜时间均与孢子相同。
可种植，种在地面即为蘑菇。
            `,
            tech: ""
        }, {
            name: "绿孢子种子",
            image: "绿色孢子种子.png",
            code: "ndnr_green_sporeseed",
            recipe: "",
            description: `
从蟾蜍王处挤孢子有概率获得。
外观、漂浮方式、保鲜时间均与孢子相同。
可种植，种在地面即为蘑菇。
            `,
            tech: ""
        }, {
            name: "红孢子种子",
            image: "红色孢子种子.png",
            code: "ndnr_red_sporeseed",
            recipe: "",
            description: `
从蟾蜍王处挤孢子有概率获得。
外观、漂浮方式、保鲜时间均与孢子相同。
可种植，种在地面即为蘑菇。
            `,
            tech: ""
        }, {
            name: "狗王牙",
            image: "狗王牙.png",
            code: "ndnr_bigtooth",
            recipe: "",
            description: `
来源：狗王

座狼的力量源泉，蕴含猎犬一族的神秘力量。
            `,
            tech: ""
        }, {
            name: "咖啡树",
            image: "咖啡苗.png",
            code: "ndnr_coffeebush",
            recipe: "",
            description: `
掏高脚鸟巢1/9概率获得。

使用常见肥料施肥，生长周期同浆果丛。
            `,
            tech: ""
        }, {
            name: "天界令牌",
            image: "天界令牌.png",
            code: "ndnr_godtoken",
            recipe: "",
            description: `
从远古哨兵蜈蚣处偷取。
带在身上时不会被月灵主动攻击。
在非月岛地形且放在物品栏时，将不断招来影怪袭击。
            `,
            tech: ""
        }, {
            name: "能量核",
            image: "能量核.png",
            code: "ndnr_energy_core",
            recipe: "",
            description: `
在被瓦格斯塔夫实验召唤来的天体英雄身上拆得。放在地面会发光，可升级部分容器为永久保鲜，升级后的物品会增加前缀“永恒的”。
永恒容器可以抵抗孢子云的侵蚀。
可升级容器:冰箱、盐盒、姐妹骨灰盒、蘑菇灯、炽菇灯、箱子、龙鳞宝箱、背包、小猪包、保鲜背包、坎普斯背包、旋涡斗篷。
            `,
            tech: ""
        }, {
            name: "触手血",
            image: "触手血.png",
            code: "ndnr_tentacleblood",
            recipe: "",
            description: `
从巨型触手处抽血获得。
使用后当一天触手王，触手不会主动仇恨你。注意，巨型触手周围的小触手忠心耿耿，可不会害怕伪触手王。
            `,
            tech: ""
        }, {
            name: "椰树叶",
            image: "椰叶.png",
            code: "ndnr_palmleaf",
            recipe: "",
            description: `
砍伐椰子树获得。
            `,
            tech: ""
        }, {
            name: "陨铁",
            image: "陨铁.png",
            code: "ndnr_rock_iron",
            recipe: "",
            description: `
大陨石落地时，若生成矿石，有一半概率形成陨铁矿。
开采需求及掉落分布同龙蝇沙漠的卵石。开采可获得5~6个铁矿石。
            `,
            tech: ""
        }, {
            name: "铁矿石",
            image: "铁矿石.png",
            code: "ndnr_iron",
            recipe: "",
            description: `
开采陨铁掉落。中、小流星落地时，若生成矿石，有一半概率形成铁矿石。
冶炼合金的材料。
            `,
            tech: ""
        }]
    }, {
        category: "装备",
        child: [{
            name: "唤雨天候棒",
            image: "唤雨天候棒.png",
            code: "ndnr_blueweatherpole",
            recipe: "",
            description: `
【获得】
将蓝色宝石镶嵌在天候棒上获得。

【使用】
右键地面施法可在雨/雪天气和晴天中转换。
每次施法消耗镶嵌的蓝宝石，将返还天候棒
            `,
            tech: ""
        }, {
            name: "唤雷天候棒",
            image: "唤雷天候棒.png",
            code: "ndnr_redweatherpole",
            recipe: "",
            description: `
【获得】
将红宝石镶嵌在天候棒上获得。

【使用】
右键地面施法可唤雷。
每次施法消耗镶嵌的红宝石，将返还天候棒。
            `,
            tech: ""
        }, {
            name: "者行手杖",
            image: "者行手杖.png",
            code: "ndnr_purpleweatherpole",
            recipe: "",
            description: `
【获得】
将紫色宝石镶嵌在天候棒上获得。

【使用】
手持加速效果、传送范围与消耗等均与懒人魔杖相同。
耐久耗尽后将返还天候棒。
            `,
            tech: ""
        }, {
            name: "旋涡斗篷",
            image: "原版贴图/漩涡斗篷.png",
            code: "ndnr_armorvortexcloak",
            recipe: "",
            description: `
【原型】
哈姆雷特DLC中，击杀远古先驱可获得漩涡披风的蓝图。

【获取】
连续击杀临摹出的三种暗影BOSs获得。

注意:其余仍存活的BOSs在被击杀BOSS周围20格（5个地皮)以内，方能成功记录。

【容器】
相当于背包，占据身体装备栏。拥有14格空间，与坎普斯背包相同。

【护甲】
装备且耐久不为0时可完全抵挡伤害并免疫僵直，同时玩家会扣除抵挡伤害30%的san值。
对来自暗影生物的攻击无效。耐久为0不会破碎。
装备时可用噩梦燃料修复，每次修复5%耐久并消耗5点san值。
            `,
            tech: ""
        }]
    }, {
        category: "机制调整",
        child: [{
            name: "吃生肉",
            image: "原版贴图/肉类.png",
            code: "",
            recipe: "",
            description: `
吃生肉有1/3感染蛔虫。
感染蛔虫时，吃食物获得的饱食度收益均减半。
死亡或使用宝塔糖可消除蛔虫。

目前有寄生虫的肉有：大肉，小肉，小鱼肉，鱼肉，怪物肉，叶肉，鸟腿，蛙腿，蝙蝠翅膀，死鳗鱼，死龙虾，藤壶，冬象鼻，夏象鼻，裸露鼻孔，鲨鱼鳍，鱼（古早原版），人肉，瑶柱。

沃拓克斯，韦伯，机器人不会因为吃生肉感染蛔虫
            `,
            tech: ""
        }]
    }, {
        category: "炼钢炉",
        child: [{
            name: "合金",
            image: "合金.png",
            code: "ndnr_alloy",
            recipe: "铁矿石*4",
            description: `
【介绍】
工业时代的基本材料
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "幸运金块",
            image: "原版贴图/幸运金块.png",
            code: "lucky_goldnugget",
            recipe: "金块*2+木炭*2",
            description: `
【介绍】
拿钱砸死他
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "眼面具",
            image: "原版贴图/眼面具.png",
            code: "eyemaskhat",
            recipe: "眼面具*1+合金*2+图勒信物*1",
            description: `
【效果】
具有“精炼”前缀，耐久上限翻倍，且耐久为0不会破碎。

【备注】
精炼仅增加前缀，不改变物品预制名。
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "恐怖盾牌",
            image: "原版贴图/恐怖盾牌.png",
            code: "shieldofterror",
            recipe: "恐怖盾牌r*1+合金*2+图勒信物*1",
            description: `
【效果】
具有“精炼”前缀，耐久上限翻倍，且耐久为0不会破碎。

【备注】
精炼仅增加前缀，不改变物品预制名。
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "空瓶子",
            image: "原版贴图/空瓶子.png",
            code: "messagebottleempty",
            recipe: "月亮碎片*4",
            description: `
【介绍】
搬空珍珠奶奶的小店。（做一个卑鄙的外乡人）
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "铥矿棒",
            image: "原版贴图/铥矿棒.png",
            code: "ruins_bat",
            recipe: "图勒棒*1+活木*1+图勒信物*1+噩梦燃料*1",
            description: `
【介绍】
铥矿棒重铸，恢复至满耐久。
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "铥矿甲",
            image: "原版贴图/铥矿甲.png",
            code: "armorruins",
            recipe: "图勒甲*1+图勒信物*2+噩梦燃料*1",
            description: `
【介绍】
铥矿甲重铸，恢复至满耐久。
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "铥矿皇冠",
            image: "原版贴图/铥矿皇冠.png",
            code: "ruinshat",
            recipe: "图勒皇冠*1+图勒信物*2+噩梦燃料*1",
            description: `
【介绍】
铥矿皇冠重铸，恢复至满耐久。
            `,
            tech: "炼钢炉-冶炼"
        }]
    }, {
        category: "植物",
        child: [{
            name: "椰子树",
            image: "椰子树.png",
            code: "ndnr_palmtree",
            recipe: "",
            description: `
可自然生成在绿洲附近，可通过椰子移植。

创建世界时绿洲附近的桦树将将会替换为椰子树。绿洲附近椰子树少于12棵时会自然刷新。

椰子树有三个阶段，一阶段砍倒掉落木头，椰树叶各1个，二阶段砍倒掉落木头*2，椰树叶*1，三阶段砍倒掉落木头*2，椰子*2，椰树叶*1。

椰树三阶段时可以摘椰子，接过后1天再生成一个椰子

采摘时，落下的椰子会造成20点范围伤害。
            `,
            tech: ""
        }]
    }, {
        category: "时令事件",
        child: [{
            name: "春节",
            image: "blank.png",
            code: "",
            recipe: "",
            description: `
玩家在春节当天首次进入游戏后，0.5-1天内触发春节事件。

春节事件：玩家周围（整个加载范围）会下元宝雨（无伤害），共计88个元宝。
            `,
            tech: ""
        }]
    }, {
        category: "生物",
        child: [{
            name: "蛇",
            image: "蛇.png",
            code: "ndnr_snake",
            recipe: "",
            description: `
【基础】
| 伤害 | 20 |
| --- | --- |
| 生命 | 100 |
| 行走 | 3 |
| 奔跑 | 3 |
| 攻击间隔 | 3 |
| 攻击范围 | 2.5 |
| 团队协作 | true |
| 影响理智 | -40 |

【介绍】
非白天或者靠近时，尖刺灌木会概率出蛇，喜食肉。

被蛇咬有1/3概率会中毒，涂抹蛇油生效期间不会中蛇毒，机器人与毒绝缘

蛇可使用陷阱捕捉放在容器格子里，生命10天，可入锅，具有1不可食用度
            `,
            tech: "二本-工具"
        }]
    }, {
        category: "制作",
        child: [{
            name: "黑曜石斧",
            image: "黑曜石斧.png",
            code: "ndnr_obsidianaxe",
            recipe: "斧子+龙心+黑曜石*2",
            description: `
【基础】
可砍伐

【充能】
1. 砍树，攻击会充能
2. 充能满会导致砍伐攻击的目标燃烧
3. 充能会发光发热，能导致过热
4. 攻击力随充能线性变化，最高2倍伤害
5. 放水里充能归零，雨天不会充能

【耐久】
1. 使用黑曜石可修复1/3耐久
2. 耐久为0会破碎
            `,
            tech: "二本-工具"
        },{
            name: "合金斧",
            image: "合金斧.png",
            code: "ndnr_alloyaxe",
            recipe: "木头*2+合金*2",
            description: `
【基础】
可砍伐，2.5倍砍伐效率
            `,
            tech: "二本-工具"
        },{
            name: "合金鹤嘴锄",
            image: "合金镐.png",
            code: "ndnr_alloypickaxe",
            recipe: "木头*2+合金*2",
            description: `
【基础】
可开凿，2.5倍开凿效率。
            `,
            tech: "二本-工具"
        },{
            name: "合金铲子",
            image: "合金铲.png",
            code: "ndnr_alloyshovel",
            recipe: "木头*2+合金*2",
            description: `
【基础】
可挖掘。
            `,
            tech: "二本-工具"
        },{
            name: "合金锤",
            image: "合金锤.png",
            code: "ndnr_alloyhammer",
            recipe: "采下的草*6+木头*2+合金*2",
            description: `
【基础】
可锤砸。
            `,
            tech: "二本-工具"
        }, {
            name: "黑曜石火堆",
            image: "黑曜石火堆.png",
            code: "ndnr_obsidianfirepit",
            recipe: "木头*3+黑曜石*8",
            description: `
【介绍】
照亮范围能点亮两个屏幕且燃料更耐烧。
            `,
            tech: "二本-光源"
        }, {
            name: "路灯",
            image: "路灯.png",
            code: "ndnr_city_lamp",
            recipe: "提灯+电子元件+合金",
            description: `
【介绍】
永亮光源，照亮范围约3个地皮（与哈姆雷特相同）。
            `,
            tech: "二本-光源"
        }, {
            name: "宝塔糖",
            image: "宝塔糖.png",
            code: "ndnr_pagodasugar",
            recipe: "恶魔花瓣*3+蜂蜜",
            description: `
【介绍】
00后不太熟悉的打蛔虫神药。蛔蒿绝产后，不曾想竟在永恒大陆找到了替代品。

若肚子里有蛔虫，吃了宝塔糖会把蛔虫拉出来（附带便便）。

虽然甜甜的很好吃，但吃多了对神经不好哦。
            `,
            tech: "二本-生存"
        }, {
            name: "解毒剂",
            image: "解毒剂.png",
            code: "ndnr_antivenom",
            recipe: "毒腺+海带叶*3+壳碎片*2",
            description: `
【介绍】
使用可解蛇毒，无副作用。
            `,
            tech: "一本-生存"
        }, {
            name: "生命水球",
            image: "魔力水球.png",
            code: "ndnr_waterballoon",
            recipe: "魔力泉水+蚊子血囊*2",
            description: `
【基础】
可投掷，类似水球，每次制作一个。
范围5（一个地皮4格）

【效果】
1. 范围内的树种在能种植情况下，会立即原地发芽（堆叠数量有效）
2. 范围内玩家和有潮湿度组件的生物会增加20%潮湿度

【备注】
树种子只限于松果、桦栗果、多枝树种、椰子、其余种子均无效。
谨慎使用，小心炸服
            `,
            tech: "二本-生存"
        }, {
            name: "热带阳伞",
            image: "热带阳伞.png",
            code: "ndnr_palmleaf_unbrella",
            recipe: "椰树叶*3+树枝*4+花瓣*6",
            description: `
【介绍】
一款别具热带风情的...花伞？
            `,
            tech: "一本-生存"
        }, {
            name: "热带叶棚",
            image: "椰子棚.png",
            code: "ndnr_palmleaf_hut",
            recipe: "椰树叶*4+树枝*4+绳子*3",
            description: `
【介绍】
待在椰叶小屋下，不会被雨淋湿，不会过热。
小屋没有耐久，生效范围比看起来大一些。
            `,
            tech: "一本-生存"
        }, {
            name: "茅草袋",
            image: "茅草袋.png",
            code: "ndnr_thatchpack",
            recipe: "椰树叶*4",
            description: `
【基础】
四格容器，可放在容器中，可燃烧。

【备注】
1. 能装进捆绑包装的物品均可被茅草袋容纳。
2. 不具备任何保鲜效果，只是容器。
3. 不可修补，耐久消耗尽后茅草袋消失，里面的东西掉落。
            `,
            tech: "无"
        }, {
            name: "剑鱼短剑",
            image: "剑鱼短剑.png",
            code: "nndnr_cutlass",
            recipe: "死剑鱼*1+金块*2+树枝*1",
            description: `
【介绍】
可使用鱼肉修复耐久，小鱼肉恢复1/6，大鱼肉或者死鳗鱼恢复1/3。
耐久为0将破碎。
            `,
            tech: "二本-战斗"
        }, {
            name: "黑曜石长矛",
            image: "黑曜石长矛.png",
            code: "ndnr_spear_obsidian",
            recipe: "黑曜石*3+长矛*1+龙心*1",
            description: `
【充能】
1. 攻击会充能
2. 充能满会导致攻击的目标燃烧
3. 充能会发光发热，能导致过热
4. 攻击力随充能线性变化，最高2倍伤害
5. 放水里充能归零，雨天不会充能

【备注】
1. 使用黑曜石可修复1/3耐久
2. 耐久为0会破碎
            `,
            tech: "二本-战斗"
        }, {
            name: "黑曜石甲",
            image: "黑曜石甲.png",
            code: "ndnr_armorobsidian",
            recipe: "黑曜石*5+木甲*1+龙心*1",
            description: `
【充能】
不会被火焰烧伤，受到攻击时攻击对象会被点燃。
使用黑曜石可修复1/3
耐久耐久为0会破碎。
            `,
            tech: "二本-战斗"
        }, {
            name: "合金长矛",
            image: "合金矛.png",
            code: "ndnr_alloyspear",
            recipe: "合金*2+金块*2+木头*2",
            description: `
【充能】
锋利而坚固的长矛。
            `,
            tech: "二本-战斗"
        }, {
            name: "炼钢炉",
            image: "炼钢炉.png",
            code: "ndnr_smelter",
            recipe: "石砖*6+木板*4+红宝石*1",
            description: `
【获取】
瓶罐交易所等级最高是，会解锁炼钢炉蓝图的兑换，需要空瓶子*4。

【功能】
有类似烹饪过得四格物品槽，只有冶炼配方中的物品可以被放进去，是冶炼科技的起点。
冶炼失败（配方不正确）将消耗所有材料，并返还灰烬*1。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "曼德拉丘",
            image: "曼德拉丘.png",
            code: "ndnr_mandrakehouse",
            recipe: "木板*4+曼德拉草*2+活木*6",
            description: `
【介绍】
居住着一位曼德拉长老，曼德拉长老死后一天会生成新的曼德拉长老。（月圆的时候还会对你笑！）
            `,
            tech: "二本-建筑"
        }, {
            name: "高脚鸟巢",
            image: "高脚鸟巢.png",
            code: "tallbirdnest",
            recipe: "高脚鸟蛋*1+草*10+树枝*10",
            description: `
【介绍】
对高脚鸟巢拓印获得制作蓝图
建造一个高脚鸟巢，和野外一样。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "猪人火炬",
            image: "猪人火炬.png",
            code: "pigtorch",
            recipe: "木头*6+粪便*2",
            description: `
【介绍】
对猪人火炬拓印获得制作蓝图
建造一个猪人火炬，和野外一样。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "猎犬丘",
            image: "原版贴图/猎犬丘.png",
            code: "houndmound",
            recipe: "狗王牙*2+猎犬牙齿*6+骨头碎片*4",
            description: `
【介绍】
对猎犬丘拓印获得制作蓝图
建造一个猎犬丘，和野外一样。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "暴躁猴窝",
            image: "原版贴图/暴躁猴窝.png",
            code: "monkeybarrel",
            recipe: "粪便*4+木板*3+香蕉*4",
            description: `
【介绍】
对暴躁猴窝拓印获得制作蓝图
建造一个暴躁猴窝，和洞穴的一样（报仇！偷光它们的香蕉！）。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "龙虾窝",
            image: "原版贴图/龙虾窝.png",
            code: "wobster_den",
            recipe: "活龙虾*2+石头*10+海带干*10",
            description: `
【介绍】
对龙虾窝拓印获得制作蓝图
建造一个龙虾窝，仅可在水面放置。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "月光龙虾窝",
            image: "原版贴图/月光龙虾窝.png",
            code: "moonglass_wobster_den",
            recipe: "月光龙虾*2+石头*10+海带干*10",
            description: `
【介绍】
对月光龙虾窝拓印获得制作蓝图。
仅可在水面放置。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "尖壳蜗牛窝",
            image: "原版贴图/尖壳蜗牛窝.png",
            code: "slurtlehole",
            recipe: "蜗牛粘液*6+壳碎片*2",
            description: `
【介绍】
对尖壳蜗牛窝拓印获得制作蓝图。
建造一个尖壳蜗牛窝，和洞穴的一样。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "空心树桩",
            image: "空心树桩.png",
            code: "catcoonden",
            recipe: "木头*4+树枝*4+猫尾巴*1",
            description: `
【介绍】
谁能拒绝在家养一只可爱的小猫咪呢？
            `,
            tech: "蓝图-建筑"
        }, {
            name: "腐化魔杖",
            image: "腐化魔杖.png",
            code: "ndnr_corruptionstaff",
            recipe: "蘑菇皮*1+拆解魔杖*1+金块*6",
            description: `
【介绍】
微生物门在拆解魔杖的魔力加持下产生了奇妙的效果。
悲惨的毒菌蟾蜍死亡掉落腐化法杖制作蓝图。
装备时右键地面，消耗20点理智，生成一片孢子云（与毒菌蟾蜍技能相同）。
每次施法消耗燃料10%，可使用三色孢子填充燃料，每个孢子填充5%。
耐久为0不会破碎，使用拆解魔杖分解的产物不会有拆解魔杖。
            `,
            tech: "蓝图-魔法"
        }, {
            name: "鲨齿王冠",
            image: "鲨齿王冠.png",
            code: "ndnr_shark_teethhat",
            recipe: "狗王牙*1+金块*1+猎犬牙齿*5",
            description: `
【介绍】
穿戴时不会被各种猎犬、座狼主动攻击。
猎犬们会主动跟随你，并听从你的号令冲锋陷阵。（开局不要急着肃清狗窝呦！）
鲨齿王冠对狗狗们的统率力高于座狼。
使用针线包或可靠的胶带可以修补，每次修复5天耐久（55.56%）
            `,
            tech: "一本-服饰"
        }, {
            name: "流线型帽子",
            image: "流线型帽子.png",
            code: "ndnr_aerodynamichat",
            recipe: "鲨鱼鳍*1+兔毛*2+蜘蛛丝*3",
            description: `
【介绍】
穿戴时移动速度+25%（你看到我的AE86了吗？）
针线包或胶带能一次修补50%耐久
来自鲨鱼的流线外形，让你划破空气，跑的飞快！
            `,
            tech: "一本-服饰"
        }, {
            name: "腐乳",
            image: "腐乳.png",
            code: "ndnr_spice_smelly",
            recipe: "榴莲*3",
            description: `
【介绍】
（仅沃利）可制作，一次制作获得两个。
可将1份调料和1份料理放入便携香料站，2秒后就会让食物调味，调味的食物可以获得对应的加成效果。

腐乳粉末可以使被调味的料理的饱食度回复效果变为1.5倍，精神回复效果变为0.75倍。料理増加前缀：（臭的）
辣椒粉末可以使玩家攻击倍率变为1.2，持续4分钟。料理增加前缀：（辣 Spicy )
蜂蜜粉末可以使玩家砍树，挖矿的效率变为2倍，持续分钟。料理增加前缀：（甜 Sweet )
大蒜粉末可以使玩家少承受1/3的伤害，持续4分钟。料理增加加前缀：（蒜香 Garlic )
盐粉末可以使那个料理的的血量回复效果变为1.25倍。料理増加前缀：（咸的 Salty )
            `,
            tech: "便携研磨器-调料"
        }]
    }
];

export default data;
