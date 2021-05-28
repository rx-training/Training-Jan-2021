import React, { Component } from 'react'
import '../../App.css'



export default class Book extends Component {
    constructor(props){
        super(props)
        this.state = { count : 1 ,showData : true}
    }


    
    handleToggle = () => {
        this.setState({showData: !this.state.showData})
        console.log(this.state.showData);
    }

    addCount = () => {
        this.setState({count : this.state.count +1});
    }

    lowerCount = () => {
        console.log(this.state.count);
        this.setState({count : 1});
    }

    resetCount = () => {
        console.log(this.state.count);
        this.setState({count : this.state.count - 1});
        
    }

    render() {
        const {id, img, author, title } = this.props.info
        const {handleDelete} = this.props
        return (
            <div className ="book bg-secondary text-white w-50 p-4">
                <img src={img} alt="Book"/>
                <div>
                    <h4>Title : {title}</h4>
                    <h6>Author : {author}</h6>

                    <h3>count : {this.state.count} </h3>
                    <button className="btn btn-sm btn-success m-2" onClick={this.addCount}>Add Count</button>
                    <button className="btn btn-sm btn-warning m-2" onClick={this.state.count > 1 ? this.resetCount : () => handleDelete(id)}>Lower Count</button>
                    <button className="btn btn-sm btn-danger m-2" onClick={this.lowerCount}>Reset Count</button><br/>

                    <button className="btn btn-danger m-2" onClick={() => handleDelete(id)} >Delete</button>
                    <button className="btn btn-light m-2" onClick={this.handleToggle}>
                        {this.state.showData ? "Hide" : "Show"}
                    </button>

                    {this.state.showData && <span>Click to hide me</span>}

                </div>
            </div>
        )
    }
}
