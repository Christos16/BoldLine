import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Footer,
  Product,
  Navbar,
  MenCategory,
  WomenCategory,
  FormInput,
  Cookies,
  PrivacyPolicy
} from './components';
import CheckoutItem from './components/checkout-item/CheckoutItem';
import PreviewCollection from './components/preview-collection/PreviewCollection';

class App extends React.Component {
  render() {
    return (
      <div data-test='AppComponent'>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={PreviewCollection} />
          </Switch>
          <Switch>
            <Route exact path='/checkout/payment' component={FormInput} />
          </Switch>
          <Switch>
            <Route exact path='/shop/men' component={MenCategory} />
          </Switch>
          <Switch>
            <Route exact path='/shop/women' component={WomenCategory} />
          </Switch>
          <Switch>
            <Route exact path='/product/:productId' component={Product} />
          </Switch>
          <Switch>
            <Route exact path='/checkout' component={CheckoutItem} />
          </Switch>
          <Switch>
            <Route exact path='/privacy-policy' component={PrivacyPolicy} />
          </Switch>
          <br />

          <Cookies />

          <br />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
