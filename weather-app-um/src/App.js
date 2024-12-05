import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Weathers } from './Components/Weather/Weathers';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Weathers/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
