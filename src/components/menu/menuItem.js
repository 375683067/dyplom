import React from 'react';
import './menuItem.scss'

class menuItem extends  React.Component {

  openLevel() {
    if (this.props.isOpen) {
      this.props.openLevel(`level/${this.props.number - 1}`);
    }
  }

  render() {
    return (
      <div onClick={this.openLevel.bind(this, this.props.number - 1)} className="md-menu-item">
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
