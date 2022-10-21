import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { successToast, errorToast } from "../../Components/Toast/toast";
import { api } from "../../Services/api";
import getProfile from "../../Services/getProfile";
import {postLogin,  iUserLogin } from "../../Services/postLogin";
import {postRegister,  iRegisterData } from "../../Services/postRegister";
import { iAPIData } from './../../Services/getProfile';

export const UserContext = createContext<iUserContext>({} as iUserContext)

interface iUserContext {
    user: iAPIData,
    handleLogin: (data: iUserLogin) => void,
    handleLogout: () => void,
    handleRegister: (data: iRegisterData) => void,
    isLoading: boolean,
    isValidate: boolean,
    setisValidate: (state: boolean) => void,
}

interface iUserProvider {
    children: ReactNode
}

export function UserProvider({ children }: iUserProvider): JSX.Element {
    const [user, setUser] = useState<iAPIData>({} as iAPIData)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isValidate, setisValidate] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleRegister = (data: iRegisterData) => {
        delete data.confirmPassword
        setisValidate(true)

        postRegister(data)
        .then(() => {
            successToast('Usuário cadastrado!')
            navigate('/', {replace: true})
        })
        .catch(() => errorToast('Ocorreu um erro!'))
        .finally(() => setisValidate(false))
    }

    const handleLogin = (data: iUserLogin) => {
        setisValidate(true)

        postLogin(data)
        .then((response) => {
            successToast('Login realizado!')
            setUser(response.data.user)
            localStorage.setItem('@kenzie-hub:token', response.data.token)
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
            navigate('/dashboard', {replace: true})
        })
        .catch(() => errorToast('Usuário não encontrado!'))
        .finally(() =>{setisValidate(false) 
            setIsLoading(false)
        })
    }
    


    const handleLogout = () => {
        localStorage.clear()
        navigate('/', {replace: true})
    }

    useEffect(() => {
        const token = localStorage.getItem('@kenzie-hub:token')

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        if(token) {
            getProfile()
            .then((response) => {
                setUser(response.data)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
        }else{
            return(
                navigate("/",{replace: true})
            )
        }
    }, [])
    
    return(
        <UserContext.Provider value={{ user, handleLogin, handleLogout, handleRegister, isLoading, isValidate, setisValidate }}>
            {children}
        </UserContext.Provider>
    )
}