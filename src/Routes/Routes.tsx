import { Routes, Route, Navigate } from 'react-router-dom'
import {Login} from '../Pages/Login'
import {Dashboard} from '../Pages/Dashboard'
import {Register} from '../Pages/Register'

export  function Navigation(): JSX.Element {
    return(
        <>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='*' element={<Navigate to='/' replace/>}/>
            </Routes>
        </>
    )
}
   
    
