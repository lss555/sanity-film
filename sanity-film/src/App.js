import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/nav-bar/nav-bar.js';
import SideBar from './components/sidebar/sidebar.js';


import Home from './components/home/home.js';
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };


  return (
    <HashRouter>
      <div className='App-container'>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
