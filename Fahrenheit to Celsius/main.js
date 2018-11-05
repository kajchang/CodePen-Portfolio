var temps;

function setup() {
  temps = [212, 100, 1, 2, 10, 415, 150, 75, 77, 1000, 123, 124];
  noLoop();
}

function draw() {
  document.body.innerHTML = "";
  for (let i = 0; i < temps.length; i++) {
    document.write(`<input value=${temps[i]} onchange="temps[${i}] = this.value; draw();">° in Fahrenheit is ${fahrenheitToCelsius(temps[i]).toFixed(2)}° in Celsius and is ${fahrenheitToKelvin(temps[i]).toFixed(2)}° in Kelvin<br/>`);
  }
}

function fahrenheitToCelsius(fahrenheitTemp) {
  return (fahrenheitTemp - 32) * 5 / 9;
}

function fahrenheitToKelvin(fahrenheitTemp) {
  return (fahrenheitTemp - 32) * 5 / 9 + 273.15;
}