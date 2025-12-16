const apiKey = "0a65a708d54f2e52781caf51be52a587";


function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Şəhər adı daxil edin");
  
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=az`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("city").innerText = data.name;
      document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
      document.getElementById("desc").innerText = data.weather[0].description;
    })
    .catch(() => alert("Şəhər tapılmadı"));
}