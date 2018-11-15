import React from 'react';
import PropTypes from 'prop-types';

function ContentHeader({ logo, title, tagline }) {
  return (
    <div className="content-header background">
      <div className="courseimg">
        <div className="course_header">
          <div className="course_img">
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="course_header_title" style={{ background: '#02b6d7' }}>{title}</div>
          <h2 className="course_header_sub">{tagline}</h2>
        </div>
      </div>
    </div>
  );
}

ContentHeader.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default ContentHeader;
