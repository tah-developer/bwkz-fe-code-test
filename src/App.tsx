import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import Tabs from './Tabs';
import ForecastRow from './ForecastRow';
import Filters from './Filters';

const cities = ['London,UK', 'New York', 'Mumbai', 'Sydney', 'Tokyo'];
const KEY = 'a3e3e6c71bdd4d7586933ac1a57de143';
const TODAY_WEATHER_API_URL =
  'https://api.weatherbit.io/v2.0/current?city=London,UK&key=';
const FORECAST_WEATHER_API_URL =
  'https://api.weatherbit.io/v2.0/forecast/daily?city=';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const emptyCityForecast = {
  name: '',
  dayForecasts: [
    {
      day: '',
      temp: 0,
      icon: '',
      desc: '',
      timestamp: 0,
    },
  ],
};

const handleGetIconUrl = (icon: string): string =>
  `https://www.weatherbit.io/static/img/icons/${icon}.png`;

const retrieve = (data: any) => ({
  day: weekDays[new Date(data.ts * 1000).getDay()],
  temp: data.temp,
  icon: data.weather.icon,
  desc: data.weather.description,
  timestamp: data.ts,
});

export interface IFilters {
  min: number;
  max: number;
}

export interface IDay {
  day: string;
  desc: string;
  icon: string;
  temp: number;
  timestamp: number;
}

const App = () => {
  const [activePage, setActivePage] = useState<number>(0);
  const [todayForecast, setTodayForecast] = useState<any>(emptyCityForecast);
  const [citiesForecast, setForecast] = useState<any[]>([emptyCityForecast]);
  const [filter, setFilter] = useState<IFilters>({ min: 0, max: 0 });

  const handleActivePageChange = (value: number) => setActivePage(value);

  const getWeather = () => {
    fetch(`${TODAY_WEATHER_API_URL}${KEY}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setTodayForecast({
          name: data[0].city_name,
          dayForecasts: [retrieve(data[0])],
        });
      })
      .catch((err) => {
        console.error('Request Error', err);
      });

    Promise.all(
      cities.map((city) =>
        fetch(`${FORECAST_WEATHER_API_URL}${city}&key=${KEY}`)
      )
    )
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((citiesData) => {
        setForecast(
          citiesData.map((cityData) => ({
            name: cityData.city_name,
            dayForecasts: cityData.data.map((forecast: any) =>
              retrieve(forecast)
            ),
          }))
        );
      })
      .catch((err) => {
        console.error('Forecast Request Error', err);
      });
  };

  const handleFilterChange = (newFilter: IFilters) => setFilter(newFilter);

  useEffect(() => getWeather(), []);

  return (
    <>
      <Tabs
        currentActivePage={activePage}
        onActivePageChange={handleActivePageChange}
      />
      {!activePage && (
        <WeatherCard
          name={todayForecast.name}
          forecast={todayForecast.dayForecasts[0]}
          getIconUrl={handleGetIconUrl}
        />
      )}
      {activePage > 0 && (
        <>
          <Filters
            min={filter.min}
            max={filter.max}
            onFilterChange={handleFilterChange}
          />
          {citiesForecast.map((cityForecast) => (
            <ForecastRow
              key={cityForecast.name}
              filter={filter}
              name={cityForecast.name}
              dayForecasts={cityForecast.dayForecasts}
              getIconUrl={handleGetIconUrl}
            />
          ))}
        </>
      )}
    </>
  );
};

export default App;
