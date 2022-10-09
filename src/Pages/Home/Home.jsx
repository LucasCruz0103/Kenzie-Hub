import { useNavigate} from "react-router-dom";
import { Button } from "../../Components/Button/Button.jsx";
import { Container } from "./style.js";

export function Home () {

    const navigate = useNavigate();

    const navigation = (path) => {
        return navigate(path);
    }
    
   
    return <Container>
        <h1>Escolha uma opção:</h1>
        <div>
            <Button onClick={() => navigation("/register")}>Cadastra-se</Button> 
            <Button onClick={() => navigation("/login")}>Login</Button>
        </div>

    </Container>
}
