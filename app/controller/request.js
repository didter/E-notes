'use strict';

const Controller = require('egg').Controller;

class RequestController extends Controller{

  // GET 正常传参
  async getGirl() {
    const { ctx } = this;
    ctx.body = ctx.query;
  }

  // GET Result传参风格
  async getBoy() {
    const { ctx } = this;
    ctx.body = ctx.params.name;
  }

  // POST 正常传参
  async add() {
    const { ctx } = this;
    ctx.body = 'add';
    ctx.body = {
      status: 200,
      data: ctx.request.body
    };
  };

}

module.exports = RequestController;
