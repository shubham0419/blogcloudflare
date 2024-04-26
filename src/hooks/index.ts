import axios from "axios";
import { useEffect, useState } from "react"
import {BACKEND_URL} from "../config"

export interface Blog{
    id:string
    title:string,
    content:string,
    author:{name:string},
    publishDate:string,
}

export const useBlogs = ()=>{

    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then((responce)=>{
            setBlogs(responce.data.posts);
            setLoading(false);
        })
    },[]);

    return {
        blogs,
        loading
    }
}

export const useBlog = ({id}:{id:string})=>{
    const [loading,setLoading] = useState(true);
    const [blog,setBlog] = useState<Blog>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then((response)=>{
            setBlog(response.data.post);
            setLoading(false);
        })
    },[id])

    return {
        blog,
        loading
    }
}