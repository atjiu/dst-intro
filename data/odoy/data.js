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

**人物死亡后年龄回到初始，技能熟练度清空，改造后的身体也再度回归凡人之躯。**

#### 人物年龄

除了机器人，恶魔人，植物人，旺达外，其他人物都有年龄属性

| 人物 | 初始年龄 | 最大年龄 |
|---|---|---|
|威尔逊|30|100|
|火女|18|100|
|大力士|27|100|
|温蒂|10|100|
|图书管理员|50|100|
|伍迪|35|100|
|韦斯|18|100|
|老麦|40|100|
|女武神|18|100|
|蜘蛛人|10|100|
|女工|25|100|
|厨子|35|100|
|鱼妹|10|100|
|小男孩|13|100|

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
|牛|70|
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
**此设定已移除**

在度日如年里，Boss会越战越勇（Boss是指代码层面有 \`epic\` 标签的生物）

默认boss等级是0，鼠标放在boss身上可看当前boss的等级
每击杀一次，boss就会升一级，无上限

等级对应着boss的血量，伤害，移速，攻速，体型等的变化

| |0级|1级|2级|...|+∞|
|---|---|---|---|---|---|
|血量|-|+10%|+20%|...|+∞|
|伤害|-|+10|+20|...|750|
|移速|-|+10%|+20%|...|10|
|攻速|-|+5%|+10%|...|1.5|
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
        description: `
部分原版物品的燃料添加方式更改

矿工帽改为充电站充电

冷手宝、暖手宝的耐久回复方式均为充电站充电

铜剑的耐久回复方式为充电
            `,
      },
      {
        name: "刷子",
        image: "brush.png",
        description: `
牛因有年龄限制，导致驯牛的作用变的很低

所以增加一下驯牛的速度，刷子刷一下牛能增加20%的驯服度，大约5天左右就能驯好一头牛
        `,
      },
    ],
  },
  {
    category: "生物",
    child: [
      {
        name: "火鸡",
        image: "perd.png",
        description: `
原版火鸡脑子里加了根筋，当玩家身上有浆果或者鸡蛋的话，会发起攻击。

