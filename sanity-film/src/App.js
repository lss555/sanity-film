import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/nav-bar/nav-bar.js';
import Home from './components/home/home.js';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </HashRouter>
  );
}

export default App;
