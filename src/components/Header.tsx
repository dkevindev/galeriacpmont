import { useContext, useState } from "react"
import { PostList } from "./PostList"
import { postContext } from "./contexts/PostContext";

export const Header = () => {
    
    const [titulo, setTitulo] = useState('');
    const [post, setPost] = useState('');

    const ctxPosts = useContext(postContext);

    const handleEnviar = () => {
        ctxPosts?.setPosts([...ctxPosts?.posts, {titulo: titulo, post: post}])
        setTitulo('')
        setPost('')
    }


    return (
        <header>
            <h1 className="text-3xl text-center">Bem vindos a nosso Blog!!</h1>
            <h2 className="text-3xl font-bold ml-2">Novo Post</h2>
            <div className="md:flex">
                <input 
                    type="text" 
                    placeholder="Título do Post" 
                    className="border border-green-700 rounded-md p-3 m-2 text-black"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}/>
                    
                <input 
                    type="text"
                    placeholder="Descrição" 
                    className="border border-green-700 rounded-md p-3 m-2 text-black md:w-full"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                /> 
                <button  className="border border-green-700 rounded-md p-3 m-2" onClick={handleEnviar}>Enviar</button>
            </div>
            <PostList />
            
        </header>
    )
    
}