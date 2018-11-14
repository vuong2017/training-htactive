import React, { Component } from 'react'
import UpdateSection from './updateSections'
const fakeData = [
  {
    id: 1,
    nameSections: 'nameSections'
  },
  {
    id: 2,
    nameSections: 'nameSections'
  },
  {
    id: 3,
    nameSections: 'nameSections'
  },
  {
    id: 4,
    nameSections: 'nameSections'
  },
  {
    id: 5,
    nameSections: 'nameSections'
  },
  {
    id: 6,
    nameSections: 'nameSections'
  }
]
export default class TableSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdate: false
    }
  }
  /**Update */
  closeModalUpdate() { this.setState({ isUpdate: false }) }
  showModalUpdate() { this.setState({ isUpdate: true }) }

  render() {
    const { isUpdate } = this.state;
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
              fakeData.map((item, index) =>
                <tr key={index}>
                  <td style={styles.tdID}>{item.id}</td>
                  <td>{item.nameSections}</td>
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