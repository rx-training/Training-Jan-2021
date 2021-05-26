import React, { Component } from 'react'

class Form extends Component {
  state={
    firstName:"",
    lastName:"",
    people:[]
  }
  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    if(firstName.length>0 && lastName.length>0){
      const person = `${firstName} ${lastName} `
      this.setState({
        people:[...this.state.people,person],
        firstName:"",
        lastName:""
      })
    }
  }

  render(){
    return(
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <input name="firstName" type="text" onChange={this.handleChange} value={this.state.firstName} />
            <input name="lastName" type="text" onChange={this.handleChange} value={this.state.lastName} />
            <button type="submit">submit</button>
          </form>
        </article>
        <article>
          <h4>People</h4>
          <div>{this.state.people}</div>
        </article>
      </section>
    )
  }
}


class Form2 extends Component {

  handleSubmit = e => {
    e.preventDefault();
    const name = this.refs.myName;
    const nameValue = name.value;

    const emailValue = this.email.value;

    const text = this.refs.myText;
    const textValue = text.textContent;
    text.style.color="blue";

    console.log(nameValue, emailValue, textValue)

  }

  render(){
    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="myName" />
          <input type="email" ref={value=>(this.email=value)} />
          <button type="submit">Submit</button>
        </form>
        <p ref="myText">Hello World</p>
      </section>
    )
  }
}


class Counter extends Component{
  state={
    count:0
  }

  handleIncrease = () => {
    this.setState({
      count: this.state.count+1
    })
    this.setState({
      count: this.state.count+1
    })
  }

  handleDecrease = () => {
    this.setState((state,props)=>{
      return{
        count:state.count-props.amount
      }
    })
    this.setState((state,props)=>{
      return{
        count:state.count-props.amount
      }
    })
  }
  render(){
    return(
      <>
        <button onClick={this.handleDecrease}>Decrease</button>
        <span>Count:{this.state.count}</span>
        <button onClick={this.handleIncrease}>Increase</button>
      </>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <hr />
        <Form2 />
        <hr />
        <Counter amount="2" />
      </div>
    )
  }
}


export default App;
