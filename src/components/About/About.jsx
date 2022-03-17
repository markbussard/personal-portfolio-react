import React from 'react';
import AboutImage from 'assets/about-img.jpeg';
import styled from 'styled-components';
import { MainContent, Section } from 'layouts';

const StyledAbout = styled.div`
  .about {
    overflow: hidden;
    display: flex;
  }

  .about-info {
    width: 40%;
    padding-right: 4rem;
    padding-left: 0;
  }

  .about-img {
    width: 40%;
  }

  @media screen and (max-width: 1200px) {
    .about-info {
      padding: 0;
    }
    .about-img {
      width: 60%;
    }
  }

  @media screen and (max-width: 800px) {
    .about {
      flex-direction: column;
    }

    .about-info {
      width: 100%;
      padding: 2rem 0 0;
    }

    .about-img {
      width: 100%;
      padding-left: 0;
    }

    img {
      width: 100% !important;
    }
  }
`;

export default function About() {
  return (
    <StyledAbout>
      <Section className="about">
        <div className="about-img">
          <img src={AboutImage} alt="Me" />
        </div>
        <MainContent className="about-info">
          <h2>Hi, I&apos;m Mark Bussard</h2>
          <p>
            I&apos;m a fourth year student studying Computer Science at UC San Diego.
            I have a passion for frontend development and creating dynamic user experiences.
          </p>
          <p>
            Well-organized person, problem solver with a high attention for detail. Fan of
            Basketball, binge watching netflix series and learning new skills.
          </p>
          <p>
            Well-organized person, problem solver with a high attention for detail.
            Fan of Basketball, binge watching netflix series and learning new skills.
          </p>
        </MainContent>
      </Section>
    </StyledAbout>
  );
}
