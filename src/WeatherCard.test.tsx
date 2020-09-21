import React from 'react';
import { shallow } from 'enzyme';
import WeatherCard from './WeatherCard';

it("renders without crashing", () => {
    const weatherCardProps = {
        name: 'London',
        forecast: {
            day: 'Sun',
            temp: 5,
            icon: '',
            desc: 'Chill',
            timestamp: 14601600
        },
        getIconUrl: (icon: string) => ''
    };
    const wrapper = shallow(<WeatherCard {...weatherCardProps} />);
    expect(wrapper).toMatchSnapshot();
});
