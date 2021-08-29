import React from 'react';

import Input from "../tmp/Input";

export class Expression extends React.Component {
  render() {
    return (
      <div>
        Expression:
        <Input
          value={this.props.value}
          placeholder={'x^3 + 12x'}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export class Point extends React.Component {
  render() {
    return (
      <div>
        Point:
        <Input
          value={this.props.value}
          placeholder={'2'}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export class Limits extends React.Component {
  render() {
    return (
      <div>
        Limits: from
        <Input
          value={this.props.fromValue}
          placeholder={'2'}
          onChange={this.props.onFromChange}
        />
        to
        <Input
          value={this.props.toValue}
          placeholder={'4'}
          onChange={this.props.onToChange}
        />
      </div>
    );
  }
}
