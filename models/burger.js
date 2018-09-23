var orm = require("../config/orm.js");

var burger = {
    all: function () {
        return new Promise((resolve, reject) => {
            orm.selectAll()
                .then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    },
    create: function (burger) {
        return new Promise((resolve, reject) => {
            orm.insertOne(burger)
                .then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                });
        });
    },
    update: function (burger) {
        return new Promise((resolve, reject) => {
            orm.updateOne(burger)
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
};

module.exports = burger;