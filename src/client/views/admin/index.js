import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="page-content sidebar-page right-sidebar-page clearfix">
          <div className="page-content-wrapper">
            <div className="page-content-inner">
              <div id="page-header" className="clearfix">
                <div className="page-header">
                  <h2>Tổng quan</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="col-lg-6 col-sm-6 p0">
                        Dashboard
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
