import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMainContent = styled.div`
  h2 {
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    margin: 0 0 20px;
  }

  p {
    font-size: 15px;
    color: #262626;
    line-height: 1.5;
  }
`;

export const MainContent = ({ children, className }) => (
  <StyledMainContent className={className}>
    {children}
  </StyledMainContent>
);

MainContent.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};
