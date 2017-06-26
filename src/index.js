import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; //attaches store to react container components
import {searchImgur} from './actions/galleryActions'

const store = configureStore();
store.dispatch(searchImgur(undefined, undefined, 0))
/*
store.dispatch(searchImgur(undefined, undefined, 1))
store.dispatch(searchImgur(undefined, undefined, 2))
store.dispatch(searchImgur(undefined, undefined, 3))
store.dispatch(searchImgur(undefined, undefined, 4))
*/




render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
)
