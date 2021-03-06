import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';

import routes from './routes';

// Contain defination of default routes

const configureRouter = (options = { listener: false, logger: false }) => {
  const router = createRouter(routes, {
    defaultRoute: 'home'
  })
    .usePlugin(browserPlugin());

  if (options.listener)
    router.usePlugin(listenersPlugin());

  if (options.logger)
    router.usePlugin(loggerPlugin);

  return router;
};

export default configureRouter;
