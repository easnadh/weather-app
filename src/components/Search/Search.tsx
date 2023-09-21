import { Button, MenuList, MenuListItem, TextInput } from 'react95';
import { ChangeEvent } from 'react';
import s from './Search.module.scss';
import { OptionType } from '../../types';

type Props = {
  search: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: OptionType) => void;
  onSubmit: () => void;
};

export const Search = ({
  search,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => {
  return (
    <>
      <div className={s.form}>
        <div className={s.search}>
          <TextInput
            className={s.search__input}
            value={search}
            placeholder='Search city...'
            onChange={onInputChange}
            fullWidth
          />
          <MenuList className={s.search__result}>
            {options.map((option: OptionType, index: number) => (
              <MenuListItem
                key={option.name + '-' + index}
                onClick={() => onOptionSelect(option)}
              >
                {option.name}, {option.country}
              </MenuListItem>
            ))}
          </MenuList>
        </div>
        <Button className={s.form__button} size='lg' onClick={onSubmit}>
          get
        </Button>
      </div>
    </>
  );
};
