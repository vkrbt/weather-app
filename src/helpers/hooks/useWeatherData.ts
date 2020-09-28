import {CityCoordinates} from "./useSavedCities";
import {useStore} from "../../data/WeatherContext";
import {getCityId} from "../getCityId";
import {WeatherData} from "../../data/weatherStore";

export function useWeatherData(city: CityCoordinates): Optional<WeatherData> {
    let store = useStore();

    return store.weather[getCityId(city)];
}
