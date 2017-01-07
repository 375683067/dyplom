import React from 'react';

class Text extends React.Component {
  render() {
    return (
      <div className="md-content-text">{this.props.value}</div>
    )
  }
}

export default Text;
