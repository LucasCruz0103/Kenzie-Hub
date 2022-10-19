import { Container, Contem, Form } from '../Login/style'
import { RegisterStyled } from './style'
import { Title1, Label, Headline } from '../../Components/Typography/style'
import { Button, SmallButton } from '../../Components/Buttons/style'
import { useNavigate } from 'react-router-dom'
import {Input} from '../../Components/Input/style'
import {Select} from '../../Components/Select/style'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import {Loading} from '../../Components/Loading'
import { iRegisterData } from '../../Services/postRegister'
import * as yup from 'yup'

export function Register() {
  const registerSchema = yup.object().shape({
    name: yup.string().min(3, 'O nome precisa de no mínimo 3 dígitos!').required('Campo obrigatório!'),
    email: yup.string().email('Email inválido').required('Campo obrigatório!'),
    password: yup.string().min(8, 'A senha deve conter no mínimo 8 dígitos!').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'A senha precisa conter pelo menos uma letra maiúscula, um caractere especial e um número').required('Campo obrigatório!'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas não são iguais!'),
    bio: yup.string().required('Campo obrigatório!'),
    contact: yup.string().required('Campo obrigatório!')
})
    const { register, handleSubmit, formState: { errors } } = useForm<iRegisterData>({
        resolver: yupResolver(registerSchema)
    })

    const { handleRegister, isWaiting } = useContext(UserContext)

    const navigate = useNavigate()

    return(
        <RegisterStyled>
            <Container className='container-register'>
                <div className='menu'>
                    <Title1 color='pink'>Kenzie Hub</Title1>
                    <SmallButton onClick={() => navigate('/', {replace: true})}>Voltar</SmallButton>
                </div>

                <Contem>
                    <Title1>Crie sua conta</Title1>

                    <Headline className='subtext'>Rapido e grátis, vamos nessa</Headline>

                    <Form onSubmit={handleSubmit(handleRegister)}>
                        <Label>Nome 
                            <Input placeholder="Digite aqui seu nome" autoComplete='username' {...register('name')}/>
                            {
                                errors.name &&
                                <p className='error'>{errors.name?.message}</p>
                            }
                        </Label>
                        
                        <Label>Email 
                            <Input placeholder="Digite aqui seu email" autoComplete='email' {...register('email')}/>
                            {
                                errors.email &&
                                <p className='error'>{errors.email?.message}</p>
                            }
                        </Label>

                        <Label>Senha 
                            <Input type='password' placeholder="Digite aqui sua senha" autoComplete='new-password' {...register('password')}/>
                            {
                                errors.password &&
                                <p className='error'>{errors.password?.message}</p>
                            }
                        </Label>

                        <Label>Confirmar Senha 
                            <Input type='password' placeholder="Digite novamente sua senha" autoComplete='new-password' {...register('confirmPassword')}/>
                            {
                                errors.confirmPassword &&
                                <p className='error'>{errors.confirmPassword?.message}</p>
                            }
                        </Label>

                        <Label>Bio 
                            <Input placeholder="Fale sobre você" {...register('bio')}/>
                            {
                                errors.bio &&
                                <p className='error'>{errors.bio?.message}</p>
                            }
                        </Label>
                        
                        <Label>Contato 
                            <Input placeholder="Opção de contato" {...register('contact')}/>
                            {
                                errors.contact &&
                                <p className='error'>{errors.contact?.message}</p>
                            }
                        </Label>

                        <Label>Selecionar módulo 
                            <Select {...register('course_module')}>
                                <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro Módulo</option>
                                <option value='Segundo módulo (Frontend Avançado)'>Segundo módulo</option>
                                <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro módulo</option>
                                <option value='Quarto módulo (Backend Avançado)'>Quarto módulo</option>

                            </Select>
                            {
                                errors.course_module &&
                                <p className='error'>{errors.course_module?.message}</p>
                            }
                        </Label>

                        <Button type='submit' status='negative'>Cadastrar</Button>
                    </Form>
                </Contem>
                {
                    isWaiting && 
                    <Loading/>
                }
            </Container>
        </RegisterStyled>
    )
}