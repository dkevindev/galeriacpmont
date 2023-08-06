import { useContext, useState } from "react"
import { UserLogged } from "./contexts/userContext"




export const UserOn = () => {
    
    
    const UserLog = useContext(UserLogged);
    const [Loged, setLoged] = useState(false);


    const handleLogin = () => {
        setLoged(!Loged)
        {Loged ? UserLog?.setUser('Desconectado') : UserLog?.setUser('Logado')}
    }


    return (
        <>
            <p>Usuario {UserLog?.User}</p>
            {Loged ? <button className="border bg-red-700 rounded py-2 px-3" onClick={handleLogin}> Sair </button> 
            : <button className="border bg-green-400 rounded py-2 px-3" onClick={handleLogin}> Logar </button>}
            
        </>
    )
}