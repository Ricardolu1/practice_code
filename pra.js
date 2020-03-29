let a = [
  [1, 2, [3, 4], 5],
  [6, 7, 8],
  [[9, 10], {name:"ycy"},11]
]

// function fla(arr){
//   let res = []
//   arr.forEach(item=>{
//     if(!Array.isArray(item)){
//       res.push(item)
//     }else{
//       res = res.concat(flat(item))
//     }
//   })
//   return res
// }
// function fla(arr) {
//   while (arr.some(item=>Array.isArray(item))) {
//     arr = [].concat(...arr)
//   }
//   return arr
// }

function fla(arr) {
  return arr.reduce((pre, cur)=>{
    
  })
}

console.log(a)

console.log(fla(a))