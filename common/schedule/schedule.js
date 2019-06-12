
const schedule = require('node-schedule');
const scheduleConfig = require('./config.js');

class TaskSchedule {

  constructor () {
    this.config = scheduleConfig;
  }

  censusTask () {
    schedule.scheduleJob(this.config.census, () => {
      console.log('统计任务掉强度！');
    });
    console.log('执行调度任务！');
  }

}

module.exports = TaskSchedule;
