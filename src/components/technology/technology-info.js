import React from 'react';
import Content from '../common/content';
import './technology-info.scss';


const TechnologyInfo = ({
  content,
  contentComponent,
  joomlaheading,
  angularheading,
  phpheading
}) => {

  const PostContent = contentComponent || Content

  return(
    <div className="industries-info mb-4">
      <div className="container">
        <h3 className="font-weight-normal text-black">
          {joomlaheading}
        </h3>
        <h3 className="font-weight-normal text-black">
          {angularheading}
        </h3>       
        <h3 className="font-weight-normal text-black">
          {phpheading}
        </h3> 

        <div className="main-content row">
          <div className="col-xs-12 content">
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TechnologyInfo;