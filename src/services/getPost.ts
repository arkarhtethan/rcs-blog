import client from "../api/client";
import { IPost } from "../types/post";

interface IGetPostProps {
    id: string;
}

export default async function getPost ({ id }: IGetPostProps): Promise<IPost | undefined> {
    try {
        const res = await client.get(`/posts/${id}`);
        return res.data;
    } catch (error) {
        return undefined;
    }
}