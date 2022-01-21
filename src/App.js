// import Cards from './Componen2/AllCards/Cards';
import Home from './Componen2/Home/Home';
import './App.css';
import Card from './Componen2/ChecktheCompoente/Card';
import Checkchard from './Componen2/AllCards/checkchard';
import Newcard from './Componen2/AllCards/Newcard';
import {Checkhere} from './Componen2/ChecktheCompoente/Checkcompoente';
import Rotate from './Rotatehere/Rotate';
import ComingSon from './Component/ComingSoon/ComingSon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
        <ToastContainer/>
      <Home/>
      {/* {/* <Card/> */}
  <Checkchard/> 
  <Newcard/> 
  {/* <Checkhere/> */}

    </div>
  );
}

export default App;
