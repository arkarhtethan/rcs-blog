import React from 'react';
import { IPost } from '../types/post';
import { Link } from "react-router-dom"
interface IPostItemProps {
    post: IPost;
}

const PostItem = ({ post }: IPostItemProps) => {
    return <div className="shadow-lg p-4 space-y-4">
        <h1 className="text-lg font-bold">
            <Link to={`/${post.id}`}>
                {post.title.substr(0, 27)}...
            </Link>
        </h1>
        <p className="text-sm text-justify">{post.body.substr(0, 100)}</p>
        <button className="bg-black text-white px-4 py-2">Read More</button>
    </div>;
};

export default PostItem;
