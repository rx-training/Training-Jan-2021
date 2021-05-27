import React from 'react'




function StudentForm(props) {
    const {onchange} = props
  
    console.log(onchange);
    return (
        <div>
            <form >
         
          <button>Submit</button>
          </form>
        </div>
    )
}

export default StudentForm