PS：火鸡永生~~
        `
      },
    ]
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

采集如下物品可增加熟练度：树枝，草，浆果，荆棘丛，荧光果，芦苇，苔藓，香蕉，发光浆果
            `,
      },
      {
        name: "战斗",
        image: "odoy_fight.png",
        description: `
战斗熟练度满了后，每次攻击增加普通伤害的25%

击杀血量小于500的生物+1战斗熟练度，500-1000 +5，1000-5000 +10，5000-10000 +20，10000以上 +50

| 怪物血量 | +熟练度 |
| --- | --- |
|>=10000|+50|
|>=5000|+20|
|>=1000|+10|
|>=500|+5|
|<500|+1|
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

配方详见 **发酵系统** 分类
            `,
      },
      {
        name: "太阳能路灯",
        image: "odoy_citylamp.png",
        code: "odoy_citylamp",
        recipe: "电子元件x2+金块x2+石砖x2",
        tech: "科学二本",
        description: `
白天和傍晚充电，傍晚和夜里发光，傍晚和雨天充电速度减半
            `,
      },
      {
        name: "冰柜",
        image: "odoy_icebox.png",
        code: "odoy_icebox",
        recipe: "寒核x1+金块x4+齿轮x2+石砖x2",
        tech: "科学二本",
        description: `
大容量永久保鲜的冰箱

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
白天和黄昏充电，黄昏和雨天充电效率为白天的一半

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
批量做饭，数量多余的食材不会返还

可做大厨料理！

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
永久淡水源
            `,
      },
      {
        name: "粉碎机",
        image: "odoy_kibbler.png",
        code: "odoy_kibbler",
        recipe: "木板x2+碎核x1+石砖x6",
        tech: "科学二本",
        description: `
放入粉碎机的物品每2秒消毁一个，并在地上掉落一个灰烬
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

支持精炼的配方：绳子，木板，石砖，纸，大理石豆，噩梦燃料，熊皮，蜂蜡，带孔月岩，蜂蜜药膏
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
        name: "沥青路",
        code: "turf_odoy_roadblack",
        image: "turf_odoy_roadblack.png",
        recipe: "噩梦燃料x2+石头x2",
        description: `
纯黑的路，跑在上面加速1.3倍
            `,
      },
      {
        name: "路标",
        code: "turf_odoy_roadwhite",
        image: "turf_odoy_roadwhite.png",
        recipe: "噩梦燃料x2+石头x2+鸟粪x1",
        description: `
纯白的路，跑在上面加速1.3倍
            `,
      },
      {
        name: "铜剑",
        code: "odoy_coppersword",
        image: "odoy_coppersword.png",
        recipe: "铜块x2+金块x2+电子元件x1",
        description: `
基础34伤害，有电的情况下会有电击伤害，伤害为51，没电恢复为34，可插入充电站充电
            `,
      },
      {
        name: "暖手宝",
        code: "odoy_handwarmer",
        image: "odoy_handwarmer.png",
        recipe: "水球x1+暖石x1+电子元件x1",
        description: `
相当于热暖石，满耐久可用三天，可用充电站充电（会一直消耗电量制热）

PS：长相怪异，但是好用，冬天保暖的不二法门，不要忘记秋天打蚊子
            `,
      },
      {
        name: "冷手宝",
        code: "odoy_handcolder",
        image: "odoy_handcolder.png",
        recipe: "硝石x2+暖石x1+电子元件x2",
        description: `
相当于冷暖石，满耐久可用三天，可用充电站充电（会一直消耗电量制冷）

PS：话说冷暖手宝的图标为啥是鱼？
            `,
      },
      {
        name: "空水瓶",
        image: "odoy_waterbottleempty.png",
        code: "odoy_waterbottleempty",
        recipe: "月亮碎片x2",
        tech: "科学二本",
        description: `
可以装水，海水

装水后可给地里增加湿度，一瓶水可给一块地湿度+100%
            `,
      },
      {
        name: "水瓶",
        image: "odoy_waterbottlefull.png",
        code: "odoy_waterbottlefull",
        recipe: "用水瓶装水",
        description: `
放冰箱会降温，0度以下会变成冰块和空瓶，装满水的水瓶可当水源

海水瓶x4在锅中蒸发可收获4份盐晶
            `,
      },
      {
        name: "光心",
        image: "odoy_lightheart.png",
        code: "odoy_lightheart",
        recipe: "光核x1+注能月亮碎片x10+电子元件x2",
        description: `
可改造玩家实现机械飞升，不再受年龄影响，被光心改造的玩家不受月灵敌视，战斗时有0.33概率免伤

可以使用旧神头盔和旧神铠甲

改造后年龄固定为改造前的年龄，不升也不降

PS：飞升啦，啊哈哈哈~~
            `,
      },
      {
        name: "暗心",
        image: "odoy_darkheart.png",
        code: "odoy_darkheart",
        recipe: "暗核x1+铥矿x10+电子元件x2",
        description: `
可改造玩家实现机械飞升，不再受年龄影响，被暗心改造的玩家战斗会吸血

可以使用诅咒之刃

改造后年龄固定为改造前的年龄，不升也不降
        `,
      },
      {
        name: "诅咒之刃",
        image: "odoy_cursedblade.png",
        code: "odoy_cursedblade",
        recipe: "暗影心房x1+铥矿x4+噩梦燃料x8+75点生命值",
        tech: "完整远古科学站+暗心改造",
        description: `
只有通过暗心改造后的玩家可使用，68基础伤害,68位面伤害，对月亮阵营额外再增伤50%

当玩家处于被诅咒状态时哪怕受一丁点伤都会立即死亡
        `,
      },
      {
        name: "电鱼叉",
        image: "odoy_electricfishfork.png",
        code: "odoy_electricfishfork",
        recipe: "雷核x1+木头x2+电子元件x1",
        description: `
可充电，可对海水放电，将鱼电麻痹，鱼有30秒处于麻痹状态

PS：还是高科技的玩意儿效率高啊
        `,
      },
      {
        name: "旧神头盔",
        image: "odoy_oldgodhelm.png",
        code: "odoy_oldgodhelm",
        recipe: "铜块x4+月岩x4",
        tech: "二级天体灵球+光心改造",
        description: `
防御与耐久均与铥矿帽一样

PS：便宜的头盔
        `,
      },
      {
        name: "旧神护甲",
        image: "odoy_oldgodarmor.png",
        code: "odoy_oldgodarmor",
        recipe: "铜块x6+月岩x6",
        tech: "二级天体灵球+光心改造",
        description: `
防御与耐久均与铥矿甲一样

PS：虽然比头盔贵一半，但是也很便宜
        `,
      },
      {
        name: "夜视仪",
        image: "odoy_nightvisionsight.png",
        code: "odoy_nightvisionsight",
        recipe: "鼹鼠帽x1+电子元件x2+铜块x2",
        tech: "科学二本",
        description: `
戴上后可夜视，能量为电能，用完可充电，满电能用5天
        `,
      },
      {
        name: "猪脂肪",
        image: "odoy_pigfat.png",
        code: "odoy_pigfat",
        recipe: "",
        tech: "",
        description: `
击杀猪掉落，普通猪掉落物权重：大肉3，猪皮1，脂肪3。
疯猪必掉
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
铜矿是可再生的，每隔20±5天会尝试刷新铜矿
            `,
      },
    ],
  },
  {
    category: "料理",
    child: [
      {
        name: "猪油",
        image: "odoy_lard.png",
        code: "odoy_lard",
        foodtype: "不可食用",
        fresh: "70天",
        description: `
4个 猪脂肪或猪皮 放在锅里可炼出4份猪油 有1单位的脂肪

|饱|精|血|其它|
|---|---|---|---|
|0|0|0|脂肪度x1|
            `,
      },
      {
        name: "花生油",
        image: "odoy_peanutoil.png",
        code: "odoy_peanutoil",
        foodtype: "不可食用",
        fresh: "70天",
        description: `
4个花生在锅中可炼2份花生油

|饱|精|血|其它|
|---|---|---|---|
|0|0|0|脂肪度x1|
            `,
      },
      {
        name: "番茄炒蛋",
        image: "odoy_tomatoegg.png",
        code: "odoy_tomatoegg",
        foodtype: "GOODIES",
        fresh: "10天",
        description: `
配方：番茄，蛋，盐，油

|饱|精|血|其它|
|---|---|---|---|
|37.5|15|0|家常菜|
            `,
      },
      {
        name: "地三鲜",
        image: "odoy_disanxian.png",
        code: "odoy_disanxian",
        foodtype: "GOODIES",
        fresh: "10天",
        description: `
配方：茄子，土豆，辣椒，油

|饱|精|血|其它|
|---|---|---|---|
|37.5|15|0|家常菜|
            `,
      },
      {
        name: "水煮肉片",
        image: "odoy_shuizhurou.png",
        code: "odoy_shuizhurou",
        foodtype: "GOODIES",
        fresh: "10天",
        description: `
配方：水瓶，肉，辣椒，油

|饱|精|血|其它|
|---|---|---|---|
|37.5|15|0|家常菜|
            `,
      },
      {
        name: "土豆丝",
        image: "odoy_tudousi.png",
        code: "odoy_tudousi",
        foodtype: "GOODIES",
        fresh: "10天",
        description: `
配方：土豆，辣椒，盐，油

|饱|精|血|其它|
|---|---|---|---|
|37.5|15|0|家常菜|
            `,
      },
      {
        name: "青椒肉丝",
        image: "odoy_qingjiaorousi.png",
        code: "odoy_qingjiaorousi",
        foodtype: "GOODIES",
        fresh: "10天",
        description: `
配方：辣椒，肉，盐，油

|饱|精|血|其它|
|---|---|---|---|
|37.5|15|0|家常菜|
            `,
      },
      {
        name: "油焖大虾",
        image: "odoy_youmenxiao.png",
        code: "odoy_youmenxiao",
        foodtype: "GOODIES",
        fresh: "10天",
        description: `
配方：虾x2(活虾)，盐，油

|饱|精|血|其它|
|---|---|---|---|
|37.5|15|0|家常菜|
            `,
      },
      {
        name: "肉沫茄子",
        image: "odoy_roumoqiezi.png",
        code: "odoy_roumoqiezi",
        foodtype: "GOODIES",
        fresh: "10天",
        description: `
配方：茄子，肉，盐，油

|饱|精|血|其它|
|---|---|---|---|
|37.5|15|0|家常菜|
            `,
      },
      {
        name: "青椒炒香菇",
        image: "odoy_qingjiaomogu.png",
        code: "odoy_qingjiaomogu",
        foodtype: "GOODIES",
        fresh: "10天",
        description: `
配方：辣椒，蘑菇，盐，油

|饱|精|血|其它|
|---|---|---|---|
|37.5|15|0|家常菜|
            `,
      },
      {
        name: "虾仁玉米",
        image: "odoy_yumixia.png",
        code: "odoy_yumixia",
        foodtype: "GOODIES",
        fresh: "10天",
        description: `
配方：虾(因为是虾仁，所以是死虾)，玉米，盐，油

|饱|精|血|其它|
|---|---|---|---|
|37.5|15|0|家常菜|
            `,
      },
      {
        name: "红烧鸡腿",
        image: "odoy_hongshaojitui.png",
        code: "odoy_hongshaojitui",
        foodtype: "GOODIES",
        fresh: "10天",
        description: `
配方：鸡腿x2，盐，油

|饱|精|血|其它|
|---|---|---|---|
|37.5|15|0|家常菜|
            `,
      },
      {
        name: "宫保鸡丁",
        image: "odoy_gongbaojiding.png",
        code: "odoy_gongbaojiding",
        foodtype: "GOODIES",
        fresh: "10天",
        description: `
配方：鸡腿，玉米，胡萝卜，油

|饱|精|血|其它|
|---|---|---|---|
|37.5|15|0|家常菜|
            `,
      },
    ],
  },
  {
    category: "作物",
    child: [
      {
        name: "花生植株",
        image: "odoy_peanut_plant.png",
        description: `
随机种子可长出花生植株

稀有度：罕见

季节：秋冬作物

属性：水x1，生长素x2，堆肥x-1，粪肥x-1

花生可直接吃，也可用来榨油。花生油是模组料理油脂肪的主要来源。

            `,
      },
      {
        name: "花生",
        image: "odoy_peanut.png",
        code: "odoy_peanut",
        foodtype: "VEGGIE",
        fresh: "6天",
        description: `
花生作物成熟后可获得

可生吃，可烤着吃，可榨油，可入锅当配菜

|饱|精|血|其它|
|---|---|---|---|
|12.5|12.5|0||
            `,
      },
    ],
  },
  {
    category: "彩蛋",
    child: [
      {
        name: "按时吃饭",
        image: "",
        code: "",
        description: `
每天的三个时段的前30%的时间内吃 **家常菜** 即可触发

每天都能按时吃饭，就会有个健康的身体，第二天寿命的流失速度会降为正常的一半，持续 <del>一年</del> 一天时间。

**朋也：游戏即使再好玩，也要按时吃饭哦 :)**
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
3菜度+调味盐 在发酵桶中发酵3年(游戏3天)即可收获一瓶腌菜

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

