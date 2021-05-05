import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {date : this.props.date, count : 1}
    console.log("constructor");
  }

  componentDidMount(state,props) {
    setInterval(() => {this.timer(state,props)},1000)
    console.log("component did mount");
  }

  timer = () => {
    /* this.setState({date : new Date()})
    this.setState({count : state.count + 1 }) */
    this.setState((state,props) => {
      return{
        date : new Date(),
        count : (state.count + 1) 
      }
    })
  }
/* 
  componentWillUnmount() {
    clearInterval(this.timer)
    console.log("unmount");
  }
*/
  static getDerivedStateFromProps(props,state){
    console.log(state,props);
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log(prevState);
  }


  render() {
    console.log("render start");
    return (
      <div>
        <h1>Hello world</h1>
        <h3>Timer {this.state.date.toLocaleTimeString()}</h3>
        <h3>count : {this.state.count}</h3>
      </div>
    )
    
  }
}

