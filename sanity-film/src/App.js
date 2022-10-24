import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import NavBar from './components/nav-bar/nav-bar.js';
import SideBar from './components/sidebar/sidebar.js';
// Animated Routes has all the routing for better routing transitions
import AnimatedRoutes from './components/animated-routes';
import Footer from './components/footer/footer.js';
import ScrollToTop from './components/scroll-to-top';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };


  return (
    <HashRouter>
      <ScrollToTop />
      <div className='App-container'>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <AnimatedRoutes />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
