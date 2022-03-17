import { MainContent, Section } from 'layouts';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledProjects = styled.div`
  ${({ theme }) => css`
    .projects {
      overflow: hidden;
      display: flex;
    }

    .projects-info {
      width: 50%;
      padding-right: 4rem;
    }

    .projects-details {
      width: 50%;
      padding-left: 5rem;
      display: flex;
      flex-direction: column;
    }

    @media screen and (max-width: 1100px) {
      .projects {
        display: flex;
        flex-direction: column;
      }

      .projects-info,
      .projects-details {
        width: 100%;
      }

      .projects-info {
        padding: 0 2rem;
      }

      .projects-details {
        padding: 2rem;
      }
    }

    .project-card {
      width: 90%;
      background: ${theme.colors.white};
      padding: 1.5rem;
      margin-bottom: 25px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
    }

    .project-card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }


    .project-card header {
      font-size: 1rem;
      line-height: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .project-card section {
      font-size: 0.9rem;
      color: ${theme.colors.lightBlack};
      margin-bottom: 1.5em;
    }

    .project-card footer {
      font-size: 0.8rem;
      line-height: 1.3rem;
    }
  `}

`;

export default function Projects() {
  return (
    <StyledProjects>
      <Section className="projects">
        <MainContent className="projects-info">
          <h2> Some things I&apos;ve built</h2>
          <p>
            {`Outside of my academic school programming assignments and my work,
            I also enjoy exploring new technologies, whether it's a framework,
            new language or an API. These days it's usually anything web related.`}
          </p>
          <p>
            {`By working on my own projects, I'm able to revisit any problems I've
            encountered in the past, and figured out better approaches to go about
            solving them. Essentially figure out what I wanted to do differently
            (maybe not exactly, but similar) and implement it to see any improvements.`}
          </p>
          <p>
            {`I've especially become interested in realtime enabled features, such as
            Chat applications, or through collaborative work in writing through text editors.`}
          </p>
        </MainContent>
        <div className="projects-details">
          <div className="project-card">
            <header>ZenCMS</header>
            <section>
              Content Management System
              <p>
                An application that provides project management tools, similar to sites like
                Jira, Clickup, etc.
              </p>
            </section>
            <footer>
              React, GraphQL, MongoDB, Express, Node.js
            </footer>
          </div>
          <div className="project-card">
            <header>Conversations App</header>
            <section>
              Chat Application
              <p>
                A conversations app implementing using Twilio Conversations API.
              </p>
            </section>
            <footer>
              React, Styled Components, Node.js, Twilio
            </footer>
          </div>
        </div>
      </Section>
    </StyledProjects>
  );
}
