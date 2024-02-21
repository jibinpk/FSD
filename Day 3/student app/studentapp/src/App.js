import logo from './logo.svg';
import './App.css';
import Navbar from './contents/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './contents/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      {/* <Routes>
        <Route to='/' element={<Home/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
