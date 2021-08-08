import React from 'react';

export default class History extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>History of operations</legend>
        {this.props.history}
      </fieldset>
    );
  }
}
