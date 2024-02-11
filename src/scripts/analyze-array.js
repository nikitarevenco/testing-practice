function analyzeArray(arr) {
  const a = {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: arr.sort((a, b) => a - b)[0],
    max: arr.sort((a, b) => b - a)[0],
    length: arr.length,
  };
  return a;
}

export default analyzeArray;
