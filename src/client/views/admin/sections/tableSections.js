import React, { Component } from 'react';
import { connect } from 'react-redux';
import UpdateSection from './updateSections';
import { sectionsActions } from '../../../action/admin/section.action';

class TableSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdate: false
    }
  }
  fetchData(sections_id = "5bea7c6ef7560822b07f2d37"){
    this.props.fetchDataFindID(sections_id);
  }
  componentDidMount() {
    this.props.fetchDataSection();
    this.fetchData();
  }
  /**Update */
  closeModalUpdate() { this.setState({ isUpdate: false }) }
  showModalUpdate() { this.setState({ isUpdate: true }) }

  render() {
    const { isUpdate } = this.state;
    const { listData, dataFind } = this.props;
    console.log('dataFind', dataFind);
    return (
      <div>
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
              listData && listData.map((item, index) =>
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
                      className="btn btn-default btn-sm"
                      style={styles.btnActions}
                    >
                      <span className="glyphicon glyphicon-eye-open"></span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      style={styles.btnActions}
                      onClick={() => this.showModalUpdate()}
                    >
                      <span className="glyphicon glyphicon-edit"></span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      style={styles.btnActions}
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
          closeModalUpdate={() => this.closeModalUpdate()}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isRequest: state.SectionsReducer.isRequest,
    errMessage: state.SectionsReducer.errMessage,
    listData: state.SectionsReducer.data,
    dataFind: state.SectionsReducer.dataFind
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDataSection: () => dispatch(sectionsActions.fetchDataSection()),
  fetchDataFindID: (sections_id) => dispatch(sectionsActions.fetchDataFindID(sections_id))
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