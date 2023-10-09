import { BrowserRouter } from "react-router-dom";

// import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";
import { CostumerRoutes } from "./costumer.routes";
import { AdminRoutes } from "./admin.routes";
import { USER_ROLE } from "../utils/roles";
// import { useEffect } from "react";

export function Routes(){
    const {user} = useAuth()

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