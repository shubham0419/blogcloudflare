import { ChangeEvent, useState } from "react"
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import {  useNavigate } from "react-router-dom";


export const Publish = () => {
    const navigate = useNavigate()
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");

    async function handleBlogPost(){
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                 title,
                content
            },{
                headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        navigate(`/blog/${response.data.id}`);
    }

    return (
        <div>
            <AppBar />
            <div className="flex justify-center w-full pt-8">
                <div className="max-w-screen-lg w-full ">
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Title" 
                    onChange={(e)=>{setTitle(e.target.value)}} />
                    <TextEditor onChange={(e)=>{setContent(e.target.value)}} />
                    <button className="inline-flex items-center px-5 py-2.5 text-sm
                        font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4
                        focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                        onClick={()=>handleBlogPost()}>
                        Publish post
                    </button>
                </div>
            </div>
        </div>
    )
}

function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return (
        <div>
            <div className="mt-3  bg-white rounded-b-lg ">
                <textarea  rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800
                bg-white border-0" 
                placeholder="Write an article..."
                onChange={onChange}></textarea>
            </div>
        </div>
    )
}