import { defaults } from "joi";
import React from "react";
import img from "./logo.png";

//Day1-2 Assignment
const Student = (props) => {
    console.log(props.student);
    const {
        image,
        ID,
        FirstName,
        LastName,
        DOB,
        CollegeName,
        CollegeAddress,
        Logo,
    } = props.student;
    return (
        <div className="card-body">
            <h3>{props.children}</h3>
            <Image img={image} />
            <p className="card-text">ID : {ID}</p>
            <p className="card-text">Name :{FirstName + " " + LastName} </p>
            <p className="card-text">Date Of Birth : {DOB}</p>
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
        <div>
            <p className="card-text">College Name : {props.CollegeName} </p>
            <p className="card-text">
                College Address : {props.CollegeAddress}
            </p>
            <img
                src={props.Logo}
                className="logo rounded img-fuild"
                alt="Logo"
            />
        </div>
    );
};
const Image = (props) => {
    return (
        <div>
            <img src={props.img} alt="user" />
        </div>
    );
};

const StudentIDCard = () => {
    const PersonObject = [
        {
            image: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
            ID: 1,
            FirstName: "Parth",
            LastName: "Parekh",
            DOB: "31/8/2000",
            CollegeName: "LJIET",
            CollegeAddress: "Sarkhej",
            Logo: img,
        },
        {
            image: "https://randomuser.me/api/portraits/thumb/men/52.jpg",
            ID: 2,
            FirstName: "Paresh",
            LastName: "Parekh",
            DOB: "11/6/1999",
            CollegeName: "LJIET",
            CollegeAddress: "Sarkhej",
            Logo: img,
        },
        {
            image: "https://randomuser.me/api/portraits/thumb/men/51.jpg",
            ID: 3,
            FirstName: "Pintu",
            LastName: "Parekh",
            DOB: "21/2/2001",
            CollegeName: "LJIET",
            CollegeAddress: "Sarkhej",
            Logo: img,
        },
    ];
    return (
        <div className="container">
            <h3 className="mb-3">Assignment StudentIDCard</h3>
            <div className="row">
                <div className="col-md-4 mb-2">
                    <div className="card text-center bg-dark text-white">
                        <Student student={PersonObject[0]}>
                            <p>Student Details</p>
                        </Student>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="card text-center bg-dark text-white">
                        <Student student={PersonObject[1]}>
                            <p>Student Details</p>
                        </Student>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="card text-center bg-dark text-white">
                        <Student student={PersonObject[2]}>
                            <p>Student Details</p>
                        </Student>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StudentIDCard;
