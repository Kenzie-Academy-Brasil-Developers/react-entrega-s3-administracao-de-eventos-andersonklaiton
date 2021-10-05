
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Headers from './components/headers';
import Pages from './pages';

function App() {
  return (
    <div className="App">
      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <Headers/>
      <Pages/>
    </div>
  );
}

export default App;
