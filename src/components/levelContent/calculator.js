import React from 'react';
import Code from './code.js';

class Text extends React.Component {
  constructor() {
    super();
    this.state = {currentLevel: 0}
  }
  /**
   *
   * @param {number} input
   * @param {node} target
   */
  validate(index, {target}) {
    let result = this.props.value.assignments[index].input.result + '';
    let value = target.value + '';
    if (result === value) {
      console.info(this.state.currentLevel++);
      this.setState({
        currentLevel: this.state.currentLevel++
      });
      target.blur();
    }
  }
  /**
   * provides assignments
   */
  getAssignments() {
    return this.props.value.assignments.map(({code = {}, input = {}}, index)=> {
      let addClass = '';
      if (index < this.state.currentLevel) {
        addClass = 'disabled completed';
      } else if (index > this.state.currentLevel) {
        addClass = 'disabled';
      }

      return (
        <div key={index} className={`md-calculator-assignment__item ${addClass}`}>
          <div className="md-calculator-assignment__item-header">Assignment #{index + 1}</div>
          <Code addClass={code.className} readOnly={true} value={code.value}/>
          <input onChange={this.validate.bind(this, index)} type="number" className="md-calculator-assignment__item__input" />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="md-calculator-assignment">
        {this.getAssignments()}
      </div>
    )
  }
}

export default Text;
