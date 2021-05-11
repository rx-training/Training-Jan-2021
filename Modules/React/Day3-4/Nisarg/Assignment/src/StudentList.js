import React,{Componenet, Component} from "react";
import StudentData from "./StudentData";
import StudentIDCard from "./StudentIDCard";

export default class StudentList extends Component
{
    state={
        StudentData=StudentData,
    };

    render()
    {
        let studentdata=this.state.StudentData.map((item)=>{

            return <StudentIDCard key={item.id} student={item}/>

        });
        return <>{studentdata}</>;
    }
}