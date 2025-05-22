document.addEventListener("DOMContentLoaded", function () {
  window.getWeather = async function () {
    const city = document.getElementById("cityInput").value;
    const apiKey = "2a961015dcf501b2171824e354074f37";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();

      document.getElementById("city").textContent = data.name;
      document.getElementById("temperature").textContent = data.main.temp;
      document.getElementById("condition").textContent =
        data.weather[0].description;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;

      document.getElementById("weather").classList.remove("hidden");
    } catch (error) {
      alert(error.message);
    }
  };
});
