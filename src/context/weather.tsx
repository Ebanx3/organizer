import { useState, createContext, ReactNode } from "react";

interface weather {
  city: string;
  setCity: (city: string) => void;
  getWeather: () => Promise<WeatherData | null>;
}

export const weatherContext = createContext({} as weather);
const Provider = weatherContext.Provider;

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState("Montevideo");

  const getWeather = async (): Promise<WeatherData | null> => {
    try {
      const appId = import.meta.env.VITE_API_KEY;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${appId}`;
      const res = await fetch(url);
      const response = await res.json();
      const { lat, lon } = response[0];

      const urlWeather = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const res2 = await fetch(urlWeather);
      const responseWeather = await res2.json();

      const newWeather: WeatherData = {
        temp: responseWeather.main.temp,
        max: responseWeather.main.temp_max,
        min: responseWeather.main.temp_min,
        info: responseWeather.weather[0].main,
      };

      return newWeather;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return <Provider value={{ city, setCity, getWeather }}>{children}</Provider>;
};
