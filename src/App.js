import React from 'react';

import {config, operations} from "./components/operations/config";

import Header from "./components/header/Header";
import History from "./components/History";
import SelectionButton from "./components/SelectionButton";
import {CenterDiv, CenterText} from "./components/tmp/center";
import Line from "./components/tmp/Line";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    let fields = {};
    operations.forEach((operation) => {
      config[operation].usingFields.forEach((field) => {
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
        <Line/>

        <CenterDiv>
          <CenterText style={{fontSize: "20px"}}>
            <b>Choose operation:</b>
          </CenterText>
          {operations.map((operation, index) => (
            <SelectionButton
              key={index}
              name={operation}
              active={operation === this.state.curOperation}
              onClick={() => this.setState({curOperation: operation})}
            />
          ))}
        </CenterDiv>
        <Line/>

        <div>
          {React.createElement(
            config[this.state.curOperation],
            {fields: this.state.fields, getOnChange: this.getOnChange}
          )}
          <div>
            <button onClick={this.getOnSubmit(this.state.curOperation)}>
              Submit
            </button>
          </div>
        </div>

        <History history={this.state.history}/>
      </div>
    );
  }
}
