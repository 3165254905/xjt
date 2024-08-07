const 前缀称号 = `坚固
花朵
园艺
食物
烹饪
鱼竿
钓鱼
友好
燃
外向
感性
务实
有趣
内向
有壳
爱冒险
文艺
理性
佛系
追梦
快乐
搬砖
迷茫
抽象
忧郁
中二
矛盾
知性
破防
浮躁
搞笑
吃瓜
敏感
孤岛
随和
后浪
单身
热血
个性
音痴
宅
率性
超人
学霸
话痨
吃货
百分百
撸铁
猫控
夜猫子
一分
协会
狗控
正能量
摸鱼
小镇
爱好
生活
你
她
朋友
世界
我
助人
一起
开心
他
初到
星空
亲切
礼貌
悠闲
迷糊
独特
朝气
轻松
新鲜
生机
自然
稚嫩
成熟
冷静
美丽
全新
善良
幽默
正直
老旧
顽皮
帅气
勤劳
喜欢
热爱`
const 连接词 = `打造
种下
烧烤
湖的
认识
大
永不
有点
相当
小
特别
比较
守护
永远
挺
蛮
跟
同
和
老旧
追逐
的
与
喜欢
发现
之
全新
热爱
在
到
因为
有关
即
从
就
有益
即便
对于
尽管
是
即使
虽然
也许
可能
无连接词`
const 后缀称号 = `坚固
花朵
园艺
食物
烹饪
鱼竿
钓鱼
宝宝
宅
率性
超人
学霸
孤岛
随和
后浪
话痨
热血
个性
音痴
猫控
狗控
正能量
摸鱼
小镇
吃货
百分百
撸铁
爱好
夜猫子
一分
发展家
朋友
一起
开心
他
迷糊
生活
你
她
新鲜
世界
我
星空
亲切
独特
朝气
轻松
人
生机
自然
游客
旅行者
礼貌
悠闲
居民
少年
少女
大人
创造力
态度
男孩
孩子
信心
尊重
女孩
性格
爱心
理解
新人
少男`
const 上装短装 = `蓝色系工装卫衣
绿色系工装卫衣
棕色系工装卫衣
黑色系工装卫衣
黄色系工装卫衣
青色系拼色吊带背心
紫色系拼色吊带背心
棕色系拼色吊带背心
白色系拼色吊带背心
粉色系拼色吊带背心
灰色系拼色吊带背心
黑色系拼色吊带背心
蓝色系水手风短袖（浅）
蓝色系水手风短袖（深）
白色系水手风短袖`
const 上装长装 = `蓝色系纯色冲锋衣
黑色系纯色冲锋衣
粉色系纯色冲锋衣
棕色系纯色冲锋衣
绿色系纯色冲锋衣
白色系纯色冲锋衣`
const 下装裤装 = `蓝色系水手短裤（浅）
白色系水手短裤
蓝色系水手短裤（深）
白色系阔腿西裤
灰色系阔腿西裤（浅）
棕色系阔腿西裤
灰色系阔腿西裤（深）
蓝色系阔腿西裤
绿色系阔腿西裤
粉色系阔腿西裤
黑色系阔腿西裤`
const 下装裙装 = `红色系草莓碎花短裙
粉色系草莓碎花短裙
白色系草莓碎花短裙
黄色系草莓碎花短裙
黑色系草莓碎花短裙`
const 全身衣 = `蓝色系吊带荷叶连衣裙
棕色系吊带荷叶连衣裙
黑色系吊带荷叶连衣裙
红色系吊带荷叶连衣裙
紫色系吊带荷叶连衣裙
粉色系草莓洛丽塔裙
黑色系草莓洛丽塔裙
蓝色系草莓洛丽塔裙`
const 袜子 = `黄色系菱形中筒袜
粉色系菱形中筒袜
绿色系菱形中筒袜
蓝色系菱形中筒袜
红色系波点花边短袜
黑色系波点花边短袜
白色系波点花边短袜`
const 鞋子 = `黄色系哑光运动鞋
橙色系哑光运动鞋
粉色系哑光运动鞋
黑色系黑白圆头单鞋
蓝色系纯色圆头单鞋（深）
绿色系纯色圆头单鞋
白色系纯色圆头单鞋
黑色系纯色圆头单鞋
棕色系纯色圆头单鞋
黄色系纯色圆头单鞋
蓝色系纯色圆头单鞋（浅）
粉色系纯色圆头单鞋
紫色系纯色圆头单鞋
红色系纯色圆头单鞋
棕色系纯色乐福鞋
粉色系纯色乐福鞋`
const 帽子 = `彩色系菱格头巾（蓝红黄）
彩色系菱格头巾（青红）
彩色系菱格头巾（绿红）
彩色系菱格头巾（紫白）
蓝色系水手贝雷帽
灰色系水手贝雷帽
彩色系水手贝雷帽
黄色系菱格长发发带
棕色系菱格长发发带
粉色系菱格长发发带`

