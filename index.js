const curry = fn => (...args) => fn.bind(null, ...args);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);


const myfunc = () => {};


const coolerFunc = () => {}

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

Array.prototype.unwind = function (key) {
  return this.reduce((acc, curr) =>
  [].concat(acc, curr[key].map(val => ({ ...curr, [key]: val }))), []);
};

const arr = [1,23,4,5];

let vincent = "hoi";

const newFeature = 'awesome';