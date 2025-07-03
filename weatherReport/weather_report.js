function showweatherDetails(event) {
    event.preventDefault();
    const latitude = document.getElementById('lat').value;
    const longitude = document.getElementById('long').value;
    const apiKey = '4419d273a8a5e86660fbf2ac4bd88099'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={API key}&units=metric`;

     fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });

}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );