import React from 'react';
import { Flex, Typography } from 'antd';
import s from './Header.module.scss';
import { icon, menuIcon } from './icons';

const { Text } = Typography;

export const Header = () => {
  return (
    <Flex className={s.root} align="center" justify="center">
      <Flex className={s.wrapper} align="center" justify="center">
        <Flex className={s.content} align="center" justify="">
          <div className={s.icon}>{icon}</div>
          <Flex className={s.pagesWrapper} justify="space-between">
            {/* These should all be links*/}
            <Text className={s.page} style={{ color: '#fb6542' }}>
              Кейсы
            </Text>
            <Text className={s.page}>Компания</Text>
            <Text className={s.page}>Услуги</Text>
            <Text className={s.page}>Контакты</Text>
          </Flex>
        </Flex>
        <Flex className={s.menuIcon}>{menuIcon}</Flex>
      </Flex>
    </Flex>
  );
};
