import {  useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import  {Input} from "../../Components/Input/Input"
import { Container, Contem, Animacao} from "./style.js";
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { CadastrandoContext } from "../../contexts/CadastrandoContext";
import { useContext } from "react";
export function Register () {
    const navigate = useNavigate();
    const { onSubmitFunction } = useContext(CadastrandoContext);


      const schema = yup.object().shape({
          name: yup.string().required("Campo Obrigatório"),
          email: yup.string().email("Email inválido").required('Campo Obrigatório'),
          bio: yup.string().required("Campo obrigatório!"),
         contact: yup.string().required("Campo obrigatório!")
        ,
          password: yup.string().required("Campo Obrigatório").matches(
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,15}$/,
            "deve conter ao menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número "
          ),
          confirmPassword: yup.string().oneOf([yup.ref("password")], "Senhas não coincidem").required("Campo Obrigatório"),
          course_module: yup.string().required("Campo obrigatório!"),
        })
    const {
        register,
        handleSubmit,
     
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    return <Container>
       <Contem>
              <section>
                <h1>Kenzie hub</h1>
                <button onClick={() => navigate("/login")}>Voltar</button>
              </section>
        

       <Animacao>
           <form onSubmit={handleSubmit(onSubmitFunction)}>
               <h2>Crie sua conta</h2>
               <p>Rapido e grátis, vamos nessa</p>
              
              
               <Input 
               register={register}
               name="name"
               label="Nome"  
               placeholder="Seu Nome"
               error={errors.name?.message}
               />
               <Input
                 register={register}
                 name="email"
                label="Email" 
                placeholder="Seu Email"
                error={errors.email?.message}
                />
                <Input 
                register={register}
                name="bio"
               label="Bio" 
               type="text" 
               placeholder="Bio"
               error={errors.bio?.message}
               />
               <Input 
                register={register}
                name="contact"
               label="Contato" 
               type="text" 
               placeholder="Contato"
               error={errors.contact?.message}
               />
               <Input 
                register={register}
                name="password"
               label="Senha" 
               type="password" 
               placeholder="Senha"
               error={errors.password?.message}
               />
               <Input 
                register={register}
                name="confirmPassword"
               label="ConfirmaSenha" 
               type="password"  
               placeholder="Confirmar Senha"
               error={errors.confirmPassword?.message}
               />
          <label> Selecione o módulo</label>
          <select {...register("course_module")}>
            <option selected>Módulo</option>
            <option>Primeiro módulo (Introdução ao Frontend)</option>
            <option>Segundo módulo (Frontend Avançado)</option>
            <option>Terceiro módulo (Introdução ao Backend)</option>
            <option>Quarto modulo (Backend Avançado)</option>
          </select>
          <span>{errors.course_module?.message}</span>

               <Button type="submit">Enviar</Button>
           </form>
        </Animacao>     
      </Contem> 
    </Container>
}