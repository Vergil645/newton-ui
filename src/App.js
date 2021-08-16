import React from 'react';

import {config, operations, api, trigonometry} from "./config";

import Header from "./components/header/Header";
import History from "./components/History";
import SelectionButton from "./components/SelectionButton";
import {CenterDiv, CenterText} from "./components/tmp/center";
import Line from "./components/tmp/Line";
import SubmitButton from "./components/SubmitButton";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    let fields = {trigValue: ''};
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
      curTrigonometry: trigonometry[0],
      waiting: false,
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
      this.setState({waiting: true});

      let request = config[operation].createRequest(this.state.fields);

      let result = await fetch(`${api}/${operation}/${request}`)
        .then(response => response.json());

      this.setState((state) => {
        return {
          waiting: false,
          history: Array.of(this.makeRecord(result), ...state.history)
        };
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
      <div style={{cursor: (this.state.waiting ? "wait" : "default")}}>
        <Header/>
        <Line/>

        <CenterDiv style={{fontSize: "20px"}}>
          <CenterText>
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

        <CenterDiv>
          {React.createElement(
            config[this.state.curOperation],
            {fields: this.state.fields, getOnChange: this.getOnChange}
          )}
        </CenterDiv>
        <CenterDiv>
          <SubmitButton
            waiting={this.state.waiting}
            onClick={this.getOnSubmit(this.state.curOperation)}
          />
        </CenterDiv>
        <Line/>

        <CenterDiv style={{fontSize: "20px"}}>
          <CenterText>
            <b>Trigonometry:</b>
          </CenterText>
          {trigonometry.map((operation, index) => (
            <SelectionButton
              key={index}
              name={operation}
              active={operation === this.state.curTrigonometry}
              onClick={() => this.setState({curTrigonometry: operation})}
            />
          ))}
        </CenterDiv>
        <Line/>

        <CenterDiv>
          {React.createElement(
            config[this.state.curTrigonometry],
            {
              name: this.state.curTrigonometry,
              fields: this.state.fields,
              getOnChange: this.getOnChange
            }
          )}
        </CenterDiv>
        <CenterDiv>
          <SubmitButton
            waiting={this.state.waiting}
            onClick={this.getOnSubmit(this.state.curTrigonometry)}
          />
        </CenterDiv>
        <Line/>

        <History history={this.state.history}/>
      </div>
    );
  }
}
