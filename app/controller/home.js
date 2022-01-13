'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async detail() {
    const { ctx } = this;
    ctx.body = '<h1>这是详情页</h1>';
  }
}

module.exports = HomeController;
