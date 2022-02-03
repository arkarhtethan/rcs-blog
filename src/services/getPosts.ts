import client from "../api/client";
import { IPost } from "../types/post";

export default async function getPosts (): Promise<IPost[]> {
    try {
        const res = await client.get('/posts?_limit=10');
        console.log(res);
        return res.data;
    } catch (error) {
        return [];
    }
}