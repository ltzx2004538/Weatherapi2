class Weather {
    constructor(data) {
        this.temperature = Math.round(data.main.temp);
        this.humidity = data.main.humidity;
        this.wind = data.wind.speed;
        this.weather = data.weather[0].main;
        this.icon = data.weather[0].icon;
        this.description = data.weather[0].description;
    }
}

module.exports = Weather