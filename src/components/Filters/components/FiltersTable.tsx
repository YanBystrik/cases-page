import React from 'react';
import cn from 'classnames';
import { Flex, Typography } from 'antd';
import { platform, services, industry, langs } from './constants';

import s from './FiltersTable.module.scss';

const { Text } = Typography;

interface FiltersTableProps {
  selected: string[];
  setSelected: (value: string[]) => void;
}

export const FiltersTable = ({ selected, setSelected }: FiltersTableProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleClickFilter = (filter: string) => {
    if (selected.includes(filter)) {
      setSelected(selected.filter((item) => item !== filter));
      return;
    }
    setSelected([...selected, filter]);
  };

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={cn(s.root, { [s.slideInFromRight]: isVisible })}>
      <div className={s.dash} />

      <Flex justify="space-between" className={s.filtersWrapper}>
        <Flex vertical>
          <Text className={s.title}>Отрасль</Text>
          {industry.map((item, index) => (
            <Text
              className={cn(s.filter, { [s.selected]: selected.includes(item) })}
              key={index}
              onClick={() => handleClickFilter(item)}>
              {item}
            </Text>
          ))}
        </Flex>

        <Flex vertical>
          <Text className={s.title}>Платформы</Text>
          {platform.map((item, index) => (
            <Text
              className={cn(s.filter, { [s.selected]: selected.includes(item) })}
              key={index}
              onClick={() => handleClickFilter(item)}>
              {item}
            </Text>
          ))}
        </Flex>

        <Flex vertical>
          <Text className={s.title}>Услуги</Text>
          {services.map((item, index) => (
            <Text
              className={cn(s.filter, { [s.selected]: selected.includes(item) })}
              onClick={() => handleClickFilter(item)}
              key={index}>
              {item}
            </Text>
          ))}
        </Flex>

        <Flex vertical>
          <Text className={s.title}>Языки</Text>
          {langs.map((item, index) => (
            <Text
              className={cn(s.filter, { [s.selected]: selected.includes(item) })}
              onClick={() => handleClickFilter(item)}
              key={index}>
              {item}
            </Text>
          ))}
        </Flex>
      </Flex>
    </div>
  );
};
