
import {Blog} from "../hooks/index"
import { Avtar } from "./BlogCard"


export const SingleBlog = ({blog}:{blog:Blog})=>{
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-12 w-full px-20 pt-12  max-w-screen-xl">
                <div className=" col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                        
                    </div>
                    <div className="mt-3 text-sm text-slate-400 ">
                        Posted on 19 April 2024
                    </div>
                    <div className="text-lg text-slate-700">
                        {blog.content}
                    </div>
                    
                </div>
                <div className=" col-span-4">
                    <div className="text-slate-500 text-lg">Author</div>
                    <div className="flex">
                        <div className="pr-4 flex flex-col justify-center">
                        <Avtar size="big" authorName={blog.author.name || "Anonymous"}/>
                        </div>
                        <div>
                            <div className="text-xl font-bold">{blog.author.name || "Anonymous"}</div>
                            <div className="text-slate-500">
                                here is the ability of the author to attract readers attention
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}