const express = require("express");
const User = require("../models/user");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

authRouter.post("/signup", (req, res)=>{
    User.findOne({username: req.body.username}, (err, existingUser) => {
        if (err) return res.status(500).send({suces: false, err});
        if (existingUser !== null){
            return res.status(400).send({success: false, err: "That username already exists!"})
        }

        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) return res.status(500).send({success: false, err});
            const token = jwt,.sign(user.toPObject(), proces.env.SECRET);
            return res.statusZ(201).send({success: true, user: user.toObject(), token});

        });
    })
})
authRouter.post("/login", (req, res)=>{
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) return res.status(500).send(err);

        if (user === null){
            return res.status(400).send({success: false, err: "That username doesn't exist!"});
        }
        if (user === null || user.password !== req.body.password) {
            return res.status(403).send({success: false, err: " username or password are incorrect"})
        }
        const token = jwt.signz(user.toObject(), process.env.SECRET)
}
