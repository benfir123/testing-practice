export default function analyzeArray(array) {
  const object = new Object();
  object.average = average(array);
  object.min = min(array);
  object.max = max(array);
  object.length = array.length;
  return object;
}

function average(array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}

function min(array) {
  return Math.min(...array);
}

function max(array) {
  return Math.max(...array);
}
