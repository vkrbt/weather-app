import React from "react";
import {CITIES_STORAGE_KEY, getItem} from "../localStorage";
import {useEventListener} from "./useEventListener";

export type CityCoordinates = [number, number];

export function useSavedCities(): CityCoordinates[] {
    let [cities, setCities] = React.useState(getItem(CITIES_STORAGE_KEY) || []);

    useEventListener(window, 'storage-change', () => {
        setCities(getItem(CITIES_STORAGE_KEY));
    }, []);

    return cities;
}
