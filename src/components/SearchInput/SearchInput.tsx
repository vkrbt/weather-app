import * as React from 'react';
import Autosuggest from 'react-autosuggest';
import {CitySuggestItem, fetchCitiesSuggest} from "../../helpers/mapsApi";
import {ChangeEvent} from "react";
import "./SearchInput.css";
import {useSavedCities} from "../../helpers/hooks/useSavedCities";
import {useAddCity} from "../../helpers/hooks/useAddCity";
import {useStore} from "../../data/WeatherContext";

export interface SearchInputProps {

}

function getSuggestionValue(suggestion: CitySuggestItem) {
    return suggestion.text;
}

function renderSuggestion(suggestion: CitySuggestItem) {
    return (
        <span>{suggestion.place_name}</span>
    );
}

export const SearchInput: React.FC<SearchInputProps> = ({}) => {
    let [suggestions, setSuggestions] = React.useState<CitySuggestItem[]>([]);
    let [value, setValue] = React.useState('');
    let currentValueRef = React.useRef('');
    let addCity = useAddCity();
    let store = useStore();

    let loadSuggestions = React.useCallback(async (suggestValue) => {
        let cities = await fetchCitiesSuggest(suggestValue);

        if (currentValueRef.current === suggestValue) {
            setSuggestions(cities);
        }
    }, [value]);

    let updateValue = React.useCallback((value: string) => {
        setValue(value);
        currentValueRef.current = value;
    }, [setValue])

    let onChange = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
        updateValue(e.target.value);
    }, [setValue]);

    let onSuggestionsFetchRequested = React.useCallback(({value}) => {
        loadSuggestions(value);
    }, [loadSuggestions]);

    let onSuggestionsClearRequested = React.useCallback(() => {
        setSuggestions([]);
    }, [setSuggestions])

    let onSelectSuggestion = React.useCallback((_, {suggestion}: {suggestion: CitySuggestItem}) => {
        updateValue('');
        addCity(suggestion.center);
        store.loadWeather(suggestion.center)
    }, [updateValue, addCity, store]);

    let inputProps = {
        placeholder: "Enter city",
        value,
        onChange,
    };

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            onSuggestionSelected={onSelectSuggestion}
            highlightFirstSuggestion
            inputProps={inputProps}
        />
    );
}
