import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './Tabs';

it("renders without crashing", () => {
    const tabsProps = {
        currentActivePage: 0,
        onActivePageChange: (value: number) => {}
    };
    const wrapper = shallow(<Tabs {...tabsProps} />);
    expect(wrapper).toMatchSnapshot();
});
