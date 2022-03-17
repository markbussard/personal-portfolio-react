import { MainContent, Section } from 'layouts';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledContact = styled.div`
  ${({ theme }) => css`
    .contact {
      overflow: hidden;
      display: flex;
      width: 80%;
    }

    .contact-info {
      margin: 0 auto;
      padding-left: 0;
      padding-top: 3rem;
    }

    @media screen and (max-width: 1280px) {
      .contact {
        width: 100%;
      }
    }

    .contact-info header,
    .contact-info p {
      width: 70%;
      margin: 0 auto;
    }

    form {
      margin: 0 auto;
      width: 70%;
      padding: 24px 0;
    }

    ::placeholder {
      color: ${theme.colors.gray};
    }

    input[type=text]:focus-visible {
      border-color: ${theme.colors.black};
    }

    .contact-form input,
    .contact-form textarea {
      height: 50px;
      font-size: 16px;
      color: ${theme.colors.black};
      outline: none;
      width: 100%;
    }

    .contact-form input {
      background: ${theme.colors.formGray};
      border: 1px solid ${theme.colors.formBorderGray};
      padding: 0px 20px;
      margin-bottom: 10px;
    }

    .contact-form textarea {
      border: 1px solid ${theme.colors.formBorderGray};
      background: var(--form-gray);
      padding: 20px;
      min-height: 150px;
    }

    .contact-form textarea:focus-visible {
      border-color: ${theme.colors.black};
    }

    .contact-form input[type=submit] {
      background: ${theme.colors.white};
      border: 1px solid;
      float: right;
      max-width: 200px;
      cursor: pointer;
      margin-top: 20px;
      transition: 0.3s ease-out all;
    }

    .contact-form input[type=submit]:hover {
      background: ${theme.colors.lightBlack};
      color: ${theme.colors.white};
      transition: 0.3s ease-out all;
    }
  `}
`;

export default function Contact() {
  return (
    <StyledContact>
      <Section className="contact">
        <MainContent className="contact-info">
          <header>
            <h2 className="section-header">{'Let\'s chat.'}</h2>
          </header>
          <p>
            {` I'm interested in any possible freelance projects, however ambitious or large.
            For any other request or questions, feel free to send me a message.`}
          </p>
          <form id="contact" className="contact-form">
            <input placeholder="Name" type="text" name="name" required />
            <input placeholder="Email" type="text" name="email" required />
            <textarea placeholder="Message" type="text" name="message" required />
            <input className="submit-button" type="submit" id="submit" />
          </form>
        </MainContent>
      </Section>
    </StyledContact>
  );
}
