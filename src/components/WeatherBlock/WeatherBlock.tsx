import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {useWeatherData} from '../../helpers/hooks/useWeatherData';
import {CityCoordinates} from '../../helpers/hooks/useSavedCities';
import {useWeatherDetails} from '../../helpers/hooks/useWeatherDetails';
import './WeatherBlock.css';
import {useRemoveCity} from '../../helpers/hooks/useRemoveCity';
import {RelativeDate} from '../RelativeDate/RelativeDate';
import classNames from 'classnames';

export interface WeatherBlockProps {
    city: CityCoordinates;
    className?: string;
    min: boolean;
    max: boolean;
}

export const WeatherBlock: React.FC<WeatherBlockProps> = observer(
    ({className, city, min, max}) => {
        const weatherData = useWeatherData(city);
        const details = useWeatherDetails(weatherData);
        const removeCity = useRemoveCity();

        const onRemove = React.useCallback(() => {
            removeCity(city);
        }, [removeCity, city]);

        const isLoading = weatherData && weatherData.loading;
        console.log({...weatherData});
        return (
            <div
                className={classNames('weather', className, {
                    weather__min: min,
                    weather__max: max,
                })}
            >
                <button className="weather__remove" onClick={onRemove} />
                <div className="weather__title">
                    {details.icon && (
                        <img
                            className="weather__icon"
                            src={`http://openweathermap.org/img/wn/${details.icon}@2x.png`}
                            alt={details.description}
                        />
                    )}
                    {
                        <h2>
                            {details.name} {details.main && details.main.temp}{' '}
                            {isLoading && <span className="weather__spin" />}
                        </h2>
                    }
                </div>
                <div className="weather__description">
                    {details.wind && (
                        <div className="weather__data">
                            <div
                                style={{
                                    transform: `rotate(${details.wind.deg}deg)`,
                                }}
                                className="weather__arrow"
                            />

                            <span>{details.wind.speed} m/s</span>
                            {details.main && (
                                <>
                                    &nbsp;|&nbsp;
                                    <span>{details.main.pressure} hPa</span>
                                    &nbsp;|&nbsp;
                                    <span>{details.main.humidity}%</span>
                                </>
                            )}
                        </div>
                    )}
                    {details.updated && (
                        <RelativeDate
                            timestamp={details.updated}
                            className="weather__updated"
                        />
                    )}
                </div>
            </div>
        );
    }
);
