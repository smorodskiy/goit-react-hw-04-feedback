import React from 'react';

import { SectionStyled } from './Section.styled';

// Check types of props
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <h2>{title}</h2>
      {children}
    </SectionStyled>
  );
};

export { Section };

// Types
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
