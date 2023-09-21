import { Search } from '../components/Search/Search.tsx';
import { Forecast } from '../components/Forecast/Forecast.tsx';
import { useForecast } from '../hooks/useForecast.ts';

export const Home = () => {
  const { search, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();

  return (
    <>
      <Search
        search={search}
        options={options}
        onInputChange={onInputChange}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}
      />
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <>Select a city to get forecast</>
      )}
    </>
  );
};
