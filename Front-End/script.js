let weather ={
    apiKey: "723ce25af142d6f3eadd721bc0a83472",
    fetchWeather: function (city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);              // ✅ still logs
            this.displayWeather(data)});    // ✅ returns the data 
    },

 displayWeather: function (data) {
    const { name } = data;
    const { icon,description } = data.weather[0];
    const {temp , humidity } = data.main;
    const { speed } = data.wind;
    console.log(name , description, temp, humidity, speed);

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";

}
 
    
};

document.querySelector(".search button").addEventListener("click", () => {
    const city = document.querySelector(".search-bar").value.trim();
    if(city){
        weather.fetchWeather(city);
    }

});

document.querySelector(".search-bar").addEventListener("keyup", (event)=>{
    if(event.key == "Enter"){
        const city = document.querySelector(".search-bar").value.trim();
        if(city){
            weather.fetchWeather(city);
        }
    }
});
void EMpty(){

}
