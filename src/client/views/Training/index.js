import React from 'react';
import { connect } from "react-redux";

import { Options, ContentDetails } from '../../components/Training'
import { TrainingActions } from '../../action/client/training.action';

class Training extends React.Component{

  componentDidMount() {
    const { idPosts, idSubjects } = this.props.match.params;
    const content = {
      content: this.props.dataTraining.sections[0] ? this.props.dataTraining.sections[0].posts[0] : ''
    }
    idPosts ? this.props.fetchDataTNPostId(idSubjects, idPosts) : this.props.getTrainingPost(true, content)
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.idPosts !== nextProps.match.params.idPosts) {
      const { idPosts, idSubjects } = nextProps.match.params
      this.props.fetchDataTNPostId(idSubjects, idPosts)
    }
  }

  render() {
    const { content, isLoadingPost } = this.props; 
    if (isLoadingPost) {
      return <h1>Dang fetch</h1>
    }
    if (content) {
      return(
        <div className="content-wrapper" style={{ height: 'auto!important' }}>
            <div>
                <div className="content-body">
                    {/* <Options
                      prevTitle="Previous Page"
                      nextTitle="Next Page" 
                    /> */}
                    <ContentDetails data={content} />
                    {/* <Options
                      prevTitle="Previous Page"
                      nextTitle="Next Page" 
                    /> */}
                </div>
                <iframe id="download" style={{ display: 'none',visibility: 'hidden' }}></iframe>
            </div>
        </div>
      );
    }
    return <h1>Khong tim thay bai</h1>
  }
}

const mapStateToProps = ({ TrainingReducer }) => {
  return {
    isLoadingPost: TrainingReducer.isLoadingPost,
    content: TrainingReducer.content,
    dataTraining: TrainingReducer.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTrainingPost: (isSuccess, data) => dispatch(TrainingActions.getTrainingPost(isSuccess, data)),
    fetchDataTNPostId: (idSubjects, idPosts) => dispatch(TrainingActions.fetchDataTNPostId(idSubjects, idPosts)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Training);

