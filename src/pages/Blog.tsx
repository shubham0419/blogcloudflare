import { AppBar } from "../components/AppBar";
import { SingleBlog } from "../components/SingleBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom"

export const Blog = ()=>{
    const {id} = useParams();
    const {loading,blog} = useBlog({id:id || ""});

    if(loading || !blog){
        return (
            <div
                className="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4">
                <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
                <div className="flex flex-col gap-2">
                    <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                    <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
                    <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                    <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <AppBar/>
            <SingleBlog blog={blog}/>
        </div>
    )
}