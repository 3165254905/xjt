const 前缀称号 = `鱼竿
钓鱼
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
const 连接词 = `湖的
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
const 后缀称号 = `鱼竿
钓鱼
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
      试衣间: {
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

const data = JSON.parse(
  convertToJSON(前缀称号, 连接词, 后缀称号, 上装短装, 上装长装, 下装裤装, 下装裙装, 全身衣, 袜子, 鞋子, 帽子),
)
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
