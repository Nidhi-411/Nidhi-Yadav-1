// ProjectStyles.js
import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
`;

export const ProjectsHeading = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 1rem;
`;

export const ProjectsSubHeading = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 2rem;
`;

export const ProjectCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
//   padding: 18px 36px;
//  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  width: 400px;
  margin : 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 // border: 2px solid ${({ theme }) => theme.primary};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ProjectCardContent = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ProjectCardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 0.5rem;
`;

export const ProjectCardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 1rem;
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.button};
  }

  svg {
    margin-right: 8px;
  }
`;
