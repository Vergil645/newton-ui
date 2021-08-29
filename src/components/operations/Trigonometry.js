import React from 'react';

import Input from "../tmp/Input";

export default class Trigonometry extends React.Component {
  static usingFields = ['trigValue'];

  static createRequest(fields) {
    return encodeURIComponent(fields.trigValue);
  }

  static makeRecord(fields, resObj) {
    return (
      <div>
        {resObj.operation}({fields.trigValue}) = {resObj.result}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.name}
        <Input
          value={this.props.fields.trigValue}
          onChange={this.props.getOnChange('trigValue')}
        />
      </div>
    );
  }
}
