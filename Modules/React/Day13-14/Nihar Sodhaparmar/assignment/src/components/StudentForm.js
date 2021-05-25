import React from "react";

export default function StudentForm(props) {
  const { handleSubmit, handleChange, handleBlur, student, errors } = props;

  const {
    id,
    firstName,
    lastName,
    dob,
    gender,
    studentImage,
    collegeName,
    collegeAddress,
    collegeCountry,
    collegeLogo,
  } = student;

  return (
    <div className="container rounded my-5">
      <div className="card student-form">
        <h1 className="text-center card-header text-white bg-dark py-2">
          Add Student
        </h1>

        <div className="card-body my-5 student-form-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <label htmlFor="id" className="col-md-3 col-form-label">
                ID
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  name="id"
                  className="form-control"
                  placeholder="ID"
                  value={id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-danger mb-0">{errors.id}</p>
              </div>
            </div>

            <div className="form-group row mt-4">
              <label htmlFor="firstName" className="col-md-3 col-form-label">
                FirstName
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="FirstName"
                  value={firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-danger mb-0">{errors.firstName}</p>
              </div>
            </div>

            <div className="form-group row mt-4">
              <label htmlFor="lastName" className="col-md-3 col-form-label">
                LastName
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="LastName"
                  value={lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-danger mb-0">{errors.lastName}</p>
              </div>
            </div>

            <fieldset className="form-group mt-4">
              <div className="row">
                <label htmlFor="gender" className="col-form-label col-md-3">
                  Gender
                </label>
                <div className="col-md-9">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Female
                    </label>
                  </div>
                  <p className="text-danger mb-0">{errors.gender}</p>
                </div>
              </div>
            </fieldset>

            <div className="form-group row mt-4">
              <label htmlFor="dob" className="col-md-3 col-form-label">
                Date of Birth
              </label>
              <div className="col-md-9">
                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  placeholder="Date of Birth"
                  value={dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-danger mb-0">{errors.dob}</p>
              </div>
            </div>

            <div className="form-group row mt-4">
              <label htmlFor="studentImage" className="col-md-3 col-form-label">
                Image
              </label>
              <div className="col-md-9">
                <input
                  type="file"
                  name="studentImage"
                  className="form-control border-white pl-0"
                  onChange={handleChange}
                />
                <p className="text-danger mb-0">{errors.studentImage}</p>
              </div>
            </div>

            {studentImage && (
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-9 ">
                  <div className="form-student-image mx-auto rounded-circle">
                    <img
                      className="rounded-circle"
                      width="175"
                      height="175"
                      src={studentImage}
                      alt="student"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="form-group row mt-4">
              <label htmlFor="collegeName" className="col-md-3 col-form-label">
                College Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  name="collegeName"
                  className="form-control"
                  placeholder="College Name"
                  value={collegeName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-danger mb-0">{errors.collegeName}</p>
              </div>
            </div>

            <div className="form-group row mt-4">
              <label
                htmlFor="collegeAddress"
                className="col-md-3 col-form-label"
              >
                College Address
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  name="collegeAddress"
                  className="form-control"
                  placeholder="College Address"
                  value={collegeAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-danger mb-0">{errors.collegeAddress}</p>
              </div>
            </div>

            <div className="form-group row mt-4">
              <label
                htmlFor="collegeCountry"
                className="col-md-3 col-form-label"
              >
                Select College Country
              </label>
              <div className="col-md-9">
                <select
                  name="collegeCountry"
                  className="form-control"
                  value={collegeCountry}
                  onChange={handleChange}
                >
                  <option value="select">Select</option>
                  <option value="india">India</option>
                  <option value="america">America</option>
                  <option value="canada">Canada</option>
                </select>
                <p className="text-danger mb-0">{errors.collegeCountry}</p>
              </div>
            </div>

            <div className="form-group row mt-4">
              <label htmlFor="collegeLogo" className="col-md-3 col-form-label">
                College Logo
              </label>
              <div className="col-md-9">
                <input
                  type="file"
                  name="collegeLogo"
                  className="form-control border-white pl-0"
                  onChange={handleChange}
                />
                <p className="text-danger mb-0">{errors.collegeLogo}</p>
              </div>
            </div>

            {collegeLogo && (
              <div className="row mb-4">
                <div className="col-md-3"></div>
                <div className="col-md-9 ">
                  <div className="form-collegelogo-image mx-auto">
                    <img width="120" src={collegeLogo} alt="college logo" />
                  </div>
                </div>
              </div>
            )}

            <div className="form-group row mb-0">
              <div className="col-md-3"></div>
              <div className="col-md-9">
                <button
                  type="submit"
                  className="btn btn-dark btn-block w-50 mx-auto mt-4 text-uppercase"
                >
                  add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
