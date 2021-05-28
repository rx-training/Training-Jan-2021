import React, { Component } from 'react'

export default class DisplayDetails extends Component {
    render() {
        if(this.props.detail){
            const {firstName,lastName,email,state,district,stdImg,clgImg,clgName,stdAddress,gender,dob} = this.props.detail
            console.log(firstName,lastName,email,state,district,stdImg,clgImg,clgName,stdAddress,gender,dob); 

            return (
                <div className="card col-12 col-md-6 p-3">  
                        <div className="card-header bg-info d-flex flex-column gap-2 flex-md-row justify-content-between align-items-center">
                            <img src={stdImg} alt="" width="100px" className="img-fluid rounded order-1 order-md-0" />
                            <div className="text-center order-0">
                                <h3 className="">{clgName} </h3>
                                <h4 className="text-muted text-capitalize">{state} {district}</h4>
                            </div>
                            <img src={clgImg} alt="" width="100px" className="img-fluid rounded " />
                        </div>
                        <div className="card-body bg-primary text-white text-justify">
                            <div className="d-flex flex-column gap-2 flex-md-row justify-content-between align-items-center">
                                <h4 className="col-12 col-md-6"><span className="h3 text-dark col-6">Name :</span> <span className="h5 text-capitalize">{firstName} {lastName}</span></h4>
                                <h4 className="col-12 col-md-6"><span className="h3 text-dark">Email :</span> <span className="h5 text-lowercase">{email}</span></h4>
                            </div>
                            <div className="d-flex flex-column gap-2 flex-md-row justify-content-between align-items-center">
                                <h4 className="col-12 col-md-6"><span className="h3 text-dark">DOB :</span> <span className="h5">{dob}</span></h4>
                                <h4 className="col-12 col-md-6"><span className="h3 text-dark">Gender :</span> <span className="h5 text-capitalize">{gender}</span></h4>
                            </div>
                                <h4 className="text-left"><span className="h3 text-dark">Address :</span> <span className="h5">{stdAddress}</span></h4>
                        </div>
                </div>
            )
        } else {
            return(null)
        }
    }
}
