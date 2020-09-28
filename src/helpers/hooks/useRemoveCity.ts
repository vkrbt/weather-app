import React from "react";
import {CITIES_STORAGE_KEY, getItem, setItem} from "../localStorage";
import {CityCoordinates} from "./useSavedCities";

export function useRemoveCity() {
    return React.useCallback((cityCoordinates: CityCoordinates) => {

        let cities = getItem(CITIES_STORAGE_KEY) || [];

        let updatedCities = cities.filter((coordinate: CityCoordinates) => coordinate.join(';') !== cityCoordinates.join(';'));
        setItem(CITIES_STORAGE_KEY, updatedCities);

        return updatedCities;
    }, []);
}
