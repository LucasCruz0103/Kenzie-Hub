import {  useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import { Button } from "../../Components/Button/Button"
import {Input} from "../../Components/Input/Input"
import { Container, Contem, Animacao, MainContainer } from "./style.js"
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { api } from "../../Services/api";
import {toast} from 'react-toastify';
export function Login ({authenticated, setAuthenticated}){
    const navigate = useNavigate();

      const schema = yup.object().shape({
         
          email: yup.string().email("Email Obrigatório"),
          password: yup
          .string()
          .required("Senha obrigatória"),
          

      })
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmitFunction = (data) =>{
        api.post("/sessions", data).then((res) =>{
            localStorage.setItem("@KenzieHub:User", JSON.stringify(res.data.user))
            localStorage.setItem("@KenzieHub:token", JSON.stringify(res.data.token));
            setAuthenticated(true)
            navigate("/dashboard");

        }).catch((error) =>{
            toast.error(error.response.data.message);
        })
    }
      if(authenticated){
          navigate('/dashboard');
      }
    return <MainContainer>
     <Container>
       <Contem>
        <h1>Kenzie hub</h1>
       <Animacao>
           <form onSubmit={handleSubmit(onSubmitFunction)}>
               <h2>Login</h2>
              
               <Input
                 register={register}
                 name="email"
                label="Email" 
                placeholder="Seu Email"
                error={errors.email?.message}
                />
               <Input 
                register={register}
                name="password"
               label="Senha" 
               type="password" 
               placeholder="Senha"
               error={errors.password?.message}
               />
              
               <Button type="submit">Enviar</Button>
               <p>ainda não possui uma conta? </p>
               <section>

               <button onClick={() => navigate("/register")}>Cadastra-se</button>
               </section>

           </form>
        </Animacao>     
      </Contem> 
    </Container>
    </MainContainer>
}