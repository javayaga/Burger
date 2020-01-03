// import connection and orm
const connection = require("../config/connection");
const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    }

}

// export burger 
module.exports = burger;