import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { CityComponent } from "./components/CityComponent";
import { WeatherComponent } from "./components/WeatherInfoComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding: 20px 10px;
  box-shadow: 0 3px 6px 0 #555;
  border-radius: 4px;
  width: 400px;
  background: white;
  font-family: "Montserrat";
`;
const AppLabel = styled.span`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;
const API_KEY = "673fc32143b5baccb7d4ed253f113010";

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    console.log(response);

    setWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather ? (
        <WeatherComponent weather={weather}/>
      ) : (
        <CityComponent setCity={setCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
