import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Signup from './components/Signup';
import Useeffect from './components/Useeffect';
import { Route, Routes } from 'react-router-dom';
import Mapping from './components/Mapping';
import Listcreate from './components/Listcreate';
import Apiadd from './components/Apiadd';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path='/count' element={<Counter/>}/>
        <Route path='/state' element={<StateBasics/>}/>
        <Route path='/use' element={<Useeffect/>}/>
        <Route path='/map' element={<Mapping/>}/>
        <Route path='/list' element={<Listcreate/>}/>
        <Route path='/api' element={<Apiadd/>}/>
        
      </Routes>
      {/* <Useeffect/> */}
      {/* <Signup/> */}
      {/* <Counter/> */}
      {/* <Login/> */}
      {/* <StateBasics/> */}
     
    </div>
  );
}

export default App;

