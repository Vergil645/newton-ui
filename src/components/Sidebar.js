import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    return (
      <fieldset>
        <h2>Choose operation</h2>
        <ul>
          <li><button onClick={this.props.onClick('simplify')}>Simplify</button></li>
          <li><button onClick={this.props.onClick('factor')}>Factor</button></li>
          <li><button onClick={this.props.onClick('derive')}>Derive</button></li>
          <li><button onClick={this.props.onClick('integrate')}>Integrate</button></li>
          <li><button onClick={this.props.onClick('factor')}>Factor</button></li>
          <li><button onClick={this.props.onClick('tangent')}>Find tangent</button></li>
          <li><button onClick={this.props.onClick('area')}>Area under curve</button></li>
        </ul>
      </fieldset>
    );
  }
}
