import React from 'react';
import { shallow } from 'enzyme';
import ForecastRow from './ForecastRow';

it("renders without crashing", () => {
    const forecastRowProps = {
        filter: { min: 0, max: 0},
        name: 'London',
        dayForecasts: [],
        getIconUrl: (icon: string) => ''
    };
    const wrapper = shallow(<ForecastRow {...forecastRowProps} />);
    expect(wrapper).toMatchSnapshot();
});
