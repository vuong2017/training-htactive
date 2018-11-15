import React, { Component } from "react";

class Header extends Component {

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("right_obs").style.display = "block";
  }

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <h1 className="logo">
              <a href="index.htm" title="tutorialspoint">
                <img alt="tutorialspoint" src="./images/logo.png" />
              </a>
            </h1>
            <ul className="tp-inline-block pull-right" id="tp-head-icons">
              <li>
                <div
                  className="tp-second-nav tp-display-none tp-pointer"
                  onClick={this.openNav}
                >
                  <i className="fa fa-th-large fa-lg" />
                </div>
              </li>
            </ul>
            <button
              className="btn btn-responsive-nav btn-inverse"
              data-toggle="collapse"
              data-target=".nav-main-collapse"
            >
              <i className="icon icon-bars" />
            </button>
            <nav>
              <ul className="nav nav-pills nav-top">
                <li>
                  <a href="/about/about_careers.htm">
                    <i className="icon icon-suitcase" /> Jobs
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/programming_examples/">
                    <i className="fa fa-cubes" /> &nbsp;Examples
                  </a>
                </li>
                <li>
                  <a href="https://www.tutorialspoint.com/whiteboard.htm">
                    <img
                      src="images/icons/image-editor.png"
                      alt="Whiteboard"
                      title="Whiteboard"
                    />
                    &nbsp;Whiteboard
                  </a>
                </li>
                <li>
                  <a href="https://www.tutorialspoint.com/netmeeting.php">
                    <i className="fa-camera" /> &nbsp;Net Meeting
                  </a>
                </li>
                <li>
                  <a href="/online_dev_tools.htm">
                    <i className="dev-tools-menu" /> Tools
                  </a>
                </li>
                <li>
                  <a href="/articles/index.php">
                    <i className="icon icon-file-text-o" /> &nbsp;Articles
                  </a>
                </li>
                <li className="top-icons">
                  <ul className="social-icons">
                    <li className="facebook">
                      <a
                        href="https://www.facebook.com/tutorialspointindia"
                        target="_blank"
                        rel="nofollow"
                        data-placement="bottom"
                        title="tutorialspoint @ Facebook"
                      >
                        Facebook
                      </a>
                    </li>
                    <li className="googleplus">
                      <a
                        href="https://plus.google.com/u/0/116678774017490391259/posts"
                        target="_blank"
                        rel="nofollow"
                        data-placement="bottom"
                        title="tutorialspoint @ Google+"
                      >
                        Google+
                      </a>
                    </li>
                    <li className="twitter">
                      <a
                        href="https://www.twitter.com/tutorialspoint"
                        target="_blank"
                        rel="nofollow"
                        data-placement="bottom"
                        title="tutorialspoint @ Twitter"
                      >
                        Twitter
                      </a>
                    </li>
                    <li className="linkedin">
                      <a
                        href="https://www.linkedin.com/company/tutorialspoint"
                        target="_blank"
                        rel="nofollow"
                        data-placement="bottom"
                        title="tutorialspoint @ Linkedin"
                      >
                        Linkedin
                      </a>
                    </li>
                    <li className="youtube">
                      <a
                        href="https://www.youtube.com/channel/UCVLbzhxVTiTLiVKeGV7WEBg"
                        target="_blank"
                        rel="nofollow"
                        data-placement="bottom"
                        title="tutorialspoint YouTube"
                      >
                        YouTube
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="sidenav" id="mySidenav">
            <div className="navbar nav-main">
              <div className="container">
                <nav className="nav-main mega-menu">
                  <ul className="nav nav-pills nav-main" id="mainMenu">
                    <li className="dropdown no-sub-menu">
                      <a className="dropdown" href="index.htm">
                        <i className="icon icon-home" /> Home
                      </a>
                    </li>
                    <li className="dropdown no-sub-menu">
                      <a className="dropdown" href="/questions/index.php">
                        <i className="fa fa-send" /> Q/A
                      </a>
                    </li>
                    <li className="dropdown">
                      <a className="dropdown" href="tutorialslibrary.htm">
                        <span className="tut-lib"> Library </span>
                      </a>
                    </li>
                    <li className="dropdown no-sub-menu">
                      <a className="dropdown" href="videotutorials/index.htm">
                        <i className="fa-toggle-right" /> Videos
                      </a>
                    </li>
                    <li className="dropdown no-sub-menu">
                      <a className="dropdown" href="tutor_connect/index.php">
                        <i className="fa-user"> </i> Tutors
                      </a>
                    </li>
                    <li className="dropdown no-sub-menu">
                      <a className="dropdown" href="codingground.htm">
                        <i className="fa-code" /> Coding Ground
                      </a>
                    </li>
                    <li className="dropdown no-sub-menu">
                      <a
                        className="dropdown"
                        href="https://store.tutorialspoint.com/"
                      >
                        <i className="fa-usd" /> Store
                      </a>
                    </li>
                    <li className="dropdown no-sub-menu">
                      <div className="searchform-popup">
                        <input
                          className="header-search-box"
                          type="text"
                          id="search-string"
                          name="q"
                          placeholder="Search your favorite tutorials..."
                        />
                        <div className="magnifying-glass">
                          <i className="icon-search" /> Search
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
