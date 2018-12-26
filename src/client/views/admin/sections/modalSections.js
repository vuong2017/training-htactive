import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { sectionsActions } from '../../../action/admin/section.action'

class ModalSections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      subject_name: '',
      isSubmit: false
    }
  }

  async insertSection() {
    this.setState({ isSubmit: true })
    const { listdataSubject } = this.props
    const _id_render = listdataSubject.length > 0 ? listdataSubject[0]._id : null
    const { name, _id } = this.state
    const data = {
      name,
      _id: _id || _id_render
    }
    if (name) {
      await this.props.createItemSection(data).then(() => {
        const { status, isRequest, messages } = this.props
        if (!isRequest && status) {
            this.props.addNotification(status, messages)
            this.props.handleClose()
            this.handleReset()
        } else {
            this.props.addNotification(status, messages)
        }
      }) // add
    }
  }

  onChangeOption(e) {
    this.setState({
      _id: e.target.value,
      subject_name: e.target.options[e.target.selectedIndex].text
    })
  }

  async componentDidMount() {
    await this.props.fetchDataSubject()
    await this.fetchDataFindIdSubject()
  }

  async fetchDataFindIdSubject(subjects_id = this.props.listdataSubject.length > 0 ? this.props.listdataSubject[0]._id : null) {
    await this.props.fetchDataFindIdSubject(subjects_id)
  }

  render() {
    const { listdataSubject } = this.props
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
                      listdataSubject && listdataSubject.map((e, i) =>
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
          <Button onClick={this.props.handleClose}>Đóng</Button>
          <Button bsStyle="warning" onClick={this.props.handleClose}>Nhập lại</Button>
          <Button bsStyle="primary" onClick={() => this.insertSection()}>Lưu</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  handleReset() {
    this.setState({
      name: '',
    })
  }
}

const mapStateToProps = (state) => {
  return {
    isRequest: state.SectionsReducer.isRequest,
    messages: state.SectionsReducer.messages,
    status: state.SectionsReducer.status,
    listdataSubject: state.SectionsReducer.dataAll
  }
}

const mapDispatchToProps = (dispatch) => ({
  createItemSection: (data) => dispatch(sectionsActions.createItemSection(data)),
  fetchDataSubject: () => dispatch(sectionsActions.fetchDataSubject()),
  fetchDataFindIdSubject: (subjects_id) => dispatch(sectionsActions.fetchDataFindIdSubject(subjects_id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ModalSections)

const styles = ({
  divCol6: {
    marginTop: 20
  }
})