var date = new Date();
var day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
var month = date.getMonth() + 1, month = (month < 10) ? '0' + month : month;
var seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
var minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
var hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
var year = date.getFullYear();
var now = day + '/' + month + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;

var UtilDate = {

    now: function () {
        return now;
    },

    begin: function () {
        return Date.now();
    },

    end: function (begin) {
        return (Date.now() - begin) / 1000;
    }
};

module.exports = UtilDate;