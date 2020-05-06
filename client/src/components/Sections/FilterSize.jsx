import React, { useState } from 'react';
import Checkbox from 'react-simple-checkbox';
const FilterSize = props => {
  const [Checked, setChecked] = useState([]);

  const toggle = value => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);

    props.handleFilters(newChecked);
  };

  let renderFilterSize;

  if (props.list) {
    renderFilterSize = props.list.map((value, index) => (
      <div key={index}>
        <Checkbox
          className='ml-2'
          color='#1e5b29'
          onChange={() => toggle(value._id)}
          type='checkbox'
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span className='ml-1'>{value.name}</span>
      </div>
    ));
  } else {
    renderFilterSize = <div>Loading</div>;
  }

  return (
    <React.Fragment>
      <div data-test='FilterSize'>
        <button
          class='btn btn-light dropdown-toggle mb-2 btn-block'
          type='button'
          data-toggle='collapse'
          data-target='#collapseExample3'
          aria-expanded='false'
          aria-controls='collapseExample3'
        >
          Sizes{' '}
          <span>
            <i class='fas fa-sort'></i>
          </span>
        </button>

        <div className='card' style={{ borderRadius: '15px' }}>
          <div class='collapse mt-4' id='collapseExample3'>
            {renderFilterSize}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FilterSize;
