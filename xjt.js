let ways = [
  { type: 'foot', from: '越新公寓', to: '景泰嘉苑', m: '10' },
  {
    type: 'bus',
    from: '景泰嘉苑',
    to: '绍兴北站公交站',
    m: '50',
    start: ['6:50', '7:15', '7:35', '7:55', '8:25', '8:45'],
  },
  { type: 'foot', from: '绍兴北站公交站', to: '绍兴北火车站', m: '10' },
  {
    type: 'railway',
    from: '绍兴北火车站',
    to: '温州南火车站',
    way: [
      { start: '6:52', end: '9:52' },
      { start: '7:41', end: '9:59' },
      { start: '7:51', end: '10:33' },
      { start: '8:00', end: '10:58' },
      { start: '8:10', end: '10:44' },
      { start: '8:28', end: '11:05' },
      { start: '8:42', end: '11:29' },
      { start: '8:58', end: '11:48' },
    ],
  },
  {
    type: 'foot',
    from: '温州南火车站',
    to: '火车南站公交枢纽',
    m: 20,
  },
  {
    type: 'bus',
    from: '火车南站公交枢纽',
    to: '吾邻路口',
    m: 25,
    start: ['11:02', '11:07', '11:14', '11:20', '11:26', '11:31', '11:37', '11:44', '11:50', '11:56', '12:04'],
  },
  {
    type: 'foot',
    from: '吾邻路口',
    to: 'Meaning Space意空间',
    m: 5,
    eat: true,
    mustbeentime: '13:00',
  },
  { type: 'main', name: '温州·【瓯越偶像日Vol06】CrossingX意次元·Idol Live', start: '13:00', end: '17:00', eat: true },
  {
    type: 'foot',
    to: '吾邻路口',
    from: 'Meaning Space意空间',
    m: 5,
  },
  {
    type: 'bus',
    to: '火车南站公交枢纽',
    from: '吾邻路口',
    m: 25,
    beizhu: 35,
    start: [
      '17:41',
      '17:47',
      '17:52',
      '17:58',
      '18:04',
      '18:09',
      '18:15',
      '18:19',
      '18:24',
      '18:34',
      '18:42',
      '18:47',
      '18:51',
      '18:56',
      '19:02',
    ],
  },
  {
    type: 'foot',
    to: '温州南火车站',
    from: '火车南站公交枢纽',
    m: 5,
  },
  {
    type: 'railway',
    to: '绍兴北火车站',
    from: '温州南火车站',
    way: [
      { start: '20:14', end: '22:28' },
      { start: '19:47', end: '21:59' },
      { start: '18:56', end: '21:35' },
      { start: '18:34', end: '21:12' },
      { start: '19:28', end: '21:03' },
    ],
  },
  { type: 'foot', to: '绍兴北站公交站', from: '绍兴北火车站', m: '20' },
  {
    type: 'bus',
    to: '鲁迅高级中学东门',
    from: '绍兴北站公交站',
    m: '45',
    start: ['20:15', '20:35', '21:05', '21:35', '22:05', '22:35'],
  },
  { type: 'foot', to: '越新公寓', from: '鲁迅高级中学东门', m: '25', mustbeentime: '23:00' },
]
let config = {
  name: { val: '越新公寓 - 瓯越偶像日', meaning: '保存文件名称' },
  wakeUpPreparationTime: { val: 40, meaning: '起床准备时间(m)' },
  preventMissingHighSpeedRailTime: { val: 15, meaning: '防止错过高铁时间(m)' },
  mealTime: { val: 40, meaning: '吃饭时间(m)' },
}
const updateLog = [
  { date: '2024-05-20', content: '新增了数据管理界面，支持导入导出数据功能。' },
  { date: '2024-05-22', content: '修复了导入数据时可能出现的错误。' },
  { date: '2024-05-25', content: '优化了界面美观度，增加了更新日志界面。' },
]
// 定义支持作者的数据数组
const supportData = [
  // { name: '鸡你太美', amount: '0.3', message: '大佬加油啊，希望能加上权重', feedback: '已加' },
  // 可以继续添加更多数据
]
// console.log(ways1)

