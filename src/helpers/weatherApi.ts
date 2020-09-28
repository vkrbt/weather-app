import {get} from "./request";
import buildUrl from "build-url";
import {CityCoordinates} from "./hooks/useSavedCities";

export interface WeatherResponseData {
    "coord": {
        "lon":number,
        "lat": number,
    },
    "weather": {
        "id": number,
        "main": string,
        "description": string,
        "icon": string,
    }[],
    "base": "stations",
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number,
    },
    "visibility": 10000,
    "wind": {
        "speed": number,
        "deg": number,
    },
    "clouds": {"all": 90},
    "dt": 1601274045,
    "sys": {"type": 1, "id": 6554, "country": "FR", "sunrise": 1601273602, "sunset": 1601316212},
    "timezone": 7200,
    "id": 6448047,
    "name": "Brest",
    "cod": 200
}

export async function getWeatherByCity(city: CityCoordinates): Promise<WeatherResponseData | null> {
    try {
        let response = await get(
            buildUrl('https://api.openweathermap.org', {
                path: '/data/2.5/weather',
                queryParams: {
                    lat: String(city[1]),
                    lon: String(city[0]),
                    appid: String(process.env.REACT_APP_WEATHER_API_KEY),
                    units: 'metric',
                },
            })
        );

        return response;
    } catch (e) {
        return null;
    }
}

export async function getWeather(cities: string[]): Promise<WeatherResponseData | null> {
    try {
        let response = await get(
            buildUrl('https://api.openweathermap.org', {
                path: 'data/2.5/group',
                queryParams: {
                    id: cities.join(','),
                    appid: String(process.env.REACT_APP_WEATHER_API_KEY),
                    units: 'metric',
                },
            })
        );

        return response;
    } catch (e) {
        return null;
    }
}

