import React, { Component } from "react";
import StudentService from "./Services/studentService";
export default class Form extends Component {
    state = {
        _id: this.props.match.params.id,
        firstname: "",
        lastname: "",
        middlename: "",
        date: "",
        birthplace: "",
        Gender: "",
        language: "",
        city: "",
        state: "",
        country: "",
        pincode: "",

        firstname1: "",
        lastname1: "",
        middlename1: "",
        email: "",
        edq: "",
        profession: "",
        designation: "",
        phn: "",

        firstname2: "",
        lastname2: "",
        middlename2: "",
        email1: "",
        edq1: "",
        profession1: "",
        designation1: "",
        phn1: "",

        relation: "",
        phn2: "",

        reference: "",
        address: "",
        message: "",
        file: "",
        Relname: "",
        editItem: false,
        errors: {
            firstname: "",
            middlename: "",
            lastname: "",
            firstname1: "",
            middlename1: "",
            lastname1: "",
            firstname2: "",
            middlename2: "",
            lastname2: "",
            date: "",
            birthplace: "",
            pincode: "",
            email: "",
            email1: "",
            edq: "",
            profession: "",
            designation: "",
            phn: "",
            edq1: "",
            profession1: "",
            designation1: "",
            phn1: "",

            relation: "",
            phn2: "",
            file: "",
            reference: "",
            address: "",
            Relname: "",
        },
    };

