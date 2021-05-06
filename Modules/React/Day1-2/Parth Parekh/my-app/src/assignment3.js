// 3. Store above example info javascript variable and then display dynamically,
// Display FullName variable in respective Component
import React from "react";
import img from "./logo.png";
const Student = () => {
    const name = "Parth";
    const ID = "1";
    const DOB = "31/08/2000";
    return (
        <div>
            <p>ID : {ID} </p>
            <p>Name : {name}</p>
            <p>Date Of Birth :{DOB}</p>
        </div>
    );
};

const College = () => {
    const name = "Lj";
    const add = "sarkhej";
    const src = img;
    return (
        <div>
            <p>College Name : {name}</p>
            <p>College Address : {add}</p>
            <img src={src} className="logo" alt="Logo" />
        </div>
    );
};
const Image = () => {
    const src = "https://randomuser.me/api/portraits/thumb/men/50.jpg";
    return (
        <div>
            <img src={src} alt="user" />
        </div>
    );
};

const StudentIDCard2 = () => {
    return (
        <div className="container mb-2">
            <div className="card text-center bg-light p-3">
                <Image />
                <Student />
                <College />
            </div>
        </div>
    );
};

export default StudentIDCard2;
