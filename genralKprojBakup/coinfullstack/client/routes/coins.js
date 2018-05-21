const express = require("express");
const Route = express.Router();
const Previous = require("../models/previous.js");
response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
coinRoute.route("/")
    .get((req, res) => {
        Previous.find((err, previous) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(previous);
                console.log("check 1")

            }
        })
    })
    .post((req, res) => {
        const newPrevious = new Previous(req.body);
        newPrevious.save((err, savedPrevious) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(savedPrevious)
            }
        })
    })
coinRoute.route("/:id")
    .delete((req, res) => {
        const coinId = req.params.id;
        Previous.findOneAndRemove({_id:coinId}, (err, deletedCoins) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(deletedCoin)
            }
        })
    })

module.exports = coinRoute;
