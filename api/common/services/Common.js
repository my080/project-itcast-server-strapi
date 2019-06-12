'use strict';

/**
 * Common.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');
let Utils = require('../utils/util.js')
// const RedisDao = require('../dao/redis-dao.js');

module.exports = {

  login: (params) => {
    // let user = params
    // var str = JSON.stringify(user)
    // let redisDao = new RedisDao();
    // redisDao.add('user', str)
    let result = {
      code: 200,
      msg: 'success',
      data: null
    }
    return result;
  },

  studentLogin: (params) => {

  },

  activate: (param) => {
    console.log(param);
  },

  logout: () => {
    let result = {
      code: 200,
      msg: 'success',
      data: null
    }
    return result;
  },

  subjectReport (ctx) {
    let exercises = [];
    let exercisesObj = {};
    let questions = [];
    let questionsObj = {};
    let subjects = [];
    let subjectObj = {};
    let totalCount = 0;
    let scores = [];

    let subjectReport = function (data) {
      subjects = data;
      let result = {}

      for (let i = 0; i < subjects.length; i ++) {
        subjectObj[subjects[i].id] = subjects[i];
        result[subjects[i].id] = {};
        result[subjects[i].id].right = 0;
        result[subjects[i].id].half = 0;
        result[subjects[i].id].wrong = 0;
        result[subjects[i].id].start = 0;
        result[subjects[i].id].unStart = 0;
        result[subjects[i].id].total = 0;
        result[subjects[i].id]['name'] = subjects[i].name;
      }

      for (let i = 0; i < scores.length; i ++) {
        let answerResult = scores[i]['answer_result'];
        for (let key in answerResult) {
          let option = answerResult[key];
          let subjectId = questionsObj[key]['subjects'][0];
          if (subjectId) {
            if (option.hasOwnProperty('correct') && (option.correct == true || option.correct == 'right')) {
              result[subjectId].right = result[subjectId].right + 1;
              result[subjectId].start = result[subjectId].start + 1;
            } else if (option.hasOwnProperty('correct') && option.correct == 'half') {
              result[subjectId].half = result[subjectId].half + 1;
              result[subjectId].start = result[subjectId].start + 1;
            } else if (option.hasOwnProperty('correct') && (option.correct == false || !option.correct)) {
              result[subjectId].wrong = result[subjectId].wrong + 1;
              result[subjectId].start = result[subjectId].start + 1;
            } else {
              result[subjectId].unStart = result[subjectId].unStart + 1;
            }
            result[subjectId].total = result[subjectId].total + 1;
          }
        }
      }
      return result;
    };

    let queryScores = function (data) {
      questions = data;
      for (let j = 0; j < questions.length; j ++) {
        questionsObj[questions[j].id] = questions[j];
      }
      for (let i = 0; i < exercises.length; i ++) {
        if (exercises[i].questions && exercises[i].questions.length > 0) {
          for (let k = 0; k < exercises[i].questions.length; k ++) {
            for (let j = 0; j < questions.length; j ++) {
              if (exercises[i].questions[k].id == questions[j].id) {
                totalCount = totalCount + 1;
                break;
              }
            }
          }
        }
      }
      let ids = [];
      for (let i = 0; i < exercises.length; i ++) {
        ids.push(exercises[i].id);
      }
      let scoreParam = {
        exercise: ids
      }
      const scoreFilters = strapi.utils.models.convertParams('score', scoreParam);
      return Score.find()
        .where(scoreFilters.where);
    }

    let listSubjects = function (data) {
      scores = data;
      return Subject.find();
    };

    let queryQuestions = function (data) {
      exercises = data;
      for (let i = 0; i < data.length; i++) {
        exercisesObj[data[i].id] = data[i];
      }
      return Question.find();
    }

    let id = ctx.query.id;
    let params = {
      'consumers': id
    };
    const filters = strapi.utils.models.convertParams('exercise', params);
    // Select field to populate.
    const populate = Exercise.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Exercise
      .find()
      .where(filters.where)
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(filters.populate || populate)
      .then(queryQuestions)
      .then(queryScores)
      .then(listSubjects)
      .then(subjectReport);
  },

  quertionReport (ctx) {
    let questions = [];
    let exercises = [];
    let exercisesObj = {};
    let totalCount = 0;
    let rightCount = 0;
    let wrongCount = 0;
    let halfCount = 0;
    let unStartCount = 0
    let census = function (data) {
      for (let i = 0; i < data.length; i ++) {
        let answerResult = data[i]['answer_result'];
        for (let key in answerResult) {
          if (answerResult[key].hasOwnProperty('correct') && (answerResult[key].correct == true || answerResult[key].correct == 'right')) {
            rightCount = rightCount + 1;
          } else if (answerResult[key].hasOwnProperty('correct') && answerResult[key].correct == 'half') {
            halfCount = halfCount + 1;
          } else if (answerResult[key].hasOwnProperty('correct') && (answerResult[key].correct == false || !answerResult[key].correct)) {
            wrongCount = wrongCount + 1;
          }
        }
      }
      unStartCount = totalCount - rightCount - wrongCount - halfCount;
      let result = {
        right: rightCount,
        wrong: wrongCount,
        half: halfCount,
        total: totalCount,
        unStart: unStartCount
      }
      return result;
    }

    let queryScores = function (data) {
      questions = data;
      for (let i = 0; i < exercises.length; i ++) {
        if (exercises[i].questions && exercises[i].questions.length > 0) {
          for (let k = 0; k < exercises[i].questions.length; k ++) {
            for (let j = 0; j < questions.length; j ++) {
              if (exercises[i].questions[k].id == questions[j].id) {
                totalCount = totalCount + 1;
                break;
              }
            }
          }
        }
      }
      let ids = [];
      for (let i = 0; i < exercises.length; i ++) {
        ids.push(exercises[i].id);
      }
      let scoreParam = {
        exercise: ids
      }
      const scoreFilters = strapi.utils.models.convertParams('score', scoreParam);
      return Score.find()
        .where(scoreFilters.where);
    }

    let queryQuestions = function (data) {
      exercises = data
      for (let i = 0; i < data.length; i++) {
        exercisesObj[data[i].id] = data[i];
      }
      return Question.find();
    }

    let id = ctx.query.id;
    let params = {
      'consumers': id
    }

    const filters = strapi.utils.models.convertParams('exercise', params);

    // Select field to populate.
    const populate = Exercise.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Exercise
      .find()
      .where(filters.where)
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(filters.populate || populate)
      .then(queryQuestions)
      .then(queryScores)
      .then(census);
  },

  sendEmail (recipient, subject, html) {
    Utils.sendEmail(recipient, subject, html);
  },

  // register: (ctx) => {
  //
  // },

  /**
   * Promise to fetch all commons.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('common', params);
    // Select field to populate.
    const populate = Common.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Common
      .find()
      .where(filters.where)
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(filters.populate || populate);
  },

  /**
   * Promise to fetch a/an common.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Common.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Common
      .findOne(_.pick(params, _.keys(Common.schema.paths)))
      .populate(populate);
  },

  /**
   * Promise to count commons.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('common', params);

    return Common
      .countDocuments()
      .where(filters.where);
  },

  /**
   * Promise to add a/an common.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Common.associations.map(ast => ast.alias));
    const data = _.omit(values, Common.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Common.create(data);

    // Create relational data and return the entry.
    return Common.updateRelations({ _id: entry.id, values: relations });
  },

  /**
   * Promise to edit a/an common.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Common.associations.map(a => a.alias));
    const data = _.omit(values, Common.associations.map(a => a.alias));

    // Update entry with no-relational data.
    const entry = await Common.updateOne(params, data, { multi: true });

    // Update relational data and return the entry.
    return Common.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an common.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Select field to populate.
    const populate = Common.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await Common
      .findOneAndRemove(params, {})
      .populate(populate);

    if (!data) {
      return data;
    }

    await Promise.all(
      Common.associations.map(async association => {
        if (!association.via || !data._id || association.dominant) {
          return true;
        }

        const search = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: data._id } : { [association.via]: { $in: [data._id] } };
        const update = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: null } : { $pull: { [association.via]: data._id } };

        // Retrieve model.
        const model = association.plugin ?
          strapi.plugins[association.plugin].models[association.model || association.collection] :
          strapi.models[association.model || association.collection];

        return model.update(search, update, { multi: true });
      })
    );

    return data;
  },

  /**
   * Promise to search a/an common.
   *
   * @return {Promise}
   */

  search: async (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('common', params);
    // Select field to populate.
    const populate = Common.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    const $or = Object.keys(Common.attributes).reduce((acc, curr) => {
      switch (Common.attributes[curr].type) {
        case 'integer':
        case 'float':
        case 'decimal':
          if (!_.isNaN(_.toNumber(params._q))) {
            return acc.concat({ [curr]: params._q });
          }

          return acc;
        case 'string':
        case 'text':
        case 'password':
          return acc.concat({ [curr]: { $regex: params._q, $options: 'i' } });
        case 'boolean':
          if (params._q === 'true' || params._q === 'false') {
            return acc.concat({ [curr]: params._q === 'true' });
          }

          return acc;
        default:
          return acc;
      }
    }, []);

    return Common
      .find({ $or })
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  }
};
