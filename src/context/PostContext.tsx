import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";


export interface IPost { 
    id: number
    title: string
    abstract: string
}

interface IPostContextType {
    postList: IPost[] 
    fetchPost: (query:string) => void
}

interface IPostProviderProps {
    children: ReactNode
}

export const PostContext = createContext<IPostContextType>({} as IPostContextType)


const PostProvider = ({children}: IPostProviderProps) => {

    const [postList, setPostList] = useState<IPost[]>([])

    async function fetchPost(query?:string) {
        const response = await api.get('publication',{
            params:{
                q:query
            }
        })
        setPostList(response.data)
    }

    //asycn function createPost( date: create)

    useEffect(() => {
        const fetchData = async () => {
            await fetchPost();
        };

        fetchData();
    }, []);
    
    return (
        <PostContext.Provider value={{postList, fetchPost}}>
            {children}
        </PostContext.Provider>
    )
}

export {PostProvider}