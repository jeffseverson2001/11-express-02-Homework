//  Start Node Express Sever
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//console.log(`${__dirname}/public`);
//  Set URL Routes
app.get('/', (req, res) => res.sendFile(path.join(`${__dirname}/public`, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(`${__dirname}/public`, 'notes.html')));

//  Listen for Request
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});