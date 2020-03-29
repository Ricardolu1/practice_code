function feiqie(n) {
  if (n>=0) {
    if (n===0) {
      return 0
    }else if (n===1) {
      return 1
    }else if(n>1){
      return feiqie(n-1)+feiqie(n-2)
    }
  }else{
    return "请输入一个非负整数"
  }
}

console.log(feiqie(10))