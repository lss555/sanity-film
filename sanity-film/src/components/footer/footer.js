import React from 'react';
import { FooterContainer, FooterOuterLink, FooterInnerLink, InnerLinksContainer, OuterLinksContainer } from './footer-styles.js';


const Footer = () => {

	return (
		<FooterContainer>
			<InnerLinksContainer>
				<FooterInnerLink to='/archives'>
					Archives
				</FooterInnerLink>
				<FooterInnerLink to='/about'>
					About
				</FooterInnerLink>
				<FooterInnerLink to='/our-team'>
					The Team
			</FooterInnerLink>
			</InnerLinksContainer>
			<OuterLinksContainer>
				<FooterOuterLink href='https://www.instagram.com/'>
					Instagram
				</FooterOuterLink>
				<FooterOuterLink href='https://twitter.com/?lang=en'>
					Twitter
				</FooterOuterLink>
			</OuterLinksContainer>
		</FooterContainer>

		)
};

export default Footer