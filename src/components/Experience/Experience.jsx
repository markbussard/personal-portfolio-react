import { MainContent, Section } from 'layouts';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledExperience = styled.div`
  #skills-canvas-container {
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
  }

  #skills-canvas {
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  /****** Skills ******/
  .skills {
    overflow: hidden;
    display: flex;
  }

  @media screen and (max-width: 1100px) {
    .skills {
      display: block;
    }
  }

  .skills-info {
    width: 40%;
  }

  @media screen and (max-width: 1100px) {
    .skills-info {
      padding: 2rem;
      width: 100%;
    }
  }

  .skills-details {
    width: 50%;
    padding-left: 4rem;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1100px) {
    .skills-details {
      padding: 2rem;
      width: 100%;
    }
  }
`;

export default function Experience() {
  React.useEffect(() => {
    const { TagCanvas } = window;
    try {
      TagCanvas.Start('skills-canvas', 'tags', {
        textFont: 'Roboto, sans-serif',
        textColour: '#333',
        textHeight: 20,
        fadeIn: 1500,
        noSelect: true,
        wheelZoom: false,
      });
    } catch (e) {
      console.error(`Error occured while trying to load skills-canvas: ${e}`);
      document.getElementById('skills-canvas-container').style.display = 'none';
    }
  }, []);

  return (
    <StyledExperience>
      <Section className="skills">
        <MainContent className="skills-info">
          <h2 className="section-header">Experience</h2>
          <p>
            {`I am currently working as a Software Engineer for a San Diego start up, OmniSync.
            While I mainly work on the front-end, I also spend time working on the back back-end
            for building out site features. The stack I work with includes React, GraphQL, NodeJS,
            and Firebase.`}
          </p>
          <p>
            {`Outside of the stack I use at work, I have also spent time exploring various other
            technologies, databases and frameworks. I've built out my own RESTFul APIs through
            using ExpressJS, paired with Mongoose and MongoDB.`}
          </p>
          <p>
            {`While I started out with learning HTML, CSS and vanilla JavaScript, within a couple of
            months I jumped into working with React. For this reason, I have recently started exploring
            and attempting to build a more solid understanding of JavaScript without the use of frameworks.`}
          </p>
          <p>
            View my
            {' '}
            <a style={{ color: '#000', cursor: 'pointer' }} href="https://www.linkedin.com/in/mark-bussard/" target="_blank" rel="noreferrer">LinkedIn</a>
            &nbsp;profile for more details or feel free to
            {' '}
            <Link to="/contact" style={{ color: '#000', cursor: 'pointer' }}>contact</Link>
            {' '}
            me.
          </p>
        </MainContent>
        <div className="skills-details">
          <div id="skills-canvas-container">
            <canvas id="skills-canvas" height="300" width="300">
              <div id="tags">
                <ul>
                  <li><a href="#">ReactJS</a></li>
                  <li><a href="#">JavaScript</a></li>
                  <li><a href="#">NodeJS</a></li>
                  <li><a href="#">CSS</a></li>
                  <li><a href="#">HTML</a></li>
                  <li><a href="#">Git</a></li>
                  <li><a href="#">GraphQL</a></li>
                  <li><a href="#">Webpack</a></li>
                  <li><a href="#">Firebase</a></li>
                  <li><a href="#">MongoDB</a></li>
                  <li><a href="#">Mongoose</a></li>
                  <li><a href="#">ExpressJS</a></li>
                </ul>
              </div>
            </canvas>
          </div>
        </div>
      </Section>
    </StyledExperience>
  );
}
