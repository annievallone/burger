
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  insertOne: function(tableInput, col1, valOfCol1) {
    orm.insertOne("burgers", tableInput, col1, valOfCol1, function(res) {
      cb(res);
    });
  },
  updateOne: function(objCol, eatenState, condition, cb) {
    orm.updateOne(objCol, eatenState, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
