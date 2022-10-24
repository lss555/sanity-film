import React from 'react';
import { HomeContainer, HomeTitleOne, HomeTitleTwo, HomeTitleThree, StarWarsTextContainer } from './home-styles.js';
import HomeProjects from '../home-projects/home-projects.js';
import { motion } from 'framer-motion';

const Home = () => {

	return (
		<motion.div 
			initial={{opacity: 0}}
      		animate={{opacity: 1}}
      		exit={{opacity: 0}}
			>
			<HomeContainer>
				<StarWarsTextContainer>
					<HomeTitleOne>A Film</HomeTitleOne>
					<HomeTitleTwo>Studio Driven By</HomeTitleTwo>
					<HomeTitleThree>Research and Strategy</HomeTitleThree>
				</StarWarsTextContainer>
				<HomeProjects />	
			</HomeContainer>
		</motion.div>
		)

};

export default Home;