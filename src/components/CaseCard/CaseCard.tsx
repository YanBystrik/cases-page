import React from 'react';
import cn from 'classnames';
import { Card, Image, Typography } from 'antd';
import { Case } from '../../store/cases/casesTypes';
import s from './CaseCard.module.scss';

interface CaseCardProps {
  card: Case;
}

const { Title, Text } = Typography;

export const CaseCard = ({ card }: CaseCardProps) => {
  const cardBackground = { backgroundColor: `#${card.CaseColor}` };
  const cardStyles = { body: { padding: 0, display: 'flex', justifyContent: 'center' } };

  const color =
    card.CaseColor.includes('FFFFF') ||
    card.CaseColor.includes('F6F6F6') ||
    card.CaseColor.includes('F7EDDD');

  return (
    <Card className={s.card} style={cardBackground} styles={cardStyles}>
      <Image className={s.image} alt="image" src={card.Image} preview={false} />
      <div className={s.hoverContent}>
        <Title
          className={cn(s.title, {
            [s.color]: color,
          })}>
          {card.Title}
        </Title>

        <div className={s.wrapper}>
          {card.Filters.map((item, index) => (
            <Text
              className={cn(s.filter, {
                [s.color]: color,
              })}
              key={item.Id}>
              {item.Name}
              {index < card.Filters.length - 1 ? ',' : ''}
            </Text>
          ))}
        </div>
      </div>
    </Card>
  );
};
