import React from 'react';

import {Expression} from "./fields";

export default class SimpleOperation extends React.Component {
  static usingFields = ['expression'];

  static createRequest(fields) {
    return encodeURIComponent(fields.expression);
  }

  static makeRecord(fields, resObj) {
    return (
      <div>
        <div>Operation: {resObj.operation}</div>
        <div>Expression: {fields.expression}</div>
        <div>Result: {resObj.result}</div>
      </div>
    );
  }

  render() {
    return (
      <Expression
        value={this.props.fields.expression}
        onChange={this.props.getOnChange('expression')}
      />
    );
  }
}
