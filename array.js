let a = [
  [1, 2, [3, 4], 5],
  [6, 7, 8],
  [[9, 10], 11]
]

// function fla (arr) { 
//   let tmp = arr.reduce((pre, cur)=>{
//     return pre.concat(cur)
//   },[])
//   if(tmp.some(item=>Array.isArray(item))){
//     tmp.reduce((pre, cur)=>{
//       return pre.concat(cur)
//     },[])
//   }
// }

function fla(arr) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(fla(item))
    } else {
      result.push(item)
    }
  })
  return result
}

console.log(fla(a))
