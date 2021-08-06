import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class RequestWithoutLimits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      result: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({expression: event.target.value});
  }

  async handleSubmit() {
    const base = 'https://newton.now.sh/api/v2';
    let operation = this.props.operation;
    let expression = encodeURIComponent(this.state.expression);

    let result = await fetch(`${base}/${operation}/${expression}`)
      .then(response => response.json())
      .then(answer => answer.result);

    this.setState({result: result});
  }

  render() {
    return (
      <fieldset>
        <legend>{this.props.legend}</legend>
        <div>
          Expression:{' '}
          <input
            value={this.state.expression}
            onChange={this.handleChange}/>
          {' '}
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <div>
          Result: {this.state.result}
        </div>
      </fieldset>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <RequestWithoutLimits
          legend='Simplify'
          operation='simplify'/>
        <RequestWithoutLimits
          legend='Factor'
          operation='factor'/>
        <RequestWithoutLimits
          legend='Derive'
          operation='derive'/>
        <RequestWithoutLimits
          legend='Integrate'
          operation='integrate'/>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);
