import {Route, Routes} from 'react-router-dom';
import { Home } from '../Pages/Home/Home.jsx';
import { Register } from '../Pages/Register/Register.jsx';
import { Login } from '../Pages/Login/Login.jsx';
import { Dashboard } from '../Pages/Dashboard/Dashboard.jsx';
import {  useState } from 'react';

export function Navegando () {
   const [authenticated, setAuthenticated] = useState(false);
   return(
       <Routes>   
            <Route path="/" element={<Home/>}/>
           <Route  path="/register" element={<Register authenticated={authenticated} />}/>
           <Route path="/login"element={<Login  authenticated={authenticated}  setAuthenticated={setAuthenticated} />}/>
           <Route path="/dashboard" element={<Dashboard authenticated={authenticated}  setAuthenticated={setAuthenticated} />}/>
       </Routes>
   )
}
   
    
