/*eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component{
  render() {
    const { children } = this.props;
    return(
      <React.Fragment>
        <div className="content">
            { children }
        </div>
      </React.Fragment>
    );
  }
}

Content.propTypes = {
  children: PropTypes.node.isRequired
};

export default Content;
