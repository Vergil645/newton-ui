import React from 'react';

export default class Tangent extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>{this.props.legend}</legend>
        <div>
          Expression:
          {' '}
          <input
            value={this.props.point}
            onChange={this.props.handlePointChange}/>
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
