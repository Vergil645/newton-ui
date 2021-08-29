import React from 'react';

import Input from "../tmp/Input";

export default class Trigonometry extends React.Component {
  static usingFields = ['trigValue'];

  static createRequest(fields) {
    if (fields.trigValue === '') {
      throw new Error();
    }
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
          placeholder={'pi/4'}
          onChange={this.props.getOnChange('trigValue')}
        />
      </div>
    );
  }
}
