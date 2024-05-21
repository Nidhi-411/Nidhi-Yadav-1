// Projects.js
import React from 'react';
import { 
  ProjectsContainer, 
  ProjectCard, 
  ProjectCardContent, 
  ProjectCardTitle, 
  ProjectCardDescription, 
  ProjectLinks, 
  ProjectLink, 
  ProjectsHeading, 
  ProjectsSubHeading,
  ProjectImage,
  ProjectCardsWrapper 
} from './ProjectsStyles';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData as projects } from '../../data/constants';


const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsHeading>Projects</ProjectsHeading>
      <ProjectsSubHeading>Here are some of the projects I have worked on, showcasing my skills and expertise.</ProjectsSubHeading>
      <ProjectCardsWrapper>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectCardContent>
              <ProjectCardTitle>{project.title}</ProjectCardTitle>
              <ProjectCardDescription>{project.description}</ProjectCardDescription>
              <ProjectLinks>
                <ProjectLink href={project.codeLink} target="_blank">
                  <FaCode /> Code
                </ProjectLink>
                <ProjectLink href={project.demoLink} target="_blank">
                  <FaExternalLinkAlt /> Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectCardContent>
          </ProjectCard>
        ))}
      </ProjectCardsWrapper>
    </ProjectsContainer>
  );
}

export default Projects;
