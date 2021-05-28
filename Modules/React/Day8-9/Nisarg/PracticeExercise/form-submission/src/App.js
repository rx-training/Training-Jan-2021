import React, { Component } from 'react'
import "./App.css";
 // controlled uncontrolled inputs
 // JS
 // const input=document.getElementById('myText');
 // React
 // value,onChange
class Form extends Component
{
  state={
      firstName:'',
      lastName:'',
      people:[]
  };
  handleChange=event=>
  {
    /*
    console.log(event.target.name);
    console.log(event.target.value);
    if(event.target.name==='firstName')
    {
        const textValue=event.target.value;
      this.setState({
      firstName:textValue
    });
  }
  */
    this.setState({
      [event.target.name]:[event.target.value]
    })
  };

  handleSubmit=e=>
  {
    e.preventDefault();
    const firstName=this.state.firstName;
    const lastName=this.state.lastName;
    console.log(firstName,lastName);
    if(firstName.length>0 && lastName.length>0)
    {
      const person=` ${firstName} ${lastName}`
      this.setState({
        people:[...this.state.people,person],
        firstName:"",
        lastName:""
      })
    }
  };
  render()
  {
    return <section>
              <article>
                  <form onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    <input type="text" name="lastName" value={this.state.lasttName} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                  </form>
              </article>

              <article>
                <h1>People</h1>
                <div>{this.state.people}</div>
              </article>
            </section>;
  }
}
class App extends Component {
  render() {
    return <Form/>;
  }
}

export default App;