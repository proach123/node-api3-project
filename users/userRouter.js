const express = require('express');
const db = require('./userDb')
const router = express.Router();

router.post("/", (req, res) => {

  db.insert(req.body)
    .then(db => {
      res.status(201).json(db);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error adding the db",
      });
    });
});

router.post("/:id/posts", (req, res) => {
    const { id } = req.params;
  
    const post = { ...req.body, user_id: id };
  
    db.insert(post)
      .then(inserted => {
        res.status(201).json(inserted);
      })
      .catch(error => {
        console.log(error);
  
        res.status(500).json({ errorMessage: "sorry, we failed you" });
      });
  });

router.get("/", (req, res) => {
  console.log("headers", req.headers); //<<<<<<<<<<<<<<<<<

  db.get(req.query)
    .then(db => {
      res.status(200).json(db);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the db",
      });
    });
});

router.get("/:id", (req, res) => {
  db.getById(req.params.id)
    .then(db => {
      if (db) {
        res.status(200).json(db);
      } else {
        res.status(404).json({ message: "db not found" });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the db",
      });
    });
});


router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
