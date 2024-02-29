import React,{useState, useEffect} from 'react'
import axios from 'axios'

function DataFeaching() {
     const[post,setPost] = (useState({}))
     const[id , setid] = (useState(1))

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then(res=>{
          console.log(res)
          setPost(res.data)
         })
         .catch(err=>{
          console.log(err)
         })
    }, [id])

  return (
    <div>
      <input type = "text" value={id} onChange={e => setid(e.target.value)}/>
     <div>{post.title}</div>

      {/* <ul>{
    posts.map(post => ( 
      <li  key= {post.id}>{post.title}  </li>
    ))
      }</ul>  */}
    </div>
  )
}

export default DataFeaching
