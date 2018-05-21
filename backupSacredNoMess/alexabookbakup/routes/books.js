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
bookRoute.route("/:id")
    .delete((req, res) => {
        const bookId = req.params.id;
        Favorite.findOneAndRemove({_id:bookId}, (err, deletedBook) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(deletedBook)
            }
        })
    })

module.exports = bookRoute;

//post to add a new book id
