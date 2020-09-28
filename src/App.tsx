import React from 'react';
import './App.css';
import { SearchInput } from './components/SearchInput/SearchInput';
import { useSavedCities } from './helpers/hooks/useSavedCities';
import { WeatherBlock } from './components/WeatherBlock/WeatherBlock';
import { useStore } from './data/WeatherContext';
import { observer } from 'mobx-react-lite';
import { getCityId } from './helpers/getCityId';

const UPDATE_INTERVAL = 5 * 60 * 1000;

const App: React.FC = observer(() => {
  const cities = useSavedCities();
  const store = useStore();

  React.useEffect(() => {
    store.loadAll(cities);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      store.loadAll(cities);
    }, UPDATE_INTERVAL);

    return () => clearInterval(timer);
  }, [cities]);

  const minCityId = store.getMinCityTemperatureId();
  const maxCityId = store.getMaxCityTemperatureId();

  return (
    <div>
      <header>
        <SearchInput />
      </header>
      <main>
        {cities.map((city) => {
          return (
            <WeatherBlock
              className="block"
              min={getCityId(city) === minCityId}
              max={getCityId(city) === maxCityId}
              key={city[0] + city[1]}
              city={city}
            />
          );
        })}
      </main>
    </div>
  );
});

export default App;
