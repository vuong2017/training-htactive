import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import { sectionsActions } from '../../../action/admin/section.action';

class UpdateSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: null,
      name: '',
      subject_name: ''
    }
  }

  onChangeOption(e) {
    this.setState({
      _id: e.target.value,
      subject_name: e.target.options[e.target.selectedIndex].text
    })
  }

  componentDidMount() {
    this.props.fetchDataSubject();
  }

  async updateItems() {
    this.setState({ isSubmit: true })
    const { name, _id } = this.state;
    const data = {
      name,
      _id
    };
    if (name) {
      await this.props.updateItemsSection(data);
      if (!this.state.isRequest) {
        this.props.closeModalUpdate();
        this.props.reloadTable();
        this.handleReset();
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { itemUpdate } = nextProps;
    this.setState({
      _id: itemUpdate && itemUpdate._id,
      name: itemUpdate && itemUpdate.name,
    })
  }

  render() {
    const { dataSubject } = this.props;
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
            <div className="form-group">
              <div className="col-sm-12">
                <label className="col-sm-12 control-label">Tên phần</label>
                <div className="col-sm-12">
                  <select
                    className="form-control"
                    value={this.state._id}
                    onChange={(e) => this.onChangeOption(e)}
                  >
                    {
                      dataSubject && dataSubject.map((e, i) =>
                        <option value={e._id} key={i}>{e.name}</option>
                      )
                    }
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeModalUpdate}>Đóng</Button>
          <Button bsStyle="warning" onClick={() => this.handleReset()}>Nhập lại</Button>
          <Button bsStyle="primary" onClick={() => this.updateItems()}>Lưu</Button>
        </Modal.Footer>
      </Modal>
    )
  }
  handleReset() {
    this.setState({
      name: '',
      _id: this.state._id
    })
  }
}

const mapStateToProps = (state) => {
  return {
    isRequest: state.SectionsReducer.isRequest,
    listdataSubject: state.SectionsReducer.dataAll,
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateItemsSection: (data) => dispatch(sectionsActions.updateItemsSection(data)),
  fetchDataSubject: () => dispatch(sectionsActions.fetchDataSubject())
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateSections);