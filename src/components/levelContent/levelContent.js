import React from 'react';
import * as CONTENT_TYPES from '../../constants/contentTypes';
import Title from './title';
import Text from './text';
import ContentImage from './image';
import Code from './code';
import Table from './table';
import Calculator from './calculator';
import './content.scss';
/**
 *
 */
class LevelContent extends React.Component{
  getContent() {
    return this.props.configuration.map((item, id)=> {
      let toReturn;
      switch (item.type) {
        case CONTENT_TYPES.TITLE:
          toReturn = <Title key={id} addClass={item.className} value={item.value}/>;
          break;
        case CONTENT_TYPES.IMAGE:
          toReturn = <ContentImage addClass={item.className} key={id} value={item.value}/>;
          break;
        case CONTENT_TYPES.TEXT:
          toReturn = <Text addClass={item.className} key={id} value={item.value}/>;
          break;
        case CONTENT_TYPES.CODE:
          toReturn = <Code addClass={item.className} key={id} readOnly={true} value={item.value}/>;
          break;
        case CONTENT_TYPES.TABLE:
          toReturn = <Table addClass={item.className} key={id} value={item.value} />;
          break;
        case CONTENT_TYPES.CALCULATOR:
          toReturn = <Calculator addClass={item.className} key={id} value={item.value}/>
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
