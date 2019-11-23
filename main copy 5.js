// ul.addEventListener('click', function(e){
//   if(e.target.tagName.toLowerCase() === 'li' ){
//       fn() // 执行某个函数
//   }
// })



// function delegate(element, eventType, selector, fn) {
//   element.addEventListener(eventType, e => {
//     let el = e.target
//     while (!el.matches(selector)) {
//       if (element === el) {
//         el = null
//         break
//       }
//       el = el.parentNode
//     }
//     el && fn.call(el, e, el)
//   })
//   return element
// }



let a= [1,1,2,33,33,4,4,5,'nihao','nihao']

function unique(arr) {
  let temp=[]
  for (let i = 0; i < arr.length; i++) {
    if (temp.indexOf(arr[i])===-1) {
      temp.push(arr[i])
    }
  }
  console.dir(temp)
  return temp
}

unique(a)

// function unique(array) {
//   return Array.from(new Set(array))
// }
// console.dir(unique(a))

// function unique(array) {
//   let temp =[]
//   let obj = {}
//   for(let i=0 ; i<array.length ; ++i){
//     if(obj[array[i]]===undefined){
//       obj[array[i]]=1
//       temp.push(array[i])
//     }
//   }
//   return temp
// }

// console.dir(unique(a))



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
