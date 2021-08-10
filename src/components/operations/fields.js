import React from 'react';

export class Expression extends React.Component {
  render() {
    return (
      <div>
        Expression:{' '}
        <input
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
        Point:{' '}
        <input
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
        Limits: from{' '}
        <input
          value={this.props.fromValue}
          onChange={this.props.onFromChange}
        />
        {' '}to{' '}
        <input
          value={this.props.toValue}
          onChange={this.props.onToChange}
        />
      </div>
    );
  }
}
