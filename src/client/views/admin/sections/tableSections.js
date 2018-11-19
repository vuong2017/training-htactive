import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import UpdateSection from './updateSections';
import { sectionsActions } from '../../../action/admin/section.action';

class TableSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdate: false,
      isDelete: false,
      id_subject: 0,
      subject_name: '',
    }
  }
  componentWillReceiveProps(nextProps) {
    const { dataSubject } = nextProps;
    this.setState({
      _idD: dataSubject && dataSubject.length > 0 ? dataSubject[0]._id : null,
      isRequest: nextProps.isRequest
    })
  }
  async fetchDataFindIdSubject(subjects_id = this.state._id || this.state._idD) {
    await this.props.fetchDataFindIdSubject(subjects_id);
  }
  async componentDidMount() {
    await this.props.fetchDataSection();
    await this.props.fetchDataSubject();
    await this.fetchDataFindIdSubject();
  }
  /**Update */
  closeModalUpdate() { this.setState({ isUpdate: false }) }
  showModalUpdate(item) { this.setState({ isUpdate: true, itemUpdate: item }) }

  onChangeOption(e) {
    this.setState({
      _id: e.target.value,
      subject_name: e.target.options[e.target.selectedIndex].text
    }, () => this.fetchDataFindIdSubject())
  }

  render() {
    const { isUpdate, itemUpdate } = this.state;
    const { sectionData, dataSubject } = this.props;
    return (
      <div>
        <div className='col-sm-2'>
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
        <table className="table table-striped table-bordered" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th style={styles.tdID}>STT</th>
              <th>Phân Loại</th>
              <th style={styles.newfeed}>Bài viết</th>
              <th style={styles.textAlign}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {
              sectionData && sectionData.map((item, index) =>
                <tr key={index}>
                  <td style={styles.tdID}>{index + 1}</td>
                  <td>{item.name}</td>
                  <td style={styles.newfeed}>
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      style={styles.btnActions}
                    >
                      <span className="glyphicon glyphicon-edit"></span>
                    </button>
                  </td>
                  <td style={styles.textAlign}>
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      style={styles.btnActions}
                      onClick={() => this.showModalUpdate(item)}
                    >
                      <span className="glyphicon glyphicon-edit"></span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      style={styles.btnActions}
                      onClick={() => this.deleteSection(item)}
                    >
                      <span className="glyphicon glyphicon-trash"></span>
                    </button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        <UpdateSection
          isUpdate={isUpdate}
          dataSubject={dataSubject}
          itemUpdate={itemUpdate}
          closeModalUpdate={() => this.closeModalUpdate()}
          reloadTable={() => this.fetchDataFindIdSubject()}
        />
        <Modal
          show={this.state.isDelete}
          onHide={() => this.setState({ isDelete: false })}
          aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title>Xóa môn học</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h6>Bạn có muốn xóa môn "{this.state.name}" ra khỏi danh sách ?</h6>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.setState({ isDelete: false })}>Đóng</Button>
            <Button bsStyle="primary" onClick={() => this.deleteItem()}>Đồng ý</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  async deleteItem() {
    const { _idD, _id } = this.state;
    const data = {
      subjects_id: _idD,
      section_id: _id
    }
    if (_id) {
      await this.props.deleteItemSection(data)
      if (!this.state.isRequest) {
        this.setState({
          isDelete: false
        })
      }
    }
  }

  deleteSection(item) {
    this.setState({
      isDelete: true,
      _id: item._id,
      name: item.name
    })
  }
}

const mapStateToProps = (state) => {
  return {
    isRequest: state.SectionsReducer.isRequest,
    errMessage: state.SectionsReducer.errMessage,
    sectionData: state.SectionsReducer.sectionData,
    dataSubject: state.SectionsReducer.dataAll,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDataSection: () => dispatch(sectionsActions.fetchDataSection()),
  fetchDataFindIdSubject: (subjects_id) => dispatch(sectionsActions.fetchDataFindIdSubject(subjects_id)),
  fetchDataSubject: () => dispatch(sectionsActions.fetchDataSubject()),
  deleteItemSection: (data) => dispatch(sectionsActions.deleteItemSection(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TableSections);

const styles = ({
  textAlign: {
    textAlign: 'center',
    width: '15%'
  },
  btnActions: {
    marginLeft: 5,
  },
  tdID: {
    textAlign: 'center',
    width: '5%'
  },
  newfeed: {
    textAlign: 'center',
    width: '10%'
  },
})