import { useEffect, useState } from "react";
import useWeather from "../hooks/useWeather";
import Loading from "../assets/loader.svg";

import sunIcon from "../assets/sun-high.svg";
import cloudIcon from "../assets/cloud.svg";
import rainIcon from "../assets/cloud-rain.svg";
import stormIcon from "../assets/cloud-storm.svg";
import mistIcon from "../assets/mist.svg";

const weatherIcons = {
  Clear: sunIcon,
  Clouds: cloudIcon,
  Drizzle: rainIcon,
  Rain: rainIcon,
  Thunderstorm: stormIcon,
  Mist: mistIcon,
};

export default function Weather() {
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const { getWeather, city } = useWeather();

  const getWeatherData = async () => {
    setLoadingWeather(true);
    const weatherDataRecibed: WeatherData | null = await getWeather();
    setLoadingWeather(false);
    setWeatherData(weatherDataRecibed);
  };

  const kelvin = 273.15;

  useEffect(() => {
    getWeatherData();
  }, [city]);

  return (
    <>
      {loadingWeather && (
        <img src={Loading} alt="loader" className="h-10 w-14" />
      )}
      {weatherData != null && !loadingWeather && (
        <>
          <span className="font-bold text-2xl">
            {(weatherData?.temp - kelvin).toFixed(0)}°
          </span>
          <img
            src={weatherIcons[weatherData.info]}
            alt="clima"
            className="mr-4"
          />
          <div className="flex flex-col">
            <span>{city}</span>
            <span className="text-sm">
              min {(weatherData?.min - kelvin).toFixed(0)}° / max{" "}
              {(weatherData?.max - kelvin).toFixed(0)}°
            </span>
          </div>
        </>
      )}
    </>
  );
}
