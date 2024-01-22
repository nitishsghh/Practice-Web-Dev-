const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// In-memory database for storing books
const books = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a route to list all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Define a route to add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    res.status(400).json({ message: 'Title and author are required.' });
    return;
  }

  const newBook = { title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(port, () => {
  console.log(`Library management system is running on port ${port}`);
});
