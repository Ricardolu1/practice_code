let a= [1,1,2,33,33,4,4,5,'nihao','nihao']


function unique(array) {
  let temp =[]
  let obj = {}
  for(let i=0 ; i<array.length ; ++i){
    if(obj[array[i]]===undefined){
      obj[array[i]]=1
      temp.push(array[i])
    }
  }
  return temp
}

console.dir(unique(a))


// function unique(array) {
//   let temp =[]
//   let obj = {}
//   for(let item of array){
//     if(!obj.item){
//       obj.item=1
//       temp.push(item)
//     }
//   }
//   return temp
// }
