//浅克隆
// function clone(origin,target={}) {
//   for(let item in origin){
//     if (origin.hasOwnProperty(item)) {
//       target[item]=origin[item]
//     }
//   }
//   console.dir(target)
//   return target
// }

//深克隆,需要两个参数，一个origin，一个是target
//for in 可以遍历对象，每次顺序可能不一样
//1、判断是不是原始值   typeof()
//2、判断是数组还是对象  instanceof()   用toString万无一失
//3、数组的话建立新数组，对象的话建立新对象
//建立一个新的引用值之后，你就把这个原始的引用值当做一个被拷贝对象，把这个新的数组当做一个拷贝对对象，再一次进行深度拷贝。需要一个递归
//4、递归
//
var obj = {
  name: "abc",
  age: 123,
  card: ["master", "visa"],
  wife: {
    name: "bcd",
    son: {
      name: "aaa"

    }
  },
  move:function (){
    console.log('1')
  }
}

var obj1 = {}

function deepClone(origin, target ) {
  var target = target || {}
  for (let prop in origin) {
    if (origin.hasOwnProperty(prop)) {
      if (origin[prop] !== null && typeof(origin[prop]) === "object") {
        if (origin[prop] instanceof Array) {
          target[prop] = []
        } else if (origin[prop] instanceof Object) {
          target[prop] = {}
        } else if (origin[prop] instanceof Function) {
          target[prop] = eval(origin[prop].toString())
        }
        deepClone(origin[prop], target[prop])
      } else {
        target[prop] = origin[prop] //一下就把原始值搞定了
      }
    }
  }
}




