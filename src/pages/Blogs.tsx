import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks"



export const Blogs = () => {

    const { loading, blogs } = useBlogs();

    if (loading) {
        return (
            <div>
                <AppBar/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            </div>
        )
    }

    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="w-screen max-w-lg">
                    {blogs.map(blog=> <BlogCard
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        content={blog.content }
                        authorName={blog.author.name || "Anonymous"}
                        publishDate={blog.publishDate || "DD MM YYYY"}
                    />)}
                </div>
            </div>
        </div>
    )
}