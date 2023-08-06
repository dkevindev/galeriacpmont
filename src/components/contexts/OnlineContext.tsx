import { createContext } from "react";


type countContextType = {
    onlineCount: number;
    setOnlineCount: (n: number) => void;
}
export const countContext = createContext<countContextType | null>(null);