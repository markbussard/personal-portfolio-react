import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Navbar } from 'components/Navbar';

const StyledPageWrapper = styled.div`
  max-width: 1500px;
  min-height: 70vh;

  #page {
    padding: 3rem;
    display: flex;
    flex-direction: row;
    min-height: 80vh;
  }
`;

export const PageLayout = ({ children }) => (
  <StyledPageWrapper>
    <div id="page">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  </StyledPageWrapper>
);

PageLayout.propTypes = {
  children: PropTypes.any
};
