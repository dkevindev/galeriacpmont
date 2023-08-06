import { ReactNode, createContext, useState } from "react";

type ContextType = {
    User: string;
    setUser: (s:string) => void;
}


export const UserLogged = createContext<ContextType | null>(null);

type Props = {
    children: ReactNode
}




export const UserProvider = ({children}:Props) => {

    const [User, setUser] = useState('Desconectado');

    return (
        <UserLogged.Provider value={{User, setUser}}>
            {children}
        </UserLogged.Provider>
    )
}   