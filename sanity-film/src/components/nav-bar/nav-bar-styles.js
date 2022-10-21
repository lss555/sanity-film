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

`;

export const NavRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	margin-right: 2rem;
	margin-top: 0;
	width: 33%;
`;

export const NavMiddle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 33%;
	margin-right: auto;
	margin-left: auto;
	margin-top: 0;
`;

export const NavLeft = styled.div`
	width: 33%;

`;

export const NavLink = styled(LinkR)`
	text-decoration: none;
	color: white;
	margin: 1rem;
`;

export const Time = styled.h3`
	color: white;
`;