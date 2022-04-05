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
持续放热，保暖效果是暖石的2倍，持续发光，高温，中温，低温三个阶段的光照和范围逐级递减，可引燃附近的可燃物。

可在上面烤食物，10%概率食物被烤成灰烬。

0-20度时为低温，20-50度时为中温，50-90度时为高温。不同温度阶段的外观及发光范围不同，可由龙蝇火炉，篝火等热源加热

低于0度或落入水中时变成1-2个黑曜石
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
        }]
    }
];

export default data;
