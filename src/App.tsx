import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
       <ToastContainer 
                position="top-right"
                theme='dark'
                transition={Slide}
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
    </div>
  );
}

export default App;


    
  
