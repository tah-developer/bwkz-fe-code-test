import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const ForecastRowItemWrapper = styled.div`
  padding: 16px;
  text-align: center;
  border-left: 2px solid #e5e5e5;
  .d {
    font-weight: bold;
    text-transform: uppercase;
  }
  .f {
    display: flex;
    align-items: center;
    margin: 8px 0;
    img {
      width: 50px;
      height: 50px;
      margin-left: 8px;
      border-radius: 50px;
      background: #fff;
    }
  }
  .d {
    font-size: 16px;
  }
`;

interface IProps {
  day: string;
  temp: number;
  icon: string;
  desc: string;
  getIconUrl: (icon: string) => string;
}

const ForecastRowItem: FC<IProps> = ({
  day,
  temp,
  icon,
  desc,
  getIconUrl,
}): JSX.Element => {
  return (
    <ForecastRowItemWrapper>
      <div className="d">{day}</div>
      <div className="f">
        {Math.round(temp)}°C
        <img src={getIconUrl && getIconUrl(icon)} alt="icon" />
      </div>
      <div className="d">{desc}</div>
    </ForecastRowItemWrapper>
  );
};

export default ForecastRowItem;
