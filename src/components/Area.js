import React from 'react';

export default class Area extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>{this.props.legend}</legend>
        <div>
          Expression:
          {' '}
          <input
            value={this.props.from}
            onChange={this.props.handleFromChange}/>
          {' '}
          <input
            value={this.props.to}
            onChange={this.props.handleToChange}/>
          {' '}
          <input
            value={this.props.expression}
            onChange={this.props.handleExpressionChange}/>
          {' '}
          <button onClick={this.props.handleSubmit}>Submit</button>
        </div>
        <div>
          Result: {this.props.result}
        </div>
      </fieldset>
    );
  }
}
