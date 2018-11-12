/*eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

function ContentDetails({ data }) {
  console.log(data.content);
  return (
    <div dangerouslySetInnerHTML={{ __html: data.content }} />
      
  );
}

ContentDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContentDetails;
