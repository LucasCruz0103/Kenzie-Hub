import { Navegando } from './Routes/Routes';
import GlobalStyle from './Styles/Global';

import 'react-toastify/dist/ReactToastify.css';
import{ToastContainer} from 'react-toastify';
export function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <Navegando />
    </>
  )
}

    
  
