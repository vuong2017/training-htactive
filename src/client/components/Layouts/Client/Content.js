import React from 'react';
import PropTypes from 'prop-types';

function Content({ children }) {
  return <div style={{ color: 'gray' }}>{children}</div>;
}

Content.propTypes = {
  children: PropTypes.node.isRequired
};

export default Content;
