'use strict';

const Controller = require('egg').Controller;

class JspangController extends Controller {
  async getGirls() {
    const { ctx } = this;

    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>杨幂，正在向你走来</h1>');
      }, 5000);
    });

  }
}

module.exports = JspangController;
