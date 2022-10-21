
import { TerceiroTitulo, PrimeiraLegenda } from '../Typography/style'
import {Container} from './style'

interface iCard {
    technologia: string,
    nivel: string,
    onClick: () => void
}

export  function Card({ technologia, nivel, onClick }: iCard): JSX.Element {
    return(
        <Container onClick={onClick}>
            <TerceiroTitulo>{technologia}</TerceiroTitulo>
            <div>
                <PrimeiraLegenda color='grey'>{nivel}</PrimeiraLegenda>
            </div>
        </Container>
    )
}