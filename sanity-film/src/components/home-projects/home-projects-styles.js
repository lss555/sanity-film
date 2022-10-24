import styled from 'styled-components';
import { Link } from "react-router-dom";

export const HomeProjectsContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	margin: auto;
	min-height: 100vh;
	@media screen and (max-width: 1168px) {
		flex-direction: column;

  }
`;

export const HomeProjectsImg = styled.img`
	display: flex;
	width: auto;
	height: 40vh;
	margin: 2rem 0 2rem auto;
	justify-content: flex-end;
	@media screen and (max-width: 1168px) {
		margin: 1rem auto 1rem auto;
		width: 70vw;
		height: auto;
  }
`;

export const HomeProjectsTitle = styled.h2`
	display: flex;
	justify-content: center;
	width: 50%;
	margin-top: 2rem;
	margin-right: auto;
	margin-left: auto;
	:hover {
		color: black;
	}
	@media screen and (max-width: 1168px) {
		width: 100%;


  }
`;

export const HomeProjectsLink = styled(Link)`
	display: flex;
	text-decoration: none;
	color: white;
	width: 100%;
	flex-direction: row;
	margin: auto;
	@media screen and (max-width: 1168px) {
		flex-direction: column;

  }
`;

export const HomeProjectsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 90vw;
	margin: auto;
	justify-content: center;
	@media screen and (max-width: 1168px) {
		

  }
`;

export const HomeProjectsText = styled.div`
	display: flex;
	margin-right: 1rem;
	margin-left: 1rem;
	margin-top: 2rem;
	justify-content: center;
	@media screen and (max-width: 1168px) {
		margin-top: 1rem;
  }
`;

export const HomeProjectsTextContainer = styled.div`
	max-width: 1000px;
	margin: auto;
	@media screen and (max-width: 1500px) {
		margin-top: 0;

  }
`;