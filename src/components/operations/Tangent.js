import React from 'react';

import {Expression, Point} from "./fields";

export default class Tangent extends React.Component {
  static usingFields = ['expression', 'point'];

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
