import React from 'react'

class PeopleForm extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      people: []
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, e.target.value)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const addThisPerson = { firstName: this.state.firstName, lastName: this.state.lastName }
    this.setState({
      people: [...this.state.people, addThisPerson]
    })
  }

  render() {
    return (
      <div className="row">
        <form className="col col-6" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">Firstname:</label>
            <input type="text" id="firsName" name="firstName" className="form-control" value={this.firstName} onChange={this.handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Lastname:</label>
            <input type="text" id="lastName" name="lastName" className="form-control" value={this.lastName} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        { this.state.people.length !== 0 &&
          <div className="col col-6">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
              </tr>
            </thead>
            <tbody>

              {this.state.people.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="col col-5">{item.firstName}</td>
                  <td className="col col-5">{item.lastName}</td>
                </tr>
              ))}

            </tbody>
          </table>
          </div>
        }
      </div>
    )

  }
}


export default PeopleForm