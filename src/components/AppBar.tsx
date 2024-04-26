import { Link } from "react-router-dom"
import { Avtar } from "./BlogCard"


export const AppBar = ()=>{
    return (
        <div className="border-b flex justify-between px-10 py-4 bg-slate-100">
            <Link to={"/blogs"} className="flex flex-col justify-center">
                Medium
            </Link>
            <div className="">
                <Link to={"/publish"}>
                    <button type="button" className="mr-5 text-white bg-green-600 hover:bg-green-800 focus:outline-none
                    focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2">
                        New
                    </button>
                </Link>
                <Avtar authorName="Shubham" size={"big"}/>
            </div>
        </div>
    )
}