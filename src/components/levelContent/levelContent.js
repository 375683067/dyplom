import React from 'react';
import * as CONTENT_TYPES from '../../constants/contentTypes';
import Title from './title';
import Text from './text';
import ContentImage from './image';
import Code from './code';
/**
 *
 */
class LevelContent extends React.Component{
  getContent() {
    return this.props.configuration.map((item, id)=> {
      let toReturn;
      switch (item.type) {
        case CONTENT_TYPES.TITLE:
          toReturn = <Title key={id} value={item.value}/>;
          break;
        case CONTENT_TYPES.IMAGE:
          toReturn = <ContentImage key={id} value={item.value}/>;
          break;
        case CONTENT_TYPES.TEXT:
          toReturn = <Text key={id} value={item.value}/>;
          break;
        case CONTENT_TYPES.CODE:
          toReturn = <Code key={id} readOnly={true} value={item.value}/>;
          break;
      }
      return toReturn;
    });
  }
  /**
   *
   */
  render() {
    return (
      <div className="md-level-content">
        {this.getContent()}
      </div>
    );
  }
}

export default LevelContent;
