const express = require('express');
const app = express();
const path = require('path');
// const DB = require('/db/db.json');
const pathToDB = './db/db.json';
const PORT = process.env.PORT || 3001;
const fs = require('fs');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// GET Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
// GET Route for notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});
// GET Route for all notes
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, DB));
});
// GET Route for a specific note
app.post('/api/notes', (req, res) => {
  let newNote = req.body;
  // let pathToDB = path.join(__dirname, '/db/db.json');
  fs.readFile(pathToDB, (err, data) => {
      if(err) throw err;
      let newData = JSON.parse(data);
      newData.push(newNote);

      fs.writeFile(pathToDB, JSON.stringify(newData), err => {
          if(err) throw err;
          console.log('Data has been succesfully saved!');
      })
  })
  console.log('res --> ', res);
  res.redirect('/notes');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});
app.listen(PORT, () => {
  console.log(`app listening to http://127.0.0.1:${PORT}/ `);
});

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
