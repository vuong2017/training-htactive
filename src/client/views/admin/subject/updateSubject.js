import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

class UpdateSubject extends Component {
  render() {
    return (
      <Modal
        show={this.props.isUpdate}
        onHide={this.props.closeModalUpdate}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeModalUpdate}>Đóng</Button>
          <Button bsStyle="warning" onClick={this.props.closeModalUpdate}>Nhập lại</Button>
          <Button bsStyle="primary" onClick={this.props.closeModalUpdate}>Lưu</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default connect(null)(UpdateSubject);