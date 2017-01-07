import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import './code.scss';

class Code extends React.Component {
  render() {
    const options = {
      lineNumbers: true,
      value: this.props.value,
      readOnly: this.props.readOnly
    };
    return (
      <div className="md-content-code">
        <CodeMirror onChange={this.props.onChange} value={this.props.value} options={options}/>
      </div>
    );
  }
}

Code.propTypes = {
  readOnly: React.PropTypes.bool,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default Code;
