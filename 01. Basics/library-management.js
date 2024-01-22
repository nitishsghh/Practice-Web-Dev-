const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Book {
  constructor(title, author, genre, price, quantity) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.quantity = quantity;
  }
}

class Bookstore {
  constructor() {
    this.inventory = [];
  }

  addBook(book) {
    this.inventory.push(book);
  }

  removeBook(title) {
    const index = this.inventory.findIndex((book) => book.title === title);
    if (index !== -1) {
      this.inventory.splice(index, 1);
      return true;
    }
    return false;
  }

  listBooks() {
    this.inventory.forEach((book) => {
      console.log(
        `Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Price: $${book.price}, Quantity: ${book.quantity}`
      );
    });
  }
}

const myBookstore = new Bookstore();

function main() {
  rl.question('\nOptions:\n1. Add a book to inventory\n2. Remove a book from inventory\n3. List all books\n4. Exit\nEnter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter the book title: ', (title) => {
          rl.question('Enter the author: ', (author) => {
            rl.question('Enter the genre: ', (genre) => {
              rl.question('Enter the price: ', (price) => {
                rl.question('Enter the quantity: ', (quantity) => {
                  const book = new Book(title, author, genre, parseFloat(price), parseInt(quantity));
                  myBookstore.addBook(book);
                  console.log('Book added to inventory.');
                  main();
                });
              });
            });
          });
        });
        break;
      case '2':
        rl.question('Enter the title of the book to remove: ', (title) => {
          if (myBookstore.removeBook(title)) {
            console.log('Book removed from inventory.');
          } else {
            console.log('Book not found in inventory.');
          }
          main();
        });
        break;
      case '3':
        myBookstore.listBooks();
        main();
        break;
      case '4':
        console.log('Exiting the bookstore.');
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please try again.');
        main();
        break;
    }
  });
}

main();
