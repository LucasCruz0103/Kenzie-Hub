import { Container, Contem, Header, Main, Form } from "./style"
import { Title3 } from "../Typography/style"
import { MdOutlineClose } from 'react-icons/md'
import { createRef, useContext, useEffect } from "react"
import { Label } from "../Typography/style"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import {Select} from "../Select/style"
import {Input} from "../Input/style"
import { Button } from "../Buttons/style"
import { UserContext } from "../../contexts/UserContext"
import {api} from "../../Services/api"
import { errorToast, successToast } from "../Toast/toast"
import { ModalContext } from "../../contexts/ModalContext"
import { iTechs } from "../../Services/getProfile"
import * as yup from 'yup'

interface iModal {
    type?: string,
    setModalState: (state: boolean) => void,
    setTechList: (state: iTechs[]) => void
}

export function Modal({ type, setModalState, setTechList }:iModal): JSX.Element {
    const modalRef = createRef<HTMLDivElement>()

    const { setIsWaiting } = useContext(UserContext)

    const { setIsOpenModalTech, setIsOpenModalEditTech, currentId, currentTitle, currentStatus } = useContext(ModalContext)

    const newTechSchema = yup.object().shape({
        title: yup
        .string()
        .required('Campo obrigatório!')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(newTechSchema),
        defaultValues: {
            title: type === 'edit' ? currentTitle : '',
            status: type === 'edit' ? currentStatus : 'Iniciante'
        }
    })

    useEffect(() => {
        const handleOnClick = (event: MouseEvent) => {
            if(!modalRef.current?.contains(event.target as Element)) {
                setModalState(false)
            }
        }

        document.addEventListener('mousedown', handleOnClick)

        return () => {
            document.removeEventListener('mousedown', handleOnClick)
        }
    }, [])

    const handleNewTech = (data: iTechs) => {
        setIsWaiting(true)

        api.post('users/techs', data)
        .then(() => {
            api.get('profile')
            .then((response) => {
                setTechList(response.data.techs)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsWaiting(false))
            
            successToast('Tecnologia criada com sucesso!')
            setIsOpenModalTech(false)
        })
        .catch(() => errorToast('Tecnologia já existente!'))
        .finally(() => setIsWaiting(false))
    }

    const handleEditTech = ({ status }: iTechs) => {
        setIsWaiting(true)

        api.put(`users/techs/${currentId}`, {status})
        .then(() => {
            api.get('profile')
            .then((response) => {
                setTechList(response.data.techs)
            })
            .catch((error) => console.log(error))

            successToast('Tecnologia editada com sucesso!')
            setIsOpenModalEditTech(false)
        })
        .catch(() => errorToast('Ocorreu um erro!'))
        .finally(() => setIsWaiting(false))
    }

    const handleRemoveItem = () => {
        setIsWaiting(true)

        api.delete(`users/techs/${currentId}`)
        .then(() => {
            api.get('profile')
            .then((response) => {
                setTechList(response.data.techs)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsWaiting(false))

            successToast('Tecnologia excluída com sucesso!')
            setIsOpenModalEditTech(false)
        })
        .catch(() => errorToast('Ocorreu um erro!'))
    }

    return(
        <Container>
            <Contem ref={modalRef}>
                <Header>
                    <Title3>{type === 'edit' ? 'Tecnologia Detalhes' : 'Cadastrar Tecnologia'}</Title3>
                    <MdOutlineClose onClick={() => setModalState(false)}/>
                </Header>
                
                <Main>
                    <Form onSubmit={type === 'edit' ? handleSubmit(handleEditTech) : handleSubmit(handleNewTech) }>
                        <Label className={type === 'edit' ? 'disabled-input' : ''}>
                            Nome do projeto
                            <Input placeholder="Escreva o nome aqui" {...register('title')}/>
                            {
                                errors.title &&
                                <p className='error'>{errors.title?.message}</p>
                            }
                        </Label>

                        <Label>
                            Selecionar status
                            <Select {...register('status')}>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </Select>
                        </Label>
                        
                        {
                            type === 'edit' ?
                                <div className="button-wrapper">
                                    <Button status='negative' type="submit">Salvar alterações</Button>
                                    <Button type="button" status='disabled' onClick={handleRemoveItem}>Excluir</Button>
                                </div>
                            :
                                <Button type="submit">Cadastrar Tecnologia</Button>
                        }
                    </Form>
                </Main>
            </Contem>
        </Container>
    )
}