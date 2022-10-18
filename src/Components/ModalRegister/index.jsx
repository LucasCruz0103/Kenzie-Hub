import { Button } from '../Button/Button';
import { Container,Contem,Header } from './style';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from "react";

export function ModalRegister ( ) {
  const { technology, setTechnology, checkAdd } = useContext(AuthContext);

  const formSchea = yup.object().shape({
    title: yup.string().required("Tecnologia obrigatoria"),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchea),
  });

  function onSubmitFunction  (data) {
    setTechnology([...technology, data]);
  };

  return (

      <Container>
      <Header>
        <h3>Cadastrar Tecnologia</h3>
        <Button onClick={()=> checkAdd(true)}><AiOutlineClose /></Button>
      </Header>
      <Contem>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="tittle">Nome da tecnologia:</label>
        <input
          name='title'
          {...register("title")}
          label='Nome'
          placeholder='Digite aqui sua tecnologia'
          error={errors.name?.message} 
          
          />
          <label htmlFor="status">Selecionar seu status:</label>
          <select label='Selecionar status' name='status' { ...register( 'status' ) }
            error={ errors.status?.message }>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <Button type='submit'>Cadastrar Tecnologia</Button>
        </form>
          
      </Contem>
      </Container>

  )
}