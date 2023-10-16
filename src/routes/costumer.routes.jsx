import {Route, Routes} from 'react-router-dom'

import {Home} from '../pages/Home'
import {Menu} from '../../src/Components/MobileMenu'
import { NotFound } from '../pages/NotFound'

export function CostumerRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu title={"Sair"}/>}/>

            <Route path="*" exact={true} element={<NotFound/>}/>
        </Routes>
    )
}