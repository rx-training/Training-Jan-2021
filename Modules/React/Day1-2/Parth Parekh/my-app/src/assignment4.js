//4. Call StudentID Card component 3 times and pass different student data using props.

import React from "react";

const Student = (props) => {
    console.log(props.student);
    const { image, ID, FirstName, LastName, DOB } = props;
    return (
        <div>
            <Image img={image} />
            <p>ID : {ID}</p>
            <p>Name :{FirstName + " " + LastName} </p>
            <p>Date Of Birth : {DOB}</p>
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

const StudentIDCard3 = () => {
    return (
        <div className="container mb-2">
            <div className="card text-center bg-primary m-2  p-3 text-white">
                <Student
                    image="https://randomuser.me/api/portraits/thumb/men/51.jpg"
                    ID="1"
                    FirstName="paresh"
                    LastName="patel"
                    DOB="21/3/1999"
                />
                <Student
                    image="https://randomuser.me/api/portraits/thumb/men/52.jpg"
                    ID="2"
                    FirstName="Mehul"
                    LastName="patel"
                    DOB="21/3/1999"
                />
                <Student
                    image="https://randomuser.me/api/portraits/thumb/men/53.jpg"
                    ID="3"
                    FirstName="ketul"
                    LastName="patel"
                    DOB="21/3/1999"
                />
            </div>
        </div>
    );
};
export default StudentIDCard3;
