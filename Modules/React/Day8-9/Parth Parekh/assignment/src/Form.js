import React, { Component } from "react";

export default class Form extends Component {
    render() {
        const {
            handleChange,
            handleSubmit,
            FirstName,
            LastName,
            CollegeName,
            Gender,
            DOB,
        } = this.props;

        return (
            <section>
                <article className="border border-primary p-5 m-3 bg-dark text-white">
                    <h1 className="display-4 text-center ">Student Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="h5">FirstName</label>
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
                        <div className="form-group ">
                            <label className="h5">LastName</label>
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
                        <div className="form-group">
                            <label className="h5">Date of birth</label>
                            <input
                                type="date"
                                className="form-control m-1 "
                                name="DOB"
                                value={DOB}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group ">
                            <label className="h5">City</label>
                            <select
                                name="City"
                                onChange={handleChange}
                                className="custom-select m-1"
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
                        <div className="form-check">
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
                            <label className="h5 form-check-inline form-check-label ml-sm-0  ml-md-2">
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
                        <div className="form-group">
                            <label className="h5 mt-3">Profile Picture</label>
                            <input
                                type="file"
                                className="form-control-file ml-4"
                                onChange={handleChange}
                                name="user"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="h5 mt-2">College Logo</label>
                            <input
                                type="file"
                                onChange={handleChange}
                                className="form-control-file ml-4 "
                                name="logo"
                                required
                            />
                        </div>
                        <label className="h5"> Hobbies </label>
                        <div className="form-check p-2 ">
                            <label className="h5 form-check-inline form-check-label ">
                                <input
                                    className="form-check-input radiosize"
                                    type="Checkbox"
                                    name="Hobbies"
                                    value="Cricket"
                                    onChange={handleChange}
                                />
                                Cricket
                            </label>
                            <label className="h5 form-check-inline form-check-label ">
                                <input
                                    className="form-check-input radiosize"
                                    type="Checkbox"
                                    name="Hobbies"
                                    value="Playing Games"
                                    onChange={handleChange}
                                />
                                Playing Games
                            </label>

                            <label className=" h5 form-check-inline form-check-label ">
                                <input
                                    className="form-check-input radiosize"
                                    type="Checkbox"
                                    name="Hobbies"
                                    value="Travelling"
                                    onChange={handleChange}
                                />
                                Travelling
                            </label>
                            <label className="h5 form-check-inline form-check-label ">
                                <input
                                    className="form-check-input radiosize"
                                    type="Checkbox"
                                    name="Hobbies"
                                    value="Football"
                                    onChange={handleChange}
                                />
                                Football
                            </label>
                            <label className="h5 form-check-inline form-check-label ">
                                <input
                                    className="form-check-input radiosize"
                                    type="Checkbox"
                                    name="Hobbies"
                                    value="Volleyball"
                                    onChange={handleChange}
                                />
                                Volleyball
                            </label>
                        </div>
                        <div className="form-group  mt-2">
                            <label className="h5">CollegeName</label>
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

                        <button className="btn btn-outline-success mt-2 btn-block ">
                            Submit
                        </button>
                    </form>
                </article>
            </section>
        );
    }
}
