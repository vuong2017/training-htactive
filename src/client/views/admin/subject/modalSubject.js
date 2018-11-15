import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

class ModalSubject extends Component {
  render() {
    return (
      <Modal
        show={this.props.isModal}
        onHide={this.props.handleClose}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Phần học</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-12">
            <div className="form-group">
              <div className="col-sm-6">
                <label className="col-sm-12 control-label">Tên Phần</label>
                <div className="col-sm-12">
                  <input type="email" className="form-control" placeholder="Tên môn" />
                </div>
              </div>
              <div className="col-sm-6">
                <label className="col-sm-12 control-label">Tiêu đề</label>
                <div className="col-sm-12">
                  <input type="email" className="form-control" placeholder="Tiêu đề" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-6" style={styles.divCol6}>
                <label className="col-sm-12 control-label">Tag Line</label>
                <div className="col-sm-12">
                  <input type="email" className="form-control" placeholder="Tag Line" />
                </div>
              </div>
              <div className="col-sm-6" style={styles.divCol6}>
                <label className="col-sm-12 control-label">Hình ảnh</label>
                <div className="col-sm-12">
                  <label className="custom-file-upload">
                    <input type="file" onChange={(event) => this.handleChange(event)} />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Đóng</Button>
          <Button bsStyle="warning" onClick={this.props.handleClose}>Nhập lại</Button>
          <Button bsStyle="primary" onClick={this.props.handleClose}>Lưu</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default connect(null)(ModalSubject);

const styles = ({
  divCol6: {
    marginTop: 20
  }
})