import React, { Component } from "react";
import { connect } from "react-redux";
import NotificationSystem from "react-notification-system";

import { ShowItemsPagination, ShowTotalPage } from "../../../common/pagination"
import { postsActions } from "../../../action/admin/post.action";

import PaginationTable, {
  Pagination,
  ShowPerPage
} from "../../../components/admin/Pagination";
import TablePosts from "./tablePosts";
import ModalPosts from "./modalPosts";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false
    };
    this.addNotification = this.addNotification.bind(this);
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
    const { idSections } = this.props.match.params;
    this.props.fetchDataPosts(idSections);
  }

  handleClose() {
    this.setState({ isModal: false });
  }

  handleShow() {
    this.setState({ isModal: true });
  }

  addNotification(status, messages) {
    this._notificationSystem.addNotification({
      title: status ? "Success" : "Fail",
      message: messages,
      level: status ? "success" : "error"
    });
  }

  countItems(items, currentPage, perPage, sumItems) {
    var no = (currentPage + 1) * perPage - perPage;
    var result = []
    var data = [...items]
    data.map(() => {
      no += 1
      result.push(no)
    })
    return `${result[0] || 0} - ${result[data.length - 1] || 0} of ${sumItems}`;
  }

  render() {
    const { isModal } = this.state;
    const {
      isRequest,
      status,
      listData,
      sumItems,
      setCurrentPage,
      setPerPage,
      totalPage,
      currentPage,
      perPage,
      dataSort
    } = this.props
    return (
      <div className="page-content sidebar-page clearfix">
        <div className="page-content-wrapper">
          <div className="page-content-inner">
            <div className="clearfix">
              <div className="page-header">
                <h3>Quản Lý Bài Viết</h3>
              </div>
            </div>
            {isRequest
              ? <h1>Đang Loading...</h1>
              : <React.Fragment>
                  <div className="row" style={{ marginTop: 20 }}>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => this.handleShow()}
                      style={styles.btnNewMember}
                    >
                      <i className="fa fa-plus-square" /> Thêm Mới
                  </button>
                    <div className="col-lg-12" style={styles.divTable}>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <TablePosts
                            listData={listData}
                            currentPage={currentPage}
                            perPage={perPage}
                            addNotification={this.addNotification}
                          />
                          <div className="row">
                            <div className="col-sm-2 prePage-xs">
                              {this.countItems(listData, currentPage, perPage, sumItems)}
                            </div>
                            <div className="col-sm-10">
                              <PaginationTable>
                                <ShowPerPage
                                  setPerPage={setPerPage}
                                  perPage={perPage}
                                />
                                <Pagination
                                  handleClickPage={setCurrentPage}
                                  totalPage={totalPage}
                                  currentPage={currentPage}
                                />
                              </PaginationTable>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
            }
          </div>
        </div>
        {isModal && (
          <ModalPosts
            isModal={isModal}
            handleClose={() => this.handleClose()}
            addNotification={this.addNotification}
          />
        )}
        <NotificationSystem ref="notificationSystem" />
      </div>
    );
  }
}

const mapStateToProps = ({ PostsReducer }) => {
  return {
    isRequest: PostsReducer.isRequest,
    PostsItems: PostsReducer.data.posts,
    listData: ShowItemsPagination(PostsReducer.data.posts || [], PostsReducer.currentPage, PostsReducer.perPage),
    messages: PostsReducer.messages,
    status: PostsReducer.status,
    sumItems: PostsReducer.data.posts ? PostsReducer.data.posts.length : 0,
    totalPage: ShowTotalPage(PostsReducer.data.posts || [], PostsReducer.perPage),
    currentPage: PostsReducer.currentPage,
    perPage: PostsReducer.perPage,
    dataSort: PostsReducer.sortBy,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDataPosts: idSections => dispatch(postsActions.fetchDataPosts(idSections)),
  setCurrentPage: page => dispatch(postsActions.setCurrentPagePosts(page)),
  setPerPage: perPage => dispatch(postsActions.setPerPagePosts(perPage)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Posts);

const styles = {
  textAlign: {
    textAlign: "center"
  },
  divTable: {
    marginTop: 40
  },
  btnNewMember: {
    position: "absolute",
    right: 20
  }
};
