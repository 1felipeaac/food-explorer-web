import {Route, Routes} from 'react-router-dom'

import {Home} from '../pages/Home'
// import {Menu} from '../pages/Menu'
import { NotFound } from '../pages/NotFound'

export function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/menu" element={<Menu title={"Sair"}/>}/> */}

            <Route path="*" exact={true} element={<NotFound/>}/>
        </Routes>
    )
}