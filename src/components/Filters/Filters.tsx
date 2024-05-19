import React from 'react';
import cn from 'classnames';
import { Flex, Typography } from 'antd';

import s from './Filters.module.scss';

const { Title, Text } = Typography;

interface FiltersProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  selected: string[];
  setSelected: (value: []) => void;
}

export const Filters = ({ open, setOpen, selected, setSelected }: FiltersProps) => {
  const handleClickClear = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    setSelected([]);
  };

  const handleClickFilters = () => {
    setOpen(!open);
  };

  return (
    <div className={s.root} onClick={handleClickFilters}>
      {Boolean(selected.length) && (
        <Flex align="center" gap={8} onClick={handleClickClear}>
          <Text className={s.clear}>Очистить</Text>
          <div className={s.clearDash} />
        </Flex>
      )}

      <div
        className={cn(s.rectangle, {
          [s.rectangleBackground]: open,
          [s.rectangleBorder]: Boolean(selected.length),
        })}></div>
      <div className={cn(s.dash, { [s.hideDash]: open })} />
      <Title className={cn(s.title, { [s.colorTitle]: open })}>Фильтры</Title>
    </div>
  );
};
