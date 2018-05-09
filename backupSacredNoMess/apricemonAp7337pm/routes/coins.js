const express = require("express");
const bookRoute = express.Router();
const Favorite = require("../models/favorite.js");

bookRoute.route("/")
    .get((req, res) => {
        Favorite.find((err, favorite) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(favorite)
            }
        })
    })
    .post((req, res) => {
        const newFavorite = new Favorite(req.body);
        newFavorite.save((err, savedFavorite) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(savedFavorite)
            }
        })
    })
coinRoute.route("/:id")
    .delete((req, res) => {
        const coinId = req.params.id;
        Favorite.findOneAndRemove({_id:coinId}, (err, deletedCoin) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(deletedCoin)
            }
        })
    })

module.exports = coinRoute;

//post to add a new book id
