import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import PostItem from "../components/PostItem";
import getPosts from "../services/getPosts";
import { IPost } from "../types/post";

const PostList = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(data => {
            setPosts(data);
        });
    }, []);

    if (posts.length === 0) {
        return <div className="h-96 flex flex-col items-center justify-center"><Loading /></div>
    }

    return <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:px-16 md:px-8 px-4 py-12 gap-4">
        {posts.map(post => (<PostItem key={post.id} post={post} />))}
    </div>;
};

export default PostList;
