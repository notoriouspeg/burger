var connection = require('./connection.js');

// Methods for MySQL commands
var orm = {

    // selectAll
    selectAll: function (cb) {
        // Run MySQL Query
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // insertOne
    insertOne: function (burger_name, callback) {

        var queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES ("'
        queryString += burger_name
        queryString += '", FALSE)'
        console.log(queryString)
        // Run MySQL Query
        connection.query(queryString, 
         function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    // updateOne

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table;
   
        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;
        console.log(queryString)
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      }    
};

// Export the ORM object in module.exports.
module.exports = orm;
