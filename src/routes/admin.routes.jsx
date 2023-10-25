import {Route, Routes} from 'react-router-dom'

import {Home} from '../pages/Home'
import {NewDish} from '../pages/Admin/NewDish'
// import {Menu} from '../../src/Components/MobileMenu'

import { NotFound } from '../pages/NotFound'

export function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/menu" element={<Menu title={"Sair"}/>}/> */}
            <Route path="/newDish" element={<NewDish/>}/>

            <Route path="*" exact={true} element={<NotFound/>}/>
        </Routes>
    )
}