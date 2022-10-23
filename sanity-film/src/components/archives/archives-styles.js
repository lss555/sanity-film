import styled from 'styled-components';
import { Link } from "react-router-dom";

export const ArchivesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	text-align: flex-start;
	min-height: 100vh;
	margin-left: 12rem;
	@media screen and (max-width: 812px) {
    margin-left: 5rem;
    margin-right: 5rem;
  }
  @media screen and (max-width: 512px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const ArchivesFilmsContainer = styled.div`
	display: flex;
	
`;

export const YearColumn = styled.div`
	
`;

export const FilmNameColumn = styled.div`
	
`;

export const YearH3 = styled.h3`
	text-decoration: none;
	margin-right: 2rem;
	@media screen and (max-width: 812px) {
    width: 40vw;
    margin-right: 1rem;
  }
`;

export const FilmNameH3 = styled.h3`
	display: flex;
	text-decoration: none;
	margin-left: 2rem;
	text-align: flex-start;
	@media screen and (max-width: 812px) {
    width: 40vw;
    margin-left: 0;
    padding-right: 2rem;

  }
`;

export const ArchivesHeader = styled.h1`
	color: white;
	
`;

export const FilmLink = styled(Link)`
	text-decoration: none;
	color: white;
	:hover {
		color: black;
	}
`;

export const ProjectRowContainer = styled.div`
	display: flex;
	width: 100%;
	text-align: flex-start;
`;

export const DateHeader = styled.h2`
	margin-right: 2rem;
	color: white;
	
	@media screen and (max-width: 812px) {
    font-size: 24px;
    width: 40vw;
    margin-right: 1rem;
  }
`;

export const FilmNameHeader = styled.h2`
	display: flex;
	margin-left: 2rem;
	color: white;
	text-align: flex-start;
	@media screen and (max-width: 812px) {
    font-size: 24px;
    width: 40vw;
    margin-right: auto;
    margin-left: 0;
  }
`;

export const SubHeaderContainer = styled.div`
	display: flex;
	text-align: flex-start;
	border-bottom: 2px solid black;
	width: 30vw;
	@media screen and (max-width: 812px) {
    
    width: 100%;
  }
`;