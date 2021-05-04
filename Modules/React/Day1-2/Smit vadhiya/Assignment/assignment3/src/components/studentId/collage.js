import React from 'react'

export const Collage = () => {
    const clgName = "LJIET"
    const clgAddress = "Ahmedabad"
    const clgLogo = "https://image.shutterstock.com/image-vector/graduation-student-logo-vector-letter-260nw-407113282.jpg"
    return (
        <div className="row bg-primary text-white">
            <div className="col-9 text-center">
                <h2>{clgName}</h2> 
                <h4>{clgAddress}</h4>         
            </div>
            <div className="col-3 p-1">
                <img src={clgLogo} alt="schoool logo" className="img-fluid  i-50"/>
            </div>
        </div>
    )
}
