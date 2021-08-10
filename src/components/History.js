import React from 'react';

export default class History extends React.Component {
  render() {
    return (
      <fieldset>
        <h2>History of operations</h2>
        {this.props.history}
      </fieldset>
    );
  }
}
