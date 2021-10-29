const router = require('express').Router();
const express = require('express')
const cardModel = require('../models/cardModel')

router.post("/api/code", (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body missing');
    }

    let model = new cardModel(req.body)
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0){
                return res.status(500).send(doc)
            }

            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

router.get("/api/code", (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body missing');
    }

    cardModel.find({codeLang: req.query.codeLang}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
});

router.put("/api/code", (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body missing');
    }

    cardModel.findOneAndUpdate({
        codeLang: req.query.codeLang
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.delete("/api/code", (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body missing');
    }

    cardModel.findOneAndRemove({
        codeLang: req.query.codeLang
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

module.exports = router