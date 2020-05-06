import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../../../../utils/utils';
import SearchFeature from '../../../components/Sections/SearchFeature';

const enzymeWrapper = shallow(<SearchFeature />);

describe('Should render the component <SearchFeature /> without error', () => {
  test('should render a div tag with [data-test] of SearchFeature', () => {
    const component = findByTestAttr(enzymeWrapper, 'SearchFeature');
    expect(component.length).toBe(1);
  });
});
