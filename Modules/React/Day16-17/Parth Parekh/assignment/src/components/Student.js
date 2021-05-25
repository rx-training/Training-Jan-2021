import React, { useState, useEffect } from "react";
import StudentService from "../Services/studentService";

export default function Student(props) {
    const [values, setValues] = useState({
        _id: props.match.params.id,
        student: {},
    });

    useEffect(() => {
        StudentService.getStudentDataFromId(values._id).then((res) => {
            setValues({ ...values, student: res.data });
        });
    }, []);

    const handleDelete = (id) => {
        StudentService.deleteStudent(id).then((res) => {
            props.history.push("/");
        });
    };

    const handleEdit = (id) => {
        props.history.push(`/add-student/${id}`);
    };

    const {
        _id,
        firstname,
        lastname,
        middlename,
        date,
        birthplace,
        Gender,
        city,
        file,
        pincode,
        country,
        firstname1,
        lastname1,
        middlename1,
        email,
        edq1,
        edq,
        profession,
        designation,
        phn,
        state,
        firstname2,
        lastname2,
        middlename2,
        email1,
        Relname,
        profession1,
        designation1,
        phn1,
        language,
        relation,
        phn2,
        reference,
        address,
    } = values.student;

    return (
        <div
            className="m-2 text-capitalize border"
            style={{ boxShadow: "7px 6px lightgrey" }}
        >
            <h3 className="text-center bg-info"> Student Details </h3>
            <div className="row m-3 p-3">
                <div className="col-md-8   h5 ">
                    <p>
                        Name : {firstname + " " + lastname + " " + middlename}
                    </p>
                    <p>BirthDate : {date}</p>
                    <p>BirthPlace : {birthplace}</p>
                    <p>
                        Address :{" "}
                        {city + " ," + state + "," + country + " ," + pincode}
                    </p>
                    <p>Gender : {Gender}</p>
                    <p>Mother Tounge : {language}</p>
                </div>
                <div className="col-md-4 text-center">
                    <img
                        src={`../img/${file}`}
                        alt="user"
                        className="border border-primary rounded img-fuild"
                        width="120px"
                    />
                    <p className="h5 mt-3"> ID : {_id}</p>
                    <div className="d-flex justify-content-around align-items-center">
                        <button
                            className="btn btn-success"
                            onClick={() => {
                                handleEdit(_id);
                            }}
                        >
                            Edit Info
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                handleDelete(_id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            <div className="row m-3 p-3">
                <div className="col-md-6 ">
                    <h4>Father Details </h4>
                    <p>
                        Name :{firstname1 + " " + lastname1 + " " + middlename1}
                    </p>
                    <p>
                        Email :
                        <span className="text-info  border-bottom-1">
                            {" " + email}
                        </span>
                    </p>
                    <p>Mobile No : {phn}</p>
                    <p>Education Qualification : {edq}</p>
                    <p>Profession : {profession}</p>
                    <p>Designation : {designation}</p>
                </div>
                <div className="col-md-6">
                    <h4>Mother Details</h4>
                    <p>
                        Name :{firstname2 + " " + lastname2 + " " + middlename2}
                    </p>
                    <p>
                        Email :
                        <span className="text-info  border-bottom-1">
                            {" " + email1}
                        </span>
                    </p>
                    <p>Mobile No : {phn1}</p>
                    <p>Education Qualification : {edq1}</p>
                    <p>Profession : {profession1}</p>
                    <p>Designation : {designation1}</p>
                </div>
            </div>
            <div className="row m-3 p-3 ">
                <h4 className="ml-1">Emergency Contact List</h4>
            </div>
            <div className="row m-3 p-3">
                <div className="col-md-3">
                    <p>Name : {Relname}</p>
                    <p>Reference Through: {reference}</p>
                </div>
                <div className="col-md-3">
                    {" "}
                    <p> Relation : {relation}</p>
                    <p>Address : {address}</p>
                </div>
                <div className="col-md-4 ">
                    <p> Mobile No : {phn2}</p>
                </div>
            </div>
        </div>
    );
}
