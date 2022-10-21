import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background: #4a4844;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #0d0d0d;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SideBarWrapper = styled.div`
  	color: #0d0d0d;
    width: 100%;
    margin: auto;
    
`;

export const SideBarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const SideBarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: white;
  cursor: pointer;
  margin: 1rem auto 1rem auto;
  &:hover {
    color: black;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBarLogo = styled.img`
	display: flex;
	width: auto;
	margin-top: -40px;
	height: 180px;
`;