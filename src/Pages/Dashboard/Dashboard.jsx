import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button/Button.jsx";


import { Container , ButtonContainer} from "./style.js";

export function Dashboard ({authenticated, setAuthenticated}){
    const user = JSON.parse(localStorage.getItem("@KenzieHub:User")) || "";


 

  

    const logout = () => {
        localStorage.clear();
        setAuthenticated("");
        navigate('/login');
    }
     const navigate = useNavigate();
     setAuthenticated(true);
   
   
    
     if(! authenticated){
         navigate('/login');
    }

    return(
       <Container>
        <div>
        <nav>
            <h1>Kenzie hub</h1>
            <ButtonContainer>
                <button onClick={() => logout()}>Logout</button>
            </ButtonContainer>
        </nav>
        <header>
            <h2>Olá,{user.name}</h2>
            <span>{user.course_module}</span>
        </header>

        </div>
        </Container>

    )
}