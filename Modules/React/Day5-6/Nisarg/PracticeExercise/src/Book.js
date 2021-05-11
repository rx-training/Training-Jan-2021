import React,{Component} from "react";
export default class Book extends Component
{
    constructor(props){
        super(props)
        this.state={
            count:1,
            name:"John"
        };
    }
    
    addCount=()=>
    {
        this.setState({count:this.state.count+1});
    }
    lowerCount=()=>
    {

        this.setState({count:this.state.count-1});
    }
    resetCount=()=>
    {
        this.setState({count:0});
    }
    render()
    {
        const{img,title,author}=this.props.info;
        return(
            <article className="book">
                <img src= {img} width="150" alt="book"/>
                <div>
                        <h4>Title: {title}</h4>
                        <h6>Author:     {author}</h6>
                        <h3>Count :{this.state.count}</h3>
                        <button type="button" onClick={this.addCount}>Add count</button>
                        <button type="button" onClick={this.lowerCount}>Lower count</button>
                        <button type="button" onClick={this.resetCount}>Reset count</button>
                </div>
               
            </article>
        );
    }
}