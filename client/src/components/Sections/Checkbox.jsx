import React, { useState } from 'react';
import { menCategory, womenCategory } from './DataToFilter';
import Checkbox from 'react-simple-checkbox';

const CheckedBox = props => {
  const [Checked, setChecked] = useState([]);
  console.log(Checked);

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
    console.log(newChecked);
  };

  let renderCheckBox;
  if (props.category === 'women') {
    renderCheckBox = womenCategory.map((value, index) => (
      <div key={index}>
        <Checkbox
          className='ml-2'
          color='#eb7434'
          onChange={() => toggle(value._id)}
          type='checkbox'
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span className='ml-2'>{value.name}</span>
      </div>
    ));
  } else {
    renderCheckBox = menCategory.map((value, index) => (
      <div key={index}>
        <Checkbox
          className='ml-2'
          color='#eb7434'
          onChange={() => toggle(value._id)}
          type='checkbox'
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span className='ml-2'>{value.name}</span>
      </div>
    ));
  }

  return (
    <React.Fragment>
      <div data-test='checkbox'>
        <button
          class='btn btn-light dropdown-toggle mb-2 btn-block'
          type='button'
          data-toggle='collapse'
          data-target='#collapseExample'
          aria-expanded='false'
          aria-controls='collapseExample'
        >
          Categories{' '}
          <span>
            <i class='fas fa-filter'></i>
          </span>
        </button>

        <div class='card' style={{ borderRadius: '15px' }}>
          <div class='collapse mt-4' id='collapseExample'>
            {renderCheckBox}

            <br />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckedBox;
