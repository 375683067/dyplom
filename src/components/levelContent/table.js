import React from 'react';

class Table extends React.Component {

  getHeaders(headers) {
    return (<tr>
      {headers.map((header, i)=> {
        return <th key={i}>{header}</th>
      })}
    </tr>);
  }

  getColumns(columns) {
    return columns.map((text, i)=> {
        return <td key={i}>{text}</td>
    });
  }

  getRows(rows) {
    return rows.map((columns, i)=> {
      return (<tr key={i}>
        {this.getColumns(columns)}
      </tr>)
    })
  }

  render() {
    let tableData = this.props.value;
    return <table>
      <thead>
        {this.getHeaders(tableData.headers)}
      </thead>
      <tbody>
        {this.getRows(tableData.body)}
      </tbody>
    </table>
  }
}

export default Table;
