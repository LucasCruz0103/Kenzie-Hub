import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: currentcolor;
  hr {
    border: 1px solid var(--gray-3);
    margin-bottom: 10px;
    margin-top: 10px;
  }
  @media (min-width: 1025px) {
    max-width: 1200px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  height: 3rem;
  align-items: flex-start;
  align-self: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  max-width: 350px;
  button {
    width: 80px;
    height: 30px;
    margin: 0;
    background-color: var(--gray-2);
    :hover {
      background-color: var(--gray-1);
    }
  }
  h1 {
    font-size: 1.5rem;
  }
  @media (min-width: 1025px) {
    max-width: 1200px;
    justify-content: space-around;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100px;
  max-width: 350px;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
  border-radius: 5px;
  margin-bottom: 20px;
  h2 {
    font-size: 1.2rem;
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
  }
  p {
    color: var(--gray-1);
  }
  @media (min-width: 1025px) {
    max-width: 1200px;
    justify-content: space-around;
    flex-direction: row;
  }
`;

export const Contem = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 60px;
  max-width: 350px;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
  border-radius: 5px;
  margin-bottom: 20px;
  @media (min-width: 1025px) {
    max-width: 1200px;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 350px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 15px;
  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  button {
    width: 35px;
    height: 35px;
    margin: 0;
    margin-left: 10px;
    background-color: var(--gray-2);
    :hover {
      background-color: var(--gray-1);
    }
  }
  @media (min-width: 1025px) {
    max-width: 1200px;
    flex-direction: row;
    justify-content: space-around;
    h2 {
      margin-right: 6em;
    }
    button {
      margin-left: 5em;
    }
  }
`;

export const DivModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  align-self: center;
  margin-top: 20em;
`;

export const DivTech = styled.div`
  background: var(--gray-3);
  width: 100%;
  height: 100%;
  max-width: 330px;
  display: flex;
  justify-content: center;
  align-self: center;
  margin-bottom: 20px;
  border-radius: 5px;
  flex-direction: column;
  @media (min-width: 1025px) {
    width: 56vw;
    max-width: 1200px;
  }
`
