import React, { useState } from 'react';
import styles from './SearchFeature.module.css';

function SearchFeature(props) {
  const [searchTerm, setSearchTerms] = useState('');

  const onChangeSearch = event => {
    setSearchTerms(event.target.value);
    props.refreshFunction(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form class='navbar-search' data-test='SearchFeature'>
      <div class='input-group'>
        <input
          type='text'
          class='form-control  border-0 small'
          onChange={onChangeSearch}
          placeholder='Search for...'
          aria-label='Search'
          aria-describedby='basic-addon2'
          value={searchTerm}
        />
        <div class='input-group-append'>
          <button class='btn btn-primary' type='button'>
            <i class='fas fa-search fa-sm'></i>
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchFeature;
