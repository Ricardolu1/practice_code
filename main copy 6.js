//生成一个数值区间在2到32的随机数组,假设数组是不重复的，数组的长度最长是31，最大的index是30，n是生成的数组长度，如果大于31就默认等于31.

function compare(b,a) {
  if (a>b) {
    return -1
  }else{
    return 1
  }
}

function f(n) {
  //大于数组长度时，取数组长度
  if (n > 31) {
    n = 31
  }
  var number = []
  while (n) {
    //随机数的选取方法31为所需的数组长度
    var num = Math.floor(Math.random() * 31) + 2
    //数组查重的方法
    if (number.indexOf(num) < 0) {
      number.push(num)
      --n
    }
  }
  console.dir(number.sort(compare))
}
f(55)
