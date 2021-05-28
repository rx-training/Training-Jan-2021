import React, { Component } from "react";
import "./student.css";
class Student extends Component {
    state = {
        showInfo: true,
    };
    toggleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo });
    };
    render() {
        const {
            ID,
            image,
            FirstName,
            LastName,
            DOB,
            CollegeName,
            CollegeAddress,
            Logo,
        } = this.props.student;
        const { handleDelete } = this.props;

        return (
            <div className="">
                <img
                    src={Logo}
                    className="img-fluid logo"
                    alt="college"
                    width="70px"
                />
                <Image img={image} />

                <p className="text-success text-center ">ID : {ID}</p>
                <p className="text-primary text-center">
                    Name : {FirstName + " " + LastName}
                </p>
                <p className="text-primary text-center">
                    Date Of Birth : {DOB}
                </p>

                {this.state.showInfo && (
                    <College
                        CollegeName={CollegeName}
                        CollegeAddress={CollegeAddress}
                    />
                )}

                <div className="text-center">
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => {
                            handleDelete(ID);
                        }}
                    >
                        Delete ID
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-success m-3 p-2"
                        onClick={this.toggleInfo}
                    >
                        Toggle College Info
                    </button>
                </div>
            </div>
        );
    }
}

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
                className="img-fluid rounded user"
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
                                <Student
                                    student={this.props.student}
                                    handleDelete={this.props.handleDelete}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default StudentIDCard;
