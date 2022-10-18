import {  useNavigate } from "react-router-dom";
import {ModalRegister} from "../../Components/ModalRegister/index"
import {List} from "../../Components/List/index";
import { useContext } from "react";
import { Container,Main,Hr,Header,MainTechnology,Titulo,Tec,Loading} from "./style";
import { AuthContext } from "./../../contexts/AuthContext";
import  {TecContext}  from "./../../contexts/TecContext";
export function Dashboard() {
  const { user, } = useContext(TecContext);

  const {
    time,
    technology,
    add,
    checkAdd,
    filtered,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  if (time) {
    return <p>Carregando pagina</p>;
  }

  function sair () {
    navigate("/");
    window.localStorage.clear();
  };

  return user ? (
    <Container>
      <Main>
        <h1>Kenzie Hub</h1>
        <button onClick={sair}>Sair</button>
      </Main>
      <Hr></Hr>

      <Header>
        <p>Olá, {user.name}</p>
        <span>{user.course_module}</span>
      </Header>
      <Hr></Hr>
      <MainTechnology>
        <Titulo>
          <p>Tecnologias</p>
          <button onClick={() => checkAdd(false)}> + </button>
        </Titulo>
        {add && <ModalRegister />}

        <Tec>
          {technology.map((elem, index) => (
            <List index={index} elem={elem} func={filtered} />
          ))}
        </Tec>
      </MainTechnology>
    </Container>
  ) : (
    <Loading>
      <h1>Você não está logado, clique aqui para ir a home.</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </Loading>
  );
}




 

        

      
        