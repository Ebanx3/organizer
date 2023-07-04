import { useContext } from "react";
import { weatherContext } from "../context/weather";

export default function useWeather() {
  return useContext(weatherContext);
}
