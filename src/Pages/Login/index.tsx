import { Container, Contem, Form } from "./style"
import { Title1, Label } from '../../Components/Typography/style'
import { Input } from '../../Components/Input/style'
import { Button } from '../../Components/Buttons/style'
import { Loading }  from '../../Components/Loading'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { useContext } from "react"
import { iUserLogin } from "../../Services/postLogin"
import * as yup from 'yup'

export function Login() {
    const { handleLogin, isWaiting } = useContext(UserContext)

    const navigate = useNavigate()

      const loginSchema = yup.object().shape({
      email: yup.string().email('Email inválido').required('Campo obrigatório!'),
      password: yup.string().required('Campo obrigatório!')
  })

    const { register, handleSubmit, formState: { errors } } = useForm<iUserLogin>({
        resolver: yupResolver(loginSchema)
    })

    return(
        <Container>
            <Title1 color="pink">Kenzie Hub</Title1>
            <Contem>
                <Title1>Login</Title1>

                <Form onSubmit={handleSubmit(handleLogin)}>
                    <Label>Email 
                        <Input placeholder="Digite seu email" autoComplete="email" {...register('email')}/>
                        {
                            errors.email &&
                            <p className='error'>{errors.email?.message}</p>
                        }
                    </Label>

                    <Label>Senha 
                        <Input type='password' placeholder="Digite sua senha" autoComplete="current-password" {...register('password')}/>
                        {
                            errors.password &&
                            <p className='error'>{errors.email?.message}</p>
                        }
                    </Label>

                    <Button type="submit">Entrar</Button>
                </Form>

                <p>Ainda não possui uma conta?</p>

                <Button status='disabled' onClick={() => navigate('/register', {replace: true})}>Cadastrar</Button>
            </Contem>
            {
                isWaiting && 
                <Loading/>
            }
        </Container>
    )
}