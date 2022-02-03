import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Loading from '../components/Loading';
import getPost from '../services/getPost';
import { IPost } from '../types/post';

const PostDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState<IPost | null>(null);
    useEffect(() => {
        if (id) {
            getPost({ id }).then(data => {
                if (data) {
                    setPost(data)
                } else {
                    navigate('/404')
                }

            })
        }
    }, [id, navigate]);


    if (!post) {
        return <div className="h-96 flex flex-col items-center justify-center"><Loading /></div>
    }

    return <div className="lg:px-8 lg:py-12 p-4 shadow-lg mx-8 my-12">
        <h1 className="font-bold text-lg capitalize mb-9">{post.title}</h1>
        <p>
            {post.body}
        </p>
    </div>;
};

export default PostDetails;