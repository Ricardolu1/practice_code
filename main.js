//这是函数节流
let button
button.onclick=function () {
  let cd =false
  if (cd) {
    console.log('正在冷却')
  }else{
    fn()
    cd=true
    let timerID = setInterval(() => {
      cd=false
    }, 3000);
  }
}