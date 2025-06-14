import {useState, createContext } from "react";

const UserContext = createContext()

export  function UserProvider ({children}){
     const [user, setUser] = useState('John');
     const[dark, setDark] =  useState("light")

     const ToggleMode = ()=>{
        setDark((prev) => (
            prev === "light" ? "dark":"light"
        ))
     }

    

        return(
            <UserContext.Provider value={{user,dark,ToggleMode}}>


                 {children}


            </UserContext.Provider>

        )

}

export default UserContext