// const way = [
//   { type: 'foot', from: '越新公寓', to: '景泰嘉苑', m: '10' },
//   {
//     type: 'bus',
//     from: '景泰嘉苑',
//     to: '绍兴北站公交站',
//     m: '50',
//     start: ['6:50', '7:15', '7:35', '7:55', '8:25', '8:45'],
//   },
//   { type: 'foot', from: '绍兴北站公交站', to: '绍兴北火车站', m: '10' },
//   {
//     type: 'railway',
//     from: '绍兴北火车站',
//     to: '温州南火车站',
//     way: [
//       { start: '6:52', end: '9:52' },
//       { start: '7:41', end: '9:59' },
//       { start: '7:51', end: '10:33' },
//       { start: '8:00', end: '10:58' },
//       { start: '8:10', end: '10:44' },
//       { start: '8:28', end: '11:05' },
//       { start: '8:42', end: '11:29' },
//       { start: '8:58', end: '11:48' },
//     ],
//   },
//   {
//     type: 'foot',
//     from: '温州南火车站',
//     to: '火车南站公交枢纽',
//     m: 20,
//   },
//   {
//     type: 'bus',
//     from: '火车南站公交枢纽',
//     to: '吾邻路口',
//     m: 25,
//     start: ['11:02', '11:07', '11:14', '11:20', '11:26', '11:31', '11:37', '11:44', '11:50', '11:56', '12:04'],
//   },
//   {
//     type: 'foot',
//     from: '吾邻路口',
//     to: 'Meaning Space意空间',
//     m: 5,
//   },
// ]
const result = []
const paths = []
const updatedPaths = []
let minTime
let startTime
function render() {
  const ways1 = []
  let temp = []
  paths.length = 0
  for (const item of ways) {
    if (item.type === 'main') {
      if (temp.length > 0) {
        ways1.push(temp)
        temp = []
      }
      ways1.push([item])
    } else if (item.mustbeentime) {
      temp.push(item)
      ways1.push(temp)
      temp = []
    } else {
      temp.push(item)
    }
  }

  if (temp.length > 0) {
    ways1.push(temp)
  }
  result.length = 0
  for (let j = 0; j < ways1.length; j++) {
    let haslunch = false
    let shouldlunch = false
    const way = ways1[j]
    const lastItem = way[way.length - 1]
    const hasMustBeEntime = lastItem && lastItem.mustbeentime !== undefined
    if (way[0].type === 'main') {
      startTime = way[0].start
      const endTime = way[0].end
      timeInit()
      if (j == 0) {
        const go = subtractMinutesFromTime(time, config.wakeUpPreparationTime.val)
        result.push({
          type: 'getup',
          path: `起床准备`,
          go,
          arrive: time,
          past: calculateTimeDifferenceAsString(go, time),
        })
      }
      result.push({
        type: 'foot',
        path: `入场`,
        go: time,
        arrive: startTime,
        past: calculateTimeDifferenceAsString(time, startTime),
      })
      result.push({
        type: 'main',
        path: way[0].name,
        go: startTime,
        arrive: endTime,
        past: calculateTimeDifferenceAsString(startTime, endTime),
      })
      time = endTime
      if (way[0].eat === true) {
        shouldlunch = false
        const go = time
        time = subtractMinutesFromTime(time, -config.mealTime.val)
        const arrive = time
        result.push({
          type: 'eat',
          path: `吃饭`,
          go,
          arrive,
          past: calculateTimeDifferenceAsString(go, arrive),
        })
      }
      paths.push(...result)
      result.length = 0
      continue
    }
    if (hasMustBeEntime) time = lastItem.mustbeentime
    for (let i = way.length - 1; i >= 0; i--) {
      if (haslunch === true) {
        haslunch = '吃过啦'
        const arrive = time
        time = subtractMinutesFromTime(time, config.mealTime.val)
        const go = time
        result.push({ path: `吃饭`, go, arrive, past: calculateTimeDifferenceAsString(go, arrive) })
      }
      if (way[i].type === 'foot') {
        const arrive = time
        time = subtractMinutesFromTime(time, way[i].m)
        const go = time
        result.push({
          path: `${way[i].from}-${way[i].to}`,
          go,
          arrive,
          past: calculateTimeDifferenceAsString(go, arrive),
        })
      }
      if (way[i].type === 'bus') {
        const lastTime = time
        time = subtractMinutesFromTime(time, way[i].m)
        const go = findMaxTimeBeforeEndTime(way[i].start, time)
        time = go
        const arrive = subtractMinutesFromTime(go, -way[i].m)
        result.push({
          path: `公交车空闲时间`,
          go: arrive,
          arrive: lastTime,
          past: calculateTimeDifferenceAsString(arrive, lastTime),
        })
        result.push({
          path: `${way[i].from}-${way[i].to}`,
          go,
          arrive,
          past: calculateTimeDifferenceAsString(go, arrive),
        })
      }
      if (way[i].type === 'railway') {
        const go = findLatestEndTimeBeforeGivenTime(way[i].way, time)
        const index = findLatestEndTimeIndexBeforeGivenTime(way[i].way, time)
        const arrive = way[i].way[index].end
        time = subtractMinutesFromTime(go, 15)
        result.push({
          path: `${way[i].from}-${way[i].to}`,
          go,
          arrive,
          past: calculateTimeDifferenceAsString(go, arrive),
        })
      }
      if (way[i].eat === true && haslunch !== '吃过啦') {
        haslunch = true
        shouldlunch = true
        i = way.length
        result.length = 0
      }
    }
    // 对数组按时间排序
    result.sort((a, b) => {
      // 提取出发时间的小时和分钟
      const [aHours, aMinutes] = a.go.split(':').map(Number)
      const [bHours, bMinutes] = b.go.split(':').map(Number)

      // 按小时排序
      if (aHours !== bHours) {
        return aHours - bHours
      }

      // 如果小时相同，按分钟排序
      return aMinutes - bMinutes
    })
    result.length = 0
    if (j == 0) {
      const go = subtractMinutesFromTime(time, config.wakeUpPreparationTime.val)
      result.push({
        type: 'getup',
        path: `起床准备`,
        go,
        arrive: time,
        past: calculateTimeDifferenceAsString(go, time),
      })
    }

    if (shouldlunch && isTimeBeforeSpecificTime('12:00', time)) {
      shouldlunch = false
      const go = time
      time = subtractMinutesFromTime(time, -config.mealTime.val)
      const arrive = time
      result.push({
        type: 'eat',
        path: `吃饭`,
        go,
        arrive,
        past: calculateTimeDifferenceAsString(go, arrive),
      })
    }
    for (let i = 0; i < way.length; i++) {
      // console.log(i, way.length)
      if (way[i].type === 'foot') {
        const go = time
        time = subtractMinutesFromTime(time, -way[i].m)
        const arrive = time
        result.push({
          type: 'foot',
          path: `${way[i].from}-${way[i].to}`,
          go,
          arrive,
          past: calculateTimeDifferenceAsString(go, arrive),
        })
      }
      if (way[i].type === 'bus') {
        const go = subtractMinutesFromTime(findMinTimeAfterStartTime(way[i].start, time), 0)
        const arrive = subtractMinutesFromTime(go, -way[i].m)
        if (isTimeBeforeSpecificTime(time, go))
          result.push({
            type: 'wait',
            path: `等公交车`,
            go: time,
            arrive: go,
            past: calculateTimeDifferenceAsString(time, go),
          })
        time = arrive
        result.push({
          type: 'bus',
          path: `${way[i].from}-${way[i].to}`,
          go,
          arrive,
          past: calculateTimeDifferenceAsString(go, arrive),
        })
      }
      if (way[i].type === 'railway') {
        const startList = way[i].way.map((it) => it.start)
        const lastTime = time
        time = subtractMinutesFromTime(time, -config.preventMissingHighSpeedRailTime.val)
        result.push({
          type: 'wait',
          path: `防止错过高铁`,
          go: lastTime,
          arrive: time,
          past: calculateTimeDifferenceAsString(lastTime, time),
        })
        const arrive = subtractMinutesFromTime(findEarliestStartTimeAfterGivenTime(way[i].way, time), 0)
        const index = findEarliestStartTimeIndexAfterGivenTime(way[i].way, time)
        const go = way[i].way[index].start
        if (isTimeBeforeSpecificTime(time, go))
          result.push({
            type: 'wait',
            path: `等高铁`,
            go: time,
            arrive: go,
            past: calculateTimeDifferenceAsString(time, go),
          })
        time = arrive
        result.push({
          type: 'railway',
          path: `${way[i].from}-${way[i].to}`,
          go,
          arrive,
          past: calculateTimeDifferenceAsString(go, arrive),
        })
      }
      if (way[i].eat === true && haslunch !== '吃过啦') {
        haslunch = true
        i = way.length
        result.length = 0
        timeInit()
      }
    }
    if (shouldlunch && isTimeBeforeSpecificTime(time, '12:00')) {
      shouldlunch = false
      const go = time
      time = subtractMinutesFromTime(time, -config.mealTime.val)
      const arrive = time
      result.push({
        type: 'eat',
        path: `吃饭`,
        go,
        arrive,
        past: calculateTimeDifferenceAsString(go, arrive),
      })
    }
    paths.push(...result)
    if (result.length === 0) console.log(way)
    result.length = 0
  }
  updatedPaths.length = 0
  for (let i = 0; i < paths.length; i++) {
    const currentPath = paths[i]
    if (i > 0) {
      const previousPath = paths[i - 1]
      if (isTimeBeforeSpecificTime(previousPath.arrive, currentPath.go)) {
        const past = calculateTimeDifferenceAsString(previousPath.arrive, currentPath.go)
        const freeTime = {
          path: '空闲',
          type: 'free',
          go: previousPath.arrive,
          arrive: currentPath.go,
          past: past,
        }
        updatedPaths.push(freeTime)
      }
    }
    updatedPaths.push(currentPath)
  }
  console.log(updatedPaths)
}
render()

