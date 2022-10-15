import { Navigate } from "react-router-dom";
import { Container,Nav,Header, DivTitle, Contem, DivModal, DivTech } from "./style.js";
import { ImPlus } from 'react-icons/im';
import { Card } from "../../Components/Card/index.jsx";
import { api } from "../../Services/api.js";
import { useEffect, useState } from "react"
import { ModalRegister } from "../../Components/ModalRegister/index.jsx";
import { Button } from "../../Components/Button/Button.jsx";
export function Dashboard  ( {authenticated, setAuthenticated } ) {
    const [ showModal, setShowModal ] = useState( false )
    const [ tech, setTech ] = useState( [] )
    
    
     const  openModal  =  () => {
       setShowModal(previousValue => !previousValue)
    }
  
    const handleClickBack = () => {
      localStorage.clear()
      setAuthenticated(false)
      
    }
  
    const [token] = useState( JSON.parse( localStorage.getItem( '@KenzieHub:token' ) ) || '' )
    const [ user ] = useState( JSON.parse( localStorage.getItem( '@KenzieHub:user' ) ) || '' )
    
    useEffect( () => {
      async function logando(){

        await api.get( `/users/${ user.id }`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      } ).then( response => {
       setTech(response.data.techs)
      })
      }
      logando()
  }, [])
  if ( !authenticated ) {
       Navigate('/login') 
  }


  return(
     <Container>
      <Nav>
          <h1>Kenzie hub</h1>
          <button onClick={() => handleClickBack()}>Sair</button>
      </Nav>
      <hr/>
      <Header>
          <h2>Olá,{user.name}</h2>
          <span>{user.course_module}</span>
      </Header>
      <hr />
      <Contem>
      <DivTitle>
        <h2>Tecnologias</h2>
        <Button onClick={ openModal }><ImPlus /></Button>
        
      </DivTitle>
      <DivModal>
        { showModal && 
          <ModalRegister showModal={ showModal } setShowModal={ setShowModal }>
          </ModalRegister>  
        }
      </DivModal>
    </Contem>
    <DivTech>
      {tech.map(newTech => <Card key={newTech.id} newTech={ newTech } />)}
    </DivTech>
  </Container>
)
}

        

      
        