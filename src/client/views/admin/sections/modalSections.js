import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { sectionsActions } from '../../../action/admin/section.action';

class ModalSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isSubmit: false
    }
  }

  async insertSection () {
    this.setState({ isSubmit: true })
    const { name } = this.state;
    const data = { name };
    if (name) {
      await this.props.createItemSection(data);
    }
  }

  render() {
    return (
      <Modal
        show={this.props.isModal}
        onHide={this.props.handleClose}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>Thêm môn học</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-12">
            <div className="form-group">
              <div className="col-sm-12">
                <label className="col-sm-12 control-label">Tên môn</label>
                <div className="col-sm-12">
                  <input
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    className="form-control"
                    placeholder="Nhập tên môn"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Đóng</Button>
          <Button bsStyle="warning" onClick={this.props.handleClose}>Nhập lại</Button>
          <Button bsStyle="primary" onClick={() => this.insertSection()}>Lưu</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isRequest: state.SectionsReducer.isRequest,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createItemSection: (data) => dispatch(sectionsActions.createItemSection(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ModalSections);

const styles = ({
  divCol6: {
    marginTop: 20
  }
})