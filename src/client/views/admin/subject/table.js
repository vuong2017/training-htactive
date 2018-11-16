import React, { Component } from 'react';
import { connect } from 'react-redux';
import UpdateSubject from './updateSubject';
import { subjectActions } from '../../../action/admin/subject.action';

class TableSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdate: false
    }
  }
  /**Update */
  closeModalUpdate() { this.setState({ isUpdate: false }) }
  showModalUpdate() { this.setState({ isUpdate: true }) }

  componentDidMount() {
    this.props.fetchDataSubject();
  }
  render() {
    const { isUpdate } = this.state;
    const { listData } = this.props;
    return (
      <div>
        <table className="table table-striped table-bordered" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th style={styles.tdID}>STT</th>
              <th style={styles.textAlign}>Logo</th>
              <th>Tên môn</th>
              <th>Tiêu đề</th>
              <th>Mô tả</th>
              <th style={styles.textAlign}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {
              listData && listData.map((item, index) =>
                <tr key={index}>
                  <td style={styles.tdID}>{index + 1}</td>
                  <td style={styles.textAlign}><img src={item.logo} style={styles.imgLogo} /></td>
                  <td>{item.name}</td>
                  <td>{item.title}</td>
                  <td>{item.tagline}</td>
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
                      onClick={() => this.showModalUpdate()}
                      style={styles.btnActions}
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
        <UpdateSubject
          isUpdate={isUpdate}
          closeModalUpdate={() => this.closeModalUpdate()}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isRequest: state.SubjectReducer.isRequest,
    listData: state.SubjectReducer.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDataSubject: () => dispatch(subjectActions.fetchDataSubject()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TableSubject);

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
  imgLogo: {
    width: 50,
    height: 50
  }
})