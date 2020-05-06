import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../../../../utils/utils';
import FilterSize from '../../../components/Sections/FilterSize';

const enzymeWrapper = shallow(<FilterSize />);

describe('Should render the component <FilterSize /> without error', () => {
  test('should render a div tag with [data-test] of FilterSize', () => {
    const component = findByTestAttr(enzymeWrapper, 'FilterSize');
    expect(component.length).toBe(1);
  });
});
