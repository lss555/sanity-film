import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const NavContainer = styled.div`
	display: flex;
	height: 100px;
	
	margin-top: 0;
	width: 100%;
`;

export const NavLogo = styled.img`
	display: flex;
	width: auto;
	margin-top: -40px;
	height: 180px;
	:hover {
		cursor: pointer;
	}
`;

export const NavRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	margin-right: 2rem;
	margin-top: 0;
	width: 33%;
	@media screen and (max-width: 812px) {
    display: none;
  }
`;

export const NavMiddle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 33%;
	margin-right: auto;
	margin-left: auto;
	margin-top: 0;
	@media screen and (max-width: 812px) {
    display: none;
  }
`;

export const NavLeft = styled.div`
	width: 33%;

`;

export const NavLink = styled(LinkR)`
	text-decoration: none;
	color: white;
	margin: 1rem;
	:hover {
		color: black;
	}
`;

export const Time = styled.h3`
	color: white;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 812px) {
    display: block;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    transfrom: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;