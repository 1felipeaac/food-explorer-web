import { BrowserRouter } from "react-router-dom";

// import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";
import { CostumerRoutes } from "./costumer.routes";
import { USER_ROLE } from "../utils/roles";
// import { useEffect } from "react";

export function Routes(){
    const {user} = useAuth()

    function AccessRoute(){
        switch(user.role){
            case USER_ROLE.ADMIN:
                return "Rotas do Admin em construção"
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