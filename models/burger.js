
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
  updateOne: function(objCol, condition, cb) {
    orm.update("burgers", objCol, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
