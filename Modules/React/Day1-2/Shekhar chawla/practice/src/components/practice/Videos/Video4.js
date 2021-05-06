import React from 'react'


// ES6, Nested components and react tools

const Practice = () => {
    return (
        <section>
            <Person />
            <Message />
        </section>
    )
}

const Person = () => <h1>Jack Sparrow</h1>
const Message = () => <p>this is my message</p>

export default Practice