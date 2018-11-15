import React from 'react';
import PropTypes from 'prop-types';

function Options({ prevTitle, nextTitle }) {
  return (
    <div className="options">
      <a
        href="https://www.tutorialspoint.com/reactjs_online_training/index.asp"
        className="button round accent-color date prevpage"
      >
        <i className="fa fa-arrow-circle-o-left big-font" />
        <span>{prevTitle}</span>
      </a>
      <a
        href="https://www.tutorialspoint.com/reactjs_online_training/reactjs_introduction.asp"
        className="button round >
                                                                  accent-color date nextpage"
      >
        <span>{nextTitle}</span>
        <i className="fa fa-arrow-circle-o-right big-font" />
        <span>&nbsp;</span>
      </a>
    </div>
  );
}

Options.propTypes = {
  prevTitle: PropTypes.string.isRequired,
  nextTitle: PropTypes.string.isRequired,
};

export default Options;