function convertToJSON(prefix, connector, suffix, shortTop, longTop, pants, skirt, fullBody, socks, shoes, hats) {
  return JSON.stringify(
    {
      称号: {
        前缀称号: prefix.split('\n'),
        连接词: connector.split('\n'),
        后缀称号: suffix.split('\n'),
      },
      '试衣间7/21': {
        上装短装: shortTop.split('\n'),
        上装长装: longTop.split('\n'),
        下装裤装: pants.split('\n'),
        下装裙装: skirt.split('\n'),
        全身衣: fullBody.split('\n'),
        袜子: socks.split('\n'),
        鞋子: shoes.split('\n'),
        帽子: hats.split('\n'),
      },
    },
    null,
    2,
  )
}

function calculateCounts(data) {
  const counts = {}
  for (const category in data) {
    counts[category] = {}
    for (const type in data[category]) {
      counts[category][type] = data[category][type].length
    }
  }
  return counts
}

function checkForDuplicates(data) {
  const warnings = []
  for (const category in data) {
    for (const type in data[category]) {
      const items = data[category][type]
      const duplicates = items.filter((item, index) => items.indexOf(item) !== index)
      if (duplicates.length > 0) {
        warnings.push(`${category}中的${type}有重复项：${[...new Set(duplicates)].join('、')}`)
      }
    }
  }
  return warnings
}

/**
 * @file    addSubProperty.js
 * @author  Runfeng Yu
 * @version V1.0
 * @date    22-July-2024
 * @brief   在属性x中添加子属性y，内容为通过z.split('\n')生成的数组
 ******************************************************************************
 * @attention
 *
 * 版权所有 (c) 2024 Runfeng Yu. 保留所有权利。
 *
 * 该函数用于在属性x中添加子属性y，内容为一个数组。
 *
 * 参数:
 *   @param  data 目标对象
 *   @param  x 属性名称
 *   @param  y 子属性名称
 *   @param  z 字符串，以'\n'为分隔符
 *
 * 返回值:
 *   @retval 无返回值
 *
 ******************************************************************************
 */

function addSubProperty(data, x, y, z) {
  // 如果属性x不存在，创建属性x
  if (!data.hasOwnProperty(x)) {
    data[x] = {}
  }

  // 检查子属性y是否已经存在
  if (data[x].hasOwnProperty(y)) {
    throw new Error(`子属性 ${y} 已经存在于属性 ${x} 中`)
  }

  // 将字符串z通过split('\n')划分，并添加为子属性y的值
  data[x][y] = z.split('\n')
}

const data = JSON.parse(
  convertToJSON(前缀称号, 连接词, 后缀称号, 上装短装, 上装长装, 下装裤装, 下装裙装, 全身衣, 袜子, 鞋子, 帽子),
)

addAllSubProperty()

const counts = calculateCounts(data)
const warnings = checkForDuplicates(data)

