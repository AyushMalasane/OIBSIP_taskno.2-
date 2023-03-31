function convert() 
{
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");
    if (isNaN(temperature)) {
        result.innerHTML = "Please enter a temperature";
    } else {
        if (unit === "celsius") {
            var convertedTemperature = temperature * 9 / 5 + 32;
            result.innerHTML = temperature + "°C is " + convertedTemperature.toFixed(2) + "°F";
        } else if (unit === "fahrenheit") {
            var convertedTemperature = (temperature - 32) * 5 / 9;
            result.innerHTML = temperature + "°F is " + convertedTemperature.toFixed(2) + "°C";
        }
    }
}
