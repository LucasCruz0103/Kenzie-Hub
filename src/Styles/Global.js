import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
:root{
    --white: #f5f5f5;
    --vanilla: #f1ede0;
    --black: #000000;
    --orange: #c85311;
    --rosa:#FF577F
}
body {
    background: var(--vanilla);
    color: var(--black);
}
body, input, button {
    font-family: "Inter";
    font-size: 1 rem;
}
h1, h2, h3, h4, h5, h6{
    font-family: "Inter";
    font-weight: 700;
}
button{
    cursor: pointer;
}
a{
    text-decoration: none;
}
h1{
    color: var(--rosa);
    
    margin-top: 2px;
    margin-bottom: 21px;
}
`;