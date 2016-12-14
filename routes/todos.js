let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Todo = require('../models/Todo.js');

/* GET users listing. */
router.get('/', (req, res, next) => {
    Todo.find((err, todos) => {
        try {
            res.json(todos);
        } catch (err) {
            return next(err);
        }
    });
});

/* POST /todos */
router.post('/', (req, res, next) => {
    Todo.create(req.body, (err, post) => {
        try {
            res.json(post);
        } catch (err) {
            return next(err);
        }
    });
});

/* GET /todos/id */
router.get('/:id', (req, res, next) => {
    Todo.findById(req.params.id, (err, post) => {
        try {
            res.json(post);
        } catch (err) {
            return next(err);
        }
    });
});

/* PUT /todos/:id */
router.put('/:id', (req, res, next) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        try {
            res.json(post);
        } catch (err) {
            return next(err);
        }
    });
});

/* DELETE /todos/:id */
router.delete('/:id', (req, res, next) => {
  Todo.findByIdAndRemove(req.params.id, req.body, (err, post) => {
      try {
          res.json(post);
      } catch (err) {
          return next(err);
      }
  });
});

module.exports = router;
