import React, { Component } from "react";
import StudentService from "../Services/studentService";

export default class StudentList extends Component {
    state = {
        studentData: [],
    };
    componentDidMount() {
        StudentService.getStudentData().then((res) => {
            this.setState({ studentData: res.data });
        });
    }

    viewInfo = (id) => {
        this.props.history.push(`/student/${id}`);
    };

    render() {
        console.log(this.state.studentData);
        return (
            <div className="row mt-2 p-2 text-capitalize">
                {this.state.studentData.length < 1 && (
                    <div className="text-center mt-5 p-3  display-2">
                        Student Data Not Available !...
                    </div>
                )}

                {this.state.studentData.map((item) => {
                    return (
                        <>
                            <div className="card col-md-4 mt-2 mx-auto text-monospace ">
                                <div className=" card-body "></div>
                                <div className="text-center">
                                    <img
                                        src={"../img/" + item.file}
                                        alt="img"
                                        width="100px"
                                    />
                                </div>
                                <div className="mt-1">
                                    <p className="text-center">
                                        {" "}
                                        ID : {item._id}
                                    </p>
                                    <p className="text-center">
                                        Name :{" "}
                                        {item.firstname +
                                            " " +
                                            item.middlename +
                                            " " +
                                            item.lastname}
                                    </p>
                                    <p className="text-center">
                                        BirthDate :{item.date}
                                    </p>
                                    <p className="text-center text-monospace">
                                        Gender : {item.Gender}
                                    </p>
                                    <p className="text-center">
                                        Address :{" "}
                                        {item.city +
                                            ", " +
                                            item.state +
                                            ", " +
                                            item.country}
                                    </p>
                                    <p className="text-center">
                                        Pincode no : {item.pincode}
                                    </p>
                                    <div className="text-center ml-2 mx-auto ">
                                        <button
                                            className="btn btn-info m-2"
                                            onClick={() => {
                                                this.viewInfo(item._id);
                                            }}
                                        >
                                            More Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        );
    }
}
