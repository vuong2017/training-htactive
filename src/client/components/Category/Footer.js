import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="inner">
        <div className="container">
          <div className="row">
            <div className="footer-ribon">
              <span>Extras</span>
            </div>
            <div className="col-md-2">
              <h4>Mobile First</h4>
              <ul className="list icons list-unstyled">
                <li>
                  <a
                    className="iphone"
                    href="https://itunes.apple.com/us/app/tutorials-point/id914891263?ls=1&amp;mt=8"
                    target="_blank"
                    rel="nofollow"
                  >
                    <img
                      alt="tutorialspoint iPhone App"
                      src="./images/apple_store.jpg"
                      className="mobile-apps"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="android"
                    href="https://play.google.com/store/apps/details?id=com.tutorialspoint.onlineviewer"
                    target="_blank"
                    rel="nofollow"
                  >
                    <img
                      alt="tutorialspoint Android app"
                      src="./images/google_play.jpg"
                      className="mobile-apps"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="microsoft"
                    href="http://www.windowsphone.com/s?appid=91249671-7184-4ad6-8a5f-d11847946b09"
                    target="_blank"
                    rel="nofollow"
                  >
                    <img
                      alt="tutorialspoint Windows app"
                      src="./images/windows_store.jpg"
                      className="mobile-apps"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h4>About us</h4>
              <ul className="list icons list-unstyled">
                <li>
                  <i className="icon icon-caret-right" />{" "}
                  <a href="/about/index.htm">Company</a>
                </li>
                <li>
                  <i className="icon icon-caret-right" />{" "}
                  <a href="/about/about_team.htm">Our Team</a>
                </li>
                <li>
                  <i className="icon icon-caret-right" />{" "}
                  <a href="/about/about_careers.htm">Careers</a>
                </li>
                <li>
                  <i className="icon icon-caret-right" />{" "}
                  <a href="/about/about_privacy.htm">Privacy Policy</a>
                </li>
                <li>
                  <i className="icon icon-caret-right" />{" "}
                  <a href="/about/about_terms_of_use.htm">Terms of use</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h4>Extra Links</h4>
              <ul className="list icons list-unstyled">
                <li>
                  <i className="icon icon-caret-right" />{" "}
                  <a href="articles">Articles</a>
                </li>
                <li>
                  <i className="icon icon-caret-right" />{" "}
                  <a href="online_dev_tools.htm">Dev Tools</a>
                </li>
                <li>
                  <i className="icon icon-caret-right" />{" "}
                  <a href="free_web_graphics.htm">Free Graphics</a>
                </li>
                <li>
                  <i className="icon icon-caret-right" />{" "}
                  <a href="online_file_conversion.htm">File Conversion</a>
                </li>
                <li>
                  <i className="icon icon-caret-right" />{" "}
                  <a href="shared-tutorials.php">Shared Tutorials</a>
                </li>
                <li>
                  <i className="icon icon-caret-right" />{" "}
                  <a href="https://www.tutorialspoint.com/netmeeting.php">
                    NetMeeting
                  </a>
                </li>
                <li>
                  <i className="icon icon-caret-right" />{" "}
                  <a href="https://www.tutorialspoint.com/free_online_whiteboard.htm">
                    Whiteboard
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="contact-details">
                <h4>Contact Us</h4>
                <ul className="contact">
                  <li>
                    <p>
                      <i className="icon icon-map-marker" />{" "}
                      <strong>Address:</strong> 3rd Floor, Jyoti Celestia,
                      Madhapur, Hyderabad, Telangana 500081
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="icon icon-envelope" />{" "}
                      <strong>Email:</strong>{" "}
                      <a href="about/contact_us.htm">Click Here</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="icon icon-dribbble" />{" "}
                      <strong>Website:</strong>{" "}
                      <a href="http://www.tutorialspoint.com">
                        www.tutorialspoint.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="social-icons">
                <ul className="social-icons">
                  <li className="facebook">
                    <a
                      href="https://www.facebook.com/tutorialspointindia"
                      target="_blank"
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
                      data-placement="bottom"
                      title="tutorialspoint @ Google+"
                    >
                      Google+
                    </a>
                  </li>
                  <li className="twitter">
                    <a
                      href="http://www.twitter.com/tutorialspoint"
                      target="_blank"
                      data-placement="bottom"
                      title="tutorialspoint @ Twitter"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="linkedin">
                    <a
                      href="http://www.linkedin.com/company/tutorialspoint"
                      target="_blank"
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
                      data-placement="bottom"
                      title="tutorialspoint YouTube"
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-1">
                <a href="index.htm" className="logo">
                  {" "}
                  <img
                    alt="Tutorials Point"
                    className="img-responsive"
                    src="images/logo-footer.png"
                  />{" "}
                </a>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <nav id="sub-menu">
                  <ul>
                    <li>
                      <a href="/about/faq.htm">FAQ's</a>
                    </li>
                    <li>
                      <a href="/about/about_privacy.htm#cookies">
                        Cookies Policy
                      </a>
                    </li>
                    <li>
                      <a href="/about/contact_us.htm">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12">
                <p>© Copyright 2018. All Rights Reserved.</p>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="news-group">
                  <input
                    type="text"
                    className="form-control-foot search"
                    name="textemail"
                    id="textemail"
                    autoComplete="off"
                    placeholder="Enter email for newsletter"
                  />
                  <span className="input-group-btn">
                    {" "}
                    <button
                      className="btn btn-default btn-footer"
                      id="btnemail"
                      type="submit"
                    >
                      go
                    </button>{" "}
                  </span>
                  <div id="newsresponse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
