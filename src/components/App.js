import React from 'react';

import Sidebar from "./Sidebar";
import SimpleExpressionRequest from "./SimpleExpressionRequest";
import Tangent from "./Tangent";
import Area from "./Area";
import History from "./History";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOperation: '',
      simplify: {expression: '', result: ''},
      factor: {expression: '', result: ''},
      derive: {expression: '', result: ''},
      integrate: {expression: '', result: ''},
      tangent: {point: '', expression: '', result: ''},
      area: {from: '', to: '', expression: '', result: ''},
      history: [],
    };
  }

  onClick(operation) {
    return () => this.setState({currentOperation: operation});
  }

  handleChange(operation, field) {
    return (event) => this.setState(
      (state) => {
        let tmp = {[operation]: state[operation]};
        tmp[operation][field] = event.target.value;
        return tmp;
      }
    );
  }

  makeRecord(opState, result) {
    return (
      <div>
        <h3>{opState.legend ? opState.legend : 'UNDEFINED'}</h3>
        <div>Expression: {opState.expression}</div>
        {opState.point ? <div>Point: {opState.point}</div> : null}
        {opState.from ? <div>From: {opState.from}</div> : null}
        {opState.to ? <div>To: {opState.to}</div> : null}
        <div>Result: {result}</div>
      </div>
    );
  }

  handleSubmit(operation) {
    return async () => {
      let base = 'https://newton.now.sh/api/v2';

      let opState = this.state[operation];
      let expression = opState.expression;
      let request = encodeURIComponent(
        (operation === 'tangent' ? opState.point + '|' :
          operation === 'area' ? opState.from + ':' + opState.to + '|' :
            '') + expression
      );

      let result = await fetch(`${base}/${operation}/${request}`)
        .then(response => response.json())
        .then(answer => answer.result);

      this.setState(
        (state) => {
          let tmp = {
            [operation]: state[operation],
            history: Array.of(
              this.makeRecord(state[operation], result),
              ...state.history
            ),
          };
          tmp[operation].result = result;
          return tmp;
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Sidebar onClick={this.onClick.bind(this)}/>
        {
          this.state.currentOperation !== 'simplify' ? null :
            <SimpleExpressionRequest
              legend='Simplify'
              operation='simplify'
              expression={this.state.simplify.expression}
              result={this.state.simplify.result}
              handleExpressionChange={this.handleChange('simplify', 'expression')}
              handleSubmit={this.handleSubmit('simplify')}/>
        }
        {
          this.state.currentOperation !== 'factor' ? null :
            <SimpleExpressionRequest
              legend='Factor'
              operation='factor'
              expression={this.state.factor.expression}
              result={this.state.factor.result}
              handleExpressionChange={this.handleChange('factor', 'expression')}
              handleSubmit={this.handleSubmit('factor')}/>
        }
        {
          this.state.currentOperation !== 'derive' ? null :
            <SimpleExpressionRequest
              legend='Derive'
              operation='derive'
              expression={this.state.derive.expression}
              result={this.state.derive.result}
              handleExpressionChange={this.handleChange('derive', 'expression')}
              handleSubmit={this.handleSubmit('derive')}/>
        }
        {
          this.state.currentOperation !== 'integrate' ? null :
            <SimpleExpressionRequest
              legend='Integrate'
              operation='integrate'
              expression={this.state.integrate.expression}
              result={this.state.integrate.result}
              handleExpressionChange={this.handleChange('integrate', 'expression')}
              handleSubmit={this.handleSubmit('integrate')}/>
        }
        {
          this.state.currentOperation !== 'tangent' ? null :
            <Tangent
              legend='Find tangent'
              operation='tangent'
              point={this.state.tangent.point}
              expression={this.state.tangent.expression}
              result={this.state.tangent.result}
              handlePointChange={this.handleChange('tangent', 'point')}
              handleExpressionChange={this.handleChange('tangent', 'expression')}
              handleSubmit={this.handleSubmit('tangent')}/>
        }
        {
          this.state.currentOperation !== 'area' ? null :
            <Area
              legend='Area under curve'
              operation='area'
              from={this.state.area.from}
              to={this.state.area.to}
              expression={this.state.area.expression}
              result={this.state.area.result}
              handleFromChange={this.handleChange('area', 'from')}
              handleToChange={this.handleChange('area', 'to')}
              handleExpressionChange={this.handleChange('area', 'expression')}
              handleSubmit={this.handleSubmit('area')}/>
        }
        <History history={this.state.history}/>
      </div>
    );
  }
}
