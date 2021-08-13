import React from 'react';
import './SelectionButton.css';

export default class SelectionButton extends React.Component {
  render() {
    return (
      <div
        className={`selection-button${this.props.active ? ' active' : ''}`}
        onClick={this.props.onClick}
      >
        {this.props.name}
      </div>
    );
  }
}
