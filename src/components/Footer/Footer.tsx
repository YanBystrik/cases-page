import React from 'react';
import { Button, Flex, Typography } from 'antd';

import s from './Footer.module.scss';
import { tgIcon } from './icons';

const { Text } = Typography;

export const Footer = () => {
  return (
    <Flex className={s.root} vertical align="center" justify="center">
      <Text className={s.text}>Стать клиентом или партнером!</Text>
      <div className={s.dash}></div>
      <Text className={s.mail}>hello@it-cron.ru</Text>
      <Flex className={s.wrapper} justify="space-between" gap={150}>
        <Flex vertical justify="center">
          <Text className={s.country}>Россия, Москва</Text>
          <Text className={s.adress}>119330, ул. Мосфильмовская, 35</Text>
          <Text className={s.phone}>+7 (495) 006-13-57</Text>
        </Flex>
        <Button className={s.button}>Оставить заявку</Button>
        <Flex vertical justify="center">
          <Text className={s.link}>Связаться через</Text>
          {tgIcon}
        </Flex>
      </Flex>
    </Flex>
  );
};
