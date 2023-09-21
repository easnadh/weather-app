import { ChangeEvent, useEffect, useState } from 'react';
import { ForecastType, OptionType } from '../types';

export const useForecast = () => {
  const BASE_URL = 'https://api.openweathermap.org';

  const API_KEY = import.meta.env.VITE_API_KEY;

  const [search, setSearch] = useState<string>('');
  const [city, setCity] = useState<OptionType | null>(null);
  const [options, setOptions] = useState<[]>([]);
  const [forecast, setForecast] = useState<ForecastType | null>(null);

  const getSearchOptions = async (search: string) => {
    fetch(`${BASE_URL}/geo/1.0/direct?q=${search}&limit=5&appid=${API_KEY}`)
      .then((r) => r.json())
      .then((data) => setOptions(data))
      .catch((e) => console.log({ e }));
  };

  const onSubmit = () => {
    if (!city) return;

    getForecast(city);
  };

  const getForecast = (data: OptionType) => {
    fetch(`${BASE_URL}/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&units=metric&appid=${API_KEY}
`)
      .then((r) => r.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };

        setForecast(forecastData);
      })
      .catch((e) => console.log({ e }));
  };

  const onOptionSelect = (option: OptionType) => {
    setCity(option);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value) getSearchOptions(value);
  };

  useEffect(() => {
    if (city) {
      setSearch(city.name);
      setOptions([]);
    }
  }, [city]);

  return {
    search,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  };
};
