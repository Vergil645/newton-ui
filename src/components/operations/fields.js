import React from 'react';

import Input from "../tmp/Input";

export class Expression extends React.Component {
  render() {
    return (
      <div>
        Expression:
        <Input
          value={this.props.value}
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
          onChange={this.props.onFromChange}
        />
        to
        <Input
          value={this.props.toValue}
          onChange={this.props.onToChange}
        />
      </div>
    );
  }
}
