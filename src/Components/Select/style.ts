import styled from "styled-components";

export const Select = styled.select`
    color: var(--grey-1);
    background-color: var(--grey-2);
    border: none;
    border-radius: 4px;
    padding: 0.70rem 0.95rem;
    cursor: pointer;
    &::placeholder {
        font-size: 1rem;
        font-weight: 400;
    }
    &:focus {
        outline: .070rem solid var(--grey-0);
    }
    &:focus::placeholder {
        color: var(--grey-0);
    }
`