import React, { Component } from 'react'
import Buttons from './Buttons'

export default class Book extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
            isToggle:false
        }
    }

    addCount = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    lowerCount = () => {
        this.setState({
            count: this.state.count-1
        })
    }

    resetCount = () => {
        this.setState({
            count: 0
        })
    }

    toggle = () => {
        this.setState({
            isToggle:!this.state.isToggle
        })
    }

    render() {
        const {img,title,author} = this.props.info;
        return (
            <div className="shadow rounded row col-xl-5 my-4 mx-auto px-auto pb-3 border bg-light">
                <div className="col-md-5">
                <img className="shadow mb-4 bg-white rounded mt-4" width="150" src={img} alt="Book"  />
                </div>
                <div className="row col-md-7 pt-3">
                    <div className="col-12">
                        <h4>Title : {title}</h4>
                        <h6> Author : {author}</h6>
                        <h6>Count :{this.state.count}</h6>
                        <Buttons addCount={this.addCount} lowerCount={this.lowerCount} resetCount={this.resetCount} toggle={this.toggle}/>
                        {this.state.isToggle?<h6>Some random text</h6>:null}
                    </div>
                </div>
            </div>
        )
    }
}
