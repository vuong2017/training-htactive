import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { withRouter } from "react-router";

import { subjectsActions } from "../../../action/admin/subject.action";

class UpdateSubjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: this.props.itemsUpdate._id,
        title: this.props.itemsUpdate.title,
        tagline: this.props.itemsUpdate.tagline,
        name:this.props.itemsUpdate.name,
        logo:""
      },
      errors: {}
    };
    this.updateSubjects = this.updateSubjects.bind(this);
    this.handleChangeFiles = this.handleChangeFiles.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  updateSubjects() {
    const { data: { id, name, title, tagline, logo} } = this.state;
    const data = {
      id,
      name,
      title,
      tagline,
    }
    if(logo) data.logo = logo;
    const errors = this.checkEmpty(data);
    if (Object.keys(errors).length === 0) {
      return this.props.updateItemSubjects(data).then(() => {
          const { status, isRequest, messages } = this.props
          if (!isRequest && status) {
              this.props.addNotification(status, messages)
              this.props.closeModalUpdate()
          } else {
              this.props.addNotification(status, messages)
          }
      }) // update
    }
    this.setState({ errors }, () => console.log(errors))
  }

  handleChangeFiles(e) {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.files[0]
      }
    })
  }

  handleChangeInput(e) {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    })
  }

  checkEmpty(data) {
    const errors = {};
    if (!data.title) errors.title = "Không được để trống tiêu đề!";
    if (!data.tagline) errors.tagline = "Không được để trống tag line!";
    if (!data.name) errors.name = "Không được để trống tên môn!";
    return errors;
  }

  render() {
    const { data, errors } = this.state;
    return (
      <React.Fragment>
        <Modal
          show={this.props.isUpdate}
          onHide={this.props.closeModalUpdate}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Phần học</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-lg-12">
              <div className="form-group">
                <div className="col-sm-6">
                  <label className="col-sm-12 control-label">Tên Phần</label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tên môn"
                      name="name"
                      value={data.name}
                      onChange={this.handleChangeInput}
                    />
                    {errors.name && <span style={{color :'red'}}>{errors.name}</span>}
                  </div>
                </div>
                <div className="col-sm-6">
                  <label className="col-sm-12 control-label">Tiêu đề</label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tiêu đề"
                      name="title"
                      value={data.title}
                      onChange={this.handleChangeInput}
                    />
                    {errors.title && <span style={{color :'red'}}>{errors.title}</span>}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-6" style={styles.divCol6}>
                  <label className="col-sm-12 control-label">Tag Line</label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tag Line"
                      name="tagline"
                      value={data.tagline}
                      onChange={this.handleChangeInput}
                    />
                    {errors.tagline && <span style={{color :'red'}}>{errors.tagline}</span>}
                  </div>
                </div>
                <div className="col-sm-6" style={styles.divCol6}>
                  <label className="col-sm-8 control-label">Cập nhật ảnh mới</label>
                  <label className="col-sm-4 control-label">Hình ảnh cũ</label>
                  <div className="col-sm-8">
                     <input
                        type="file"
                        name="logo"
                        onChange={this.handleChangeFiles}
                      />
                  </div>
                  <div className="col-sm-4">
                    <a href="#" className="thumbnail">
                      <img src={`/uploads/${this.props.logo}`} alt="..." />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleClose}>Đóng</Button>
            <Button bsStyle="warning" onClick={this.props.handleClose}>
              Nhập lại
            </Button>
            <Button bsStyle="primary" onClick={this.updateSubjects}>
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ SubjectsReducer }) => {
  return {
    isRequest: SubjectsReducer.isRequest,
    status: SubjectsReducer.status,
    messages: SubjectsReducer.messages
  };
};

const mapDispatchToProps = dispatch => ({
  updateItemSubjects: data => dispatch(subjectsActions.updateItemSubjects(data)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UpdateSubjects)
);

const styles = ({
  divCol6: {
    marginTop: 20
  }
})