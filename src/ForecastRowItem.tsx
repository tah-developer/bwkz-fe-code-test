import React from "react";
import styled from "styled-components";

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

const ForecastRowItem = (props: any) => {
  const [data, setData] = React.useState<any>({});

  React.useEffect(() => {
    const { day, temp, icon, desc, getIconUrl } = props;

    setData({ day, temp, icon, desc, getIconUrl });
  }, [props]);

  return (
    <ForecastRowItemWrapper>
      <div className="d">{data.day}</div>
      <div className="f">
        {Math.round(data.temp)}°C
        <img src={data.getIconUrl(data.icon)} alt="" />
      </div>
      <div className="d">{data.desc}</div>
    </ForecastRowItemWrapper>
  );
};

export default ForecastRowItem;
