import React, { useState, useEffect } from 'react';
import styles from './LandingPage.module.css';
import imageUrl from '../../assets/woman.jpg';
import image2Url from '../../assets/men.jpg';
import {
  Checkbox,
  Card,
  RadioButton,
  SearchFeature,
  FilterSize,
  Navbar
} from '..';
import { getProducts } from '../../action/productAction';
import { price, size } from '../Sections/DataToFilter';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Layouts/Loading';
import image from '../../assets/gold.png';

const WomenCategory = () => {
  const dispatch = useDispatch();
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const productFound = useSelector(state => state.product.NumberOfProducts);
  const products = useSelector(state => state.product.products);
  const [postSize, setPostSize] = useState(0);
  const [searchTerms, setSearchTerms] = useState('');
  const [Filters, setFilters] = useState({
    womenCategory: [],
    price: [],
    size: []
  });

  //Getting the principal function to fetch products with a specified limit
  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit
    };
    dispatch(getProducts(variables, 'Women'));
  }, []);

  let cardItem;
  if (products.length > 0) {
    cardItem = products.map(product => (
      <Card product={product} key={product._id} productFound={productFound} />
    ));
  } else {
    cardItem = <Loading />;
  }
  //Fetching the clothes based on the "Women" Category
  const showFilteredResults = filters => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters
    };
    dispatch(getProducts(variables, 'Women'));
    setSkip(0);
  };

  //Splitting the price as it is categorised in an array and parsing it such as [0, 9.99] for filtering
  const handlePrice = value => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };

  //Getting the filters from the three components below that provided specifications and also sending as props the type of filtering
  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };
    console.log('filters', filters);
    newFilters[category] = filters;
    if (category === 'price') {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }

    console.log('new Filters', newFilters);
    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const updateSearchTerms = newSearchTerm => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm
    };
    setSkip(0);

    setSearchTerms(newSearchTerm);

    dispatch(getProducts(variables, 'Women'));
  };

  return (
    <div className='font-italic'>
      <div className='container'>
        <div
          id='carouselExampleSlidesOnly'
          class='carousel slide mt-1 mb-3'
          data-ride='carousel'
        >
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img class='d-block w-100' src={image} alt='First slide' />
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-4'>
            <SearchFeature refreshFunction={updateSearchTerms} />
            <br />
            <h2 className='font-weight-bold ml-2 text-info mb-4'>FILTERS</h2>
            <Checkbox
              handleFilters={filters => handleFilters(filters, 'womenCategory')}
              category='women'
            />
            <br />
            <br />
            <RadioButton
              list={price}
              handleFilters={filters => handleFilters(filters, 'price')}
            />
            <br />
            <br />
            <FilterSize
              list={size}
              handleFilters={filters => handleFilters(filters, 'size')}
            />
          </div>

          <div class='col-sm-8'>
            <h3>
              <span className='font-weight-bold'>{productFound}</span>{' '}
              <span className='font-weight-bold text-secondary'>
                Product Found{' '}
              </span>
            </h3>
            <br />
            <div class='row'>{cardItem}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WomenCategory;
