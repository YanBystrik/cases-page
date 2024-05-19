import React from 'react';

import { Typography } from 'antd';
import s from './CasesHeader.module.scss';
import { Filters } from '../Filters/Filters';
import { FiltersTable } from '../Filters/components/FiltersTable';

const { Title } = Typography;

interface CasesHeaderProps {
  selected: string[];
  setSelected: (value: string[]) => void;
}

export const CasesHeader = ({ selected, setSelected }: CasesHeaderProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <Title className={s.title}>Кейсы</Title>
        <Filters open={open} setOpen={setOpen} selected={selected} setSelected={setSelected} />
      </div>

      <div className={s.firstRect} />

      <div className={s.filtersWrapper}>
        {open && <FiltersTable selected={selected} setSelected={setSelected} />}
      </div>

      <div className={s.secondRect}></div>
    </div>
  );
};
