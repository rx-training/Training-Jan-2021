import React , {useEffect , useState} from 'react'
import axios from 'axios'


function DataFetch() {

    const [id , setId] = useState(1);
    const [buttonId , setButtonId] = useState(1)
    const [post , setPost] = useState({})

    useEffect( () =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`).then((res) => {
            // setPosts(res)
            setPost(res.data)
            console.log(res);
        }).catch(err =>{
            console.log(err);
        })
    } , [buttonId])

    const handleClick = () =>{
            setButtonId(id)
    }
    return (
        <div>
          Post Id : -  <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
            <button onClick={() => handleClick()}>Fetch Post</button>
           <div>{post.title}</div>
        </div>
    )
}

export default DataFetch

