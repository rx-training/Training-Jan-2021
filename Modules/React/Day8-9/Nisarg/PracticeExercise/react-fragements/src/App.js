import React, { Component } from 'react'

class Counter extends Component
{
  state={
    count:0
  }
  handleIncrease=()=>{
    console.log("Called first",this.state.count);
    this.setState({
      count:this.state.count+1
    },()=>console.log('Called second'));
    console.log("Called second",this.state.count);
    
  }
  handleDecrease=()=>{
    console.log("Called first",this.state.count);
    this.setState({
      count:this.state.count-1
    },()=>console.log('Called second'));
    console.log("Called second",this.state.count);
    
  }
  render()
  {
    return(
      <React.Fragment>
        <div style={{margin:"3rem",fontSize:"2rem"}}>
          <button type="button" onClick={this.handleDecrease}>Decrease</button>
          <span>Count:{this.state.count}</span>
          <button type="button" onClick={this.handleIncrease}>Increase</button>
        </div>
      </React.Fragment>
    )
  }
}

 class App extends Component {
  render() {
    return 
      <Counter amount="2"/>;
    
  }
}

export default App;

 

