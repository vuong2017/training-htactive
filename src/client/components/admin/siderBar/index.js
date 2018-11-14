import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div id="header" className="page-navbar">
        <a className="navbar-brand hidden-xs hidden-sm">
          <img src="img/logo.png" className="logo hidden-xs" alt="HT Active" />
          <img src="img/logosm.png" className="logo-sm hidden-lg hidden-md" alt="HT Active" />
        </a>
        <div id="navbar-no-collapse" className="navbar-no-collapse">
          <ul className="nav navbar-nav">
            <li className="toggle-sidebar">
              <a>
                <i className="fa fa-reorder"></i>
                <span className="sr-only"></span>
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a>
                <i className="fa fa-power-off"></i>
                <span className="sr-only">Đăng xuất</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default connect(null)(withRouter(Sidebar));