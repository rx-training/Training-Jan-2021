import React, { Component } from 'react'

class ListItem extends Component{
    render(){
    const { id , firstName , lastName ,img ,  collegeName , logo} = this.props
    console.log(logo);
    return(
        
            
                    <div className="p-3" style={{backgroundColor:'lightpink' }}>
                        <div className="card-text">
                            <img className="card-img center" style={{width:"200px" , height:"200px"}} src={img}></img>
                            <h5>Student ID: {id} </h5>
                            <h5>Name: {firstName}   {lastName} </h5>
                            <h5>CoollegeName: {collegeName}</h5>
                            <img className="" style={{width:"200px" , height:"200px"}} src={logo} alt ="college logo"></img>
                        </div>
                    </div>
               
    )
    }
}


export default class StudentList extends Component {
    
    render() {
        const { students } = this.props;
        console.log(students);
        return (
            <div className="container">
                <h1 className="text-center">Students Data</h1>    
               <div className="row">
                   <div className="col col-4 col-md-3">
                {students.map((std)=> {
                    let stdimg =std.img.split('fakepath');
                    console.log(stdimg[1])
                    return(
                        <ListItem key={std.id} 
                        id={std.id}
                        firstName={std.firstName} 
                        lastName={std.lastName}
                        img={std.img}
                        collegeName = {std.collegeName}
                        ></ListItem>
                    )
                })}
                    </div>
                </div>
            </div>
        )
    }
}
