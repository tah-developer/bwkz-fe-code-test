import React from "react";
import ForecastRowItem from "./ForecastRowItem";
import styled from "styled-components";

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

const ForecastRow = ({ filter, name, dayForecasts, getIconUrl }: any) => (
  <ForecastRowWrapper>
    <CityName>{name}</CityName>
    {dayForecasts.map(({ day, temp, icon, desc, timestamp }: any) => {
      if (filter.min && temp > filter.min) return null;
      if (filter.max && temp < filter.max) return null;
      return (
        <ForecastRowItem
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
