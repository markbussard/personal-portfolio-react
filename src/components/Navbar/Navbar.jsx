import React from 'react';
import LinkedinIcon from 'assets/linkedin-icon.svg';
import GithubIcon from 'assets/github-icon.svg';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import useAuthContext from 'context/auth';

const StyledNavbar = styled.header`
  ${({ theme }) => css`
    .main-menu {
      width: 12rem;
      margin: 0;
      padding: 0;
      z-index: 3;
    }

    a {
      text-decoration: none;
    }

    .main-menu__top {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1.5rem 0 2rem;
    }

    .main-menu__top a {
      font-size: 2.2rem;
      font-weight: 600;
      color: ${theme.colors.black};
    }

    .main-menu__top>span {
      font-size: 0.8rem;
      color: ${theme.colors.gray};
      margin-top: 0.4rem;
    }

    .main-menu__nav {
      padding: 0 0 2rem;
      display: flex;
      flex-direction: column;
      /* border-top: 1px solid var(--grey); */
    }

    .main-menu__nav a {
      text-align: left;
      display: block;
      color: ${theme.colors.lightBlack};
      line-height: 2;
      padding: 0.2rem;
      font-size: 14px;
      letter-spacing: 0.1rem;
    }

    .main-menu__nav a:hover,
    .main-menu__nav a:focus {
      color: ${theme.colors.black};
    }

    .social {
      color: ${theme.colors.gray};
      margin: 0 0 0 5px;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
    }

    .social li {
      margin-right: 10px;
    }

    @media screen and (max-width: 1280px) {
      .main-menu {
        align-items: center;
        position: fixed;
        z-index: -1;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        opacity: 0;
        text-align: center;
      }

      .main-menu__top {
        padding-top: 6rem;
      }

      .main-menu,
      .main-menu__nav,
      .social,
      .user-status {
        text-align: center;
        align-items: center;
        justify-content: center;
      }

      .main-menu.mobile-open {
        opacity: 1;
        z-index: 10;
        background-color: #999;
      }

      .main-menu__top>span {
        color: #fff
      }
    }

    /****** Main Menu Button (Mobile) ******/
    .main-menu-button {
      display: none;
    }

    @media screen and (max-width: 1280px) {
      .main-menu-button {
        display: block;
        cursor: pointer;
        position: fixed;
        top: 20px;
        right: 20px;
        width: 3rem;
        z-index: 11;
      }

      .bar-1, .bar-2, .bar-3 {
        width: 35px;
        height: 5px;
        margin: 6px auto;
        transition: 0.4s;
        background-color: ${theme.colors.black};
        z-index: 4;
      }

      .transform .bar-1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
      }

      .transform .bar-2 {
        opacity: 0;
      }

      .transform .bar-3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
      }
    }

    a[href="cmslogin.html"] {
      display: none;
    }

    .user-status {
      margin-top: 6rem;
      padding: 0.2rem;
      width: 100%;
      left: 0;
    }

    .user-greeting {
      margin: 0 0 20px 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .user-status span {
      cursor: pointer;
    }
  `}
`;

export default function Navbar() {
  const { user, logout } = useAuthContext();

  const toggleMenu = React.useCallback(() => {
    document.querySelector('.main-menu').classList.toggle('mobile-open');
    document.querySelector('.main-menu-button').classList.toggle('transform');
  }, []);

  const handleNavClick = React.useCallback(() => {
    document.querySelector('.main-menu').classList.toggle('mobile-open');
    document.querySelector('.main-menu-button').classList.toggle('transform');
  }, []);

  return (
    <StyledNavbar>
      <div className="main-menu-button" onClick={toggleMenu}>
        <div className="bar-1" />
        <div className="bar-2" />
        <div className="bar-3" />
      </div>
      <div className="main-menu">
        <div className="main-menu__top">
          <Link to="/" onClick={handleNavClick}>
            <span>Mark</span>
          </Link>
          <span>Web Developer</span>
        </div>
        <nav className="main-menu__nav" onClick={handleNavClick}>
          <Link to="/">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          {!user && <Link to="/login">Login</Link>}
        </nav>
        <ul className="social">
          <li>
            <a href="https://www.linkedin.com/in/mark-bussard/" target="_blank" rel="noreferrer">
              <img src={LinkedinIcon} height="18" width="18" alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/markbussard" target="_blank" rel="noreferrer">
              <img src={GithubIcon} height="22" width="22" alt="github" />
            </a>
          </li>
        </ul>
        {user && (
          <div className="user-status">
            <p className="user-greeting">
              Logged in as:
              {' '}
              <br />
              {user.email}
            </p>
            <span style={{ fontWeight: 'bold' }} onClick={logout}>Sign out</span>
          </div>
        )}
      </div>
    </StyledNavbar>
  );
}
