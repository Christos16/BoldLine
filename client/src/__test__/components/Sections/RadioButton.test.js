import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../../../../utils/utils';
import RadioButton from '../../../components/Sections/RadioButton';

const enzymeWrapper = shallow(<RadioButton />);

describe('Should render the component <RadioButton /> without error', () => {
  test('should render a div tag with [data-test] of RadioButton', () => {
    const component = findByTestAttr(enzymeWrapper, 'RadioButton');
    expect(component.length).toBe(1);
  });
});
