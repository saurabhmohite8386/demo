import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function Blogs(){
    const { posts,loading } = useContext(AppContext);

    return(
        <div className="flex flex-col w-11/12 max-w-[630px]  py-3 gap-y-7 mt-[66px] mb-[70px] justify-center items-center">
            {
                loading ? 
                (<Spinner/>) : 
                (posts.length === 0 ? 
                    (
                        <div>
                            <p>No Post Found</p>
                        </div>
                    ) : 
                    (
                        posts.map( (post) => (
                            <div key={post.id}>
                                <p className="font-bold ">{post.title}</p>
                                <p className="text-xs">
                                    By <span className="italic">{post.author}</span> On <span className="underline
                                    font-bold">{post.category}</span>
                                </p>
                                <p className="text-xs">Posted on {post.date}</p>
                                <p className="text-sm mt-2">{post.content}</p>
                                <div>
                                    {
                                        post.tags.map( 
                                            ( tag, index ) => {
                                                return <span key={index} className="text-blue-500  font-bold text-xs mr-1">#{tag}</span>
                                            }
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    )
                )
            }
        </div>
    );
}

export default Blogs;