import React from 'react'

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}

export  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
        {listItems}
        </ul>
    );
}

export  function Blog(props) {
    const sidebar = (
        <ul>
        {props.posts.map((post) =>
            <li key={post.id}>
            {post.title}
            </li>
        )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        </div>
    );
    return (
        <div>
        {sidebar}
        <hr />
        {content}
        </div>
);
}


/* 
export default class ListKey extends Component {
    constructor(props){
        super(props)
        this.state = {list : this.props.list,listItems : [] }
    }

    componentDidMount(){
        
        var listItem = this.state.list.map((number) => {
            return <li key={number.toString()} >{number}</li>
        })
        this.setState({listItems : listItem})
    }


    render() {
        return (
            <div>
                <ul>{this.state.listItems}</ul>
            </div>
        )
    }
} */
