import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import GalleryPage from './components/gallery/GalleryPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={GalleryPage}/>
  </Route>
);
