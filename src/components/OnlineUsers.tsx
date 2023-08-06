import { useContext } from "react"
import { countContext } from "./contexts/OnlineContext"



export const OnlineUsers = () => {

  const countCtx = useContext(countContext)
  const handleBanAll = () => {
    countCtx?.setOnlineCount(0)
  }




  return (
    <>
      <p>Online: {countCtx?.onlineCount}</p>
      <button onClick={handleBanAll}>Banir todo mundo</button>
    </>
    
  )
}