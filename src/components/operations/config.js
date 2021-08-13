import SimpleOperation from "./SimpleOperation";
import Tangent from "./Tangent";
import Area from "./Area";

export const config = {
  simplify: SimpleOperation,
  derive: SimpleOperation,
  factor: SimpleOperation,
  integrate: SimpleOperation,
  tangent: Tangent,
  area: Area,
};

export const operations = [
  'simplify', 'derive', 'factor', 'integrate', 'tangent', 'area'
];
