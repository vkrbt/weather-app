import {CityCoordinates} from "./hooks/useSavedCities";

export function getCityId(city: CityCoordinates) {
    return `${city[0]};${city[1]}`
}