    componentDidMount() {
        //60a5f62f55b60326a8271166
        if (this.state._id === "_add") {
            return;
        } else {
            StudentService.getStudentDataFromId(this.state._id).then((res) => {
                let student = res.data;
                console.log(student);
                this.setState({
                    _id: this.state._id,
                    Gender: student.Gender,
                    address: student.address,
                    birthplace: student.birthplace,
                    city: student.city,
                    country: student.country,
                    date: student.date,
                    designation: student.designation,
                    designation1: student.designation1,
                    edq: student.edq,
                    edq1: student.edq1,
                    email: student.email,
                    email1: student.email1,
                    file: student.file,
                    firstname: student.firstname,
                    firstname1: student.firstname1,
                    firstname2: student.firstname2,
                    language: student.language,
                    lastname: student.lastname,
                    lastname1: student.lastname1,
                    lastname2: student.lastname2,
                    middlename: student.middlename,
                    middlename1: student.middlename1,
                    middlename2: student.middlename2,
                    Relname: student.Relname,
                    phn: student.phn,
                    phn1: student.phn1,
                    phn2: student.phn2,
                    pincode: student.pincode,
                    profession: student.profession,
                    profession1: student.profession1,
                    reference: student.reference,
                    relation: student.relation,
                    state: student.state,
                });
            });
        }
    }
    validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    calculateAge = (date) => {
        const data = Date.now() - date.getTime();
        const age_dt = new Date(data);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;

        if (name === "file") {
            this.setState({
                [name]: event.target.files[0].name,
            });
        } else {
            this.setState({ errors, [name]: value });
        }

        if (
            name === "firstname" ||
            name === "lastname" ||
            name === "middlename" ||
            name === "firstname1" ||
            name === "lastname1" ||
            name === "middlename1" ||
            name === "firstname2" ||
            name === "lastname2" ||
            name === "middlename2" ||
            name === "relation" ||
            name === "reference" ||
            name === "Relname"
        ) {
            if (value.trim().length < 3) {
                //console.log(errors[name]);
                errors[name] = " must be at least three characters long!";
            } else {
                errors[name] = "";
            }
            if (/[^a-zA-Z -]/.test(value)) {
                errors[name] = "Invalid characters";
            }
        } else if (name === "email" || name === "email1") {
            errors[name] = this.validEmailRegex.test(value)
                ? ""
                : "Email is not valid!";
        } else if (
            name === "profession" ||
            name === "profession1" ||
            name === "designation" ||
            name === "designation1"
        ) {
            if (/[^a-zA-Z -]/.test(value)) {
                errors[name] = "Invalid characters";
            } else {
                errors[name] = "";
            }
        } else if (name === "phn" || name === "phn1" || name === "phn2") {
            if (/^[0-9]{10}$/.test(value)) {
                errors[name] = "";
            } else {
                errors[name] = "Phone Number Required Only 10 Digit ";
            }
        }

        switch (name) {
            case "date":
                let age = this.calculateAge(new Date(value));
                if (age >= 5 && age <= 20) {
                    errors[name] = "";
                } else {
                    errors[name] = "Age Should be between 5 to 20";
                }
                break;
            case "birthplace":
                if (value.trim().length < 2) {
                    //console.log(errors[name]);
                    errors[name] = "must be at least two characters long!";
                } else {
                    errors[name] = "";
                }
                break;
            case "pincode":
                errors[name] = /^[0-9]{6}$/.test(value)
                    ? ""
                    : "Pincode must contain 6 Digits";
                break;

            case "address":
                errors[name] =
                    value.length < 5
                        ? "Address must be at 5  characters long!"
                        : "";
                break;
            default:
                break;
        }
    };

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.validateForm(this.state.errors)) {
            const studentData = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                middlename: this.state.middlename,
                date: this.state.date,
                birthplace: this.state.birthplace,
                Gender: this.state.Gender,
                language: this.state.language,
                city: this.state.city,
                state: this.state.state,
                country: this.state.country,
                pincode: this.state.pincode,

                firstname1: this.state.firstname1,
                lastname1: this.state.lastname1,
                middlename1: this.state.middlename1,
                email: this.state.email,
                edq: this.state.edq,
                profession: this.state.profession,
                designation: this.state.designation,
                phn: this.state.phn,

                firstname2: this.state.firstname2,
                lastname2: this.state.lastname2,
                middlename2: this.state.middlename2,
                email1: this.state.email1,
                edq1: this.state.edq1,
                profession1: this.state.profession1,
                designation1: this.state.designation1,
                phn1: this.state.phn1,

                relation: this.state.relation,
                phn2: this.state.phn2,

                reference: this.state.reference,
                address: this.state.address,
                Relname: this.state.Relname,
                file: this.state.file,
            };

            console.info("Valid Form");

            if (this.state._id === "_add") {
                console.log("_add");
                StudentService.insertStudent(studentData).then((res) => {
                    console.log("Insert");
                    this.props.history.push("/");
                });
            } else {
                console.log("Id");
                StudentService.updateStudent(studentData, this.state._id).then(
                    (res) => {
                        console.log("Update");
                        this.props.history.push("/");
                    }
                );
            }
            this.setState({
                firstname: "",
                middlename: "",
                lastname: "",
                language: "",
                city: "",
                state: "",
                country: "",
                firstname1: "",
                middlename1: "",
                lastname1: "",
                firstname2: "",
                middlename2: "",
                lastname2: "",
                date: "",
                birthplace: "",
                pincode: "",
                email: "",
                email1: "",
                edq: "",
                profession: "",
                designation: "",
                phn: "",
                edq1: "",
                profession1: "",
                designation1: "",
                phn1: "",
                file: "",
                relation: "",
                phn2: "",
                Gender: "",
                reference: "",
                address: "",

                message: "",
            });
        } else {
            this.setState({
                message: "Enter Required Details for Submit a Form !...",
            });

            console.error("Invalid Form");
        }
    };

    render() {
        const {
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
            message,
            errors,
        } = this.state;

        return (
            <>
                {" "}
                <div className="border m-2 border-primary ">
                    <h2 className="text-center text-uppercase bg-dark text-white  ">
                        Addmission Form
                    </h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="m-3 p-3">
                            <div className="row p-2">
                                <div className="col-md-2">
                                    <label className="h5">Name</label>
                                </div>
                                <div className="col-md-10">
                                    <div className="row ">
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="firstname"
                                                value={firstname}
                                                onChange={this.handleChange}
                                                placeholder="Firstname"
                                                required
                                            />
                                            {errors.firstname.length > 0 && (
                                                <small className="text-danger">
                                                    {errors.firstname}
                                                </small>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="middlename"
                                                value={middlename}
                                                placeholder="Middlename"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            {errors.middlename.length > 0 && (
                                                <small className="text-danger">
                                                    {errors.middlename}
                                                </small>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="lastname"
                                                value={lastname}
                                                onChange={this.handleChange}
                                                placeholder="Lastname"
                                                required
                                            />
                                            {errors.lastname.length > 0 && (
                                                <small className="text-danger">
                                                    {errors.lastname}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2 p-2">
                                <div className="col-md-2">
                                    <label htmlFor="" className="h5">
                                        Date Of Birth
                                    </label>
                                </div>
                                <div className="col-md-10">
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={date}
                                        onChange={this.handleChange}
                                        name="date"
                                        required
                                    />
                                    {errors.date.length > 0 && (
                                        <small className="text-danger">
                                            {errors.date}
                                        </small>
                                    )}
                                </div>
                            </div>
                            <div className="row mt-2 p-2">
                                <div className="col-md-2">
                                    <label htmlFor="" className="h5">
                                        Place Of Birth
                                    </label>
                                </div>
                                <div className="col-md-10">
                                    <input
                                        type="text"
                                        className="form-control "
                                        name="birthplace"
                                        onChange={this.handleChange}
                                        value={birthplace}
                                        required
                                    />
                                    {errors.birthplace.length > 0 && (
                                        <small className="text-danger">
                                            {errors.birthplace}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="row mt-2 p-2">
                                <div className="col-md-2">
                                    <label className="h5">Gender</label>
                                </div>
                                <div className="col-md-10">
                                    <div className="form-check-inline">
                                        <label className="h5  form-check-label ">
                                            <input
                                                className="form-check-input  "
                                                type="radio"
                                                name="Gender"
                                                value="male"
                                                required
                                                checked={Gender === "male"}
                                                onChange={this.handleChange}
                                            />
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="h5  form-check-label ">
                                            <input
                                                className="form-check-input "
                                                type="radio"
                                                name="Gender"
                                                value="female"
                                                checked={Gender === "female"}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-2 p-2">
                                <div className="col-md-2">
                                    <label className="h5">First Language</label>
                                </div>
                                <div className="col-md-10">
                                    <select
                                        name="language"
                                        className="custom-select"
                                        onChange={this.handleChange}
                                        value={language}
                                        required
                                    >
                                        <option defaultValue value="">
                                            Select Language
                                        </option>
                                        <option value="Gujarati">
                                            Gujarati
                                        </option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="English">English</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-2 p-2">
                                <div className="col-md-3">
                                    <h5>City</h5>
                                    <select
                                        name="city"
                                        className="custom-select "
                                        onChange={this.handleChange}
                                        value={city}
                                        required
                                    >
                                        <option defaultValue value="">
                                            Select City
                                        </option>
                                        {state === "Gujarat" ? (
                                            <>
                                                <option value="Ahmedabad">
                                                    Ahmedabad
                                                </option>
                                                <option value="Rajkot">
                                                    Rajkot
                                                </option>
                                                <option value="Surat">
                                                    Surat
                                                </option>
                                                <option value="Surendranagar">
                                                    Surendranagar
                                                </option>
                                            </>
                                        ) : state === "Delhi" ? (
                                            <>
                                                <option value="New Delhi">
                                                    New Delhi
                                                </option>
                                                <option value="Mehrauli">
                                                    Mehrauli
                                                </option>
                                                <option value="Siri Fort">
                                                    Siri Fort
                                                </option>
                                                <option value="Firozabad">
                                                    Firozabad
                                                </option>
                                            </>
                                        ) : state === "Scotland" ? (
                                            <>
                                                <option value="Glasgow">
                                                    Glasgow
                                                </option>
                                                <option value="Dundee">
                                                    Dundee
                                                </option>
                                                <option value="Aberdeen">
                                                    Aberdeen
                                                </option>
                                            </>
                                        ) : state === "Northern Ireland" ? (
                                            <>
                                                <option value="Belfast">
                                                    Belfast
                                                </option>
                                                <option value="Lisburn">
                                                    Lisburn
                                                </option>
                                                <option value="Newry">
                                                    Newry
                                                </option>
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <h5>State</h5>
                                    <select
                                        name="state"
                                        className="custom-select "
                                        required
                                        value={state}
                                        onChange={this.handleChange}
                                    >
                                        <option defaultValue value="">
                                            Select State
                                        </option>

                                        {country === "India" ? (
                                            <>
                                                <option value="Gujarat">
                                                    Gujarat
                                                </option>

                                                <option value="Delhi">
                                                    Delhi
                                                </option>
                                            </>
                                        ) : country === "England" ? (
                                            <>
                                                <option value="Scotland">
                                                    Scotland
                                                </option>
                                                <option value="Northern Ireland">
                                                    Northern Ireland
                                                </option>
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <h5>Country</h5>
                                    <select
                                        name="country"
                                        className="custom-select "
                                        onChange={this.handleChange}
                                        required
                                        value={country}
                                    >
                                        <option defaultValue value="">
                                            Select Country
                                        </option>
                                        <option value="India">India</option>
                                        <option value="England">England</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <h5>Pincode</h5>
                                    <input
                                        type="text"
                                        className="form-control "
                                        name="pincode"
                                        onChange={this.handleChange}
                                        value={pincode}
                                        max="6"
                                        required
                                    />
                                    {errors.pincode.length > 0 && (
                                        <small className="text-danger">
                                            {errors.pincode}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="row mt-2 p-2">
                                <div className="col-md-6">
                                    <h3>Father Details </h3>
                                </div>
                            </div>

                            <div className="row  mt-2 p-2">
                                <div className="col-md-2">
                                    <label className="h5">Father Name</label>
                                </div>
                                <div className="col-md-10">
                                    <div className="row ">
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="firstname1"
                                                value={firstname1}
                                                onChange={this.handleChange}
                                                placeholder="Firstname"
                                                required
                                            />
                                            {errors.firstname1.length > 0 && (
                                                <small className="text-danger">
                                                    {errors.firstname1}
                                                </small>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="middlename1"
                                                value={middlename1}
                                                onChange={this.handleChange}
                                                placeholder="Middlename"
                                                required
                                            />
                                            {errors.middlename1.length > 0 && (
                                                <small className="text-danger">
                                                    {errors.middlename1}
                                                </small>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="lastname1"
                                                value={lastname1}
                                                onChange={this.handleChange}
                                                placeholder="Lastname"
                                                required
                                            />
                                            {errors.lastname1.length > 0 && (
                                                <small className="text-danger">
                                                    {errors.lastname1}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row p-2 mt-2">
                                <div className="col-md-2">
                                    <label className="h5">Email</label>
                                </div>
                                <div className="col-md-10">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange}
                                        placeholder="abc@gmail.com"
                                        required
                                    />
                                    {errors.email.length > 0 && (
                                        <small className="text-danger">
                                            {errors.email}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="row mt-2 p-2">
                                <div className="col-md-3">
                                    <h5>Education Qualification</h5>
                                    <select
                                        name="edq"
                                        className="custom-select "
                                        onChange={this.handleChange}
                                        value={edq}
                                        required
                                    >
                                        <option defaultValue value="">
                                            Qualification
                                        </option>
                                        <option value="10th">10th</option>
                                        <option value="12th">12th</option>
                                        <option value="< 10">
                                            Less then 10
                                        </option>
                                        <option value="BE">BE</option>
                                        <option value="BSC">BSC</option>
                                        <option value="ME">ME</option>
                                        <option value="MSC">MSC</option>
                                        <option value="BCA">BCA</option>
                                        <option value="MCA">MCA</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <h5>Profession</h5>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={profession}
                                        onChange={this.handleChange}
                                        name="profession"
                                    />
                                    {errors.profession.length > 0 && (
                                        <small className="text-danger">
                                            {errors.profession}
                                        </small>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    <h5>Designation</h5>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={designation}
                                        onChange={this.handleChange}
                                        name="designation"
                                    />
                                    {errors.designation.length > 0 && (
                                        <small className="text-danger">
                                            {errors.designation}
                                        </small>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    <h5>Phone no</h5>
                                    <input
                                        type="text"
                                        className="form-control"
                                        max="10"
                                        name="phn"
                                        value={phn}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    {errors.phn.length > 0 && (
                                        <small className="text-danger">
                                            {errors.phn}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="row mt-2 p-2">
                                <div className="col-md-6">
                                    <h3>Mother Details </h3>
                                </div>
                            </div>

                            <div className="row p-2 mt-2">
                                <div className="col-md-2">
                                    <label className="h5">Mother Name</label>
                                </div>
                                <div className="col-md-10">
                                    <div className="row ">
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="firstname2"
                                                value={firstname2}
                                                onChange={this.handleChange}
                                                placeholder="Firstname"
                                                required
                                            />
                                            {errors.firstname2.length > 0 && (
                                                <small className="text-danger">
                                                    {errors.firstname2}
                                                </small>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="middlename2"
                                                value={middlename2}
                                                onChange={this.handleChange}
                                                placeholder="Middlename"
                                                required
                                            />
                                            {errors.middlename2.length > 0 && (
                                                <small className="text-danger">
                                                    {errors.middlename2}
                                                </small>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="lastname2"
                                                value={lastname2}
                                                placeholder="Lastname"
                                                onChange={this.handleChange}
                                                required
                                            />
                                            {errors.lastname2.length > 0 && (
                                                <small className="text-danger">
                                                    {errors.lastname2}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row p-2 mt-2">
                                <div className="col-md-2">
                                    <label className="h5">Email</label>
                                </div>
                                <div className="col-md-10">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email1"
                                        value={email1}
                                        onChange={this.handleChange}
                                        placeholder="abc@gmail.com"
                                        required
                                    />
                                    {errors.email1.length > 0 && (
                                        <small className="text-danger">
                                            {errors.email1}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="row mt-2 p-2">
                                <div className="col-md-3">
                                    <h5>Education Qualification</h5>
                                    <select
                                        name="edq1"
                                        className="custom-select "
                                        onChange={this.handleChange}
                                        value={edq1}
                                        required
                                    >
                                        <option defaultValue value="">
                                            Qualification
                                        </option>
                                        <option value="10th">10th</option>
                                        <option value="12th">12th</option>
                                        <option value="< 10">
                                            Less then 10
                                        </option>
                                        <option value="BE">BE</option>
                                        <option value="BSC">BSC</option>
                                        <option value="ME">ME</option>
                                        <option value="MSC">MSC</option>
                                        <option value="BCA">BCA</option>
                                        <option value="MCA">MCA</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <h5>Profession</h5>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="profession1"
                                        value={profession1}
                                        onChange={this.handleChange}
                                    />
                                    {errors.profession1.length > 0 && (
                                        <small className="text-danger">
                                            {errors.profession1}
                                        </small>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    <h5>Designation</h5>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="designation1"
                                        value={designation1}
                                        onChange={this.handleChange}
                                    />
                                    {errors.designation1.length > 0 && (
                                        <small className="text-danger">
                                            {errors.designation1}
                                        </small>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    <h5>Phone no</h5>
                                    <input
                                        type="text"
                                        className="form-control"
                                        max="10"
                                        name="phn1"
                                        value={phn1}
                                        onChange={this.handleChange}
                                    />
                                    {errors.phn1.length > 0 && (
                                        <small className="text-danger">
                                            {errors.phn1}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="row mt-2 p-2">
                                <div className="col-md-6">
                                    <label htmlFor="" className="h3">
                                        Emergency Contact List
                                    </label>
                                </div>
                            </div>

                            <div className="row mt-2 p-2">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="" className="h5">
                                                Name
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="Relname"
                                                value={Relname}
                                                onChange={this.handleChange}
                                            />
                                            {errors.Relname.length > 0 && (
                                                <small className="text-danger">
                                                    {errors.Relname}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="" className="h5">
                                                Relation
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="relation"
                                                value={relation}
                                                onChange={this.handleChange}
                                            />
                                            {errors.relation.length > 0 && (
                                                <small className="text-danger">
                                                    {errors.relation}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="" className="h5">
                                                Number
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="phn2"
                                                value={phn2}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            {errors.phn2.length > 0 && (
                                                <small className="text-danger">
                                                    {errors.phn2}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-2 p-2">
                                <div className="col-md-6">
                                    <label htmlFor="" className="h3">
                                        Reference Details
                                    </label>
                                </div>
                            </div>

                            <div className="row mt-2 p-2">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="reference"
                                        value={reference}
                                        onChange={this.handleChange}
                                        placeholder="Reference Through"
                                    />
                                    {errors.reference.length > 0 && (
                                        <small className="text-danger">
                                            {errors.reference}
                                        </small>
                                    )}
                                </div>
                                <div className="col-md-6">
                                    <textarea
                                        name="address"
                                        className="form-control"
                                        placeholder="Address"
                                        value={address}
                                        onChange={this.handleChange}
                                    ></textarea>
                                    {errors.address.length > 0 && (
                                        <small className="text-danger">
                                            {errors.address}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="row mt-2 p-2">
                                <div className="col-md-3">
                                    <label htmlFor="" className="h5">
                                        Passport Size Photo
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="file"
                                        name="file"
                                        onChange={this.handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="col-md-3">
                                    {this.state._id !== "_add" ||
                                    file.length > 0 ? (
                                        <img
                                            src={"../img/" + file}
                                            width="80px"
                                            alt="img"
                                            className="text-center rounded img-fuild border border-primary"
                                        ></img>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                            <div className="d-flex justify-content-center text-danger align-items-center">
                                {message.length > 0 && <h4>{message}</h4>}
                            </div>
                            <button
                                className={
                                    this.state._id === "_add"
                                        ? "btn btn-block btn-success mt-3 p-1"
                                        : "btn btn-block btn-secondary mt-3 p-1"
                                }
                            >
                                {this.state._id === "_add"
                                    ? "Submit"
                                    : "Edit Data"}
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
