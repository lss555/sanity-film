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
`;

export const AboutHeader = styled.h2`
	display: flex;
	margin: 3rem auto 3rem auto;
`;

export const AboutTextContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	@media screen and (max-width: 812px) {
    margin-right: .5rem;
    margin-left: .5rem;
    width: 90%;
  }
`;

export const AboutImage = styled.img`
	margin-right: .5rem;
	margin-left: .5rem;
`;