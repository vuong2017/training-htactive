import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { withRouter } from "react-router";

import { configEditor } from "../../../common/config";
import { postsActions } from '../../../action/admin/post.action'

class UpdatePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        _id: this.props.itemsUpdate._id,
        title: this.props.itemsUpdate.title,
        content: this.props.itemsUpdate.content,
      },
      errors:{}
    };
    if (typeof window !== "undefined") {
      this.ReactQuill = require("react-quill");
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleUpdate() {
    const { data: {_id, title, content} } = this.state;
    const data = {
      _id,
      title,
      content
    }
    const errors = this.checkEmpty(data);
    if (Object.keys(errors).length === 0) {
      return this.props.updateItemPosts(data).then(() => {
          const { status, isRequest, messages } = this.props
          if (!isRequest && status) {
              this.props.addNotification(status, messages)
              this.props.closeModalUpdate()
          } else {
              this.props.addNotification(status, messages)
          }
      }) // update
    }
    this.setState({
      errors
    });
  }

  handleChangeEditor(value) {
    this.setState({
      data: {
        ...this.state.data,
        content: value
      }
    });
  }

  handleChangeInput(e) {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  }

  checkEmpty(data) {
    const errors = {};
    if(!data.title) errors.title = "Không được để trống tiêu đề!";
    if(!this.getCotent.getEditor().getText().trim().length) errors.content = "Không được để trống nội dung!"
    return errors;
  }

  render() {
    const ReactQuill = this.ReactQuill;
    const { data, errors } = this.state;
    if (typeof window !== "undefined" && ReactQuill) {
      return (
        <Modal
          show={this.props.isUpdate}
          onHide={this.props.closeModalUpdate}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Cập nhật môn học</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-lg-12">
              <div className="form-group">
                <div className="col-sm-12">
                  <label className="col-sm-12 control-label">Tên Bài</label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={data.title}
                      placeholder="Tên Bài"
                      onChange={this.handleChangeInput}
                    />
                    {errors.title && <span style={{color :'red'}}>{errors.title}</span>}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <label className="col-sm-12 control-label">Nội Dung</label>
                  <div className="col-sm-12">
                    <ReactQuill
                      value={data.content}
                      theme="snow"
                      ref={(e) => this.getCotent = e}
                      modules={configEditor}
                      onChange={this.handleChangeEditor}
                    />
                    {errors.content && <span style={{color :'red'}}>{errors.content}</span>}
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModalUpdate}>Đóng</Button>
            <Button bsStyle="warning" onClick={this.props.closeModalUpdate}>
              Nhập lại
            </Button>
            <Button bsStyle="primary" onClick={this.handleUpdate}>
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ PostsReducer }) => {
  return {
    isRequest: PostsReducer.isRequest,
    status: PostsReducer.status,
    messages: PostsReducer.messages,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateItemPosts: data => dispatch(postsActions.updateItemPosts(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdatePosts));

