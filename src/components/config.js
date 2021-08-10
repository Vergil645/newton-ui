import SimpleOperation from "./operations/SimpleOperation";
import Tangent from "./operations/Tangent";
import Area from "./operations/Area";

const simpleOperation = {
  component: SimpleOperation,
  createRequest(values) {
    return encodeURIComponent(values.expression);
  },
}

const config = {
  simplify: simpleOperation,
  derive: simpleOperation,
  factor: simpleOperation,
  integrate: simpleOperation,
  tangent: {
    component: Tangent,
    createRequest(fields) {
      return encodeURIComponent(`${fields.point}|${fields.expression}`);
    },
  },
  area: {
    component: Area,
    createRequest(fields) {
      return encodeURIComponent(`${fields.from}:${fields.to}|${fields.expression}`);
    },
  },
};

const operations = ['simplify', 'derive', 'factor', 'integrate', 'tangent', 'area'];

export {config, operations};
