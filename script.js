  function convertToCelsius() {
    let fahrenheitInput = document.getElementById('fahrenheit').value;
    let celsiusOutput = (fahrenheitInput - 32) * (5 / 9);
    document.getElementById('celsius').value = celsiusOutput.toFixed(2);
  }
  
  function convertToFahrenheit() {
    let celsiusInput = document.getElementById('celsius').value;
    let fahrenheitOutput = (celsiusInput * (9 / 5)) + 32;
    document.getElementById('fahrenheit').value = fahrenheitOutput.toFixed(2);
  }