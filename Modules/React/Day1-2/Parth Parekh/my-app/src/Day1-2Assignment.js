import { defaults } from "joi";
import React from "react";
import img from "./logo.png";
import "./assignment.css";

// 1. Create a Functional Component which prints Hello World.
const Helloworld = () => {
    return <h3>Hello World</h3>;
};

//export default Helloworld;

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
        <div className="div2">
            <h2>{props.children}</h2>
            <Image img={image} />
            <p>ID : {ID}</p>
            <p>Name :{FirstName + " " + LastName} </p>
            <p>Date Of Birth : {DOB}</p>
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
            <p>College Name : {props.CollegeName} </p>
            <p>College Address : {props.CollegeAddress}</p>
            <img src={props.Logo} className="logo" alt="Logo" />
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
        <div className="div1">
            <Student student={PersonObject[0]}>
                <p>Student Details</p>
            </Student>
            <Student student={PersonObject[1]} />
            <Student student={PersonObject[2]} />
        </div>
    );
};
export default StudentIDCard;
