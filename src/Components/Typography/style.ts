import styled from "styled-components";

const colorGeral = (color?: string) => color === 'pink' ? 'color: var(--color-primary);' : color === 'grey' ? 'color: var(--grey-1);' : 'color: var(--grey-0);'

export const Title1 = styled.h1`
    font-size: 1.20rem;
    font-weight: 700;
    ${({color}) => colorGeral(color)}
`

export const Title2 = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    ${({color}) => colorGeral(color)}
`

export const Title3 = styled.h3`
    font-size: 0.93rem;
    font-weight: 700;
    ${({color}) => colorGeral(color)}
`

export const Headline = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    ${({color}) => colorGeral(color)}
`

export const HeadlineBold = styled.p`
    font-size: 0.75rem;
    font-weight: 600;
    ${({color}) => colorGeral(color)}
`

export const HeadlineItalic = styled.p`
    font-size: 0.75rem;
    font-weight: 600;
    font-style: italic;
    ${({color}) => colorGeral(color)}
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 0.75rem;
    font-weight: 400;
    ${({color}) => colorGeral(color)}
`