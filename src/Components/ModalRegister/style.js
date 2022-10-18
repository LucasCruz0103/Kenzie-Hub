import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  width: 240px;
  height: 340px;
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px;
  background-color: var(--gray-3);
`;

export const Header = styled.header`
  background: var(--gray-2);
  width: 240px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  h3 {
    font-size: 0.9em;
    margin-left: 15px;
  }
  button {
    width: 35px;
    height: 35px;
    margin: 0;
    margin-right: 10px;
    background-color: var(--gray-2);
    :hover {
      background-color: var(--gray-1);
    }
    svg {
      color: var(--gray-1);
      :hover {
        color: var(--gray-0);
      }
    }
  }
`;

export const Contem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 90%;
  form {
    margin-top: 20px;
  }
  label {
    margin-top: 10px;
  }
  input {
    background: var(--gray-2);
    border-radius: 4px;
    border: 0;
    color: var(--gray-0);
    padding: 1rem;
    width: 100%;
    transition: 0.4s;
    align-items: center;
    flex: 1;
    margin-top: 10px;
    margin-bottom: 10px;
    &::placeholder {
      color: var(--gray-0);
    }
  }
  select {
    background: var(--gray-2);
    border-radius: 4px;
    border: 0;
    color: var(--gray-0);
    padding: 1rem;
    width: 100%;
    transition: 0.4s;
    align-items: center;
    flex: 1;
    margin-top: 10px;
  }
`;