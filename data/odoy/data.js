[
  {
    category: "设定",
    child: [
      {
        name: "年龄",
        image: "odoy_age.png",
        description: `
**旺达的年龄本质是血量，与度日如年里的年龄无关**

寿命到头即寿终正寝

#### 人物年龄

除了机器人，恶魔人，植物人，旺达外，其他人物都有年龄属性

| 人物 | 初始年龄 | 最大年龄 |
|---|---|---|
|威尔逊|20|100|
|火女|20|100|
|大力士|20|100|
|温蒂|10|100|
|图书管理员|50|100|
|伍迪|20|100|
|韦斯|20|100|
|老麦|20|100|
|女武神|20|100|
|蜘蛛人|10|100|
|女工|20|100|
|厨子|20|100|
|鱼妹|10|100|
|小男孩|10|100|

所有模组人物均为 20-100 岁

到100岁时会因年迈去世

年龄分为：青年（10/20-50），中年（50-70），老年（70-90）耄耋之年（90-100）

青年工作效率/行走速度为1.25倍，中年工作效率/行走速度为1倍，

老年工作效率/行走速度/攻击伤害为0.75倍，耄耋之年工作效率/行走速度/攻击伤害为0.5倍

老年和耄耋之年因年老有经验，所以手巧（搓东西快）

#### 生物年龄

绝大部分生物也都有年龄，如果超出年龄限制，则会死亡，寿终正寝不会有掉落

怪物也有年龄属性，但不会因为高龄而死亡

| 生物 | 最大年龄 |
|---|---|
|猪人|20|
|兔人|20|
|鱼人|20|
|蜘蛛|5|
|兔子|10|
|青蛙|10|
|猫|15|
|鼹鼠|5|
|蝙蝠|10|
|高鸟|20|
|牛|50|
|象|70|
|羊|20|
|草蜥蜴|10|
|猴子|20|
|石虾|100|
|蜗牛|10|
|无眼鹿|30|
|狗|15|

            `,
      },
      {
        name: "Boss升级",
        image: "odoy_Boss.png",
        description: `
在度日如年里，Boss会越战越勇（Boss是指代码层面有 \`epic\` 标签的生物）

默认boss等级是0，鼠标放在boss身上可看当前boss的等级
每击杀一次，boss就会升一级，无上限

等级对应着boss的血量，伤害，移速，攻速，体型等的变化

| |0级|1级|2级|...|+∞|
|---|---|---|---|---|---|
|血量|-|+10%|+20%|...|+∞|
|伤害|-|+10|+20|...|750|
|移速|-|+10%|+20%|...|10|
|攻速|-|-5%|-10%|...|1.5|
|体型|-|+10%|+20%|...|150%|
|核心|-|+5%|+10%|...|50%|

PS：boss满伤害750，对玩家是375，如果穿着80%抗御的护甲，一巴掌一麦
            `,
      },
      {
        name: "读书",
        image: "odoy_read.png",
        description: `
图书管理员每读一次书都会消耗一年（游戏一天）的寿命
            `,
      },
      {
        name: "回血",
        image: "odoy_blood.png",
        description: `
所有人物均不能再从食物中直接回血了，但所有人物都有自愈能力，身体的自愈受心情（san）影响，心情越好，自愈越快

|san值百分比|自愈速度(hp/10s)|
|---|---|
|>=80%|1|
|>=50%|0.75|
|>=30%|0.5|
|<30%|0.25|
            `,
      },
      {
        name: "配方",
        image: "odoy_peifang.png",
        description: `
部分原版物品的配方有调整

机器人的所有芯片均需要一个电子原件
冰箱，盐箱配方中增加一个电子原件
电子原件：铜块x2+石砖
矿工帽：电子元件x2+草帽+金块x2
            `,
      },
      {
        name: "充电",
        image: "odoy_elec.png",
        description: `
部分原版物品的燃料添加方式更改

矿工帽改为充电站充电，

鼹鼠帽改为充电站充电，

冷手宝、暖手宝的耐久回复方式均为充电站充电

铜剑的耐久回复方式为充电
            `,
      },
    ],
  },
  {
    category: "技能",
    child: [
      {
        name: "务农",
        image: "odoy_wunong.png",
        description: `
收获140个巨大作物后则精通务农，此后照料作物可使作物额外减压

PS：我对的不是话，是哲学！
            `,
      },
      {
        name: "神厨",
        image: "odoy_chushi.png",
        description: `
烹饪64道料理即可成为料理大师

可使用沃利的锅、研磨器和调味站，可制作大厨料理，可以给料理调味

PS：我可是新东方专业厨师！
            `,
      },
      {
        name: "渔翁",
        image: "odoy_diaoyu.png",
        description: `
钓45条鱼能成为钓鱼大师，钓鱼无需等待

PS：愿者上钩~~
            `,
      },
      {
        name: "采集",
        image: "odoy_caiji.png",
        description: `
收集资源500个时，会形成肌肉记忆，动作可立即完成

当人物身上有浆果或者鸡蛋时，周围火鸡会攻击玩家

PS：鸡，也有尊严！
            `,
      },
      {
        name: "战斗",
        image: "odoy_fight.png",
        description: `
500点熟练度时为一级战斗，攻击时有10%打出双倍伤害

1000点熟练度时为二级战斗，攻击时有10%概率打出当前目标5%血量的伤害（远程武器不会触发二级战斗的效果）

击杀血量小于500的生物+1战斗熟练度，500-1000 +5，1000-5000 +10，5000-10000 +20，10000以上 +50

PS：战斗时喊出”暴击“，触发暴击的概率更高哦~
        `,
      },
      {
        name: "年轻不怕失败",
        image: "odoy_death.png",
        description: `
死亡或换人时，所有技能熟练度和年龄都会重置

PS：啊，又要回档了
            `,
      },
    ],
  },
  {
    category: "建筑",
    child: [
      {
        name: "发酵桶",
        image: "odoy_brewingbarrel.png",
        code: "odoy_brewingbarrel",
        recipe: "铜块x2+木板x4",
        tech: "科学二本",
        description: `
可将水果，蔬菜，肉，蛋等发酵
            `,
      },
      {
        name: "土地庙",
        image: "odoy_temple.png",
        code: "odoy_temple",
        recipe: "石砖x4+木板x6+仙桃x1",
        tech: "科学二本",
        description: `
每日提供一个需要料理，如果需要的是普通料理，上贡后年轻半年（半天）

如果需要大厨料理，上贡后年轻1年（1天）

完成当日上贡，继续上贡的话，普通料理年轻1/8年（天），大厨料理年轻1/4年（天）
            `,
      },
      {
        name: "太阳能路灯",
        image: "odoy_citylamp.png",
        code: "odoy_citylamp",
        recipe: "电子元件x2+金块x2+石砖x2",
        tech: "科学二本",
        description: `
白天充电，傍晚和夜里发光，雨天充电速度减半
            `,
      },
      {
        name: "冰柜",
        image: "odoy_icebox.png",
        code: "odoy_icebox",
        recipe: "寒核x1+金块x4+齿轮x2+石砖x2",
        tech: "科学二本",
        description: `
容量3x5的永久保鲜的冰箱

PS：比冰箱更带劲
            `,
      },
      {
        name: "太阳能充电站",
        image: "odoy_chargingstation.png",
        code: "odoy_chargingstation",
        recipe: "金块x4+电子元件x2+石砖x4",
        tech: "科学二本",
        description: `
白天和黄昏充电，黄昏充电效率为白天的一半

PS：绿色无污染
            `,
      },
      {
        name: "青铜鼎",
        image: "odoy_bronzetripod.png",
        code: "odoy_bronzetripod",
        recipe: "铜块x20+金块x10+石砖x4+热核x1",
        tech: "科学二本",
        description: `
可以根据放入的材料批量制作料理，数量多余的食材不会返还

PS：神器鼎，没有买卖就没有伤害，龙蝇受死！
            `,
      },
      {
        name: "水井",
        image: "odoy_oldwell.png",
        code: "odoy_oldwell",
        recipe: "木板x4+木头x4+石砖x6+绳子x3",
        tech: "科学二本",
        description: `
可以取水
            `,
      },
      {
        name: "粉碎机",
        image: "odoy_kibbler.png",
        code: "odoy_kibbler",
        recipe: "木板x2+碎核x1+石砖x6",
        tech: "科学二本",
        description: `
放入粉碎机的物品每2秒消毁一个
            `,
      },
      {
        name: "精炼机",
        image: "odoy_refine.png",
        code: "odoy_refine",
        recipe: "木板x2+筑核x1+石砖x6",
        tech: "科学二本",
        description: `
可将原材料放入，自动加工成成品
            `,
      },
    ],
  },

  {
    category: "物品",
    child: [
      {
        name: "铜块",
        code: "odoy_copper",
        image: "odoy_copper.png",
        description: `
新矿，替代部分金块的功能
可在铜矿地形挖铜矿掉落，或者打发条生物掉落
            `,
      },
      {
        name: "仙桃",
        code: "odoy_peach",
        image: "odoy_peach.png",
        description: `
|饱|精|血|其它|
|---|---|---|---|
|10|33|0|吃下可以年轻一岁|

仙桃也是建造土地庙的主要材料

击杀洞穴的猴子有四分之一的概率掉落

PS：想尝尝飞翔的味道吗？不想，那就等暴乱再去打猴子！
            `,
      },
      {
        name: "沥青路",
        code: "turf_odoy_roadblack",
        image: "turf_odoy_roadblack.png",
        recipe:"噩梦燃料x2+石头x2",
        description: `
纯黑的路，跑在上面加速
            `,
      },
      {
        name: "路标",
        code: "turf_odoy_roadwhite",
        image: "turf_odoy_roadwhite.png",
        recipe:"噩梦燃料x2+石头x2+鸟粪x1",
        description: `
纯白的路，跑在上面加速
            `,
      },
      {
        name: "铜剑",
        code: "odoy_coppersword",
        image: "odoy_coppersword.png",
        recipe:"铜块x2+金块x2+电子元件x1",
        description: `
基础34伤害，有电的情况下会有电击伤害，伤害为51，没电恢复为34，可插入充电站充电
            `,
      },
      {
        name: "暖手宝",
        code: "odoy_handwarmer",
        image: "odoy_handwarmer.png",
        recipe:"水球x2+金块x2+电子元件x1",
        description: `
相当于热暖石，满耐久可用三天，可用充电站充电（会一直消耗电量制热）

PS：长相怪异，但是好用，冬天保暖的不二法门，不要忘记秋天打蚊子
            `,
      },
      {
        name: "冷手宝",
        code: "odoy_handcolder",
        image: "odoy_handcolder.png",
        recipe:"硝石x2+金块x2+电子元件x1",
        description: `
相当于冷暖石，满耐久可用三天，可用充电站充电（会一直消耗电量制冷）

PS：话说冷暖手宝的图标为啥是鱼？
            `,
      },
      {
        name: "水瓶",
        image: "odoy_waterbottleempty.png",
        code: "odoy_waterbottleempty",
        recipe: "月亮碎片x2",
        tech: "科学二本",
        description: `
可以装水，可装海水，海水瓶x4在锅中蒸发可收获4份盐晶

装水后可给地里增加湿度
            `,
      },
      {
        name: "装满水的水瓶",
        image: "odoy_waterbottlefull.png",
        code: "odoy_waterbottlefull",
        recipe:"用水瓶装水",
        description: `
放冰箱会降温，0度以下会变成冰块和空瓶，装满水的水瓶可当水源
            `,
      },
      {
        name: "光心",
        image: "odoy_lightheart.png",
        code: "odoy_lightheart",
        recipe:"光核x1+注能月亮碎片x10+电子元件x2",
        description: `
可改造玩家实现机械飞升，不再受年龄影响，被光心改造的玩家不受月灵敌视，战斗时有1/3概率免伤

可以使用旧神头盔和旧神铠甲

PS：飞升啦，啊哈哈哈~~
            `,
      },
      {
        name: "暗心",
        image: "odoy_darkheart.png",
        code: "odoy_darkheart",
        recipe:"暗核x1+铥矿x10+电子元件x2",
        description: `
可改造玩家实现机械飞升，不再受年龄影响，被暗心改造的玩家战斗会吸血

可以使用诅咒之刃

PS：已经掩饰不住了脸上的笑容了~~
        `,
      },
      {
        name: "诅咒之刃",
        image: "odoy_cursedblade.png",
        code: "odoy_cursedblade",
        recipe:"暗影心房x1+铥矿x4+噩梦燃料x8+75点生命值",
        tech: "完整远古科学站+暗心改造",
        description: `
只有通过暗心改造后的玩家可使用，750基础伤害，拿在手上时玩家会被诅咒且进入疯狂状态

被诅咒之刃杀死的暗影生物不再有掉落物，当玩家处于被诅咒状态时哪怕受一丁点伤都会立即死亡

PS：极致的输出，极致的走位，大佬专属
        `,
      },
      {
        name: "电鱼叉",
        image: "odoy_electricfishfork.png",
        code: "odoy_electricfishfork",
        recipe:"雷核x1+木头x2+电子元件x1",
        description: `
可充电，可对海水放电，将鱼电麻痹，鱼有30秒处于麻痹状态

PS：还是高科技的玩意儿效率高啊
        `,
      },
      {
        name: "旧神头盔",
        image: "odoy_oldgodhelm.png",
        code: "odoy_oldgodhelm",
        recipe:"铜块x4+月岩x4",
        tech:"二级天体灵球+光心改造",
        description: `
防御与耐久均与铥矿帽一样

PS：便宜的头盔
        `,
      },
      {
        name: "旧神护甲",
        image: "odoy_oldgodarmor.png",
        code: "odoy_oldgodarmor",
        recipe:"铜块x6+月岩x6",
        tech:"二级天体灵球+光心改造",
        description: `
防御与耐久均与铥矿甲一样

PS：虽然比头盔贵一半，但是也很便宜
        `,
      },
    ],
  },
  {
    category: "地形",
    child: [
      {
        name: "铜矿",
        code: "odoy_copperore",
        image: "odoy_copperore.png",
        description: `
地面与洞穴均增加一个新地形 - 铜矿地形

地面上的铜矿地形必刷一个虫洞，有小概率会刷高鸟
铜矿是可再生的，每隔10天会尝试刷新铜矿
            `,
      },
    ],
  },
  {
    category: "发酵系统",
    child: [
      {
        name: "果酒",
        image: "odoy_fruitwine.png",
        code: "odoy_fruitwine",
        foodtype: "GOODIES",
        fresh: "无",
        description: `
果度>=4 在发酵桶中发酵5年(游戏5天)即可收获一瓶果酒

|饱|精|血|其它|
|---|---|---|---|
|25|50|0||
            `,
      },
      {
        name: "腌菜",
        image: "odoy_pickle.png",
        code: "odoy_pickle",
        foodtype: "蔬菜",
        fresh: "70天",
        description: `
菜度>=4 在发酵桶中发酵3年(游戏3天)即可收获一瓶腌菜

|饱|精|血|其它|
|---|---|---|---|
|75|5|0||
            `,
      },
      {
        name: "蜂蜜酒",
        image: "odoy_honeywine.png",
        code: "odoy_honeywine",
        foodtype: "GOODIES",
        fresh: "无",
        description: `
发酵桶种放4个蜂蜜,3年（游戏3天）发酵时间后即可收获一瓶蜂蜜酒

|饱|精|血|其它|
|---|---|---|---|
|37.5|33|0||
            `,
      },
      {
        name: "腌肉",
        image: "odoy_bacon.png",
        code: "odoy_bacon",
        foodtype: "肉类",
        fresh: "90天",
        description: `
发酵桶种放3个大肉和一个调味盐,3年（游戏3天）发酵时间后即可收获一个腌肉

|饱|精|血|其它|
|---|---|---|---|
|100|5|0||
            `,
      },
      {
        name: "皮蛋",
        image: "odoy_pidan.png",
        code: "odoy_pidan",
        foodtype: "肉类",
        fresh: "70天",
        description: `
发酵桶种放2个蛋、一个灰烬和一个调味盐,3年（游戏3天）发酵时间后即可收获一个皮蛋

|饱|精|血|其它|
|---|---|---|---|
|25|50|0||
            `,
      },
    ],
  },
  {
    category: "Boss核心",
    child: [
      {
        name: "热核",
        image: "odoy_dragonflycore.png",
        code: "odoy_dragonflycore",
        description: `
击杀龙蝇有概率掉落热核，热核放在地上会对四周释放热量，可在热核上烤食物吃

热核也是青铜鼎的制作材料之一，70天后能量消耗完消失

掉落概率见boss升级

PS：最好不要站到热核上取暖，别问，问就是回档
            `,
      },
      {
        name: "寒核",
        image: "odoy_deerclopscore.png",
        code: "odoy_deerclopscore",
        description: `
击杀独眼巨鹿有概率掉落寒核，寒核放地上会发光且吸热，

寒核也是大冰柜的制作材料之一，70天后能量耗尽消失

掉落概率见boss升级
            `,
      },
      {
        name: "雷核",
        image: "odoy_moosecore.png",
        code: "odoy_moosecore",
        description: `
击杀麋鹿鹅有概率掉落寒核，雷核放地上会引雷，

雷核也是电鱼叉的制作材料之一，70天后能量耗尽消失

掉落概率见boss升级
            `,
      },
      {
        name: "水核",
        image: "odoy_crabkingcore.png",
        code: "odoy_crabkingcore",
        description: `
击杀帝王蟹有概率掉落水核，带在身上会增加潮湿值

扔在地上会给附近农田地皮增加湿度，70天后能量耗尽消失

（攻击帝王蟹有10%概率会被帝王蟹硬壳反伤，反伤5点血）

掉落概率见boss升级
            `,
      },
      {
        name: "光核",
        image: "odoy_alterguardiancore.png",
        code: "odoy_alterguardiancore",
        description: `
击杀天体英雄掉落，发光且会给附近玩家回复精神

可以制作光心，70天后能量耗尽消失

掉落概率见boss升级

PS：这可是好东西
            `,
      },
      {
        name: "暗核",
        image: "odoy_stalkercore.png",
        code: "odoy_stalkercore",
        description: `
击杀暗影编织者掉落，发光且会给附近玩家降低精神

可以制作暗心，70天后能量耗尽消失

掉落概率见boss升级

PS：这也是好东西
            `,
      },
      {
        name: "绿核",
        image: "odoy_leifcore.png",
        code: "odoy_leifcore",
        description: `
击杀树精掉落，放地上会发光，可种植

绿核可镶嵌到未长大的水中木上，立即生长一阶段

70天后能量耗尽消失

掉落概率见boss升级

            `,
      },
      {
        name: "种植的绿核",
        image: "odoy_leifcoredeploy.png",
        code: "odoy_leifcoredeploy",
        description: `
绿核种植后获得，种植后的绿核周围5格地皮范围内有生长阶段的实体每阶段成长时间均缩短一半

70天后能量耗尽消失

掉落概率见boss升级

PS：让作物逐渐疯狂...
            `,
      },
      {
        name: "碎核",
        image: "odoy_beargercore.png",
        code: "odoy_beargercore",
        description: `
击杀熊獾掉落，可制作粉碎机

70天后能量耗尽消失

掉落概率见boss升级
            `,
      },
      {
        name: "筑核",
        image: "odoy_beequeencore.png",
        code: "odoy_beequeencore",
        description: `
击杀蜂王掉落，可制作精炼机，可栽种

70天后能量耗尽消失

掉落概率见boss升级
            `,
      },
      {
        name: "栽种的筑核",
        image: "odoy_beequeencoredeploy.png",
        code: "odoy_beequeencoredeploy",
        description: `
筑核栽种而来，放地上周围5块地皮范围内收获满的蜂箱有10%概率获得蜂王浆

70天后能量耗尽消失

掉落概率见boss升级
            `,
      },
    ],
  },
];
