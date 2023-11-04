
const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");



router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

router.post("/notes", (req, res) => {
  console.log(req.body);
  fs.readFile("../db/db.json", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const jsonData = JSON.parse(data);
    const newNote = req.body;
    newNote.id = uuidv4();
    jsonData.push(req.body);

    fs.writeFile("../db/db.json", JSON.stringify(jsonData), (err) => {
      if (err) console.log(err);
      else {
        console.log("Note written!");
        res.json("New note added!");
      }
    });
  });
});

router.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  fs.readFile("../db/db.json", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data).filter((obj) => obj.id !== id);

    fs.writeFile("./db/db.json", JSON.stringify(jsonData), (err) => {
      if (err) console.log(err);
      else {
        console.log("Note deleted");
      }
    });
  });
  res.send("test note deleted");
});

module.exports = router;