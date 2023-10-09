/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})

    async function signIn({email, password}){
        try {
            const response = await api.post("/sessions", 
                {email, password}, 
                // {withCredentials: true}
            )

            const {user, token} = response.data

            console.log(user)

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
            localStorage.setItem("@foodexplorer:token", `${token}`)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({user, token})
        }catch(error){
            if(error.response){
                alert(error.resonse.data.message)
            }else{
                alert("Não foi possível entrar")
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@foodexplorer:user")
        localStorage.removeItem("@foodexplorer:token")

        setData({})

    }

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token")
        const user = localStorage.getItem("@foodexplorer:user")

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}