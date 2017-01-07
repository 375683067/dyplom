import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div className="md-content__title">
        {this.props.value}
      </div>
    );
  }
}
export default Title;
