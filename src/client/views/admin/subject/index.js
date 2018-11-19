import React, { Component } from "react";
import { connect } from "react-redux";
import NotificationSystem from "react-notification-system";

import { ShowItemsPagination, ShowTotalPage } from "../../../common/pagination"
import { subjectsActions } from "../../../action/admin/subject.action";

import PaginationTable, {
  Pagination,
  ShowPerPage
} from "../../../components/admin/Pagination";
import TableSubjects from "./tableSubjects";
import ModalSubjects from "./modalSubjects";

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false
    };
    this.addNotification = this.addNotification.bind(this);
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
    this.props.fetchDataSubjects();
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

  countItems(items,currentPage,perPage,sumItems){
    var no = (currentPage + 1) * perPage - perPage;
    var result = []
    var data = [...items]
    data.map(()=> {
        no += 1
        result.push(no)
    })
    return `${result[0] || 0} - ${result[data.length-1] || 0} of ${sumItems}`;
  }

  render() {
    const { isModal } = this.state;
    const { 
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
                    <TableSubjects 
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
          </div>
        </div>
        {isModal && (
          <ModalSubjects
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

const mapStateToProps = ({ SubjectsReducer }) => {
  return {
    isRequest: SubjectsReducer.isRequest,
    SubjectsItems: SubjectsReducer.data,
    listData: ShowItemsPagination(SubjectsReducer.data || [],SubjectsReducer.currentPage,SubjectsReducer.perPage),
    messages: SubjectsReducer.messages,
    status: SubjectsReducer.status,
    sumItems: SubjectsReducer.data ? SubjectsReducer.data.length : 0,
    totalPage: ShowTotalPage(SubjectsReducer.data || [],SubjectsReducer.perPage),
    currentPage: SubjectsReducer.currentPage,
    perPage: SubjectsReducer.perPage,
    dataSort: SubjectsReducer.sortBy,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDataSubjects: () => dispatch(subjectsActions.fetchDataSubjects()),
  setCurrentPage: page => dispatch(subjectsActions.setCurrentPageSubjects(page)),
  setPerPage: perPage => dispatch(subjectsActions.setPerPageSubjects(perPage)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Subjects);

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
