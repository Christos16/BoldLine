import React, { useState } from 'react';

const RadioButton = props => {
  const [selected, setSelected] = useState('0');
  console.log(selected);
  const handleChange = event => {
    setSelected(event.target.value);
    props.handleFilters(selected);
  };

  let renderRadioButton;
  if (props.list) {
    renderRadioButton = props.list.map(item => (
      <div className='radio' id={item._id}>
        <label>
          <input
            id={item._id}
            className='ml-3'
            type='radio'
            value={item._id}
            checked={selected === item._id}
            onChange={handleChange}
          />
          <span className='ml-3'>{item.name}</span>
        </label>
      </div>
    ));
  }

  return (
    <React.Fragment>
      <div data-test='RadioButton'>
        <button
          class='btn btn-light dropdown-toggle mb-2 btn-block'
          type='button'
          data-toggle='collapse'
          data-target='#collapseExample2'
          aria-expanded='false'
          aria-controls='collapseExample2'
        >
          Price Range{' '}
          <span>
            <i class='fas fa-euro-sign'></i>
          </span>
        </button>

        <div className='card' style={{ borderRadius: '15px' }}>
          <div class='collapse mt-4' id='collapseExample2' data-set='input'>
            {renderRadioButton}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RadioButton;
