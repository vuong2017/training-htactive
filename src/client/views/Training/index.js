import React from 'react';
import { connect } from "react-redux";

import { Options, ContentDetails } from '../../components/Training'
import { PostsActions } from '../../action/client/posts.action';

class Training extends React.Component{

  componentDidMount() {
    const { id, client } = this.props.match.params;
    const content = {
      content: this.props.dataSubjects.sections[0] ? this.props.dataSubjects.sections[0].posts[0] : ''
    }
    id ? this.props.fetchDataPostsId(client, id) : this.props.getPostsId(true, content)
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.id !== nextProps.match.params.id) {
      const { id, client } = nextProps.match.params
      this.props.fetchDataPostsId(client, id)
    }
  }

  render() {
    const { content, isLoading } = this.props; 
    if (isLoading) {
      return <h1>Dang fetch</h1>
    }
    if (content) {
      return(
        <div className="content-wrapper" style={{ height: 'auto!important' }}>
            <div>
                <div className="content-body">
                    <Options
                      prevTitle="Previous Page"
                      nextTitle="Next Page" 
                    />
                    <ContentDetails data={content} />
                    <Options
                      prevTitle="Previous Page"
                      nextTitle="Next Page" 
                    />
                </div>
                <iframe id="download" style={{ display: 'none',visibility: 'hidden' }}></iframe>
            </div>
        </div>
      );
    }
    return <h1>Khong tim thay bai</h1>
  }
}

const mapStateToProps = ({ Posts, SubjectsReducer }) => {
  return {
    isLoading: Posts.isLoading,
    content: Posts.content,
    dataSubjects: SubjectsReducer.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsId: (isSuccess, data) => dispatch(PostsActions.getPostsId(isSuccess, data)),
    fetchDataPostsId: (idSubjects, idPosts) => dispatch(PostsActions.fetchDataPostsId(idSubjects, idPosts)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Training);

