import React from 'react'
import Button from 'react-bootstrap/Button'

function Event() {

   function handleEvent(e){

        e.preventDefault();
        console.log('Button clicked');

    }

    return (
        <div>
            <Button className="btn btn-danger m-3" onClick={handleEvent}>Click me!</Button>
        </div>
    )
}

export default Event
