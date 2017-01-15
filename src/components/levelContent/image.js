import React from 'react';
class ContentImage extends React.Component {
  render() {
    return (
      <img className={`md-content-image ${this.props.addClass || ''}`} src={this.props.value}/>
    );
  }
}

export default ContentImage;
