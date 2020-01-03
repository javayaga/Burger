// require connection 
const connection = require("./connection");

const orm = {
    // method for selecting all burgers 
    selectAll: function(tableInput) {
        const queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    // },

    // insertOne: 


    // updateOne:





}


module.exports = orm;