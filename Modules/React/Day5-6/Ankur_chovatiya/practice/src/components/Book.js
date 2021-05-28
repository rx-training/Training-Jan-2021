import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
export default class Book extends Component {
    render() {
        const {id ,img , title , author} = this.props.info;
        const {handleDelete} = this.props;
        // console.log(id);
        return (
            
            <div  className="card col col-md-4 col-lg-3" >
                <div className="card-body" style={{backgroundColor:"lightcyan"}}>
                <img src={img} width="150"></img>
                <h4>Title : {title}</h4>
                <h6>Author : {author}</h6>
                <Button onClick={()=> {handleDelete(id)}} >Delete Me!</Button>
                </div>
            </div>
            
        )
    }
}
