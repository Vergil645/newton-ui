import React from 'react';

import {Expression, Point} from "./fields";

export default class Tangent extends React.Component {
  static usingFields = ['expression', 'point'];

  static createRequest(fields) {
    return encodeURIComponent(`${fields.point}|${fields.expression}`);
  }

  static makeRecord(fields, resObj) {
    return (
      <div>
        <div>Operation: {resObj.operation}</div>
        <div>Expression: {fields.expression}</div>
        <div>Point: {fields.point}</div>
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
        <Point
          value={this.props.fields.point}
          onChange={this.props.getOnChange('point')}
        />
      </div>
    );
  }
}
