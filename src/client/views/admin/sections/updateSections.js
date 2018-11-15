import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

class UpdateSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: null
    }
  }
  handleChange(event) {
    this.setState({
      avatar_url: event.target.files[0],
      file: URL.createObjectURL(event.target.files[0])
    },()=> console.log(this.state.avatar_url, this.state.file));
  }

  render() {
    return (
      <Modal
        show={this.props.isUpdate}
        onHide={this.props.closeModalUpdate}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật môn học</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-12">
            <div className="form-group">
              <div className="col-sm-6">
                <label className="col-sm-12 control-label">Tên môn</label>
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
          <Button onClick={this.props.closeModalUpdate}>Đóng</Button>
          <Button bsStyle="warning" onClick={this.props.closeModalUpdate}>Nhập lại</Button>
          <Button bsStyle="primary" onClick={this.props.closeModalUpdate}>Lưu</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default connect(null)(UpdateSections);

const styles = ({
  divCol6: {
    marginTop: 20
  }
})