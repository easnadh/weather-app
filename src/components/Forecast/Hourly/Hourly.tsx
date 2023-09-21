import s from './Hourly.module.scss';
import { DataType } from '../../../types';

export const Hourly = ({ data }: DataType) => {
  return (
    <>
      <div className={s.scroll}>
        <div className={s.hourly}>
          {data.list.map((item, i) => (
            <div className={s.item} key={i}>
              {new Date(item.dt * 1000).getHours()}:00
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                title={item.weather[0].description}
              />
              {Math.round(item.main.temp)}°C
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
