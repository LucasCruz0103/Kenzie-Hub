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
    --rosa:#FF577F;
    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343b41;
    --gray-1: #868e96;
    --gray-0: #f8f9fa;
}
body {
    background: var(--vanilla);
    color: var(--gray-4);
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