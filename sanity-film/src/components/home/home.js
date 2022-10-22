import React from 'react';
import { HomeContainer, HomeTitleOne, HomeTitleTwo, HomeTitleThree, StarWarsTextContainer } from './home-styles.js';
import HomeProjects from '../home-projects/home-projects.js';

const Home = () => {

	return (
		<HomeContainer>
			<StarWarsTextContainer>
				<HomeTitleOne>A Film</HomeTitleOne>
				<HomeTitleTwo>Studio Driven By</HomeTitleTwo>
				<HomeTitleThree>Research and Strategy</HomeTitleThree>
			</StarWarsTextContainer>
			<HomeProjects />
		</HomeContainer>
		)

};

export default Home;