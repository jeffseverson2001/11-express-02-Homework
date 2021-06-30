//  Start Node Express Sever
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//  Set URL Routes
app.get('/', (req, res) => res.sendFile(path.join(`${__dirname}/public`, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(`${__dirname}/public`, 'notes.html')));

app.get('/api/notes', (req, res) => res.sendFile(path.join(`${__dirname}/db`, 'db.json')));


app.post('/api/notes', (req, res) => {
  const saveNote = req.body;

  console.log("jeff");
  console.log(saveNote);

  //var db = require(`${__dirname}/db/db.json`);

  fs.readFile(`${__dirname}/db/db.json`, function (err, noteData) {
    console.log(noteData);
    let json = JSON.parse(noteData);
    
    json.push(saveNote);

    fs.writeFile(`${__dirname}/db/db.json`, JSON.stringify(json));
  })

  res.json(saveNote);
});


//  Listen for Request
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});