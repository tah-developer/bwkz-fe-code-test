import React, { FC } from 'react';
import ForecastRowItem from './ForecastRowItem';
import styled from 'styled-components';

import { IFilters, IDay } from './App';

const ForecastRowWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  overflow-x: auto;
  margin-bottom: 16px;
  background: #f4f4f4;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
`;

const CityName = styled.div`
  padding-right: 16px;
`;

interface IProps {
  filter: IFilters;
  name: string;
  dayForecasts: IDay[];
  getIconUrl: (icon: string) => string;
}

const ForecastRow: FC<IProps> = ({
  filter,
  name,
  dayForecasts,
  getIconUrl,
}): JSX.Element => (
  <ForecastRowWrapper>
    <CityName>{name}</CityName>
    {dayForecasts.map(({ day, temp, icon, desc }: IDay, i: number) => {
      if (
        (filter.min && temp > filter.min) ||
        (filter.max && temp < filter.max)
      )
        return null;

      return (
        <ForecastRowItem
          key={i}
          day={day}
          temp={temp}
          icon={icon}
          desc={desc}
          getIconUrl={getIconUrl}
        />
      );
    })}
  </ForecastRowWrapper>
);

export default ForecastRow;
