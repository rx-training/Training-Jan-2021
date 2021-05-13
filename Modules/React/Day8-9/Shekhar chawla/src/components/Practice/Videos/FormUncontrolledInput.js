import React from 'react'

class Form extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.refs.name.value)
        console.log(this.email.value)
        console.log(this.refs.mytext.textContent)
    }

    render() {
        return (
            <>
                <form className="col col-6" onSubmit={this.handleSubmit}>
                    Name:   <input type="text" ref="name" className="form-control"></input>
                    Email:  <input type="email" ref={myemail => (this.email = myemail)} className="form-control"></input>
                    <input type="submit" ></input>
                </form>
                <p ref="mytext">Text content</p>

            </>
        )
    }
}

export default Form