import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router-dom';

import App from './containers/App';


const getRoutes = (store) => {
  return (
    <div>
      <Route path="/" component={App}></Route>
    </div>

  );
};

export default getRoutes;

