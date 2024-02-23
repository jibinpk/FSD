import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homes from './components/Homes';
import Detailspage from './components/Detailspage';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homes  method="post" data={{id:"",name:"",age:"",department:""}}/>}/>
        <Route path='/det' element={<Detailspage/>}/>

        
      </Routes>
    </div>
  );
}

export default App;

