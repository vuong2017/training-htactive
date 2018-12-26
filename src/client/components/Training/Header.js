/*eslint-disable */
import React from "react"

class Header extends React.Component{
  openLeftNav() {
    document.getElementById("sidebar-left").style.display="block";document.getElementById("Leftside-nav").style.width="260px";document.getElementById("left_obs").style.display="block";
  }

  openNav() {
    document.getElementById("Menunav").style.width="250px";document.getElementById("right_obs").style.display="block";
  }

  close_obs_sidenav() {
    document.getElementById("Menunav").style.width="0";document.getElementById("right_obs").style.display="none";
  }

  close_obs_leftnav() {
    document.getElementById("Leftside-nav").style.width="0";document.getElementById("left_obs").style.display="none";document.getElementById("sidebar-left").style.display="none";
  }
  render() {
    return (
      <React.Fragment>
        <header>
            <div id="right_obs" className="display-none" onClick={this.close_obs_sidenav}></div>
            <div id="left_obs" className="display-none" onClick={this.close_obs_leftnav}></div>
            <div className="container">
                <a href="https://www.tutorialspoint.com/index.htm" className="logo">
                    <img src="https://www.tutorialspoint.com/images/tp-logo.png" className="retina hlogo" alt="Tutorialspoint" />
                </a>
                <ul className="tp-inline-block pull-right" id="tp-head-icons">
                    <li>
                        <div className="tp-third-nav tp-display-none tp-pointer liDark" data-mode="D"><span className="lg" style={{ color: 'rgb(0, 0, 0)' }}><i className="fa fa-toggle-on lg"></i></span></div>
                    </li>
                    <li>
                        <div className="tp-first-nav tp-display-none tp-pointer" onClick={this.openLeftNav}> <i className="fa fa-th-large lg" style={{ color: 'rgb(0, 0, 0)' }}></i></div>
                    </li>
                    <li>
                        <div className="tp-second-nav tp-display-none tp-pointer" onClick={this.openNav}><i className="fa fa-bars lg" style={{ color: 'rgb(0, 0, 0)' }}></i></div>
                    </li>
                </ul>
                <div className="sidenav" id="Menunav" style={{ background: 'rgb(255, 255, 255)' }}>
                    <nav>
                        <ul className="nav top-menu">
                            <li><a href="/about/about_careers.htm" style={{ color: 'rgb(101, 103, 112)' }}><i className="fa fa-briefcase"></i> Jobs</a></li>
                            <li><a target="_blank" href="/programming_examples/" style={{ color: 'rgb(101, 103, 112)' }}><i className="fa fa-file-code-o"></i> &nbsp;Examples</a></li>
                            <li><a href="https://www.tutorialspoint.com/whiteboard.htm" style={{ color: 'rgb(101, 103, 112)' }}><i className="fa fa-square"></i> &nbsp;Whiteboard</a> </li>
                            <li><a href="https://www.tutorialspoint.com/netmeeting.php" style={{ color: 'rgb(101, 103, 112)' }}><i className="fa fa-microphone"></i> &nbsp;Net Meeting</a> </li>
                            <li>
                                <a href="/online_dev_tools.htm" style={{ color: 'rgb(101, 103, 112)' }}> <i className="fa fa-cogs"></i> Tools </a>
                            </li>
                            <li><a href="/articles/index.php" style={{ color: 'rgb(101, 103, 112)' }}><i className="fa fa-file-text"></i> &nbsp;Articles</a> </li>
                            <li className="top-icons">
                                <ul className="social-icons">
                                    <li className="facebook"><a href="https://www.facebook.com/tutorialspointindia" target="_blank" data-placement="bottom" title="tutorialspoint @ Facebook" style={{ color: 'rgb(101, 103, 112)' }}>Facebook</a></li>
                                    <li className="googleplus"><a href="https://plus.google.com/u/0/116678774017490391259/posts" target="_blank" data-placement="bottom" title="tutorialspoint @ Google+" style={{ color: 'rgb(101, 103, 112)' }}>Google+</a></li>
                                    <li className="twitter"><a href="https://www.twitter.com/tutorialspoint" target="_blank" data-placement="bottom" title="tutorialspoint @ Twitter" style={{ color: 'rgb(101, 103, 112)' }}>Twitter</a></li>
                                    <li className="linkedin"><a href="https://www.linkedin.com/company/tutorialspoint" target="_blank" data-placement="bottom" title="tutorialspoint @ Linkedin" style={{ color: 'rgb(101, 103, 112)' }}>Linkedin</a></li>
                                    <li className="youtube"><a href="https://www.youtube.com/channel/UCVLbzhxVTiTLiVKeGV7WEBg" target="_blank" data-placement="bottom" title="tutorialspoint YouTube" style={{ color: 'rgb(101, 103, 112)' }}>YouTube</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <nav className="nav-main mega-menu">
                        <ul className="nav nav-pills nav-main" id="mainMenu">
                            <li className="dropdown no-sub-menu"> <a className="dropdown" href="index.htm" style={{ color: 'rgb(101, 103, 112)' }}><i className="fa fa-home"></i> Home</a> </li>
                            <li className="dropdown no-sub-menu"><a className="dropdown" href="/questions/index.php" style={{ color: 'rgb(101, 103, 112)' }}><i className="fa fa-send"></i> Q/A </a> </li>
                            <li className="dropdown"><a className="dropdown" href="tutorialslibrary.htm" style={{ color: 'rgb(101, 103, 112)' }}><i className="fa fa-book"></i> Library </a></li>
                            <li className="dropdown no-sub-menu"><a className="dropdown" href="videotutorials/index.htm" style={{ color: 'rgb(101, 103, 112)' }}><i className="fa fa-toggle-right fa6"></i> Videos </a></li>
                            <li className="dropdown no-sub-menu"><a className="dropdown" href="tutor_connect/index.php" style={{ color: 'rgb(101, 103, 112)' }}><i className="fa fa-user fa6"> </i> Tutors</a></li>
                            <li className="dropdown no-sub-menu"><a className="dropdown" href="codingground.htm" style={{ color: 'rgb(101, 103, 112)' }}><i className="fa fa-code fa6"></i> Coding Ground </a> </li>
                            <li className="dropdown no-sub-menu"><a className="dropdown" href="https://store.tutorialspoint.com/" style={{ color: 'rgb(101, 103, 112)' }}><i className="fa fa-usd fa6"></i> Store </a> </li>
                            <li className="dropdown no-sub-menu vMenuP" id="liPMenu"><a href="https://www.tutorialspoint.com/videotutorials/login.php"><i className="fa fa-user header_icon"></i> <span>Profile</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Header
