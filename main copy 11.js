let x = 0;
 
async function test() {
  x += await 2;// 把await放在x前面
  console.log('11111111111111')
  console.log(x);	 // 这里又输出什么？
}
 
test();
console.log('222222222222222')
x=1