// About.js
import React from 'react';
import { 
  AboutContainer, 
  Heading, 
  Description, 
  Links, 
  LinkCard, 
  LinkCardContent, 
  LinkCardTitle, 
  LinkCardDescription, 
  LinkButton 
} from './AboutStyle';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { AboutData } from '../../data/constants';


const About = () => {
  return (
    <div id="about">
    <AboutContainer>
      <Heading>About Me</Heading>
      <Description>
        {AboutData.description1}
        <br/>
        {AboutData.description2}
        <br/>
        {AboutData.description3}

       </Description>
      <Links>
        <LinkCard href="https://www.linkedin.com/in/nidhi-yadav-b69386247/" target="_blank">
          <LinkCardContent>
            <LinkCardTitle>LinkedIn</LinkCardTitle>
            <LinkCardDescription>Connect with me on LinkedIn for professional updates and networking.</LinkCardDescription>
            <LinkButton><FaLinkedin /> Visit LinkedIn</LinkButton>
          </LinkCardContent>
        </LinkCard>
        <LinkCard href="https://leetcode.com/nidhi_411" target="_blank">
          <LinkCardContent>
            <LinkCardTitle>LeetCode</LinkCardTitle>
            <LinkCardDescription>Check out my coding challenges and solutions on LeetCode.</LinkCardDescription>
            <LinkButton><FaCode /> Visit LeetCode</LinkButton>
          </LinkCardContent>
        </LinkCard>
        <LinkCard href="https://github.com/Nidhi-411" target="_blank">
          <LinkCardContent>
            <LinkCardTitle>GitHub</LinkCardTitle>
            <LinkCardDescription>Explore my projects and contributions on GitHub.</LinkCardDescription>
            <LinkButton><FaGithub /> Visit GitHub</LinkButton>
          </LinkCardContent>
        </LinkCard>
      </Links>
    </AboutContainer>
    </div>
  );
}

export default About;
