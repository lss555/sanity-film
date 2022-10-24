import React from 'react';
import { AnimatePresence } from 'framer-motion';
import OneFilm from './one-film/one-film.js';
import Archives from './archives/archives.js';
import OurTeam from './our-team/our-team.js';
import About from './about/about.js';
import Home from './home/home.js';
import { Routes, Route, useLocation } from 'react-router-dom';

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
	          <Route element={<About />} path="/about" />
	          <Route element={<OurTeam />} path="/our-team" />
	          <Route element={<Home />} path="/" />
	          <Route element={<OneFilm />} path="/:slug" />
	          <Route element={<Archives />} path="/archives" />
	        </Routes>
        </AnimatePresence>
	)
};

export default AnimatedRoutes;