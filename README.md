# 🌤️ Weather App

A beautiful weather application that displays real-time weather information for any city using the OpenWeatherMap API.

![Weather App Preview](./images/preview.png)

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Display temperature in Celsius
- 💧 Show humidity percentage
- 💨 Show wind speed
- 🎨 Dynamic weather icons based on conditions
- 📱 Responsive glassmorphism design

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weatherapp.git
   ```

2. Create a `config.js` file in the root directory:

   ```javascript
   const CONFIG = {
     API_KEY: "your_api_key_here",
   };
   ```

3. Open `weatherapp.html` in your browser

## 🔑 API Key Setup

1. Sign up at [OpenWeatherMap](https://openweathermap.org/)
2. Generate a free API key
3. Add it to your `config.js` file (this file is gitignored for security)

## 📁 Project Structure

```
weatherapp/
├── weatherapp.html    # Main HTML file
├── weather.css        # Styles
├── weather.js         # JavaScript logic
├── config.js          # API key (gitignored)
├── README.md          # Documentation
└── images/            # Weather icons
    ├── search.png
    ├── clouds.png
    ├── clear.png
    ├── rain.png
    ├── drizzle.png
    ├── mist.png
    ├── humidity.png
    └── wind.png
```

## 🛠️ Built With

- HTML5
- CSS3 (Glassmorphism design)
- Vanilla JavaScript
- [OpenWeatherMap API](https://openweathermap.org/api)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Weather icons from [OpenWeatherMap](https://openweathermap.org/)
- Font: [Poppins](https://fonts.google.com/specimen/Poppins)
