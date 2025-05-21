let weather ={
    apiKey: "723ce25af142d6f3eadd721bc0a83472",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric&appid=723ce25af142d6f3eadd721bc0a83472")
        .then((response) => response.json())
        .then((data) => console.log(data));
        },
};