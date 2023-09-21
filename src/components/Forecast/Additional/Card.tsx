import { GroupBox } from 'react95';
import { icons } from '../../../assets/icons';

type Props = {
  className?: string;
  icon:
    | 'sunrise'
    | 'sunset'
    | 'wind'
    | 'humidity'
    | 'pressure'
    | 'visibility'
    | 'pop';
  label: string;
  info: string;
};

export const Card = ({ className, icon, label, info }: Props) => {
  const Icon = icons[icon];
  return (
    <>
      <GroupBox className={className} label={label}>
        <span>
          <Icon /> {info}
        </span>
      </GroupBox>
    </>
  );
};
