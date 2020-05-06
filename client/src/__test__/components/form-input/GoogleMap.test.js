import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../../../../utils/utils';
import GoogleMap from '../../../components/form-inputs/GoogleMap';

const enzymeWrapper = shallow(<GoogleMap />);

describe('Should render the component <GoogleMap /> without error', () => {
  test('should render a div tag with [data-test] of GoogleMap', () => {
    const component = findByTestAttr(enzymeWrapper, 'GoogleMap');
    expect(component.length).toBe(1);
  });
});
