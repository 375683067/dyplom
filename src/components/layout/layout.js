import React from 'react';
import './layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="lt-layout">
        <div className="lt-content-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
