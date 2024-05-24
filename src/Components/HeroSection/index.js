import React from "react";
import styled from "styled-components";

import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Buttons,
  //Span,
  SubTitle,
  SocialMediaIcons,
  SocialMediaIcon,
  ResumeButton,
} from "./HeroStyle";
import HeroImg from '../../images/NidhiYadavPhoto.jpg'
//import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { MdWavingHand } from "react-icons/md";

const Hero = () => {
  return (
    <div id="hero">
      <HeroContainer>
      
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <TextLoop> I'm {Bio.name} &#128075; </TextLoop>
            <Title>
              I Build & Design <br />
              Web Interfaces{" "}
            </Title>

            <SubTitle>{Bio.description}</SubTitle>
            {/* <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton> */}
            <Buttons>
            <ResumeButton> Check Resume </ResumeButton>
            <ResumeButton href="#contact">Contact</ResumeButton>
            </Buttons>

          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
