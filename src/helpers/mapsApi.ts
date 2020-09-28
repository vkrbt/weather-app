import {get} from './request';
import buildUrl from 'build-url';

export interface CitySuggestItem {
    id: string;
    place_name: string;
    text: string;
    center: [number, number]
}

export async function fetchCitiesSuggest(city: string): Promise<CitySuggestItem[]> {
    let response = await get(
        buildUrl('https://api.mapbox.com/', {
            path: `geocoding/v5/mapbox.places/${city}.json`,
            queryParams: {
                language: 'en_US',
                types: 'place',
                access_token: String(process.env.REACT_APP_MAP_API_KEY),
            },
        })
    );

    return response.features || [];
}
