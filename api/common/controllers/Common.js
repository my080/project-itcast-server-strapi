'use strict';

/**
 * Common.js controller
 *
 * @description: A set of functions called "actions" for managing `Common`.
 */

let RedisDao = require('../dao/redis-dao.js');
let redisDao = new RedisDao();
// let Schedule = require('../../../common/schedule/schedule.js');
//
// let schedule = null

module.exports = {

  login: async (ctx) => {
    return strapi.services.common.login(ctx.request.body);
  },

  subjectReport: async (ctx) => {
    return strapi.services.common.subjectReport(ctx);
  },

  questionReport: async (ctx) => {
    // if (!schedule) {
    //   schedule = new Schedule();
    //   schedule.censusTask(ctx);
    // }
    return strapi.services.common.quertionReport(ctx);
  },

  logout: async (ctx) => {
    let sessionId = ctx.query.code
    if (sessionId) {
      return redisDao.drop(sessionId).then(function () {
        let result = {
          'success': true,
          'msg': '登出成功！'
        }
        ctx.send(result);
      });
    } else {
      let result = {
        'success': true,
        'msg': '登出成功！'
      }
      ctx.send(result);
    }
  },

  saveLoginStatus: async (ctx) => {
    let sessionId = ctx.request.body.loginStatusCode
    let result = {
      'success': true,
      'data': null,
      'msg': '登录成功！'
    }
    if (sessionId) {
      let str = JSON.stringify(ctx.request.body);
      redisDao.add(sessionId, str).catch(function (error) {
        console.log(error);
      })
      result.data = ctx.request.body;
      ctx.send(result);
    } else {
      result.data = null;
      result.success = false;
      ctx.send(result);
    }
  },

  activate: async (ctx) => {
    strapi.services.common.activate(ctx);
    let returnObj = {
      code: 200,
      msg: 'success',
      success: true,
      data: {}
    }
    return returnObj;
  },

  sendEmail: async (ctx) => {
    let email = ctx.request.body.email;
    let title = ctx.request.body.title;
    let html = ctx.request.body.html;
    strapi.services.common.sendEmail(email, title, html)
    let returnObj = {
      code: 200,
      msg: 'success',
      success: true,
      data: {}
    }
    return returnObj;
  },

  register: async (ctx) => {
    let isSuccess = strapi.services.common.register(ctx.query)
    let returnObj = {
      code: 200,
      msg: 'success',
      success: true,
      data: {}
    }
    if (isSuccess) {
      returnObj.success = false;
    }
    return returnObj;
  },

  /**
   * Destroy a/an common record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.common.remove(ctx.params);
  }
};
