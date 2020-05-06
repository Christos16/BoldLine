import { SUCCESS_BUY } from './types';
import axios from 'axios';

export const transactionSuccess = (cartInfo, data) => {
  let variables = {
    cartInfo,
    paymentData: data
  };

  console.log(variables);
  axios
    .post('/api/users/successBuy', variables)
    .then(res => dispatch({ type: SUCCESS_BUY, payload: res.data }))
    .catch(err => console.log(err));
};
