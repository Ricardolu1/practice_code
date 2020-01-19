let timeID = null
//防抖
button1.onclick=function () {
  if (timeID) {
    clearInterval(timeID)
  }
  
  timeID = setTimeout(() => {
    fn()
    clearInterval(timeID)
    timeID = null 
  }, 1500);
}

function fn() {
  console.log('执行函数')
}

//节流
let cd = false
button2.onclick = function () {
  if (cd) {
    console.log('cd中')
  }else{
    cd=true
    let timeID = setTimeout(() => {
      fn()
      cd=false
    }, 1500);
    
  }

} 