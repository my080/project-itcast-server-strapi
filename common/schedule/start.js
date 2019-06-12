'use strict';

let TaskSchedule = require ('./schedule.js');
let taskSchedule = new TaskSchedule();

setTimeout(function () {
  taskSchedule.censusTask();
}, 1000);

