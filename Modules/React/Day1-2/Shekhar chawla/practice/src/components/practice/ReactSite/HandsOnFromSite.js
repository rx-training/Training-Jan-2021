import React from 'react'

const Practice = () => {
    // Introducing JSX
    var element1 = <h1>Hello world!</h1>


    // Embedding Expressions in JSX
    var name = 'shekhar'
    var element2 = <h1>Hello {name}!</h1>


    var user = {
        firstname: 'john',
        lastname: 'doe'
    }
    var formatname = (user) => `${user.firstname} ${user.lastname}`
    var element3 = <h1>Hello {formatname(user)}</h1>              


    var greet = (user) => user ? `${formatname(user)}` : `Hello stranger`
    var element4 = <h1>{greet()}</h1>


    // const title = response.potentiallyMaliciousInput        // xss : safe 
    // var element5 = <h1>{title}</h1>


    var element6 = React.createElement('h3', { className: 'demo1' }, 'created element')

    return (
        <div>
            {element1}
            {element2}
            {element3}
            {element4}
            {element6}
        </div>

    )
}

export default Practice