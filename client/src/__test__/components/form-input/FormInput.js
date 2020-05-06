import React from 'react';
import MyForm, { MyInnerForm } from '../../../components/form-inputs/FormInput';
import { shallow } from 'enzyme';
describe('MyForm', () => {
  test('should update an input when it is changed', () => {
    const tree = shallow(<MyForm />);

    tree
      .find(MyInnerForm)
      .dive()
      .find('input')
      .simulate('change', {
        // you must add this next line as (Formik calls e.persist() internally)
        persist: () => {},
        // simulate changing e.target.name and e.target.value
        target: {
          name: 'name',
          value: 'ian'
        }
      });

    const newValue = tree
      .find(MyInnerForm)
      .dive()
      .find('input')
      .props().value;

    expect(newValue).toEqual('ian');
  });
});
