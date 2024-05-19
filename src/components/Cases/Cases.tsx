import React from 'react';
import { Flex } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { casesSelector, isLoadingSelector } from '../../store/cases/casesSelectors';
import { getCases } from '../../store/cases/casesThunks';
import { AppDispatch } from '../../store/store';
import { CaseCard } from '../CaseCard/CaseCard';
import { CasesHeader } from '../CasesHeader/CasesHeader';
import { Rectangle } from '../Rectangle/Rectangle';
import { Case } from '../../store/cases/casesTypes';

import s from './Cases.module.scss';

export const Cases = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cases = useSelector(casesSelector);
  const isLoading = useSelector(isLoadingSelector);

  const [selected, setSelected] = React.useState<string[]>([]);
  const [filteredCases, setFilteredCases] = React.useState<Case[]>([]);

  const middle = Math.ceil(cases.length / 2);
  const filteredMiddle = Math.ceil(filteredCases.length / 2);

  const firstColumn = cases.slice(0, middle);
  const secondColumn = cases.slice(middle);

  const filteredFirstColumn = filteredCases.slice(0, filteredMiddle);
  const filteredSecondColumn = filteredCases.slice(filteredMiddle);

  const Skeleton = (
    <Flex justify="center" align="top" className={s.column} vertical gap={20}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Rectangle key={`RECTANGLE_${index}`} />
      ))}
    </Flex>
  );

  const renderColumn = (array: Case[]) => {
    if (!array.length) {
      return <div className={s.empty}></div>;
    }
    return (
      <Flex justify="center" align="top" className={s.column} vertical gap={20}>
        {array.map((card) => {
          return <CaseCard card={card} key={card.Id} />;
        })}
      </Flex>
    );
  };

  React.useEffect(() => {
    if (Boolean(selected.length)) {
      setFilteredCases(
        cases.filter((project) => project.Filters.some((filter) => selected.includes(filter.Name))),
      );
    }
  }, [selected]);

  React.useEffect(() => {
    dispatch(getCases());
  }, []);

  return (
    <div className={s.root}>
      <CasesHeader selected={selected} setSelected={setSelected} />

      {isLoading && (
        <Flex justify="center" className={s.wrapper} gap={20}>
          {Array.from({ length: 2 }).map(() => Skeleton)}
        </Flex>
      )}

      {!isLoading && (
        <Flex justify="center" className={s.wrapper} gap={20}>
          {renderColumn(Boolean(selected.length) ? filteredFirstColumn : firstColumn)}
          {renderColumn(Boolean(selected.length) ? filteredSecondColumn : secondColumn)}
        </Flex>
      )}
    </div>
  );
};
