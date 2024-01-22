Python 3.11.5 (tags/v3.11.5:cce6ba9, Aug 24 2023, 14:38:34) [MSC v.1936 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
class Book:
    def __init__(self, title, author, genre, price, quantity):
        self.title = title
        self.author = author
        self.genre = genre
        self.price = price
        self.quantity = quantity

class Bookstore:
    def __init__(self):
        self.inventory = []

    def add_book(self, book):
        self.inventory.append(book)

    def remove_book(self, title):
        for book in self.inventory:
            if book.title == title:
                self.inventory.remove(book)
                return True
        return False

    def list_books(self):
        for book in self.inventory:
            print(f"Title: {book.title}, Author: {book.author}, Genre: {book.genre}, Price: ${book.price}, Quantity: {book.quantity}")

def main():
    my_bookstore = Bookstore()
... 
...     while True:
...         print("\nOptions:")
...         print("1. Add a book to inventory")
...         print("2. Remove a book from inventory")
...         print("3. List all books")
...         print("4. Exit")
... 
...         choice = input("Enter your choice: ")
... 
...         if choice == "1":
...             title = input("Enter the book title: ")
...             author = input("Enter the author: ")
...             genre = input("Enter the genre: ")
...             price = float(input("Enter the price: "))
...             quantity = int(input("Enter the quantity: "))
...             book = Book(title, author, genre, price, quantity)
...             my_bookstore.add_book(book)
...             print("Book added to inventory.")
... 
...         elif choice == "2":
...             title = input("Enter the title of the book to remove: ")
...             if my_bookstore.remove_book(title):
...                 print("Book removed from inventory.")
...             else:
...                 print("Book not found in inventory.")
... 
...         elif choice == "3":
...             my_bookstore.list_books()
... 
...         elif choice == "4":
...             print("Exiting the bookstore.")
...             break
... 
...         else:
...             print("Invalid choice. Please try again.")
... 
... if __name__ == "__main__":
...     main()
