'use strict';

/**
 * Exercise.js controller
 *
 * @description: A set of functions called "actions" for managing `Exercise`.
 */

module.exports = {

  /**
   * Retrieve exercise records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.exercise.search(ctx.query);
    } else {
      return strapi.services.exercise.fetchAll(ctx.query);
    }
  },

  notFinishExercises: async (ctx) => {
    let id = ctx.query.consumers;
    let returnObj = null
    if (ctx.query._q) {
      returnObj = strapi.services.exercise.search(ctx.query);
    } else {
      returnObj =  strapi.services.exercise.fetchAll(ctx.query);
    }
    return returnObj.then(function (data) {
      let newArray = []
      for (let i = 0; i < data.length; i++) {
        let scores = data[i].scores
        for (let j = 0; j < scores.length; j++) {
          if (scores[j].consumer == id) {
            if (scores[j].status == '进行中' || scores[j].status == '未开始') {
              newArray.push(data[i]);
              break;
            }
          }
        }
      }
      ctx.send(newArray);
    });
  },

  hasFinishExercises: async (ctx) => {
    let id = ctx.query.consumers;
    let returnObj = null
    if (ctx.query._q) {
      returnObj = strapi.services.exercise.search(ctx.query);
    } else {
      returnObj =  strapi.services.exercise.fetchAll(ctx.query);
    }
    return returnObj.then(function (data) {
      let newArray = []
      for (let i = 0; i < data.length; i++) {
        let scores = data[i].scores
        for (let j = 0; j < scores.length; j++) {
          if (scores[j].consumer == id) {
            if (scores[j].status == '已完成') {
              newArray.push(data[i]);
              break;
            }
          }
        }
      }
      ctx.send(newArray);
    });
  },

  wrongExercises: async (ctx) => {
    let id = ctx.query.consumers;
    let returnObj = null
    if (ctx.query._q) {
      returnObj = strapi.services.exercise.search(ctx.query);
    } else {
      returnObj =  strapi.services.exercise.fetchAll(ctx.query);
    }
    return returnObj.then(function (data) {
      let newArray = []
      for (let i = 0; i < data.length; i++) {
        let scores = data[i].scores
        for (let j = 0; j < scores.length; j++) {
          if (scores[j].consumer == id) {
            if (scores[j].status === '已完成') {
              if (!scores[j].is_all_right) {
                newArray.push(data[i]);
                break;
              }
            }
          }
        }
      }
      ctx.send(newArray);
    });
  },

  findByUser: async (ctx) => {
    let userId = ctx.query.id;
    let obj = {
      status: 200,
      data: [],
      msg: 'dfdfdf'
    }
    ctx.send(obj);
    // return
  },

  /**
   * Retrieve a exercise record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.exercise.fetch(ctx.params);
  },

  /**
   * Count exercise records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.exercise.count(ctx.query);
  },

  /**
   * Create a/an exercise record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.exercise.add(ctx.request.body);
  },

  /**
   * Update a/an exercise record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.exercise.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an exercise record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.exercise.remove(ctx.params);
  }
};
