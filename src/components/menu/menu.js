import React from 'react';
import MenuItem from '../../containers/menuItemContainer';
import './menu.scss';
import {ITEM_COUNT, PAGE_COUNT} from '../../constants/menuConfiguration';
/**
 * класс який відповідає за відобреження меню вибору рівнів
 */
let MenuNames = [
  'Objects',
  'Data Type',
  'Operators',
  'Condition statements',
  'Loops',
  'Array',
  'Functions',
  'Flowchart',
  'Calculator practise'
];
class Menu extends React.Component {

  constructor() {
    super();
    this.state = {
      activePage: 0
    }
  }

  getItems(pageIndex) {
    let i;
    let items = [];

    for (i = 0; i < ITEM_COUNT; i++) {
      let number = pageIndex * ITEM_COUNT + i + 1;
      let label = MenuNames[number - 1];
      items.push(
        <MenuItem label={label} key={`menu-item-${number}`} isOpen={this.props.openLevel >= number - 1} number={number}/>
      );
    }

    return items;
  }

  getPages() {
    let pages = [];
    let i;
    let shift = {
      'transform': `translateX(-${this.state.activePage * 100}%)`
    };

    for (i = 0; i < PAGE_COUNT; i++) {
      pages.push((
        <div key={`menu-page-${i}`} style={shift} className="md-menu__page">
          {this.getItems(i)}
        </div>
      ));
    }

    return pages;
  }

  // changeActivePage(pageIndex) {
  //   this.setState({
  //     activePage: pageIndex
  //   });
  // }

  // getNavigationButtons() {
  //   let navigationButtons = [];
  //   let i;
  //   if (this.state) {
  //     for (i = 0; i < PAGE_COUNT; i++) {
  //       navigationButtons.push((
  //         <div key={`button-${i}`} onClick={this.changeActivePage.bind(this, i)} className={`md-menu__navigation-button active-${i === this.state.activePage}`}></div>
  //       ));
  //     }
  //   }
  //
  //
  //   return navigationButtons;
  // }

  exit() {
    this.props.exit();
  }

  render() {
    return (
      <div className="md-menu">
        <div className="md-menu__exit-btn" onClick={this.exit.bind(this)}></div>
        <div className="md-title">Programming basics</div>
        {this.getPages()}
        {/*<div className="md-menu__navigation">*/}
          {/*{this.getNavigationButtons()}*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default Menu;
