import React from 'react'


export const Collage = () => {

    const clgData = {
        name : "Mount Marty",
        address : "Ahmedabad,Gujrat",
        logo : "/img/clg1.png"
    }


    return (
        <div className="row m-0 bg-primary text-white">
            <div className="col-9 text-center">
                <h2>{clgData.name}</h2> 
                <h4 className="capitalized">{clgData.address}</h4>         
            </div>
            <div className="col-3 p-1">
                <img src={clgData.logo} alt="schoool logo" className="img-fluid  i-50"/>
            </div>
        </div>
    )
}

