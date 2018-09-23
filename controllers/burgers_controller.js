var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function (req, res) {
    burger.all()
        .then(result => {
            res.render("index", {
                burgers: result
            });
        });
});

router.post("/api/burger", function (req, res) {
    burger.create(req.body)
        .then(result => {
            if (result.affectedRows <= 0)
                return res.status(404).end();
            res.json({ id: result.insertId });
        });
});

router.put("/api/burger", function (req, res) {
    burger.update(req.body)
        .then(result => {
            if (result.changedRows <= 0)
                return res.status(404).end();
            res.status(200).end();
        });
});

module.exports = router;