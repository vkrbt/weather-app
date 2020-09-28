import {CITIES_STORAGE_KEY, getItem, setItem} from "../localStorage";
import {CityCoordinates} from "./useSavedCities";
import React from "react";

export function useAddCity() {
    return React.useCallback((cityCoordinates: CityCoordinates) => {
        let cities = getItem(CITIES_STORAGE_KEY) || [];
        if (cities.find((coordinate: CityCoordinates) => coordinate.join(';') === cityCoordinates.join(';'))) {
            return cities;
        }

        cities.push(cityCoordinates);
        setItem(CITIES_STORAGE_KEY, cities);

        return cities;
    }, []);
}
