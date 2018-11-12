/*eslint-disable */
import React from 'react';
import { ContentHeader, Options, ContentDetails } from '../../components/Client'

// db
import { detailsData } from '../../db';

class ReactTraining extends React.Component{
  render() {
    return(
      <div className="content-wrapper" style={{ height: 'auto!important' }}>
          <div>
              <ContentHeader
                logo="https://www.tutorialspoint.com/assets/videos/courses/251/images/course_251_image.png"
                title="ReactJS Online Training"
                tagline="Simply Easy Learning"
              />
              <div className="content-body">
                  <Options
                    prevTitle="Previous Page"
                    nextTitle="Next Page" 
                  />
                  <ContentDetails data={detailsData} />
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
