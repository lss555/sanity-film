import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const OneFilmContainer = styled.div`
	display: flex;
	min-height: 100vh;
	color: white;
	padding-bottom: 3rem;

	@media screen and (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FilmTitle = styled.h1`
	font-size: 40px;
`;

export const DirectedByText = styled.h3`
	font-size: 24px;
`;

export const DescriptionText = styled.div`
	font-size: 18px;
`;

export const DatePublished = styled.p`

`;

export const VideoContainer = styled.div`
	display: flex;
	margin: auto;
	width: 50%;
	justify-content: center;
	align-items: center;
	text-align: center;
	align-self: center;
	@media screen and (max-width: 1200px) {
		margin-top: -5rem;
		padding-top: 0;
		width: 85vw;

  }
`;

export const ReactVideoPlayer =  styled(ReactPlayer)`
	display: flex;
	@media screen and (max-width: 1200px) {
		
  }
`;

export const ProjectTextContainer = styled.div`
	width: 50%;
	margin: auto 2rem auto 2rem;
	text-align: center;
	@media screen and (max-width: 1200px) {
		width: 90%;
		padding-right: .5rem;
		padding-left: .5rem;
		margin: auto;
  }
`;