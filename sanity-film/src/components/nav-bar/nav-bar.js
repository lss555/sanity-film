import React, { useEffect, useState } from 'react';
import { NavContainer, NavLogo, NavMiddle, NavRight, NavLeft, NavLink, Time, MobileIcon } from './nav-bar-styles.js';
import Logo from '../images/sLogo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const NavBar = ({ toggle }) => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	// let time = new Date().getTime();

	useEffect(() => {
		let secTimer = setInterval(() => {
			setTime(new Date().toLocaleTimeString())
		}, 1000)
		return () => clearInterval(secTimer);
	}, []);

	return (
		<NavContainer>
			<NavLeft>
				<Link to ='/'>
					<NavLogo to='/' src={Logo} />
				</Link>
			</NavLeft>
			<NavMiddle>
				<NavLink to='/archives'>Archives</NavLink>
				<NavLink to='/about'>About</NavLink>
				<NavLink to='/our-team'>The Team</NavLink>
			</NavMiddle>
			<NavRight>
				<Time>{time}</Time>
			</NavRight>
			<MobileIcon onClick={toggle}>
        		<GiHamburgerMenu />
      		</MobileIcon>
		</NavContainer>
		);
};

export default NavBar;