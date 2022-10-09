import styled from "styled-components";

export const Container = styled.div`
 height: 100%;
 display: flex;
 align-items: center;
 background-color:  #121214;
 
`;

export const Contem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width:100%;
   max-width: 100%;
   color: var(--rosa);
    margin-top: 41px;
    margin-bottom: -27px;
    section{
        display: flex;
        width:340px;
        justify-content: space-between;
        button{
            background-color:#212529;
            width:65px;
            border-radius:2px;
            border: 2px solid var(--black)
        }    
    }
`;



export const Animacao = styled.div`
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
  
   form {
    display:flex;
    flex-direction: column;
    margin: 80px 0;
    width: 340px;
    text-align: center;
    justify-content: center;
    color: whitesmoke;
    background-color: #212529;
 
    h2{
        margin-bottom: 18px;
        color: whitesmoke;
        margin-top: 21px;
    }
    > div {
        margin-top: 16px;
    }
    p{
        margin-top: 10px;
        margin-bottom: 25px;
    select{
        width: 86%;
        margin-left: 26px;
     }
    }
  }
`;