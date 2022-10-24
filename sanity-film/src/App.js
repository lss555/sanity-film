import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/nav-bar/nav-bar.js';
import SideBar from './components/sidebar/sidebar.js';
import OneFilm from './components/one-film/one-film.js';
import Archives from './components/archives/archives.js';
import OurTeam from './components/our-team/our-team.js';
import About from './components/about/about.js';
import Home from './components/home/home.js';
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
        <Routes>
          <Route element={<About />} path="/about" />
          <Route element={<OurTeam />} path="/our-team" />
          <Route element={<Home />} path="/" />
          <Route element={<OneFilm />} path="/:slug" />
          <Route element={<Archives />} path="/archives" />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
