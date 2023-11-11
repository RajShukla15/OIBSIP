const celsiusfield = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertbtn = document.querySelector("#btn");
const tempType = document.querySelector("#temp-type");

convertbtn.addEventListener("click", (e) => {
  e.preventDefault();
  celsiusfield.innerHTML = "";
  convertToCelsius();
  degree.value = "";
});
function convertToCelsius() {
  let inputvalue = degree.value;

  if (tempType.value === "Fahrenheit") {
    const FahrenheitToCelsius = (inputvalue - 32) * (5 / 9);
    celsiusfield.innerHTML = FahrenheitToCelsius.toFixed(3);
  } else if (tempType.value === "Kelvin") {
    const KelvinToCelsius = inputvalue - 273.15;
    celsiusfield.innerHTML = KelvinToCelsius.toFixed(3);
  }
}
