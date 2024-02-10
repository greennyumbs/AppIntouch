const tank = 5832;
const x = 3;     // Change this value to test the program

function calculate(x) {
  return tank / Math.pow(3, x);
}

const y = calculate(x);
console.log(y);