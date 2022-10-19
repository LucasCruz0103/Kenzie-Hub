import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './Styles/Global';
import { Navigation } from './Routes/Routes';
import{ UserProvider }from './contexts/UserContext';
import{ ModalProvider }from './contexts/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root')) ;
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <ModalProvider>
                    <GlobalStyle />
                    <Navigation/>
                    <App />
                </ModalProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);
