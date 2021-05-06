import React, { Component } from "react";
import "./student.css";
const Student = ({
    student: {
        ID,
        image,
        FirstName,
        LastName,
        DOB,
        CollegeName,
        CollegeAddress,
        Logo,
    },
}) => {
    return (
        <div>
            <img
                src={Logo}
                className="img-fluid rounded logo float-left "
                alt="college"
                width="70px"
            />
            <Image img={image} />

            <p className="text-success text-center clearboth">ID : {ID}</p>
            <p className="text-primary text-center">
                Name : {FirstName + " " + LastName}
            </p>
            <p className="text-primary text-center">Date Of Birth : {DOB}</p>
            <College
                CollegeName={CollegeName}
                CollegeAddress={CollegeAddress}
                Logo={Logo}
            />
        </div>
    );
};

const College = (props) => {
    return (
        <>
            <p className="text-primary text-center">
                College Name : {props.CollegeName}
            </p>
            <p className="text-primary text-center">
                College Address : {props.CollegeAddress}
            </p>
        </>
    );
};
const Image = (props) => {
    return (
        <>
            <img
                src={props.img}
                className="img-fluid rounded float-right"
                alt="user"
                width="70px"
            />
        </>
    );
};

class StudentIDCard extends Component {
    render() {
        return (
            <>
                <div className="col-lg-4 col-md-6">
                    <div className="card  m-2 bg-light border border-primary div1">
                        <div className="card-body">
                            <p className="card-text">
                                <Student student={this.props.student} />
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default StudentIDCard;
