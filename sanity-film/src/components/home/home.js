import React from 'react';
import { HomeContainer, HomeTitleOne, HomeTitleTwo, HomeTitleThree, StarWarsTextContainer, VideoBackground, Overlay, Borders } from './home-styles.js';
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
					<Borders></Borders>
					<Overlay></Overlay>
					<HomeTitleOne>A Film</HomeTitleOne>
					<HomeTitleTwo>Studio Driven By</HomeTitleTwo>
					<HomeTitleThree>Research and Strategy</HomeTitleThree>
					<VideoBackground muted defaultMuted playsinline autoPlay loop>
						<source src={videoBg} type="video/mp4" />
					</VideoBackground>
				</StarWarsTextContainer>
				<HomeProjects />	
			</HomeContainer>
		</motion.div>
		)

};

// <video data-v-fab6bddc="" id="video" preload="metadata" playsinline="" autoplay="autoplay" loop="loop" class="video responsive"><source data-v-fab6bddc="" src="/hp-videos/We_Are_Visual_Creatures.mp4" type="video/mp4"></video>

export default Home;