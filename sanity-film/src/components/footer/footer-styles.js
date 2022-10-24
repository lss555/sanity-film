import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: auto;
	height: 5rem;
	border-top: 1px solid black;
	width: 90%;
	@media screen and (max-width: 880px) {
    flex-direction: column;
    height: 100%;
    padding-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
  }
`;

export const FooterOuterLink = styled.a`
	text-decoration: none;
	margin-right: 2rem;
	margin-left: 2rem;
	font-size: 24px;
	color: white;
	:hover {
		color: black;
	}
	@media screen and (max-width: 1100px) {
    font-size: 16px;
  }
`;


export const FooterInnerLink = styled(Link)`
	text-decoration: none;
	margin-right: 2rem;
	margin-left: 2rem;
	font-size: 24px;
	color: white;
	:hover {
		color: black;
	}
	@media screen and (max-width: 1100px) {
    font-size: 16px;
  }

`;

export const InnerLinksContainer = styled.div`
	display: flex;
	@media screen and (max-width: 880px) {
    flex-direction: column;

  }
`;

export const OuterLinksContainer = styled.div`
	display: flex;
	@media screen and (max-width: 880px) {
    flex-direction: column;
    
  }
`;