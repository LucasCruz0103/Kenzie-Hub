
import { Title3, Headline } from '../Typography/style'
import {Container} from './style'

interface iCard {
    technology: string,
    level: string,
    onClick: () => void
}

export  function Card({ technology, level, onClick }: iCard): JSX.Element {
    return(
        <Container onClick={onClick}>
            <Title3>{technology}</Title3>
            <div>
                <Headline color='grey'>{level}</Headline>
            </div>
        </Container>
    )
}