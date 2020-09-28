import {WeatherData} from "../../data/weatherStore";

export interface WeatherDetails {
    name?: string;
    icon?: string;
    description?: string;
    wind?: {
        speed: number;
        deg: number;
    };
    main?: {
        temp: number,
        pressure: number,
        humidity: number,
    };
    updated?: number;
}

export function useWeatherDetails(weatherData: Optional<WeatherData>): WeatherDetails {
    let details: WeatherDetails = {};

    if (!weatherData) {
        return details;
    }

    if (weatherData.data) {
        let {wind, main, weather, name} = weatherData.data;
        details.wind = wind;
        details.main = main;
        details.name = name;
        details.updated = weatherData.updated;
        if (weather[0]) {
            details.icon = weather[0].icon;
            details.description = weather[0].icon;
        }
    }

    return details;
}
