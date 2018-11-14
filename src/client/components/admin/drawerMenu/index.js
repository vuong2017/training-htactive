import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class DrawerMemu extends Component {
  render() {
    return (
      <aside id="sidebar" className="page-sidebar hidden-md hidden-sm hidden-xs">
        <div className="sidebar-inner">
          <div className="sidebar-scrollarea">
            <div className="sidebar-panel">
              <h5 className="sidebar-panel-title">Quản trị</h5>
            </div>
            <div className="user-info clearfix">
              <img src="img/avatars/128.jpg" alt="avatar" style={{ width: 64, height: 64 }} />
              <span className="name" style={{ fontSize: 12 }}>HT Active</span>
              <div className="btn-group">
                <button type="button" className="btn btn-default btn-xs"><i className="l-basic-gear"></i>
                </button>
                <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">Cá nhân <span className="caret"></span>
                </button>
                <ul className="dropdown-menu right" role="menu">
                  <li>
                    <a>
                      <i className="fa fa-edit"></i>Cập nhật thông tin
                        </a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a>
                      <i className="fa fa-power-off"></i>Đăng xuất
                        </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-panel">
              <h5 className="sidebar-panel-title">Quản lý bài viết</h5>
            </div>
            <div className="side-nav">
              <ul className="nav">
                <li>
                  <a onClick={() => this.props.history.push('/admin')}>
                    <i className="fa fa-graduation-cap"></i>
                    <span className="txt">Tổng quan</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => this.props.history.push('/admin/subject')}>
                    <i className="fa fa-bookmark"></i>
                    <span className="txt">Danh sách môn học</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => this.props.history.push('/admin/sections')}>
                    <i className="fa fa-book"></i>
                    <span className="txt">Phân loại môn học</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}

export default connect(null)(withRouter(DrawerMemu));