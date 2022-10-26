import styled from 'styled-components';

export const HomeContainer = styled.div`
	height: 100%;
	margin-top: -100px;
`;
// background-color: rgba(0, 0, 0, .9);

export const HomeTitleOne = styled.h3`
	width: 100%;
	font-size: 2rem;
	position: absolute;
	z-index: 5;
	margin-bottom: 18rem;
	@media screen and (max-width: 1382px) {
		font-size: 1.33rem;
		margin-bottom: 16rem;
  }
  @media screen and (max-width: 925px) {
		font-size: 1rem;
		margin-bottom: 12rem;
  }
  @media screen and (max-width: 690px) {
		font-size: .66rem;
		margin-bottom: 10rem;
  }
  @media screen and (max-width: 480px) {
		font-size: .66rem;
		margin-bottom: 9rem;
  }
  @media screen and (max-width: 300px) {
		font-size: .6rem;
		margin-bottom: 6rem;
  }
`;

export const HomeTitleTwo = styled.h2`
	position: absolute;
	width: 100%;
	font-size: 4rem;
	margin-top: 0;
	z-index: 5;
	margin-bottom: 12rem;
	@media screen and (max-width: 1382px) {
		font-size: 2.66rem;
		margin-bottom: 10rem;
  }
  @media screen and (max-width: 925px) {
		font-size: 2rem;
		margin-bottom: 8rem;
  }
  @media screen and (max-width: 690px) {
		font-size: 1.33rem;
		margin-bottom: 6rem;
  }
  @media screen and (max-width: 480px) {
		font-size: 1rem;
		margin-bottom: 7rem;
  }
  @media screen and (max-width: 300px) {
		font-size: .8rem;
		margin-bottom: 4rem;
  }
`;

export const HomeTitleThree = styled.h1`
	position: absolute;
	z-index: 5;
	width: 100%;
	font-size: 6rem;
	margin-top: 0;
	@media screen and (max-width: 1382px) {
		font-size: 4rem;
  }
  @media screen and (max-width: 925px) {
		font-size: 3rem;
  }
  @media screen and (max-width: 690px) {
		font-size: 2rem;
  }
  @media screen and (max-width: 480px) {
		font-size: 1.5rem;
		margin-bottom: 4rem
  }
  @media screen and (max-width: 300px) {
		font-size: 1rem;
		margin-bottom: 1rem;
  }
`;

export const StarWarsTextContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	margin: 0 auto 0 auto;
	justify-content: flex-end;
	width: 90vw;
	color: white;
	z-index: 10;
	@media screen and (max-width: 690px) {
		margin-top: -5.5rem;
  }

`;

export const VideoBackground = styled.video`
	z-index: 0;
	display: flex;
	margin: 0;
	padding: 0;
	object-fit: cover;
	width: 100vw;
	height: 100vh;
	
`;

export const Borders = styled.div`
	position: absolute;
	top: 0;
	left: 1.5rem;
	right: 1.5rem;
	height: 100vh;
	
	border-right: 2px solid black;
	border-left: 2px solid black;
	z-index: 2;
	@media screen and (max-width: 812px) {
		left: .8rem;
		right: .8rem;
  }
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left 0;
	right: 0;
	height: 100vh;
	background-color: rgba(0, 0, 0, .3);
	z-index: 3
`;


