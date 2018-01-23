import React from 'react';
import { render } from 'react-dom';

import { RouterProvider } from 'react-router5';
import configureRouter from '../config/router';

import Application from './layouts/application';
import configureStore from './stores';

const router = configureRouter({
  listener: true, logger: true
});

const store = configureStore(router);

// console.log('Router', router);
// console.log('Store: ', store);

const resources = {
  store
};

const app = (
  <RouterProvider router={router} >
    <Application {...resources} />
  </RouterProvider>
);

router.start(() => render(app, document.getElementById('app')));
