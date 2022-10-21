import { Container } from "./style";

export interface iLoading {
    isOpaque?: boolean
}

export  function Loading({ isOpaque }: iLoading): JSX.Element {
    return(
        <Container isOpaque={isOpaque}>
            <div className="carregando"></div>
        </Container>
    )
}