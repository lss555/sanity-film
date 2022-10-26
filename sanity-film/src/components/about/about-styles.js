import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: auto;
	margin-left: auto;
	max-width: 1200px;
	min-height: 100vh;
	text-align: center;
	width: 100%;
	margin-top: 5rem;
	padding-bottom: 1rem;
	@media screen and (max-width: 768px) {
    	
  }
`;

export const AboutHeader = styled.h2`
	display: flex;
	margin: 3rem auto 3rem auto;
	color: white;
`;

export const AboutTextContainer = styled.div`
	display: flex;
	width: 90%;
	flex-direction: column;
	justify-content: center;
	margin: auto;
	color: white;
	@media screen and (max-width: 900px) {
    margin-right: auto;
    margin-left: auto;
    width: 90%;
  }
	@media screen and (max-width: 700px) {
    margin-right: auto;
    margin-left: auto;
    width: 90%;
  }
`;

export const AboutImage = styled.img`
	margin-right: .5rem;
	margin-left: .5rem;
	@media screen and (max-width: 820px) {
    	width: 90vw;
    	height: auto;
    	margin: auto;
  }
  @media screen and (max-width: 325px) {
    	width: 85vw;
    	height: auto;
    	margin: auto;
  }
`;