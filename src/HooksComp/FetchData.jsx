import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchData() {
    const [post, setPost] = useState([]);
    const [id, setId] = useState(1); 
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((responce) => {
        console.log(responce);
        setPost(responce.data)
      })
      .catch((error) => {
        console.log(error);
        
      });
      //adding an empty array as a dependancy list to call useEffect on one render 
    },[idFromButtonClick])

    const handleClick =() => {
        setIdFromButtonClick(id)
    }
  return (
    <div>
        
        <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
        <button onClick={handleClick}>Fetch Posts</button>
        <div>{post.title}</div>
        {/* <ul>
            {
                posts.map((post)=><li key={post.id}>{post.title}</li>)
            }
        </ul> */}
        
    </div>
  )
}

export default FetchData