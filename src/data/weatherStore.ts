import {CityCoordinates} from "../helpers/hooks/useSavedCities";
import {getWeatherByCity, WeatherResponseData} from "../helpers/weatherApi";
import {getCityId} from "../helpers/getCityId";

export type WeatherData = {
    updated?: number
    data?: WeatherResponseData,
    city?: CityCoordinates,
    loading: boolean;
}

export function createWeatherStore() {
    return {
        weather: {} as Record<string, WeatherData>,
        async loadWeather(city: CityCoordinates) {
            if (!this.weather[getCityId(city)]) {
                this.weather[getCityId(city)] = {
                    loading: true,
                };
            } else {
                this.weather[getCityId(city)].loading = true;
            }

            let cityWeather = await getWeatherByCity(city);

            if (!cityWeather) {
                return;
            }

            this.weather[getCityId(city)] = {
                updated: Date.now(),
                data: cityWeather,
                city,
                loading: false,
            }
        },

        async loadAll(cities: CityCoordinates[]) {
            return Promise.all(cities.map((city) => this.loadWeather(city)));
        },

        getMinCityTemperatureId() {
            let minTemperature = Infinity;
            let weatherId = undefined;
            Object.entries(this.weather).forEach(([id, value]) => {
                if (value.data && value.data.main) {
                    if (minTemperature > value.data.main.temp) {
                        minTemperature = value.data.main.temp;
                        weatherId = id;
                    }
                }
            });

            return weatherId;
        },
        getMaxCityTemperatureId() {
            let maxTemperature = -Infinity;
            let weatherId = undefined;
            Object.entries(this.weather).forEach(([id, value]) => {
                if (value.data && value.data.main) {
                    if (maxTemperature < value.data.main.temp) {
                        maxTemperature = value.data.main.temp;
                        weatherId = id;
                    }
                }
            });

            return weatherId;
        }

    }
}

export type WeatherStore = ReturnType<typeof createWeatherStore>
