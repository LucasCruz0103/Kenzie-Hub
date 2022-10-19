import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--grey-4);
    width: 100%;
    min-height: 100vh;
    padding-bottom: 3.125rem;
    & > header {
        display: flex;
        justify-content: center;
        padding: 1.25rem 0px;
        border-bottom: .0625rem solid var(--grey-3);
    }
    & > section {
        display: flex;
        justify-content: center;
        border-bottom: .0625rem solid var(--grey-3);
        padding: 2.1875rem 0rem;
    }
    & > main {
        display: flex;
        justify-content: center;
        margin-top: 1.375rem;
        & > div > div {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    & > main > div > ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: var(--grey-3);
        width: 100%;
        border-radius: 4px;
        margin-top: .625rem;
        padding: 1.375rem 1.125rem;
    }
    .no-item {
        text-align: center;
        font-size: 1rem;
        color: var(--grey-1);
    }
`

export const Contem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 780px;
    flex-wrap: wrap;
    gap: .75rem;
`


