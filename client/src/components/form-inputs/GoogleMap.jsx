import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import styles from './form.module.scss';

const AutoComplete = props => {
  const [address, setAddress] = useState('');

  const handleSelect = async => {
    setAddress(address);
  };

  const handleChange = text => {
    setAddress(text);
    props.getInputFunction(text);
  };

  return (
    <div data-test='GoogleMap'>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div class='form-group'>
              <label for='inputAddress2' className={styles.input}>
                Address
              </label>
              <input
                type='text'
                class='form-control'
                {...getInputProps({ placeholder: 'Type address' })}
                id='inputAddress2'
                placeholder='Ermou 24'
              />
            </div>
            <div>
              {loading ? <div>...loading</div> : null}
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff'
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default AutoComplete;
