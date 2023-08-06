import { ReactNode, createContext, useState } from "react";
import { Posts } from "../Posts";

type postContextType = {
    posts: {titulo: string, post: string} []
    setPosts: (newPosts: { titulo: string, post: string }[]) => void;
}

type Props = {
    children: ReactNode
}

export const postContext = createContext<postContextType | null>(null);


export const PostsProvider = ({children}:Props) => {
    



    const [posts, setPosts] = useState(Posts);
    
    return (
        <postContext.Provider value={{posts, setPosts}}>
            {children}
        </postContext.Provider>
    )
}