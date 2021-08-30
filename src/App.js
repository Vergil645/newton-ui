import React from 'react';
import styled from "styled-components";

import {components, operations, api, trigonometry} from "./config";

import Header from "./components/header/Header";
import SelectionButton from "./components/SelectionButton";
import {CenterDiv} from "./components/tmp/center";
import Line from "./components/tmp/Line";
import SubmitButton from "./components/SubmitButton";

const Waiting = styled.div`
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  cursor: wait;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    let fields = {trigValue: ''};
    operations.forEach((operation) => {
      components[operation].usingFields.forEach((field) => {
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
      const fields = this.state.fields;
      this.setState({waiting: true});

      let request = components[operation].createRequest(fields);
      if (request === '') {
        alert('Incorrect fields values');
        this.setState({waiting: false});
        return;
      }

      let resObj = await fetch(`${api}/${operation}/${request}`)
        .then(response => response.json());

      this.setState((state) => {
        return {
          waiting: false,
          history: Array.of(
            (
              <div style={{marginBottom: "20px"}}>
                {components[operation].makeRecord(fields, resObj)}
              </div>
            ),
            ...state.history
          )
        };
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.waiting ? <Waiting/> : null}
        <Header/>
        <Line/>

        <CenterDiv style={{fontSize: "20px"}}>
          <b style={{margin: "0 7px"}}>Choose operation:</b>
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
            components[this.state.curOperation],
            {fields: this.state.fields, getOnChange: this.getOnChange}
          )}
        </CenterDiv>
        <CenterDiv>
          <SubmitButton onClick={this.getOnSubmit(this.state.curOperation)}/>
        </CenterDiv>
        <Line/>

        <CenterDiv style={{fontSize: "20px"}}>
          <b style={{margin: "0 7px"}}>Trigonometry:</b>
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
            components[this.state.curTrigonometry],
            {
              name: this.state.curTrigonometry,
              fields: this.state.fields,
              getOnChange: this.getOnChange
            }
          )}
        </CenterDiv>
        <CenterDiv>
          <SubmitButton onClick={this.getOnSubmit(this.state.curTrigonometry)}/>
        </CenterDiv>
        <Line/>

        <CenterDiv>
          <b style={{fontSize: "20px"}}>History of operations</b>
        </CenterDiv>
        <div style={{margin: "20px"}}>
          {this.state.history}
        </div>
      </div>
    );
  }
}