const app = new Vue({
  el: '#app',
  data: {
    data,
    counts,
    warnings,
  },
})

function addAllSubProperty() {
  addSubProperty(
    data,
    '试衣间7/22',
    '上装短装',
    `蓝色系牛仔休闲夹克（浅）
蓝色系牛仔休闲夹克（深）
黑色系牛仔休闲夹克
灰色系牛仔休闲夹克
白色系牛仔休闲夹克
灰色系户外工装卫衣
绿色系户外工装卫衣（浅）
绿色系户外工装卫衣（深）
棕色系户外工装卫衣
蓝色系竖条纹吊带背心
青色系竖条纹吊带背心
红色系竖条纹吊带背心
黄色系竖条纹吊带背心
紫色系竖条纹吊带背心
橙色系竖条纹吊带背心
棕色系迷彩马甲
绿色系迷彩马甲
灰色系迷彩马甲
蓝色系迷彩马甲`,
  )
  addSubProperty(
    data,
    '试衣间7/22',
    '下装裤装',
    `黑色系纯色七分裤
白色系纯色七分裤
灰色系纯色七分裤
棕色系纯色七分裤
米色系纯色七分裤
绿色系纯色七分裤（深）
绿色系纯色七分裤（浅）
蓝色系纯色七分裤
黄色系纯色七分裤
橙色系纯色七分裤
紫色系纯色七分裤
棕色系简约短裤
蓝色系简约短裤（浅）
绿色系简约短裤
黑色系简约短裤
蓝色系简约短裤（深）
绿色系撞色潮流长裤（绿白蓝）
紫色系撞色潮流长裤
绿色系撞色潮流长裤（绿白红黑）
黑色系撞色潮流长裤
棕色系迷彩短裤
绿色系迷彩短裤
灰色系迷彩短裤
蓝色系迷彩短裤`,
  )
  addSubProperty(
    data,
    '试衣间7/22',
    '全身衣',
    `紫色系童话连衣长裙
蓝色系童话连衣长裙
红色系童话连衣长裙
紫色系花豹背带裤
黄色系花豹背带裤
灰色系花豹背带裤`,
  )
  addSubProperty(
    data,
    '试衣间7/22',
    '袜子',
    `粉色系横条纹过膝长袜（深）
黑色系横条纹过膝长袜
粉色系横条纹过膝长袜（浅）`,
  )
  addSubProperty(
    data,
    '试衣间7/22',
    '鞋子',
    `米色系亮面牛津鞋
粉色系亮面牛津鞋
白色系亮面牛津鞋
红色系玛丽珍鞋
黑色系玛丽珍鞋
粉色系玛丽珍鞋
绿色系玛丽珍鞋
蓝色系玛丽珍鞋
棕色系玛丽珍鞋
白色系玛丽珍鞋
青色系玛丽珍鞋
绿色系一脚蹬
米色系一脚蹬
蓝色系一脚蹬
棕色系一脚蹬
黄色系一脚蹬`,
  )
  addSubProperty(
    data,
    '试衣间7/22',
    '帽子',
    `红色系草莓贝雷帽
粉色系草莓贝雷帽
紫色系草莓贝雷帽
黄色系草莓贝雷帽
黑色系草莓贝雷帽
蓝色系反戴棒球帽（深）
红色系反戴棒球帽
绿色系反戴棒球帽
棕色系反戴棒球帽
蓝色系反戴棒球帽（浅）
粉色系反戴棒球帽
紫色系花纹带爵士帽
灰色系花纹带爵士帽
米色系花纹带爵士帽`,
  )
  addSubProperty(
    data,
    '衣柜',
    '上装',
    `黄色系“震惊”格子衬衣
蓝色系牛仔休闲夹克（浅）
白色系休闲西装
白色系Taptap标志短袖
黄色系橘子短袖`,
  )
  addSubProperty(
    data,
    '衣柜',
    '下装',
    `黑色系格子潮流长裤
黑色系纯色七分裤
蓝色系格子休闲长裤
黄色系橘子阔腿裤`,
  )
  addSubProperty(
    data,
    '衣柜',
    '袜子',
    `粉色系横条纹过膝长袜（深）
蓝色系麻花中筒袜`,
  )
  addSubProperty(
    data,
    '衣柜',
    '鞋子',
    `白色系板鞋
米色系一脚蹬
棕色系探险家短靴`,
  )
  addSubProperty(
    data,
    '衣柜',
    '帽子',
    `蓝色系反戴棒球帽（浅）
美式复古绿色系酷帅头盔
青色系猫耳发卡`,
  )
  addSubProperty(data, '衣柜', '面饰', `绿色系树叶`)
  addSubProperty(
    data,
    '金橡果展演',
    '玫瑰时光-俊雅',
    `萤月花火效果玫瑰时光宫廷风玫瑰香薰提灯
玫瑰时光宫廷风黄色系花园骑士华服
玫瑰时光宫廷风黄色系花园骑士下装
玫瑰时光宫廷风黄色系玫瑰荣誉绶带
玫瑰时光宫廷风气质微卷短发
英气吊眼
专注
玫瑰时光宫廷风黄色系暖阳瑰花之冠
玫瑰时光宫廷风黄色系光华玫瑰眼罩
玫瑰时光宫廷风黄色系瓣叶骑士袜
玫瑰时光宫廷风黄色系骑士礼仪皮鞋`,
  )
  addSubProperty(
    data,
    '金橡果展演',
    '玫瑰时光-庭院',
    `风起花落效果玫瑰时光宫廷风玫瑰秋千
玫瑰时光宫廷风玫瑰亭
玫瑰时光宫廷风玫瑰情人榻
玫瑰时光宫廷风玫瑰情人桥
玫瑰时光宫廷风庄园玫瑰船
玫瑰时光宫廷风瑰花留声机
玫瑰时光宫廷风玫瑰方形水池
玫瑰时光宫廷风玫瑰弯角水池
玫瑰时光宫廷风瑰花满池
玫瑰时光宫廷风瑰花小型喷泉
建造许可：庄园四坡屋顶
建造许可：庄园扇形露台
建造许可：庄园玫瑰大门
建造许可：庄园人字屋顶
建造许可：庄园飘窗
建造许可：庄园玫瑰主门
建造许可：庄园大型弧形窗
建造许可：庄园花盆围墙
建造许可：庄园旋转长楼梯（左）
建造许可：庄园旋转长楼梯（右）
玫瑰时光宫廷风玫瑰蜡烛灯
玫瑰时光宫廷风大型玫瑰花瓣堆`,
  )
  addSubProperty(
    data,
    '家具',
    '已拥有',
    `拼木单人床2
拼木床头柜3
拼木台灯2
拼木椅子2
拼木衣柜1
拼木落地灯1
拼木茶几1
拼木单人沙发1
拼木双人沙发1
拼木壁柜1
拼木落地镜1
工匠台1
中号玩具熊1
小型鱼缸3
中型鱼缸2
小型生态箱3
中型生态箱1
圆形吸顶灯2
方形吸顶灯1
多肉盆栽1
虎皮兰3
底座琴叶榕1
底座绿萝1
面包机1
蝴蝶结玫瑰壁灯1
玫瑰花园灯1
玫瑰挂饰1
玫瑰情人桥1
木纤地毯1
半圆丝带印花地毯1
方形丝带印花地毯1
瑰花香薰蜡烛1
菜地12
小摩托停车位2
小轿车停车位1
敞篷车停车位1
极简木制壁灯1
灶台1
钢琴1
薄荷糖圆餐桌1
薄荷糖餐椅2
薄荷糖落地灯1
薄荷糖双人沙发1
薄荷糖橱柜2
薄荷糖洗手池1
薄荷糖单人沙发2
薄荷糖碗橱柜1
薄荷糖壁柜1
薄荷糖转角壁柜1
薄荷糖碗碟架1
薄荷糖角柜1
薄荷糖簇绒装饰画1
薄荷糖水壶1
木质鸟站架1
海洋风壁柜1
风筝（红蓝绿黄）6
风筝（灰白棕）1
简易猫窝1
藤编猫窝1
花朵猫窝1
中号壁挂花框1
小号花坛1
方形花坛1
水鸟池塘1
简约马桶1
幸运星运动会颁奖台1
幸运星运动会水滴旗2
简约浴缸1
乡村壁挂碗碟架1
复古落地钟1
鸭鸭全家福挂画1
海洋风挂饰1
塑料眼睛小冰箱1
简易木纤地毯1
瓷茶壶组1
模型帆船1
极简手提灯套装1
简约吊灯1`,
  )
  addSubProperty(
    data,
    '家具',
    '可摆放位置',
    `窗台
屋内
房子左侧花园`,
  )
  addSubProperty(
    data,
    '家具',
    '可购买8/8',
    `简约浴缸
棕色简约洗手台
简约马桶
简约淋浴间
底座绿萝（有挂环）
底座绿萝
白色短绒中号地毯
深蓝色简约圆形地毯
棕色简约圆形地毯
灰色简约圆形地毯
蓝色简约圆形地毯
浴室置物架
简约吊灯
北欧风吊灯
工业风凳子
LED线灯条
蜂蜜小桌
极简扶手椅
乡村碗橱柜
乡村洗手池
乡村橱柜
乡村餐桌
乡村餐椅（古铜色）
乡村餐椅（绿色）
乡村吧台
乡村吧台凳
乡村调料盒
乡村转角壁柜
乡村壁柜
乡村壁挂碗碟架
乡村餐具
乡村托盘
乡村花环
电热水壶
咖啡机
底座吊兰
彩绘玻璃灯
杂色田园地毯
球形灌木
草丛
扇形灌木
小型柏树
蓝色绣球
粉色绣球
针叶树
扇掌棕榈树`,
  )
  addSubProperty(data, '建材', '地板', `地板`)
  addSubProperty(
    data,
    '建材',
    '墙壁',
    `墙
半墙
矮墙`,
  )
  addSubProperty(
    data,
    '建材',
    '门',
    `拼木对开门
拼木平开门
乡村平开门
木质大型平开门
金属格子对开门
庄园阳台对开门`,
  )
  addSubProperty(
    data,
    '建材',
    '窗',
    `拼木平开窗
拼木竖条窗
拼木单扇对开窗
拼木双扇对开窗
乡村弧形对开窗
乡村弧形窗
木质双扇窗
木质单扇窗
木质瓦片飘窗
金属工业飘窗
金属落地窗
金属格子对开窗
乡村茅草飘窗
庄园玫瑰舷窗`,
  )
  addSubProperty(
    data,
    '建材',
    '屋顶',
    `木质瓦片屋顶
乡村茅草屋顶
金属工业屋顶`,
  )
  addSubProperty(
    data,
    '建材',
    '围栏',
    `绳索护栏
乡村木栅栏
木制尖桩围栏
木质护栏
金属护栏
原木桩围栏
欧式护栏
木质交叉栅栏
公园栅栏`,
  )
  addSubProperty(
    data,
    '建材',
    '楼梯',
    `乡村矮楼梯
欧式矮楼梯
金属矮楼梯
木质矮楼梯
庄园矮楼梯
庄园楼梯扶手`,
  )
  addSubProperty(
    data,
    '建材',
    '柱子',
    `石灰面烟囱
金属帽烟囱
木质细柱
金属转角柱
木质转角柱`,
  )
  addSubProperty(data, '粉刷', '墙壁', `庄园浮雕墙壁`)
  addSubProperty(data, '粉刷', '地板', `蝴蝶结大理石地砖`)
  addSubProperty(data, '粉刷', '天花板', `普通天花板`)
  addSubProperty(
    data,
    '制作书',
    '可制作家具',
    `拼木单人床
工匠台
拼木椅子
拼木衣柜
拼木桌子
拼木台灯
海洋风壁柜
收藏家扶手椅
海洋风橱柜
拼木茶几
拼木边桌
拼木凳子
灶台
海洋风椅子
圆形吸顶灯
方形吸顶灯`,
  )
  addSubProperty(
    data,
    '试衣间8/5',
    '上装短装',
    `沙滩乐园季橙色系小黄鸭短袖
沙滩乐园季粉色系小黄鸭短袖
沙滩乐园季蓝色系小黄鸭短袖
沙滩乐园季绿色系小黄鸭短袖
黑色系皮夹克
棕色系皮夹克
米色系皮夹克
棕色系棋盘纹风衣
白色系纯色短风衣
米色系纯色短风衣（深）
米色系纯色短风衣（浅）
灰色系纯色短风衣
棕色系纯色短风衣
蓝色系纯色短风衣
红色系纯色短风衣
紫色系扎染吊带背心（浅）
绿色系扎染吊带背心
紫色系扎染吊带背心（深）
橙色系扎染吊带背心
蓝色系扎染吊带背心
棕色系扎染吊带背心
蓝色系条纹领带西装（浅）
绿色系条纹领带西装
蓝色系条纹领带西装（深）
棕色系条纹领带西装
彩色系扎染连帽卫衣（红蓝白）
灰色系扎染连帽卫衣
彩色系扎染连帽卫衣（紫绿蓝白）`,
  )
  addSubProperty(
    data,
    '试衣间8/5',
    '上装长装',
    `紫色系迷彩冲锋衣
米色系迷彩冲锋衣（深）
粉色系迷彩冲锋衣
米色系迷彩冲锋衣（浅）
蓝色系迷彩冲锋衣`,
  )
  addSubProperty(
    data,
    '试衣间8/5',
    '下装裤装',
    `沙滩乐园季黄色系休闲短裤
沙滩乐园季粉色系休闲短裤
沙滩乐园季蓝色系休闲短裤
沙滩乐园季绿色系休闲短裤
沙滩乐园季彩色系夏日花朵短裤（绿黄红黑）
沙滩乐园季彩色系夏日花朵短裤（深蓝黄红）
沙滩乐园季彩色系夏日花朵短裤（黄红粉白）
沙滩乐园季彩色系夏日花朵短裤（紫黄红）
沙滩乐园季彩色系夏日花朵短裤（青黄红）
沙滩乐园季彩色系夏日花朵短裤（浅蓝黄红）
沙滩乐园季彩色系夏日花朵短裤（绿黄红）
沙滩乐园季彩色系夏日花朵短裤（黄红粉）
沙滩乐园季彩色系夏日花朵短裤（黄橙红）
黄色系篮球短裤
蓝色系篮球短裤（深）
紫色系篮球短裤
红色系篮球短裤
绿色系篮球短裤
黑色系篮球短裤
白色系篮球短裤
蓝色系篮球短裤（浅）
粉色系篮球短裤
棕色系迷彩短裤
绿色系迷彩短裤
灰色系迷彩短裤
蓝色系迷彩短裤
灰色系牛仔短裤
蓝色系牛仔短裤
黄色系正装铅笔裤
橙色系正装铅笔裤
粉色系正装铅笔裤
蓝色系正装铅笔裤
彩色系扎染短裤（紫蓝白）
灰色系扎染短裤
彩色系扎染短裤（紫蓝绿白）`,
  )
  addSubProperty(
    data,
    '试衣间8/5',
    '下装裙装',
    `白色系包臀短裙
灰色系包臀短裙（浅）
棕色系包臀短裙
灰色系包臀短裙（深）
蓝色系包臀短裙
绿色系包臀短裙
粉色系包臀短裙
黑色系包臀短裙`,
  )
  addSubProperty(
    data,
    '试衣间8/5',
    '全身衣',
    `红色系田园波点连衣裙
绿色系田园波点连衣裙
红色系英伦淑女长裙
粉色系英伦淑女长裙
棕色系英伦淑女长裙
绿色系英伦淑女长裙`,
  )
  addSubProperty(
    data,
    '试衣间8/5',
    '袜子',
    `粉色系花边短袜
红色系提花紧身丝袜
黑色系提花紧身丝袜
紫色系提花紧身丝袜
绿色系提花紧身丝袜`,
  )
  addSubProperty(
    data,
    '试衣间8/5',
    '鞋子',
    `沙滩乐园季白色系撞色人字拖（白红）
沙滩乐园季黑色系撞色人字拖
沙滩乐园季蓝色系撞色人字拖（浅）
沙滩乐园季蓝色系撞色人字拖（深）
沙滩乐园季绿色系撞色人字拖
沙滩乐园季白色系撞色人字拖（白粉）
沙滩乐园季红色系撞色人字拖
沙滩乐园季紫色系撞色人字拖
沙滩乐园季黄色系撞色人字拖
沙滩乐园季青色系撞色人字拖
彩色系活泼篮球鞋（浅蓝棕）
彩色系活泼篮球鞋（粉棕）
彩色系活泼篮球鞋（深蓝棕）
彩色系活泼篮球鞋（绿白紫）
彩色系活泼篮球鞋（黄黑白）
彩色系活泼篮球鞋（蓝灰粉）
粉色系亮面运动鞋
蓝色系亮面运动鞋
红色系亮面运动鞋
绿色系亮面运动鞋
黑色系亮面运动鞋
黄色系亮面运动鞋
灰色系哑光牛津鞋
棕色系哑光牛津鞋（浅）
红色系哑光牛津鞋
棕色系哑光牛津鞋（深）
蓝色系洞洞鞋
白色系洞洞鞋
绿色系洞洞鞋`,
  )
  addSubProperty(
    data,
    '试衣间8/5',
    '帽子',
    `灰色系针织帽（浅）
蓝色系针织帽
绿色系针织帽
红色系针织帽
灰色系针织帽（深）
黑色系针织帽
彩色系菱格头巾（蓝红黄）
彩色系菱格头巾（青红）
彩色系菱格头巾（绿红）
彩色系菱格头巾（紫白）
紫色系童话平顶帽
蓝色系童话平顶帽
红色系童话平顶帽
棕色系绅士爵士帽
红色系绅士爵士帽（深）
红色系绅士爵士帽（浅）
彩色系扎染渔夫帽（红蓝白）
彩色系扎染渔夫帽（灰白）
彩色系扎染渔夫帽（紫绿白）`,
  )
  addSubProperty(
    data,
    '试衣间8/5',
    '眼镜',
    `沙滩乐园季绿色系粗框太阳镜
沙滩乐园季红色系粗框太阳镜
沙滩乐园季黄色系粗框太阳镜
沙滩乐园季黑色系粗框太阳镜
沙滩乐园季粉色系粗框太阳镜
沙滩乐园季蓝色系粗框太阳镜（蓝色镜片）
沙滩乐园季蓝色系粗框太阳镜（绿色镜片）
沙滩乐园季紫色系粗框太阳镜
沙滩乐园季青色系粗框太阳镜`,
  )
  addSubProperty(data, '试衣间8/5', '嘴饰', `黄色系棒棒糖`)
  addSubProperty(
    data,
    '试衣间8/5',
    '耳饰',
    `粉色系球形耳钉
红色系球形耳钉
紫色系球形耳钉`,
  )
  addSubProperty(
    data,
    '试衣间8/5',
    '背包',
    `红色系心形挎包
白色系心形挎包
黑色系心形挎包`,
  )
}
