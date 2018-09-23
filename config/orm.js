var connection = require("./connection.js");

var orm = {
    selectAll: function () {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM burgers", (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    },
    insertOne: function (burger) {
        return new Promise((resolve, reject) => {
            connection.query(
                "INSERT INTO burgers (burger_name) VALUES (?)",
                burger.burger_name, (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                });
        });
    },
    updateOne: function (burger) {
        return new Promise((resolve, reject) => {
            connection.query(
                "UPDATE burgers SET devoured=1 WHERE id=?",
                burger.id, (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    }
};

module.exports = orm;