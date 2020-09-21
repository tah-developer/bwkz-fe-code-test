import React, { FC } from 'react';
import styled from 'styled-components';

import { IDay } from './App';

const TodayWeather = styled.div`
  display: flex;
  padding: 16px 32px;
  background: #f4f4f4;
`;

const TodayInfosWrapper = styled.div`
  flex-grow: 1;
  .c {
    font-size: 36px;
    line-height: 36px;
    font-weight: 300;
  }
  .t {
    font-size: 50px;
    line-height: 50px;
    font-weight: 700;
  }
`;

const TodayIconWrapper = styled.div`
  .i {
    width: 50px;
    height: 50px;
    margin: 0 auto 8px auto;
    border-radius: 50px;
    border: 4px solid #e5e5e5;
    background: #fff;
    img {
      width: 100%;
    }
  }
  .d {
    font-size: 16px;
    font-weight: 300;
  }
`;

interface IProps {
  name: string;
  forecast: IDay;
  getIconUrl: (icon: string) => string;
}

const WeatherCard: FC<IProps> = ({
  name,
  forecast,
  getIconUrl,
}): JSX.Element => (
  <TodayWeather>
    <TodayInfosWrapper>
      <div className="c">{name}</div>
      <div className="t">{Math.round(forecast.temp)}°C</div>
    </TodayInfosWrapper>
    <TodayIconWrapper>
      <div className="i">
        <img src={getIconUrl(forecast.icon)} />
      </div>
      <div className="d">{forecast.desc}</div>
    </TodayIconWrapper>
  </TodayWeather>
);

export default WeatherCard;
