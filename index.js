var chalk = require('chalk');
var Date = require('./lib/Date.js');

var is = Function.prototype.call.bind(Object.prototype.toString);

var now = Date.now();
var begin = Date.begin();

var pre = '  ' + chalk.bold.green(now);
var type = {
    log: chalk.bold.cyan(' log '),
    info: chalk.bold.cyan(' info '),
    warning: chalk.bold.yellow(' warning '),
    error: chalk.bold.red(' error '),
    danger: chalk.bold.red(' danger ')
};

var waveless = {

    log: function (data, o = false) {
        let r = pre + type.log;
        if (o) {
            var d = JSON.stringify(data, null, 2);
            return console.log(r + chalk.bold.red(Date.end(begin) + "ms ") + is(data) + "\n\r" + d);
        } else {
            return console.log(r + data + ' ' + chalk.bold.red(Date.end(begin) + "ms"));
        }
    },

    info: function (data, o = false) {
        let r = pre + type.info;
        if (o) {
            var d = JSON.stringify(data, null, 2);
            return console.log(r + chalk.bold.red(Date.end(begin) + "ms ") + is(data) + "\n\r" + d);
        } else {
            return console.log(r + data + ' ' + chalk.bold.red(Date.end(begin) + "ms"));
        }
    },

    warning: function (data, o = false) {
        let r = pre + type.warning;
        if (o) {
            var d = JSON.stringify(data, null, 2);
            return console.log(r + chalk.bold.red(Date.end(begin) + "ms ") + is(data) + "\n\r" + d);
        } else {
            return console.log(r + data + ' ' + chalk.bold.red(Date.end(begin) + "ms"));
        }
    },

    error: function (data, o = false) {
        let r = pre + type.error;
        if (o) {
            var d = JSON.stringify(data, null, 2);
            return console.log(r + chalk.bold.red(Date.end(begin) + "ms ") + is(data) + "\n\r" + d);
        } else {
            return console.log(r + data + ' ' + chalk.bold.red(Date.end(begin) + "ms"));
        }
    },

    danger: function (data, o = false) {
        let r = pre + type.danger;
        if (o) {
            var d = JSON.stringify(data, null, 2);
            return console.log(r + chalk.bold.red(Date.end(begin) + "ms ") + is(data) + "\n\r" + d);
        } else {
            return console.log(r + data + ' ' + chalk.bold.red(Date.end(begin) + "ms"));
        }
    }
};

module.exports = waveless;