热核也是青铜鼎的制作材料之一，7.5天后能量消耗完消失

掉落概率20%

PS：最好不要站到热核上取暖，别问，问就是回档
            `,
      },
      {
        name: "寒核",
        image: "odoy_deerclopscore.png",
        code: "odoy_deerclopscore",
        description: `
击杀独眼巨鹿或被寄生巨鹿有概率掉落寒核，寒核放地上会发光且吸热，

寒核也是大冰柜的制作材料之一，7.5天后能量耗尽消失

掉落概率巨鹿10%，被寄生巨鹿30%
            `,
      },
      {
        name: "雷核",
        image: "odoy_moosecore.png",
        code: "odoy_moosecore",
        description: `
击杀麋鹿鹅有概率掉落雷核，雷核放地上会引雷，

雷核也是电鱼叉的制作材料之一，7.5天后能量耗尽消失

掉落概率10%
            `,
      },
      {
        name: "水核",
        image: "odoy_crabkingcore.png",
        code: "odoy_crabkingcore",
        description: `
击杀帝王蟹有概率掉落水核，带在身上会增加潮湿值

扔在地上会给附近农田地皮增加湿度，7.5天后能量耗尽消失

（攻击帝王蟹有10%概率会被帝王蟹硬壳反伤，反伤5点血）

