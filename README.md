# 🌦️ Weather Dashboard

A responsive Weather Dashboard built using React and Vite that allows users to search for a city and view its current weather information and forecast.

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Display current weather information
- 🌤️ View weather forecast
- 🌐 Fetch weather data using the OpenWeather API
- 📱 Responsive user interface
- ⚡ Fast development and build process with Vite

## 🛠️ Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- Vite
- Axios
- OpenWeather API

## 📂 Project Structure

```text
weather-dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Forecast.jsx
│   │   ├── SearchBar.jsx
│   │   └── WeatherCard.jsx
│   ├── hooks/
│   │   └── useWeather.jsx
│   ├── utils/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone [https://github.com/DurgaKaushik05/Weather-Dashboard.git]
```

### 2. Navigate to the Project Folder

```bash
cd weather-dashboard
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure the API Key

Create a `.env` file in the project root directory and add your OpenWeather API key:

```env
VITE_API_KEY=your_openweathermap_api_key_here
```

Replace the placeholder with your own API key from [OpenWeather](https://openweathermap.org/api).

**Important:** Do not upload your `.env` file or expose your actual API key in public code or screenshots.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL shown in your terminal to use the application.

## 🔑 API Used

This project uses the OpenWeather API to retrieve weather information.

Website: https://openweathermap.org/api

## 📚 What I Learned

- Building reusable React components
- Managing application logic with React hooks
- Fetching API data using Axios
- Working with environment variables
- Styling a web application using CSS
- Setting up and running a React project with Vite

## 🔮 Future Improvements

- Add weather-based background changes
- Display additional weather details
- Improve error handling and loading states
- Deploy the application online

## 👩‍💻 Author

**Durga Kaushik**

GitHub: https://github.com/DurgaKaushik05

---

⭐ If you find this project useful, feel free to explore the repository.
