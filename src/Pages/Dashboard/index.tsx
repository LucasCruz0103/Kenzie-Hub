import { useEffect, useState } from "react"
import { MeuBotao } from "../../Components/Buttons/style" 
import { PrimeiraLegenda,PrimeiroTitulo,SegundoTitulo } from "../../Components/Typography/style"
import { Container, Contem } from "./style"
import { IconeButton } from "../../Components/Buttons/style" 
import { BsPlusLg } from 'react-icons/bs'
import { Card } from "../../Components/Card"
import { Modal } from "../../Components/Modal"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Navigate } from 'react-router-dom'
import { Loading } from "../../Components/Loading"
import { ModalContext } from "../../contexts/ModalContext"
import { iTechs } from "../../Services/getProfile"

export function Dashboard() {
    const [techList, setTechList] = useState<iTechs[]>([])
    
    const { user, handleLogout, isValidate,isLoading } = useContext(UserContext)
    
    const { isOpenModalTech, isOpenModalEditTech, setIsOpenModalTech, setIsOpenModalEditTech, setCurrentId, setCurrentTitle, setCurrentStatus } = useContext(ModalContext)

    useEffect(() => {
        setTechList(user?.techs)
    }, [user])

    if(isLoading) {
        return(
            <Loading isOpaque/>
        )
    }

    return(
        <>
        {
            user ?
                <Container>
                    {
                        isOpenModalTech &&
                            <Modal setModal={setIsOpenModalTech} setTechLista={setTechList} />
                    }

                    {
                        isOpenModalEditTech &&
                            <Modal type='edit' setModal={setIsOpenModalEditTech} setTechLista={setTechList} />
                    }

                    <header>
                        <Contem>
                            <PrimeiroTitulo color="pink">Kenzie Hub</PrimeiroTitulo>
                            <MeuBotao onClick={handleLogout}>Sair</MeuBotao>
                        </Contem>
                    </header>

                    <section>
                        <Contem>
                            <PrimeiroTitulo>Olá, {user.name}</PrimeiroTitulo>
                            <PrimeiraLegenda color="grey">{user.course_module}</PrimeiraLegenda>
                        </Contem>
                    </section>


                    <main>
                        <Contem>
                            <div>
                                <SegundoTitulo>Tecnologias</SegundoTitulo>
                                <IconeButton onClick={() => setIsOpenModalTech(true)}><BsPlusLg /></IconeButton>
                            </div>

                            <ul>
                                {
                                    techList?.length > 0 ? 
                                        techList.map(({ title, status, id }, index) => <Card onClick={() => { 
                                            setIsOpenModalEditTech(true)
                                            setCurrentId(id!)
                                            setCurrentTitle(title)
                                            setCurrentStatus(status)
                                        }} key={index} technologia={title} nivel={status}/>)
                                    :
                                        <h4 className="no-item">Nenhuma técnolgia, até o momento.</h4>
                                }
                            </ul>
                        </Contem>
                    </main>
                    {
                        isLoading &&
                        <Loading/>
                    }
                </Container>
            :
            <Navigate to='/' replace/>
        }
        </>
    )
}




 

        

      
        