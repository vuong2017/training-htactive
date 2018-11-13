/*eslint-disable */
import React from 'react';
import { ContentHeader, Options, ContentDetails } from '../../components/Client'

// db
import { detailsData, dulieubandau } from '../../db';

class ReactTraining extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    const objectss = {a:1, b:2};
    setTimeout(() => {
      this.props.match.params.id ? this.setState({ data: detailsData }) : this.setState({ data: dulieubandau })
    }, 3000);
  }

  render() {
    console.log( 'phu', this.props.match.params.client );
    return(
      <div className="content-wrapper" style={{ height: 'auto!important' }}>
          <div>
              {/* <ContentHeader
                logo="https://www.tutorialspoint.com/assets/videos/courses/251/images/course_251_image.png"
                title="ReactJS Online Training"
                tagline="Simply Easy Learning"
              /> */}
              <div className="content-body">
                  <Options
                    prevTitle="Previous Page"
                    nextTitle="Next Page" 
                  />
                  <ContentDetails data={this.state.data} />
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
}

export default ReactTraining;
