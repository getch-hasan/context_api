import { createContext, useState } from "react";

export const UsersContext = createContext({});
const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([{ id: 1, name: "Mohammad Hasan" }, { id: 2, name: "Mohammad Sayem" }])

    return <UsersContext.Provider value={{ users, setUsers }}>
        {children}
    </UsersContext.Provider>
}
export default UsersProvider