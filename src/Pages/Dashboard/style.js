import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:var(--gray-4) ;
`;

export const Main = styled.div`
  display: flex;
  width: 80%;
  max-width: 780px;
  height: 72px;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  h1 {
    color: var(--rosa);
    font-size: 18px;
  }
  button {
    width: 50px;
    height: 30px;
    background-color: var(--gray-3);
    color: white;
    border-radius: 5px;
  }
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  width: 80%;
  max-width: 780px;
  margin-top: 50px;
  @media (max-width: 350px) {
    height: 110px;
    display: inline-block;
  }
  span {
    color: var(--gray-1);
    font-weight: 600;
    font-size: 12px;
  }
  p {
    font-size: 18px;
    font-weight: 700;
    color: white;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  border: 0.4px solid var(--gray-2);
`;

export const MainTechnology = styled.main`
  width: 80%;
  max-width: 780px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 70px auto;
`;

/////////

export const BoxCadastre = styled.div`
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translateX(-50%) translatey(50%);
  width: 369px;
  height: auto;
  background-color:  var(--gray-3);
  border-radius: 5px;
`;

export const FooterBox = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background-color:  var(--gray-2);
  display: flex;
  justify-content: space-between;
  p {
    font-size: 14px;
    font-weight: 700;
    color: white;
    padding-left: 15px;
  }
  button {
    border: none;
    background-color: transparent;
    color: grey;
    padding-right: 15px;
    cursor: pointer;
  }
`;

export const InfoBox = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  label,
  input,
  select,
  button {
    margin: 15px;
  }
  label {
    color: white;
    font-size: 12px;
    font-weight: 700;
  }
  input {
    width: 87%;
    height: 48px;
    text-align: left;
    border-radius: 5px;
    border: none;
    background-color:  var(--gray-2);
    color: white;
  }
  select {
    width: 87%;
    height: 48px;
    text-align: left;
    border-radius: 5px;
    border: none;
    background-color: var(--gray-2);
    color: white;
    cursor: pointer;
  }
  button {
    width: 87%;
    height: 55px;
    background-color: var(--rosa);
    color: white;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-radius: 10px;
  }
`;

export const Titulo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  p {
    color: white;
    font-size: 16px;
    font-weight: 700;
    padding-left: 10px;
  }
  button {
    width: 35px;
    height: 35px;
    background-color: var(--gray-3);
    color: white;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
  }
`;

export const Tec = styled.div`
  margin: 20px 0;
  width: 100%;
  height: auto;
  max-height: 500px;
  overflow-y: auto;
  background-color: #212529;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  ul {
    background-color: var(--grey4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 87%;
    height: 50px;
    border-radius: 7px;
    margin-top: 10px;
  }
  ul li {
    display: flex;
    color: white;
  }
  ul li button {
    width: 30px;
    height: auto;
    background-color: transparent;
    color: gray;
    margin-left: 10px;
    border: none;
    cursor: pointer;
  }
  li {
    margin-left: 20px;
    margin-right: 20px;
  }
  li p {
    font-size: 14px;
  }
  li strong {
    color: var(--grey1);
    font-weight: 300;
    font-size: 12px;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  background-color:  var(--gray-3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
  }
  button {
    width: 100px;
    height: 100px;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    text-align: center;
    color: white;
  }
`;


