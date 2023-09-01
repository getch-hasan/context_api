import { useContext } from "react"
import { UsersContext } from "../Contex/UsersContext"

export const useUsersContext =()=>{
    return useContext(UsersContext)
}