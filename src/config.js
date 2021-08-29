import SimpleOperation from "./components/operations/SimpleOperation";
import Tangent from "./components/operations/Tangent";
import Area from "./components/operations/Area";
import Trigonometry from "./components/operations/Trigonometry";

export const api = 'https://newton.now.sh/api/v2';

export const components = {
  simplify: SimpleOperation,
  derive: SimpleOperation,
  factor: SimpleOperation,
  integrate: SimpleOperation,
  tangent: Tangent,
  area: Area,

  sin: Trigonometry,
  cos: Trigonometry,
  tan: Trigonometry,
  arcsin: Trigonometry,
  arccos: Trigonometry,
  arctan: Trigonometry,
};

export const operations = [
  'simplify', 'derive', 'factor', 'integrate', 'tangent', 'area'
];

export const trigonometry = [
  'sin', 'cos', 'tan', 'arcsin', 'arccos', 'arctan'
];
