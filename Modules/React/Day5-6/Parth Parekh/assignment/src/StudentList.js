import React, { Component } from "react";
import StudentData from "./StudentData";
import StudentIDCard from "./StudentIDCard";

export default class StudentList extends Component {
    state = {
        StudentData: StudentData,
    };
    handleDelete = (id) => {
        console.log(this.state.StudentData);
        const stdList = this.state.StudentData.filter((item) => item.ID !== id);
        console.log(stdList);
        this.setState({ StudentData: stdList });
    };

    render() {
        let studentdata = this.state.StudentData.map((item) => {
            return (
                <StudentIDCard
                    key={item.ID}
                    student={item}
                    handleDelete={this.handleDelete}
                />
            );
        });
        return <>{studentdata}</>;
    }
}
