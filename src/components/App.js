import React from 'react';

import {config, operations} from "./config";

import Header from "./Header";
import History from "./History";
import SelectionButton from "./SelectionButton";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    let fields = {};
    operations.forEach((operation) => {
      config[operation].component.usingFields.forEach((field) => {
        if (!(field in fields)) {
          fields[field] = '';
        }
      });
    });
    this.state = {
      fields,
      curOperation: operations[0],
      history: [],
    };
    this.getOnChange = this.getOnChange.bind(this);
    this.getOnSubmit = this.getOnSubmit.bind(this);
  }

  getOnChange(field) {
    return (event) => this.setState((state) => {
      let tmp = {fields: state.fields};
      tmp.fields[field] = event.target.value;
      return tmp;
    });
  }

  getOnSubmit(operation) {
    return async () => {
      let base = 'https://newton.now.sh/api/v2';
      let request = config[operation].createRequest(this.state.fields);

      let result = await fetch(`${base}/${operation}/${request}`)
        .then(response => response.json());

      this.setState((state) => {
        return {history: Array.of(this.makeRecord(result), ...state.history)};
      });
    }
  }

  makeRecord(resObj) {
    return (
      <fieldset>
        <div>Operation: {resObj.operation}</div>
        <div>Expression: {resObj.expression}</div>
        <div>Result: {resObj.result}</div>
      </fieldset>
    );
  }

  render() {
    return (
      <div>
        <Header/>

        <fieldset>
          {operations.map((operation, index) => (
            <SelectionButton
              key={index}
              name={operation}
              onClick={() => this.setState({curOperation: operation})}
            />
          ))}
        </fieldset>

        <fieldset>
          {React.createElement(
            config[this.state.curOperation].component,
            {fields: this.state.fields, getOnChange: this.getOnChange}
          )}
          <div>
            <button onClick={this.getOnSubmit(this.state.curOperation)}>
              Submit
            </button>
          </div>
        </fieldset>

        <History history={this.state.history}/>
      </div>
    );
  }
}
