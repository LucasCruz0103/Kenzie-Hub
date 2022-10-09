import styled from "styled-components";
export const MainContainer = styled.div`
background-color: #212529;
height: 900px;;
`
export const Container = styled.div`
 height: 100%;
 display: flex;
 align-items: center;
 background-color:  #121214;
 margin-bottom: 600px;
`;

export const Contem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-;
   width:100%;
   max-width: 100%;
   margin-top: 41px;
    margin-bottom: -27px;
   
`;



export const Animacao = styled.div`
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color:#212529;
   
   
   form {
    display:flex;
    flex-direction: column;
    margin: 80px 0;
    width: 340px;
    text-align: center;
    color: whitesmoke;
    h1{
        
        margin-top: 41px;
        margin-bottom: -27px;
    }
    > div {
        margin-top: 16px;
    }
    p{
        margin-top: 8px;
    }
    section{
        background-color:#868E96;
        height: 45px;
        border-radius: 8px;
        border: 2px solid var(--black);
        font-family: monospace;
        margin-top: 16px;
        width:90%;
        margin-left: 18px;
        button{
            background-color:#868E96;
            text-align: center;
            border:none;
            padding:11px;
        }
    }
  }
`;