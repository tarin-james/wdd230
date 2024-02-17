const temp = parseFloat(document.querySelector("#current-temp").innerHTML);
const wind_speed = parseFloat(document.querySelector("#wind-speed").innerHTML);

if (temp <= 50 && wind_speed > 3) {
  const wind_chill =
    35.74 +
    0.6215 * temp -
    35.75 * wind_speed ** 0.16 +
    0.4275 * temp * wind_speed ** 0.16;
  document.querySelector("#wind-chill").innerHTML = Math.round(wind_chill, 2);
} else {
  document.querySelector("#wind-chill").innerHTML = "N/A";
}
