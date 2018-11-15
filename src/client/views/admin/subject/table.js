import React, { Component } from 'react';
import UpdateSubject from './updateSubject';

const fakeData = [
  {
    id: 1,
    nameSubject: 'nameSubject',
    newfeed: 'newfeed'
  },
  {
    id: 2,
    nameSubject: 'nameSubject',
    newfeed: 'newfeed'
  },
  {
    id: 3,
    nameSubject: 'nameSubject',
    newfeed: 'newfeed'
  },
  {
    id: 4,
    nameSubject: 'nameSubject',
    newfeed: 'newfeed'
  },
  {
    id: 5,
    nameSubject: 'nameSubject',
    newfeed: 'newfeed'
  },
  {
    id: 6,
    nameSubject: 'nameSubject',
    newfeed: 'newfeed'
  }
]

export default class TableSubject extends Component {
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
              <th>Tên môn</th>
              <th style={styles.textAlign}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {
              fakeData.map((item, index) =>
                <tr key={index}>
                  <td style={styles.tdID}>{item.id}</td>
                  <td>{item.nameSubject}</td>
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
  }
})