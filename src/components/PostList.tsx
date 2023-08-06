import { useContext } from "react"
import { postContext } from "./contexts/PostContext"



export const PostList = () => {
    
    const ctxPosts = useContext(postContext);

    const hundleDel = (index:number) => {
        const filterPosts = ctxPosts?.posts.filter((item, key) => key !== index);
        filterPosts !== undefined ?  ctxPosts?.setPosts(filterPosts) : undefined
        
    }

    return (
            <div className="flex flex-col p-3 m-4 border bg-blue-400">
                <p className="border-b mb-2">Lista de Posts</p>
                <ul >
                    {ctxPosts?.posts.map((item, index) => (
                        <li className="mb-2" key={index}>Título: {item.titulo} Post: {item.post} <button onClick={() => hundleDel(index)} className="ml-2 text-red-700 border rounded-md py2 px-3">Deletar</button></li>
                    ))}
                </ul>
            </div>
    )
}