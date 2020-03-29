// let request = new XMLHttpRequest()
// request.open('get','/xxxx')

// request.onreadystatechange = function () {
//   if (request.readyState===4) {
//     console.log('请求完成')
//     if (request.status>=200&&request.status<300) {
//       console.log('请求成功')
//     }else{
//       console.log('请求失败')
//     }
//   }
// }

// request.send()
//请继续加油

//斐波那契数列


// let a = JSON.parse(window.prompt("请输入数字"))//这是一个字符串
// function fe(n) {
//   if (n===1||n===2) {
//     return 1
//   }else if (n>2) {
//     return  fe(n-2)+fe(n-1)
//   }else{
//     alert("请输入一个正整数")
//   }
// }

// console.log(fe(a))


//可以简单记一下sort排序的规则，a-b小于0，a在前面(返回值为负)，a-b大于0，b在前面(返回值为正)


// let str = "hello world"
// function paixu(arr) {
//   let temp =[]
//   for (let i = 0; i < arr.length; i++) {
//     temp.push(str[i].charCodeAt())
//   }
//   temp.sort(function (a,b) {
//     return b-a
//   })
//   return temp
// }

// let a= paixu(str)
// console.log(a)

function f(n) {
  if (n===1) {
    return 1
  }else if(n===2){
    return 2
  }else if (n===3) {
    return 4
  }else if (n>3) {
    return f(n-1)+f(n-2)+f(n-3)
  }
}
console.log(f(11))
console.log('第七天')
console.log('第九天')
console.log('第十四天')
console.log('第十五天')
console.log('第二十三天')
console.log('第二十四天')
console.log('第二十五天')
console.log("第二十九Tina")
console.log('第三十天')
console.log('第三十一天')
console.log('第三十二天')
console.log('第三十三Tina')
console.log('第三十天')
console.log('第三十五天')
console.log('第三十六Tina')
console.log('第三十八天')