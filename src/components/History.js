import React from 'react';

export default class History extends React.Component {
  render() {
    return (
      <div>
        <h2>History of operations</h2>
        {this.props.history}
      </div>
    );
  }
}
