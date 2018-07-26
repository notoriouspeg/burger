var orm = require("../config/orm.js");

var burger = {

    selectAll: function(callback){
      orm.selectAll(function(res){
        callback(res);
      });
    },
  // The variables cols and vals are arrays.
  insertOne: function(burger_name, callback) {
    orm.insertOne(burger_name, function(res) {
      callback(res);
    });
  },

  updateOne: function(burgerID, callback) {
      orm.updateOne(burgerID, function(res){
          callback(res);
      });
  }

};

module.exports = burger;

