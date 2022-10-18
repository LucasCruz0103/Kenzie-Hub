import { Navegando } from './Routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import{ToastContainer} from 'react-toastify';
import {Provider} from './contexts/Provider';
export function App() {
  return (
    <>
  <Provider>
      <Navegando />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <ToastContainer />
  </Provider>
    </>
  )
}


    
  
