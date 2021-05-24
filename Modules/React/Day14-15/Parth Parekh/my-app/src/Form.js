import React, { useState } from "react";
import StudentList from "./StudentList";
import "./Form.css";

export default function Form() {
    const [studentList, setData] = useState([]);
    const [values, setValues] = useState({
        FirstName: "",
        LastName: "",
        DOB: "",
        City: "",
        Gender: "",
        user: "",
        logo: "",
        CollegeName: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "user" || name === "logo") {
            setValues({
                ...values,
                [name]: URL.createObjectURL(e.target.files[0]),
            });
        } else {
            setValues({
                ...values,
                [name]: value,
            });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            FirstName,
            LastName,
            DOB,
            City,
            Gender,
            user,
            logo,
            CollegeName,
        } = values;
        const studentData = {
            id: studentList.length + 1,
            FirstName: FirstName,
            LastName: LastName,
            DOB: DOB,
            City: City,
            Gender: Gender,
            user: user,
            logo: logo,
            CollegeName: CollegeName,
        };

        setValues({
            FirstName: "",
            LastName: "",
            DOB: "",
            City: "",
            Gender: "",
            user: "",
            logo: "",
            CollegeName: "",
        });

        const list = [...studentList, studentData];
        setData(list);
    };

    const { FirstName, LastName, DOB, City, Gender, user, logo, CollegeName } =
        values;

    return (
        <div className="container text-capitalize">
            <article className="border border-primary p-5 m-3 bg-dark text-white">
                <h1 className="text-center">Student Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row mx-auto my-3">
                        <div className="col-md-2">
                            <label className="h5">FirstName</label>
                        </div>
                        <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control m-1"
                                name="FirstName"
                                value={FirstName}
                                onChange={handleChange}
                                placeholder="FirstName"
                                required
                            />
                        </div>
                    </div>
                    <div className="row mx-auto my-3">
                        <div className="col-md-2">
                            <label className="h5">LastName</label>
                        </div>
                        <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control m-1"
                                name="LastName"
                                value={LastName}
                                onChange={handleChange}
                                placeholder="LastName"
                                required
                            />
                        </div>
                    </div>
                    <div className="row mx-auto my-3">
                        <div className="col-md-2">
                            <label className="h5">Date of birth</label>
                        </div>
                        <div className="col-md-10">
                            <input
                                type="date"
                                className="form-control m-1 "
                                name="DOB"
                                value={DOB}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mx-auto my-3">
                        <div className="col-md-2">
                            <label className="h5">City</label>
                        </div>
                        <div className="col-md-10">
                            <select
                                name="City"
                                onChange={handleChange}
                                className="custom-select m-1"
                                value={City}
                                required
                            >
                                <option defaultValue value="">
                                    Select City
                                </option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Baroda">Baroda</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mx-auto my-3">
                        <div className="col-md-2">
                            <label className="h5">Gender</label>
                        </div>
                        <div className="col-md-10">
                            <label className="h5 form-check-inline form-check-label ">
                                <input
                                    className="form-check-input radiosize "
                                    type="radio"
                                    name="Gender"
                                    value="Male"
                                    checked={Gender === "Male"}
                                    onChange={handleChange}
                                    required
                                />
                                Male
                            </label>
                            <label className="h5 form-check-inline form-check-label ">
                                <input
                                    className="form-check-input radiosize"
                                    type="radio"
                                    name="Gender"
                                    value="Female"
                                    checked={Gender === "Female"}
                                    onChange={handleChange}
                                    required
                                />
                                Female
                            </label>
                        </div>
                    </div>

                    <div className="row mx-auto my-3">
                        <div className="col-md-2">
                            <label className="h5 ">Profile Picture</label>
                        </div>
                        <div className="col-md-5 ">
                            <input
                                type="file"
                                className="form-control-file "
                                onChange={handleChange}
                                name="user"
                                required
                            />
                        </div>
                        <div className="col-md-3 ">
                            {user.length > 0 ? (
                                <img
                                    src={user}
                                    alt="user"
                                    className="border border-primary img-fuild"
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>

                    <div className="row my-3 mx-auto">
                        <div className="col-md-2">
                            <label className="h5">College Logo</label>
                        </div>
                        <div className="col-md-5">
                            <input
                                type="file"
                                onChange={handleChange}
                                className="form-control-file "
                                name="logo"
                                required
                            />
                        </div>
                        <div className="col-md-3 ">
                            {logo.length > 0 ? (
                                <img
                                    src={logo}
                                    alt="user"
                                    className="border img-fuild"
                                    width="70px"
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>

                    <div className="row my-3 mx-auto">
                        <div className="col-md-2">
                            <label className="h5">College Name</label>
                        </div>
                        <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control"
                                name="CollegeName"
                                onChange={handleChange}
                                value={CollegeName}
                                placeholder="CollegeName"
                                required
                            />
                        </div>
                    </div>

                    <button className="btn  btn-success">Submit</button>
                </form>
            </article>

            <div className="row p-2 m-2">
                {studentList.map((item) => {
                    return <StudentList key={item.id} studentData={item} />;
                })}
            </div>
        </div>
    );
}
