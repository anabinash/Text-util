 import React, { useEffect, useState } from 'react'
 import axios from "axios";

 export default function textfiler() {

    const baseUrl="https://www.aplustopper.com/paragraph-writing/";
    const[post,setPost]=useState(null);

    useEffect(
          ()=>{
            axios.get (baseUrl).then((res)=>{   setPost(res.data)});
          },
    [] )

    if(post){
        return null;
    }

   return (
     <div>
           <p>{post.body}</p>
     </div>
   )
 }
 