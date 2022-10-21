import React, { useEffect, useState } from 'react';
import { NavContainer, NavLogo, NavMiddle, NavRight, NavLeft, NavLink, Time, MobileIcon } from './nav-bar-styles.js';
import Logo from '../images/sLogo.png';
import { GiHamburgerMenu } from "react-icons/gi";

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
				<NavLogo src={Logo} />
			</NavLeft>
			<NavMiddle>
				<NavLink>Work</NavLink>
				<NavLink>Archives</NavLink>
				<NavLink>About</NavLink>
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