import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./student.css";
const Student=({
    student:
    {
        ID,
        image,
        FirstName,
        LastName,
        DOB,
        CollegeName,
        CollegeAddress,
    },
})=>{
    return(
            <div className="div2">
                <Image img={image}/>
                <p className="text-success">ID:{ID}</p>
                <p className="text-primary">Name:{FirstName+" "+LastName}</p>
                <p className="text-primary">Date of Birth:{DOB}</p>
                <College 
                    CollegeName={CollegeName}
                    CollegeAddress={CollegeAddress}
                />
            </div>
    );
};

const College=(props)=>{
    return (
    <div>
        <p className="text-primary">College Name:{props.CollegeName}</p>
        <p className="text-primary">
        College Address:{props.CollegeAddress}
        </p>
    </div>
    );
};


const Image={props}=>{
    return(
        <div>
            <img src={props.img}  className="rounded" alt="user"/>
        </div>
    );
};


const StudentIDCard extends Component
{
    render(){
        return(
            <>
            <div className="container mb-2 mt-2">
                <div className="row div1">
                    <div class="col-md-3">
                <div className="card text-center bg-light">

                <div className="card-body">
                    <p className="card-text">
                        {
                            <Student
                                    student={this.props.student}
                            />
                        }
                    </p>
                </div>
                </div>        
            </div>
        </div>
    </div>
            </>
        );
    }
}

export default StudentIDCard;