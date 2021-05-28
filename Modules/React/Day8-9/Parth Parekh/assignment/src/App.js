import Form from "./Form";
import React, { Component } from "react";
import StudentList from "./StudentList";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            FirstName: "",
            LastName: "",
            CollegeName: "",
            Gender: "",
            City: "",
            DOB: "",
            Hobbies: [],
            studentList: [],
            user: null,
            logo: null,
        };
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "user") {
            const user = e.target.files[0].name;
            this.setState({ [name]: user });
        } else if (name === "logo") {
            const logo = e.target.files[0].name;
            this.setState({ [name]: logo });
        } else if (name === "Hobbies") {
            if (e.target.checked) {
                this.setState({
                    Hobbies: [...this.state.Hobbies, value],
                });
            } else {
                const array = this.state.Hobbies;
                const index = array.indexOf(e.target.value);
                if (index > -1) {
                    array.splice(index, 1);
                }
                this.setState({
                    Hobbies: array,
                });
            }
        } else {
            this.setState({ [name]: value });
        }
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const studentData = {
            id: this.state.studentList.length + 1,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            CollegeName: this.state.CollegeName,
            Gender: this.state.Gender,
            Hobbies: this.state.Hobbies,
            DOB: this.state.DOB,
            user: this.state.user,
            logo: this.state.logo,
        };

        this.setState({
            FirstName: "",
            LastName: "",
            CollegeName: "",
            Gender: "",
            City: "",
            DOB: "",
            Hobbies: [],
            user: null,
            logo: null,
            studentList: [...this.state.studentList, studentData],
        });
    };
    render() {
        return (
            <div className=" container">
                <Form
                    FirstName={this.state.FirstName}
                    LastName={this.state.LastName}
                    CollegeName={this.state.CollegeName}
                    Gender={this.state.Gender}
                    DOB={this.state.DOB}
                    Hobbies={this.state.Hobbies}
                    user={this.state.user}
                    logo={this.state.logo}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />

                <div className="row p-2 m-2">
                    {this.state.studentList.map((item) => {
                        return <StudentList key={item.id} studentData={item} />;
                    })}
                </div>
            </div>
        );
    }
}
