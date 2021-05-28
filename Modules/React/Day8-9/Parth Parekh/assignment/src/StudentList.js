import React, { Component } from "react";

export default class StudentList extends Component {
    render() {
        const {
            id,
            FirstName,
            LastName,
            CollegeName,
            DOB,
            Gender,
            Hobbies,
            logo,
            user,
        } = this.props.studentData;
        const clogo = `./img/${logo}`;
        const ulogo = `./img/${user}`;
        return (
            <div
                className="card col-md-3 m-2  border text-monospace"
                style={{ background: "#074464" }}
            >
                <div className="card-body">
                    <img
                        src={clogo}
                        alt="logo"
                        className="img-fuild rounded float-left"
                        width="75px"
                    />
                    <img
                        src={ulogo}
                        alt="ulogo"
                        className="img-fuild rounded float-right"
                        width="75px"
                    />

                    <div className=" mt-2 clearfix ">
                        <p className="text-center "> ID : {id}</p>
                        <p className="text-center">
                            Name : {FirstName + " " + LastName}{" "}
                        </p>
                        <p className="text-center">DOB : {DOB}</p>
                        <p className=""></p>
                        <p className="text-center"> Gender : {Gender}</p>

                        <p className="text-center">
                            College Name : {CollegeName}
                        </p>
                        <div>
                            <p className="">Hobbies :</p>
                            <ul>
                                {Hobbies.map((item, key) => (
                                    <li key={key} className="">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
