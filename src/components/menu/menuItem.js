import React from 'react';
import './menuItem.scss'

class menuItem extends  React.Component {
  render() {
    return (
      <div className="md-menu-item">
        <div className="md-menu-item__container">
          <div className={`md-menu-item__label is-open-${this.props.isOpen}`}>
            {this.props.number}
          </div>
        </div>
      </div>
    );
  }
}

export default menuItem;
