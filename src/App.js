import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Certificate from './components/Certificate';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      
      <div className='background'>
      <Header/>
      
        <div className='container container-content'>
       
          <div className='content' >
          
          <Routes>
          <Route path='/homepage' element = {<Home/>} ></Route>
          <Route path='/skills' element = {<Skills/>} ></Route>
          <Route path='/certificates' element = {<Certificate/>} ></Route>
          <Route path='/contact' element = {<Contact/>} ></Route>
        </Routes>
          </div>
        </div>
        
      </div>
    
    </div>
  );
}

export default App;
