import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { findByTestAttr, testStore } from './../utils/utils';
import App from './App';

jest.mock('../src/components/landing/MenCategory');
jest.mock('../src/components/landing/WomenCategory');
jest.mock('../src/components/preview-collection/PreviewCollection');

const store = configureStore()({});
const wrapper = shallow(<App store={store} />);

describe('App', () => {
  test('Should render without errors', () => {
    const component = findByTestAttr(wrapper, 'AppComponent');
    expect(component.length).toBe(1);
  });
});
