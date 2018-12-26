import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import UpdatePosts from "./updatePosts"
import { postsActions } from "../../../action/admin/post.action"

class TablePosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUpdate: false,
      itemsUpdate: {}
    }
  }

  /**Update */
  closeModalUpdate() {
    this.setState({ isUpdate: false })
  }
  showModalUpdate(itemsUpdate) {
    this.setState({
      isUpdate: true,
      itemsUpdate
    })
  }

  // delete
  handleDelete(_id) {
    const data = {
      idPosts: _id,
      idSections: this.props.match.params.idSections
    }
    this.props.deleteItemPosts(data).then(() => {
      const { status, isRequest, messages } = this.props
      if (!isRequest && status) {
        this.props.addNotification(status, messages)
      } else {
        this.props.addNotification(status, messages)
      }
    }) // delete
  }

  render() {
    const { isUpdate, itemsUpdate } = this.state
    const { listData, perPage, currentPage } = this.props
    var no = (currentPage + 1) * perPage - perPage
    return (
      <div>
        <table
          className="table table-striped table-bordered"
          cellSpacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Bài</th>
              <th>Ngày Thêm</th>
              <th>Ngày Cập Nhật</th>
              <th style={styles.textAlign}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listData &&
              listData.map((item, index) => {
                no += 1
                return (
                  <tr key={index}>
                    <td>{no}</td>
                    <td>{item.title}</td>
                    <td>{item.created_at}</td>
                    <td>{item.updatedAt}</td>
                    <td style={styles.textAlign}>
                      <button
                        type="button"
                        className="btn btn-default btn-sm"
                        style={styles.btnActions}
                      >
                        <span className="glyphicon glyphicon-eye-open" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-sm"
                        style={styles.btnActions}
                        onClick={() => this.showModalUpdate(item)}
                      >
                        <span className="glyphicon glyphicon-edit" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        style={styles.btnActions}
                        onClick={() => this.handleDelete(item._id)}
                      >
                        <span className="glyphicon glyphicon-trash" />
                      </button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
        {isUpdate && (
          <UpdatePosts
            isUpdate={isUpdate}
            itemsUpdate={itemsUpdate}
            addNotification={this.props.addNotification}
            closeModalUpdate={() => this.closeModalUpdate()}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ PostsReducer }) => {
  return {
    isRequest: PostsReducer.isRequest,
    status: PostsReducer.status,
    messages: PostsReducer.messages
  }
}

const mapDispatchToProps = dispatch => ({
  deleteItemPosts: _id => dispatch(postsActions.deleteItemPosts(_id))
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TablePosts)
)

const styles = {
  textAlign: {
    textAlign: "center",
    width: "15%"
  },
  btnActions: {
    marginLeft: 5
  }
}
