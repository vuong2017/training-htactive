/*eslint-disable */
import React from 'react'

class Footer extends React.Component{
  render() {
    return(
      <React.Fragment>
        <div className="footer-wrapper  .footer-wrapper-dark footer-wrapper-dark">
            <footer className="page-footer">
                <div className="copy-img">
                    <img src="https://www.tutorialspoint.com/images/tp-diamond-logow.png" data-no-retina="true" alt="tutorials point" />
                </div>
                <div className="cola">
                    <p className="main">Copyright © <a href="https://www.tutorialspoint.com">Tutorials Point</a>. 2018 • All rights reserved.
                        <span><a href="/about/tutorials_writing.htm">Write for us</a> | <a href="/about/faq.htm">FAQ's</a> | <a href="/about/about_helping.htm">Helping</a> | <a href="/about/contact_us.htm">Contact</a></span></p>
                </div>
                <div className="colb">
                    <form action="javascript:void(0)" method="post" id="commentform" className="comment-form">
                        <input type="text" placeholder="Enter Email for Newsletter" name="Enter Email for Newsletter"   />
                        <input name="submit" type="submit" id="submit" className="submit" value="Submit" />
                    </form>
                </div>
            </footer>
            <div id="popupDiv" className="overlay">
                <div className="popup">
                    <a className="imageclose" href="javascript:void(0)" id="popupDivClose">
                        <i className="fa fa-close"></i>
                    </a>
                    <div id="popupDivContent">
                    </div>
                </div>
            </div>
            {/* <script src="js/progressively.js"></script> */}
        </div>
      </React.Fragment>
    )
  }
}

export default Footer
