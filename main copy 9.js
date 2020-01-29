// let a = [
//   [1, 2, [3, 4], 5],
//   [6, 7, 8],
//   [[9, 10], 11]
// ]

// let arr =[[1,23,4,[22,3]],5]
// console.log(...arr)

// function flat(arr) {
//   while (arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr);//变成一个数组
//     console.log(arr)
//     //第一次 ...arr的值，[1,23,4,[22,3]] , 5
//     //concat以后 [1,23,4,[22,3],5]
//     //...arr = 1,23,4,[22,3],5
//     // concat以后 1,12,4,22,3,5
//   }
//   return arr;
// }

// flat(arr)


// let arr = [[2,3,[1,23,[33,4,[55,2]],4]],33]
// function flat(arr) {
//   let result = [];
//   arr.map(item => {
//     if (Array.isArray(item)) {
//       result = result.concat(flat(item));
//     } else {
//       result.push(item);
//     }
//   });
//   return result;
// }


var a={
  name:"ycy",
  age:18,
  sex:'nan',
  father:{
    age:10,
    name:'yx',
    sex:'male'
  }
  
}

let b = [
    [1, 2, [3, 4], 5],
    [6, 7, 8],
    [[9, 10], 11]
  ]

console.dir(...a)



























// let arr = [[2,3,[1,23,[33,4,[55,2]],4]],33]

// function flat1(arr) {
//   while (arr.some(item=>Array.isArray(item))) {
//     arr = [].concat(...arr)
//   }  
//   return arr
// }

// function flat2(arr) {
//   let result = []
//   arr.map(item=>{
//     if (Array.isArray(item)) {
//       result = result.concat(fla2(item))
//     }else{
//       result.push(item)
//     }
//   })
//   return result
// }
// //这个递归的出口就是找到，不是数组的item

// //用reducer
// function flat3(arr) {
//   return arr.reducer(function (pre,cur) {
//     return pre.concat(Array.isArray(cur) ? flat3(cur): cur)
//   },[])
// }







