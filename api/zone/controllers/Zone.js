'use strict';

/**
 * Zone.js controller
 *
 * @description: A set of functions called "actions" for managing `Zone`.
 */

let ResultMsg = require('../../common/utils/result/result-msg.js')

module.exports = {

  /**
   * Retrieve zone records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    let returnOb = null
    if (ctx.query._q) {
      returnOb = strapi.services.zone.search(ctx.query);
    } else {
      returnOb = strapi.services.zone.fetchAll(ctx.query);
    }
    return returnOb.then((data) => {
      ctx.send(ResultMsg.success(data));
    }, (err) => {
      ctx.send(err);
    });
  },

  /**
   * Retrieve a zone record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.zone.fetch(ctx.params);
  },

  /**
   * Count zone records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.zone.count(ctx.query);
  },

  /**
   * Create a/an zone record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.zone.add(ctx.request.body);
  },

  /**
   * Update a/an zone record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.zone.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an zone record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.zone.remove(ctx.params);
  }
};
