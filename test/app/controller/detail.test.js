'use strict';

const { app } = require('egg-mock/bootstrap');

describe('detail test', () => {
  it('detail index', () => {
    return app.httpRequest()
      .get('/detail')
      .expect(200)
      .expect('<h1>这是详情页</h1>');
  });
});
