import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AutoComplete from './GoogleMap';
import styles from './form.module.scss';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };
  }

  onAddressChange = text => {
    this.setState({ address: text });
    console.log(this.state.address);
  };
  render(props) {
    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          address: '',
          city: ''
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('First Name is required'),
          lastName: Yup.string().required('Last Name is required'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          address: Yup.string()
            //  .address('Password must be at least 6 characters')
            .required('An address is required'),
          city: Yup.string().required('Confirmed city is required')
        })}
        onSubmit={fields => {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
        }}
        render={({ errors, status, touched }) => (
          <div className='mt-3' data-set='FormInput'>
            <h3 className={`${styles.text} font-weight-bold mb-2`}>
              Shipping Details
            </h3>
            <Form>
              <div className='form-row'>
                <div className='col-sm-6'>
                  <div className='form-group' data-set='FirstName'>
                    <label htmlFor='firstName' className={styles.input}>
                      First Name
                    </label>
                    <Field
                      name='firstName'
                      type='text'
                      className={
                        `${styles.size} form-control` +
                        (errors.firstName && touched.firstName
                          ? ' is-invalid'
                          : '')
                      }
                    />
                    <ErrorMessage
                      name='firstName'
                      component='div'
                      className='invalid-feedback'
                    />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='form-group' data-set='LastName'>
                    <label htmlFor='lastName' className={styles.input}>
                      Last Name
                    </label>
                    <Field
                      name='lastName'
                      type='text'
                      className={
                        `${styles.size} form-control` +
                        (errors.lastName && touched.lastName
                          ? ' is-invalid'
                          : '')
                      }
                    />
                    <ErrorMessage
                      name='lastName'
                      component='div'
                      className='invalid-feedback'
                    />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='email' className={styles.input}>
                  Email
                </label>
                <Field
                  name='email'
                  type='text'
                  className={
                    `${styles.size} form-control` +
                    (errors.email && touched.email ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='invalid-feedback'
                />
              </div>
              <div data-set='AutoComplete'>
                <AutoComplete
                  getInputFunction={this.onAddressChange.bind(this)}
                />
              </div>
            </Form>
          </div>
        )}
      />
    );
  }
}

export default FormInput;
