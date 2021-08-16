import React from 'react';

export default class Trigonometry extends React.Component {
  static usingFields = ['trigValue'];

  static createRequest(fields) {
    return encodeURIComponent(fields.trigValue);
  }

  render() {
    return (
      <div>
        {this.props.name}(
        <input
          value={this.props.fields.trigValue}
          onChange={this.props.getOnChange('trigValue')}
        />)
      </div>
    );
  }
}
