import React from 'react'

export const Collage = (props) => {
    return (
        <div className="row bg-primary text-white">
            <div className="col-9 text-center">
                <h2>{props.name}</h2> 
                <h4 className="capitalized">{props.address}</h4>         
            </div>
            <div className="col-3 p-1">
                <img src={props.logo} alt="schoool logo" className="img-fluid  i-50"/>
            </div>
        </div>
    )
}
