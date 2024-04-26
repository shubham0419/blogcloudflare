import { Link } from "react-router-dom"



interface blogProps {
    title:string,
    content:string,
    authorName:string,
    publishDate:string
    id:string
}

export const BlogCard = ({id,title,content,authorName,publishDate}:blogProps)=>{
    return (
        <Link to={`/blog/${id}`} >
        <div className="border-b border-slate-200 pb-2 p-4">
            <div className="flex pb-1">
                <div className="flex justify-center flex-col">
                    <Avtar authorName={authorName}/>
                </div>
                <div className=" text-m font-extralight pl-1">
                    {authorName} 
                </div>
                <div className="text-xs flex justify-center flex-col pl-1">•</div>
                <div className="flex justify-center flex-col text-sm text-slate-400 font-thin pl-1">
                    {publishDate}
                </div>
            </div>
            <div className="text-xl font-semibold">
                {title}
            </div>
            <div className="text-s font-thin">
                {content.length < 100 ?content:content.slice(0,100)+"..."}
            </div>
            
            <div className="text-sm text-slate-400">
            {Math.ceil(content.length/100)} min read
            </div>
        </div>
        </Link>
    )
}

export function Avtar ({authorName,size}:{authorName:string,size?: "small" | "big"}){
    return <div className={`relative inline-flex items-center justify-center ${size==="big"? "w-8 h-8":"w-6 h-6"} overflow-hidden bg-gray-700 rounded-full dark:bg-gray-600`}>
        <span className={`${size==="big"?"text-m":"text-xs"} text-gray-100 dark:text-gray-300`}>{authorName[0]}</span>
    </div>
}