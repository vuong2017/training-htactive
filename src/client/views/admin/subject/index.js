import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableSubject from './table';
import ModalSubject from './modalSubject';

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false
    }
  }
  handleClose() {
    this.setState({ isModal: false });
  }

  handleShow() {
    this.setState({ isModal: true });
  }
  render() {
    const { isModal } = this.state;
    return (
      <div className="page-content sidebar-page clearfix">
        <div className="page-content-wrapper">
          <div className="page-content-inner">
            <div className="clearfix">
              <div className="page-header">
                <h3>Danh sách môn học</h3>
              </div>
            </div>
            <div className="row" style={{ marginTop: 20 }}>
              <button
                type="button"
                className="btn btn-primary"
                style={styles.btnNewMember}
                onClick={() => this.handleShow()}
              >
                <i className="fa fa-plus-square"></i> Thêm Mới
              </button>
              <div className="col-lg-12" style={styles.divTable}>
                <div className="panel panel-default">
                  <div className="panel-body">
                    <TableSubject />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalSubject
          isModal={isModal}
          handleClose={() => this.handleClose()}
        />
      </div>
    )
  }
}
export default connect(null)(Subject);

const styles = ({
  textAlign: {
    textAlign: 'center'
  },
  divTable: {
    marginTop: 40
  },
  btnNewMember: {
    position: 'absolute',
    right: 20,
  },
})