掉落概率20%
            `,
      },
      {
        name: "光核",
        image: "odoy_alterguardiancore.png",
        code: "odoy_alterguardiancore",
        description: `
击杀天体英雄掉落，发光且会给附近玩家回复精神

可以制作光心，7.5天后能量耗尽消失

掉落概率40%

PS：这可是好东西
            `,
      },
      {
        name: "暗核",
        image: "odoy_stalkercore.png",
        code: "odoy_stalkercore",
        description: `
击杀暗影编织者掉落，发光且会给附近玩家降低精神

可以制作暗心，7.5天后能量耗尽消失

掉落概率40%

PS：这也是好东西
            `,
      },
      {
        name: "绿核",
        image: "odoy_leifcore.png",
        code: "odoy_leifcore",
        description: `
击杀树精掉落，放地上会发光，可种在地上

绿核可镶嵌到未长大的水中木上，立即生长一阶段

7.5天后能量耗尽消失

掉落概率5%

            `,
      },
      {
        name: "种植的绿核",
        image: "odoy_leifcoredeploy.png",
        code: "odoy_leifcoredeploy",
        description: `
绿核种在地上的状态，会给周围5格地皮范围内的植物提供生命的力量，植物生长到下阶段会减少一半的生长时间

7.5天后能量耗尽消失

PS：让作物逐渐疯狂...
            `,
      },
      {
        name: "碎核",
        image: "odoy_beargercore.png",
        code: "odoy_beargercore",
        description: `
击杀熊獾或被寄生熊獾掉落，可制作粉碎机

7.5天后能量耗尽消失

掉落概率熊獾20%，被寄生熊獾30%
            `,
      },
      {
        name: "筑核",
        image: "odoy_beequeencore.png",
        code: "odoy_beequeencore",
        description: `
击杀蜂王掉落，可制作精炼机，可栽种

7.5天后能量耗尽消失

掉落概率20%
            `,
      },
      {
        name: "栽种的筑核",
        image: "odoy_beequeencoredeploy.png",
        code: "odoy_beequeencoredeploy",
        description: `
筑核栽种而来，放地上周围5块地皮范围内收获满的蜂箱有50%概率获得蜂王浆

7.5天后能量耗尽消失
            `,
      },
    ],
  },
];
