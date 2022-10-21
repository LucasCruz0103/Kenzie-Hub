import styled from "styled-components";

const corGeral = (color?: string) => color === 'pink' ? 'color: var(--color-primary);' : color === 'grey' ? 'color: var(--grey-1);' : 'color: var(--grey-0);'

export const PrimeiroTitulo = styled.h1`
    font-size: 1.20rem;
    font-weight: 700;
    ${({color}) => corGeral(color)}
`

export const SegundoTitulo = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    ${({color}) => corGeral(color)}
`

export const TerceiroTitulo = styled.h3`
    font-size: 0.93rem;
    font-weight: 700;
    ${({color}) => corGeral(color)}
`

export const PrimeiraLegenda = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    ${({color}) => corGeral(color)}
`

export const SegundaLegenda = styled.p`
    font-size: 0.75rem;
    font-weight: 600;
    ${({color}) => corGeral(color)}
`

export const TerceiraLegenda = styled.p`
    font-size: 0.75rem;
    font-weight: 600;
    font-style: italic;
    ${({color}) => corGeral(color)}
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 0.75rem;
    font-weight: 400;
    ${({color}) => corGeral(color)}
`