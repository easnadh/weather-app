import s from './Additional.module.scss';
import { Card } from './Card.tsx';
import { DataType } from '../../../types';

export const Additional = ({ data }: DataType) => {
  const today = data.list[0];

  return (
    <>
      <div className={s.additional}>
        <Card
          className={s.additional__card}
          label='sunrise'
          icon='sunrise'
          info={`${new Date(data.sunrise * 1000).getHours()}:${new Date(
            data.sunrise * 1000
          ).getMinutes()}`}
        />
        <Card
          className={s.additional__card}
          label='sunset'
          icon='sunset'
          info={`${new Date(data.sunset * 1000).getHours()}:${new Date(
            data.sunset * 1000
          ).getMinutes()}`}
        />
        <Card
          className={s.additional__card}
          label='wind'
          icon='wind'
          info={`${Math.round(today.wind.speed)} km/h`}
        />
        <Card
          className={s.additional__card}
          icon='humidity'
          label='humidity'
          info={`${today.main.humidity} %`}
        />
        <Card
          className={s.additional__card}
          icon='pop'
          label='precipitation'
          info={`${Math.round(today.pop * 100)}%`}
        />
        <Card
          className={s.additional__card}
          icon='pressure'
          label='pressure'
          info={`${today.main.pressure} hPa`}
        />
        <Card
          className={s.additional__card}
          icon='visibility'
          label='visibility'
          info={`${(today.visibility / 1000).toFixed()} km`}
        />
      </div>
    </>
  );
};
