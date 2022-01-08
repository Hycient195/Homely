import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
// import { createWrapper } from 'next-redux-wrapper';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// export const wrapper = createWrapper(store)

export default store;