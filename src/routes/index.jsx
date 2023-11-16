/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";
import { CostumerRoutes } from "./costumer.routes";
import { AdminRoutes } from "./admin.routes";
import { USER_ROLE } from "../utils/roles";
import { useEffect } from "react";
import { api } from "../services/api";

export function Routes(){
    const {user, signOut} = useAuth()

    useEffect(()=>{
        api.get('users/validated').catch((error) => {
            if(error.response?.status === 401){
                signOut()
            }
        })
    },[])

    function AccessRoute(){
        switch(user.role){
            case USER_ROLE.ADMIN:
                return <AdminRoutes/>
            default:
                return <CostumerRoutes/>
        }
    }

    return(
        <BrowserRouter>
            {user ? <AccessRoute/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}