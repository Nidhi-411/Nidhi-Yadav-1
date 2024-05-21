import React from "react";
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
} from "./NavbarStyledComponent";

const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
        <Span >
        <span className="blue">&lt;</span>
        <span className="white">Nidhi</span>
        <span className="blue"> / </span>
        <span className="white">Yadav</span>
        <span className="blue">&gt;</span>
           </Span>
        </NavLogo>
         
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          {/* <NavLink href="#experience">Experience</NavLink> */}
          <NavLink href="#projects">Projects</NavLink>
          { /* <NavLink href="#education">Education</NavLink> */ }
          <NavLink href="#contact">Contact</NavLink>

        </NavItems>
          <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank" > Github Profile </GitHubButton>
          </ButtonContainer>
       
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            {/* <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink> */}
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            < GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }

      </NavbarContainer>


    </Nav>
  );
};

export default Navbar;
