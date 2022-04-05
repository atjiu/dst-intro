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
        }]
    }, {
        category: "动作",
        child: [{
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
        child: [{
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
        }]
    }, {
        category: "料理",
        child: [{
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
        }]
    }, {
        category: "料理",
        child: [{
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
        }]
    }, {
        category: "料理",
        child: [{
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
        }]
    }, {
        category: "料理",
        child: [{
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
        }]
    }
];

export default data;
