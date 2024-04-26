import { SignupInput } from "@100xdevs/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {BACKEND_URL} from "../config"


export const Auth = ({ type }: { type: "signup" | "signin" }) => {

    const navigate = useNavigate()
    const [postInputs,setPostInputs] = useState<SignupInput>({
        name:"",
        username:"",
        password:""
    });

    async function senReq() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/${type==="signup"?"signup":"signin"}`,postInputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token",jwt);
            navigate("/blogs");
        } catch (error) {
            navigate("/signin")
        }
        
    }
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                <div className="text-3xl font-extrabold px-10">
                {type === "signin" ? "Signin for account" : "Create an account"}
                </div>
                <div className="pt-5">
                    {type==="signup"?<LabelInput label="Name" placeholder="Shubham..." onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            name:e.target.value
                        })
                    }}/>:null}
                     
                    <LabelInput label="Username" placeholder="shubham@gmail.com..." onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            username:e.target.value
                        })
                    }}/>
                    <LabelInput label="Password" type={"password"} placeholder="******" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            password:e.target.value
                        })
                    }}/>
                </div>
                <button onClick={senReq} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none
                focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5
                me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700
                dark:border-gray-700">{type==="signin"?"Sign in":"Sign up"}</button>
                <div className="text-slate-500 px-10">
                {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                    <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>{type === "signin" ? "Signup" : "Login"}</Link>
                </div>
            </div>
        </div></div>
    )
}
interface LabelInputTypes {
    label: string;
    placeholder:string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

function LabelInput({type, label, placeholder, onChange }:LabelInputTypes) {
    return <div >
        <div>
            <label className="block mb-2 text-sm font-semibold dark:text-white pt-4">{label}</label>
            <input type={"text" || type} onChange={onChange} className="bg-gray-50 border border-gray-300
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-grey-900 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder}
            required />
        </div>
    </div>
}