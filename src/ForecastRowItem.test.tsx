import React from 'react';
import { shallow } from 'enzyme';
import ForecastRowItem from './ForecastRowItem';

it("renders without crashing", () => {
    const forecastRowItemProps = {
        day: 'Sun',
        temp: 37,
        icon: '',
        desc: 'Burning',
        getIconUrl: (icon: string) => ''
    };
    const wrapper = shallow(<ForecastRowItem {...forecastRowItemProps} />);
    expect(wrapper).toMatchSnapshot();
});
