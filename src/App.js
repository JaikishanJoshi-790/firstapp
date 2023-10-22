import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light");
  const [alert, setalert] = useState(null);

  let showAlert =(message,type)=>{
      setalert({
        msg: message, 
        type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 2000);
  }
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#104d8a';
      showAlert("Dark mode now enable","Success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode now disable","Success");
    }
  }
  return (
    <>
    <Navbar toggleMode={toggleMode} mode={mode} title="firstapp"/>
    <Alert alert={alert} />
    
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter your email id and password" />} />
        
      </Routes>
  
    </>
  );
}

export default App;
