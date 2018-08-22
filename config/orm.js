var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result)
    });
  },
  insertOne: function(tableInput, col1, valOfCol1, cb) {
    var queryString = "INSERT into ?? (??) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [tableInput, col1, valOfCol1 ], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result)
    });
  },
  updateOne: function(objCol, eatenState, condition, cb) {
    var queryString = "UPDATE burgers SET ?? = ? where id = ?;";
    console.log(queryString);

    connection.query(queryString, [objCol, eatenState, condition], function(err, result) {

      if (err) throw err;
      console.log(result);
      cb();
    });
  }
};

module.exports = orm;
