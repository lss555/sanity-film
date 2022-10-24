import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBarLogo } from './sidebar-styles.js';
import Logo from '../images/sLogo.png';

const SideBar = ({ toggle, isOpen}) => {

	return (
		<SideBarContainer isOpen={isOpen} onClick={toggle}>
	          <Icon onClick={toggle}>
	            <CloseIcon />
	          </Icon>
	            <SideBarWrapper>
	              <SideBarMenu>
	                <SideBarLink to='/archives' onClick={toggle}>
	                  Archives
	                </SideBarLink>
	                <SideBarLink to='/about' onClick={toggle}>
	                  About
	                </SideBarLink>
	                <SideBarLink to='/' onClick={toggle}>
	                  <SideBarLogo src={Logo}/>
	                </SideBarLink>
	              </SideBarMenu>
	            </SideBarWrapper>
	        </SideBarContainer>
	        )
};

export default SideBar;