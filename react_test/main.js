const STR = '被调用，this指向：';

class App extends React.Component{
    constructor(){
        super()
    }
    //测试函数
    handler() {
        console.log(`handler ${STR}`,this);
    }

    render(){
      console.log(`render ${STR}`,this);
      return(
        <div>
            <h1>hello World</h1>
            <label htmlFor = 'btn'>单击打印函数handler中this的指向</label>
            <input id = "btn" type="button" value = '单击' onClick = {this.handler}/>
        </div>        
      )
  }
}