import s from './Forecast.module.scss';
import { DataType } from '../../types';
import { GroupBox } from 'react95';
import { Additional } from './Additional/Additional.tsx';
import { Hourly } from './Hourly/Hourly.tsx';

export const Forecast = ({ data }: DataType) => {
  const today = data.list[0];

  return (
    <>
      <div className={s.forecast}>
        <p>
          {data.name}, {data.country}
        </p>
        <GroupBox className={s.main} label='today'>
          <h1>{Math.round(today.main.temp)}°C</h1>
          <p>{today.weather[0].description}</p>
          <p>
            📈{Math.ceil(today.main.temp_max)}° / 📉
            {Math.floor(today.main.temp_min)}° / 🌡️feels like {''}
            {Math.round(today.main.feels_like)}°
          </p>
        </GroupBox>
        <Hourly data={data} />
        <Additional data={data} />
      </div>
    </>
  );
};
