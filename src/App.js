import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Router/Router';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    
  
      <>
      <ToastContainer position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
      <RouterProvider router={router}></RouterProvider>
      </>
    

  );
}

export default App;
