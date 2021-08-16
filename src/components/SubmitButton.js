import React from 'react';
import './SubmitButton.css';

export default class SubmitButton extends React.Component {
  render() {
    return (
      <div
        className={'submit-button'}
        onClick={this.props.onClick}
        style={{cursor: (this.props.waiting ? "wait" : "default")}}
      >
        Submit
      </div>
    );
  }
}
