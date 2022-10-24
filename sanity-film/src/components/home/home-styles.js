import styled from 'styled-components';

export const HomeContainer = styled.div`
	height: 100%;
`;

export const HomeTitleOne = styled.h3`
	width: 100%;
	font-size: 2rem;
	@media screen and (max-width: 1382px) {
		font-size: 1.33rem
  }
  @media screen and (max-width: 925px) {
		font-size: 1rem;
  }
  @media screen and (max-width: 690px) {
		font-size: .66rem;
  }
  @media screen and (max-width: 480px) {
		font-size: .5rem;
  }
`;

export const HomeTitleTwo = styled.h2`
	width: 100%;
	font-size: 4rem;
	margin-top: 0;
	@media screen and (max-width: 1382px) {
		font-size: 2.66rem
  }
  @media screen and (max-width: 925px) {
		font-size: 2rem;
  }
  @media screen and (max-width: 690px) {
		font-size: 1.33rem;
  }
  @media screen and (max-width: 480px) {
		font-size: .66rem;
  }
`;

export const HomeTitleThree = styled.h1`
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
		font-size: 1rem;
  }
`;

export const StarWarsTextContainer = styled.div`
	height: 92vh;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	margin: auto auto 0 auto;
	justify-content: flex-end;
	width: 90vw;
	color: white;
	@media screen and (max-width: 690px) {
		margin-top: -2.5rem;
  }

`;

// @media screen and (max-width: 812px) {
//     width: 50vw;
//     margin-left: 0;
//     margin-right: 0;
//     overflow-wrap: anywhere;
//   }

