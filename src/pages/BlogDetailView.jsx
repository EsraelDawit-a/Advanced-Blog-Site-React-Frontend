import React from 'react'
import { useState, useEffect,useParams } from 'react'
import axios from 'axios'

function BlogDetailView() {
    const [ detail,SetDetail ] = useState([])
    
    const getPost = ()=>{
       const url = "http://localhost:8181/posts/";

        axios.get(url).then(
          (response) =>{
            console.log(response.data)
          }
        )

    }

    useEffect(()=>{

      getPost()
    },[])

  return (
    <div>
       Blog Detail
    </div>
  )
}

export default BlogDetailView

