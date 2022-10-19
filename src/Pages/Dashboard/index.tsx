import { useEffect, useState } from "react"
import { SmallButton } from "../../Components/Buttons/style" 
import { Headline,Title1,Title2 } from "../../Components/Typography/style"
import { Container, Contem } from "./style"
import { IconButton } from "../../Components/Buttons/style" 
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
    
    const { user, handleLogout, isLoading, isWaiting } = useContext(UserContext)
    
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
                            <Modal setModalState={setIsOpenModalTech} setTechList={setTechList} />
                    }

                    {
                        isOpenModalEditTech &&
                            <Modal type='edit' setModalState={setIsOpenModalEditTech} setTechList={setTechList} />
                    }

                    <header>
                        <Contem>
                            <Title1 color="pink">Kenzie Hub</Title1>
                            <SmallButton onClick={handleLogout}>Sair</SmallButton>
                        </Contem>
                    </header>

                    <section>
                        <Contem>
                            <Title1>Olá, {user.name}</Title1>
                            <Headline color="grey">{user.course_module}</Headline>
                        </Contem>
                    </section>


                    <main>
                        <Contem>
                            <div>
                                <Title2>Tecnologias</Title2>
                                <IconButton onClick={() => setIsOpenModalTech(true)}><BsPlusLg /></IconButton>
                            </div>

                            <ul>
                                {
                                    techList?.length > 0 ? 
                                        techList.map(({ title, status, id }, index) => <Card onClick={() => { 
                                            setIsOpenModalEditTech(true)
                                            setCurrentId(id!)
                                            setCurrentTitle(title)
                                            setCurrentStatus(status)
                                        }} key={index} technology={title} level={status}/>)
                                    :
                                        <h4 className="no-item">Nenhuma técnolgia, até o momento.</h4>
                                }
                            </ul>
                        </Contem>
                    </main>
                    {
                        isWaiting &&
                        <Loading/>
                    }
                </Container>
            :
            <Navigate to='/' replace/>
        }
        </>
    )
}




 

        

      
        