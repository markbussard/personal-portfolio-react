import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  padding: 1rem;

  @media screen and (max-width: 1280px) {
    padding-top: 6rem;
  }
`;

export const Section = ({ children, className }) => (
  <StyledSection className={className}>{children}</StyledSection>
);

Section.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};
