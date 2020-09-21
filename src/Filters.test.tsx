import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';
import { Filter } from './types';

it("renders without crashing", () => {
    const filtersProps = {
        min: undefined,
        max: undefined,
        onFilterChange: (newFilter: Filter) => { }
    };
    const wrapper = shallow(<Filters {...filtersProps} />);
    expect(wrapper).toMatchSnapshot();
});
