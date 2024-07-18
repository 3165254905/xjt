function xuanzhong(id, handleFocus, handleBlur) {
  const inputBox = document.getElementById(id)
  inputBox.addEventListener('focus', handleFocus)
  inputBox.addEventListener('blur', () => handleBlur(inputBox))
}
const isXuanzhong = [0, 0, 0, 0, 0, 0, 0, 0]
for (let i = 1; i < 9; i++)
  xuanzhong(
    `van-field-${i}-input`,
    () => (isXuanzhong[i] = 1),
    (el) => {
      if (el.value === '' || !check(i, el.value)) {
        $(`#van-field-${i}-input+.input-error`).show()
      } else {
        $(`#van-field-${i}-input+.input-error`).hide()
      }
    },
  )
//推荐码是5位数，开头123固定死的后面01对应5000的额度，02对应10000，10对应50000，20对应100000，比如12315对应的就是75000的额度
function formatDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}`
}
$('#submitBtn').click(() => {
  let count = 0
  for (i = 1; i < 9; i++) {
    const val = $(`#van-field-${i}-input`).val()
    if (val == '' || !check(i, val)) {
      $(`#van-field-${i}-input+.input-error`).show()
    } else {
      $(`#van-field-${i}-input+.input-error`).hide()
      count++
    }
  }
  if (count == 8) {
    let val = $(`#van-field-8-input`).val().toString()
    let name = $(`#van-field-1-input`).val().toString()
    let time = formatDate(new Date())
    if (!val.startsWith('123')) {
      alert('请输入正确的推荐码')
      return
    }
    val = parseInt(val, 10)
    val = val % 100
    vm.edu = val * 5000
    vm.name = name
    vm.time = time
    vm.$forceUpdate()
    $('#app').hide()
    $('#app1').show()
  }
})
function check(i, val) {
  let reg
  switch (i) {
    case 2:
      reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      return reg.test(val)
    case 3:
      reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      return reg.test(val)
    case 8:
      reg = /^\d{5}$/
      return reg.test(val)
    default:
      return true
  }
}
const vm = Vue.createApp({
  data() {
    return {
      name: '张三',
      time: formatDate(new Date()),
      edu: '15000',
    }
  },
  methods: {
    formatNumber(number) {
      const formattedNumber = Number(parseFloat(number).toFixed(2)).toLocaleString('en-US')
      return formattedNumber
    },
  },
}).mount('#app1')
