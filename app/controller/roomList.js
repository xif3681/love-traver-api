'use strict';
const Controller = require('egg').Controller;
class RoomListController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };
    await this.ctx.render('news/list.tpl', dataList);
  }
  async index() {
    const { ctx } = this;
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };
    ctx.body = dataList;
  }
}

module.exports = RoomListController;
