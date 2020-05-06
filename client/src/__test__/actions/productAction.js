import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import { GET_PRODUCTS } from '../../action/types';
import { getProducts } from '../../action/productAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('calls appropriate requests', function(done) {
    moxios.wait(() => {
      expect(moxios.requests.mostRecent().config.url).to.equal(
        'https://www.google.com'
      );
      moxios.wait(() => {
        expect(moxios.requests.mostRecent().config.url).to.equal(
          'https://www.yahoo.com'
        );
        done();
      });
    });
  });
});
