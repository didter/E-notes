'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/detail', controller.home.detail);
  router.get('/getGirls', controller.jspang.getGirls);

  // get 请求
  router.get('/getGirl', controller.request.getGirl);
  // get (Result风格） 请求
  router.get('/getBoy/:name', controller.request.getBoy);

  // post 请求
  router.post('/add', controller.request.add);
};
