
import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
`;

export const Heading = styled.h2`
  font-size: 2.5 rem;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 4rem;
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const LinkCard = styled.a`
  background: ${({ theme }) => theme.card};
  //border-radius: 8px;
  text-decoration: none;
  color: inherit;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
 // border: 1px solid ${({ theme }) => theme.primary};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LinkCardContent = styled.div`
  padding: 20px;
  text-align: center;
`;

export const LinkCardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 0.5rem;
`;

export const LinkCardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 1rem;
`;

export const LinkButton = styled.div`
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