// time = endTime
// if (isTimeBeforeSpecificTime('16:00', time)) {
//   const go = time
//   time = subtractMinutesFromTime(time, -40)
//   const arrive = time
//   result.push({
//     type: 'eat',
//     path: `吃饭`,
//     go,
//     arrive,
//     past: calculateTimeDifferenceAsString(go, arrive),
//   })
// }
const eatedTime = time
const way2 = [
  { type: 'foot', to: '越新公寓', from: '鲁迅高级中学东门', m: '25' },
  {
    type: 'bus',
    to: '鲁迅高级中学东门',
    from: '绍兴北站公交站',
    m: '45',
    start: ['20:15', '20:35', '21:05', '21:35', '22:05', '22:35'],
  },
  { type: 'foot', to: '绍兴北站公交站', from: '绍兴北火车站', m: '20' },
  {
    type: 'railway',
    to: '绍兴北火车站',
    from: '温州南火车站',
    way: [
      { start: '19:28', end: '21:03' },
      { start: '18:34', end: '21:12' },
      { start: '18:56', end: '21:35' },
      { start: '19:47', end: '21:59' },
      { start: '20:14', end: '22:28' },
    ],
  },
  {
    type: 'foot',
    to: '温州南火车站',
    from: '火车南站公交枢纽',
    m: 5,
  },
  {
    type: 'bus',
    to: '火车南站公交枢纽',
    from: '吾邻路口',
    m: 25,
    beizhu: 35,
    start: [
      '17:41',
      '17:47',
      '17:52',
      '17:58',
      '18:04',
      '18:09',
      '18:15',
      '18:19',
      '18:24',
      '18:34',
      '18:42',
      '18:47',
      '18:51',
      '18:56',
      '19:02',
    ],
  },
  {
    type: 'foot',
    to: '吾邻路口',
    from: 'Meaning Space意空间',
    m: 5,
  },
]
time = '23:00'
const templength = result.length
// for (let i = 0; i < way2.length; i++) {
//   if (way2[i].type === 'foot') {
//     const arrive = time
//     time = subtractMinutesFromTime(time, way2[i].m)
//     const go = time
//     result.push({
//       path: `${way2[i].from}-${way2[i].to}`,
//       go,
//       arrive,
//       past: calculateTimeDifferenceAsString(go, arrive),
//     })
//   }
//   if (way2[i].type === 'bus') {
//     const lastTime = time
//     time = subtractMinutesFromTime(time, way2[i].m)
//     const go = findMaxTimeBeforeEndTime(way2[i].start, time)
//     time = go
//     const arrive = subtractMinutesFromTime(go, -way2[i].m)
//     result.push({
//       path: `公交车空闲时间`,
//       go: arrive,
//       arrive: lastTime,
//       past: calculateTimeDifferenceAsString(arrive, lastTime),
//     })
//     result.push({
//       path: `${way2[i].from}-${way2[i].to}`,
//       go,
//       arrive,
//       past: calculateTimeDifferenceAsString(go, arrive),
//     })
//   }
//   if (way2[i].type === 'railway') {
//     const endList = way2[i].way.map((it) => it.end)
//     const go = findLatestEndTimeBeforeGivenTime(way2[i].way, time)
//     const index = findLatestEndTimeIndexBeforeGivenTime(way2[i].way, time)
//     const arrive = way2[i].way[index].end
//     time = subtractMinutesFromTime(go, 15)
//     result.push({
//       path: `${way2[i].from}-${way2[i].to}`,
//       go,
//       arrive,
//       past: calculateTimeDifferenceAsString(go, arrive),
//     })
//   }
//   if (haslunch !== '吃过啦' && isTimeBeforeSpecificTime(time, '10:00')) {
//     haslunch = true
//     shouldlunch = true
//     i = way2.length
//     result.length = 0
//     timeInit()
//   }
// }
result.length = templength
result.push({
  type: 'free',
  path: `空闲`,
  go: eatedTime,
  arrive: time,
  past: calculateTimeDifferenceAsString(eatedTime, time),
})
// for (let i = way2.length - 1; i >= 0; i--) {
//   if (way2[i].type === 'foot') {
//     const go = time
//     time = subtractMinutesFromTime(time, -way2[i].m)
//     const arrive = time
//     result.push({
//       type: 'foot',
//       path: `${way2[i].from}-${way2[i].to}`,
//       go,
//       arrive,
//       past: calculateTimeDifferenceAsString(go, arrive),
//     })
//   }
//   if (way2[i].type === 'bus') {
//     const go = subtractMinutesFromTime(findMinTimeAfterStartTime(way2[i].start, time), 0)
//     const arrive = subtractMinutesFromTime(go, -way2[i].m)
//     if (isTimeBeforeSpecificTime(time, go))
//       result.push({
//         type: 'wait',
//         path: `等公交车`,
//         go: time,
//         arrive: go,
//         past: calculateTimeDifferenceAsString(time, go),
//       })
//     time = arrive
//     result.push({
//       type: 'bus',
//       path: `${way2[i].from}-${way2[i].to}`,
//       go,
//       arrive,
//       past: calculateTimeDifferenceAsString(go, arrive),
//     })
//   }
//   if (way2[i].type === 'railway') {
//     const startList = way2[i].way.map((it) => it.start)
//     const lastTime = time
//     time = subtractMinutesFromTime(time, -15)
//     result.push({
//       type: 'wait',
//       path: `防止错过高铁`,
//       go: lastTime,
//       arrive: time,
//       past: calculateTimeDifferenceAsString(lastTime, time),
//     })
//     const arrive = subtractMinutesFromTime(findEarliestStartTimeAfterGivenTime(way2[i].way, time), 0)
//     const index = findEarliestStartTimeIndexAfterGivenTime(way2[i].way, time)
//     const go = way2[i].way[index].start
//     if (isTimeBeforeSpecificTime(time, go))
//       result.push({
//         type: 'wait',
//         path: `等高铁`,
//         go: time,
//         arrive: go,
//         past: calculateTimeDifferenceAsString(time, go),
//       })
//     time = arrive
//     result.push({
//       type: 'railway',
//       path: `${way2[i].from}-${way2[i].to}`,
//       go,
//       arrive,
//       past: calculateTimeDifferenceAsString(go, arrive),
//     })
//   }
//   if (haslunch !== '吃过啦' && isTimeBeforeSpecificTime(time, '10:00')) {
//     haslunch = true
//     i = way2.length
//     result.length = 0
//     timeInit()
//   }
// }
// 对数组按时间排序
result.sort((a, b) => {
  // 提取出发时间的小时和分钟
  const [aHours, aMinutes] = a.go.split(':').map(Number)
  const [bHours, bMinutes] = b.go.split(':').map(Number)

  // 按小时排序
  if (aHours !== bHours) {
    return aHours - bHours
  }

  // 如果小时相同，按分钟排序
  return aMinutes - bMinutes
})
// console.log(result)
function timeInit() {
  time = startTime
  time = subtractMinutesFromTime(startTime, 30)
}
//判断time是否小于specificTime
function isTimeBeforeSpecificTime(time, specificTime) {
  // 将时间字符串转换为分钟数
  const convertToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + minutes
  }

  // 将指定时间转换为分钟数
  const specificTimeMinutes = convertToMinutes(specificTime)

  // 将给定时间转换为分钟数
  const timeMinutes = convertToMinutes(time)

  // 判断给定时间是否早于指定时间
  return timeMinutes < specificTimeMinutes
}
//找出times中endTime之前的最大时间，返回索引
function findMaxTimeIndexBeforeEndTime(times, endTime) {
  // 将时间字符串转换为分钟数
  const convertToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + minutes
  }

  const endMinutes = convertToMinutes(endTime)
  let maxIndex = -1 // 初始最大时间索引设为 -1
  let maxMinutes = 0 // 最大分钟数

  for (let i = 0; i < times.length; i++) {
    const minutes = convertToMinutes(times[i])
    if (minutes <= endMinutes && minutes > maxMinutes) {
      maxIndex = i
      maxMinutes = minutes
    }
  }

  return maxIndex
}
//找出times中endTime之后的最小时间，返回索引
function findMinTimeIndexAfterStartTime(times, startTime) {
  // 将时间字符串转换为分钟数
  const convertToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + minutes
  }

  const startMinutes = convertToMinutes(startTime)
  let minIndex = -1 // 初始最小时间索引设为 -1
  let minMinutes = Infinity // 最小分钟数设为无穷大

  for (let i = 0; i < times.length; i++) {
    const minutes = convertToMinutes(times[i])
    if (minutes >= startMinutes && minutes < minMinutes) {
      minIndex = i
      minMinutes = minutes
    }
  }

  return minIndex
}
//找出times中endTime之前的最大时间，返回时间
function findMaxTimeBeforeEndTime(times, endTime) {
  // 将时间字符串转换为分钟数
  const convertToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + minutes
  }

  const endMinutes = convertToMinutes(endTime)
  let maxTime = '00:00' // 初始最大时间设为 '00:00'
  let maxMinutes = 0 // 最大分钟数

  for (const time of times) {
    const minutes = convertToMinutes(time)
    if (minutes <= endMinutes && minutes > maxMinutes) {
      maxTime = time
      maxMinutes = minutes
    }
  }

  return maxTime
}
//找出times中endTime之后的最小时间，返回时间
function findMinTimeAfterStartTime(times, startTime) {
  // 将时间字符串转换为分钟数
  const convertToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + minutes
  }

  const startMinutes = convertToMinutes(startTime)
  let minTime = '' // 初始化最小时间为空字符串

  for (let i = 0; i < times.length; i++) {
    const minutes = convertToMinutes(times[i])
    if (minutes >= startMinutes && (minTime === '' || minutes < convertToMinutes(minTime))) {
      minTime = times[i]
    }
  }

  return minTime
}
//传入startTime和minutesToSubtract，返回startTime-minutesToSubtract
function subtractMinutesFromTime(startTime, minutesToSubtract) {
  // 分割小时和分钟
  const [hours, minutes] = startTime.split(':').map(Number)

  // 创建一个新的 Date 对象并设置小时和分钟
  const startDate = new Date()
  startDate.setHours(hours)
  startDate.setMinutes(minutes)

  // 减去指定的分钟数
  startDate.setMinutes(startDate.getMinutes() - minutesToSubtract)

  // 获取新的小时和分钟
  const newHours = startDate.getHours()
  const newMinutes = startDate.getMinutes()

  // 格式化输出
  const newTime = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`

  return newTime
}
//计算时间差
function calculateTimeDifferenceAsString(goTime, arriveTime) {
  // 将时间字符串转换为分钟数
  const convertToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + minutes
  }

  // 将出发时间和到达时间转换为分钟
  const goMinutes = convertToMinutes(goTime)
  const arriveMinutes = convertToMinutes(arriveTime)

  // 计算时间差（到达时间减去出发时间）
  const timeDiffMinutes = arriveMinutes - goMinutes

  // 如果时间差的小时数为 0，则返回只包含分钟数的字符串
  if (timeDiffMinutes < 60) {
    return `${timeDiffMinutes}分`
  }

  // 计算小时和分钟
  const hours = Math.floor(timeDiffMinutes / 60)
  const minutes = timeDiffMinutes % 60

  // 如果小时数大于等于1，且分钟数为0，则只显示小时数
  if (hours >= 1 && minutes === 0) {
    return `${hours}时`
  }

  // 返回格式化后的字符串
  return `${hours}时${minutes}分`
}
//找出way中end小于givenTime的项中start最大的一项，返回start
function findLatestEndTimeBeforeGivenTime(way, givenTime) {
  // 将时间字符串转换为分钟数
  const convertToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + minutes
  }

  const givenTimeMinutes = convertToMinutes(givenTime)
  let maxStart = ''
  let maxStartMinutes = 0

  // 遍历 way 数组
  way.forEach((item) => {
    // 将结束时间转换为分钟数
    const endTimeMinutes = convertToMinutes(item.end)
    // 如果结束时间小于给定时间
    if (endTimeMinutes <= givenTimeMinutes) {
      // 将开始时间转换为分钟数
      const startTimeMinutes = convertToMinutes(item.start)
      // 如果开始时间比之前记录的最大开始时间大，则更新最大开始时间
      if (startTimeMinutes > maxStartMinutes) {
        maxStartMinutes = startTimeMinutes
        maxStart = item.start
      }
    }
  })

  return maxStart
}
//找出way中end小于givenTime的项中start最大的一项，返回下标
function findLatestEndTimeIndexBeforeGivenTime(way, givenTime) {
  // 将时间字符串转换为分钟数
  const convertToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + minutes
  }

  const givenTimeMinutes = convertToMinutes(givenTime)
  let maxStartIndex = -1
  let maxStartMinutes = 0

  // 遍历 way 数组
  way.forEach((item, index) => {
    // 将结束时间转换为分钟数
    const endTimeMinutes = convertToMinutes(item.end)
    // 如果结束时间小于给定时间
    if (endTimeMinutes <= givenTimeMinutes) {
      // 将开始时间转换为分钟数
      const startTimeMinutes = convertToMinutes(item.start)
      // 如果开始时间比之前记录的最大开始时间大，则更新最大开始时间及其下标
      if (startTimeMinutes > maxStartMinutes) {
        maxStartMinutes = startTimeMinutes
        maxStartIndex = index
      }
    }
  })

  return maxStartIndex
}
//找出way中start大于givenTime的项中end最小的一项，返回end
function findEarliestStartTimeAfterGivenTime(way, givenTime) {
  // 将时间字符串转换为分钟数
  const convertToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + minutes
  }

  const givenTimeMinutes = convertToMinutes(givenTime)
  let minEndTime = '23:59' // 设置初始结束时间为最大值
  let minEndTimeMinutes = 1439 // 设置初始结束时间的分钟数为最大值

  // 遍历 way 数组
  way.forEach((item) => {
    // 将开始时间转换为分钟数
    const startTimeMinutes = convertToMinutes(item.start)
    // 如果开始时间大于给定时间
    if (startTimeMinutes >= givenTimeMinutes) {
      // 将结束时间转换为分钟数
      const endTimeMinutes = convertToMinutes(item.end)
      // 如果结束时间比之前记录的最小结束时间小，则更新最小结束时间
      if (endTimeMinutes < minEndTimeMinutes) {
        minEndTimeMinutes = endTimeMinutes
        minEndTime = item.end
      }
    }
  })

  return minEndTime
}
//找出way中start大于givenTime的项中end最小的一项，返回下标
function findEarliestStartTimeIndexAfterGivenTime(way, givenTime) {
  // 将时间字符串转换为分钟数
  const convertToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + minutes
  }

  const givenTimeMinutes = convertToMinutes(givenTime)
  let minEndTimeIndex = -1
  let minEndTimeMinutes = 1439 // 设置初始结束时间的分钟数为最大值

  // 遍历 way 数组
  way.forEach((item, index) => {
    // 将开始时间转换为分钟数
    const startTimeMinutes = convertToMinutes(item.start)
    // 如果开始时间大于给定时间
    if (startTimeMinutes >= givenTimeMinutes) {
      // 将结束时间转换为分钟数
      const endTimeMinutes = convertToMinutes(item.end)
      // 如果结束时间比之前记录的最小结束时间小，则更新最小结束时间及其索引
      if (endTimeMinutes < minEndTimeMinutes) {
        minEndTimeMinutes = endTimeMinutes
        minEndTimeIndex = index
      }
    }
  })

  return minEndTimeIndex
}
