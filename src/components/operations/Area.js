import React from 'react';

import {Expression, Limits} from "./fields";

export default class Area extends React.Component {
  static usingFields = ['expression', 'from', 'to'];

  static createRequest(fields) {
    return encodeURIComponent(`${fields.from}:${fields.to}|${fields.expression}`);
  }

  static makeRecord(fields, resObj) {
    return (
      <div>
        <div>Operation: {resObj.operation}</div>
        <div>Expression: {fields.expression}</div>
        <div>Limits: [{fields.from}, {fields.to}]</div>
        <div>Result: {resObj.result}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Expression
          value={this.props.fields.expression}
          onChange={this.props.getOnChange('expression')}
        />
        <Limits
          fromValue={this.props.fields.from}
          toValue={this.props.fields.to}
          onFromChange={this.props.getOnChange('from')}
          onToChange={this.props.getOnChange('to')}
        />
      </div>
    );
  }
}
