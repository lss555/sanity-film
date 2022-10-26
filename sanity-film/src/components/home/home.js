import React from 'react';
import { HomeContainer, HomeTitleOne, HomeTitleTwo, HomeTitleThree, StarWarsTextContainer, VideoBackground, Overlay } from './home-styles.js';
import HomeProjects from '../home-projects/home-projects.js';
import { motion } from 'framer-motion';
import videoBg from '../images/videoBg.mp4';

const Home = () => {

	return (
		<motion.div 
			initial={{opacity: 0}}
      		animate={{opacity: 1}}
      		exit={{opacity: 0}}
			>
			<HomeContainer>
				<StarWarsTextContainer>
					<Overlay></Overlay>
					<HomeTitleOne>A Film</HomeTitleOne>
					<HomeTitleTwo>Studio Driven By</HomeTitleTwo>
					<HomeTitleThree>Research and Strategy</HomeTitleThree>
					<VideoBackground src={videoBg} autoPlay loop muted/>
				</StarWarsTextContainer>
				<HomeProjects />	
			</HomeContainer>
		</motion.div>
		)

};

export default Home;