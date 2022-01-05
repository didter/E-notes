'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async detail() {
    const { ctx } = this;
    ctx.body = '这是详情页'
  }
}

module.exports = HomeController;
