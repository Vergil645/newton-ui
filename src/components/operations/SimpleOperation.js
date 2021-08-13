import React from 'react';

import {Expression} from "./fields";

export default class SimpleOperation extends React.Component {
  static usingFields = ['expression'];

  static createRequest(fields) {
    return encodeURIComponent(fields.expression);
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
