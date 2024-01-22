#include <iostream>
#include <vector>
#include <string>

class Book {
public:
    Book(const std::string& title, const std::string& author, const std::string& genre, double price, int quantity)
        : title(title), author(author), genre(genre), price(price), quantity(quantity) {}

    std::string getTitle() const { return title; }
    std::string getAuthor() const { return author; }
    std::string getGenre() const { return genre; }
    double getPrice() const { return price; }
    int getQuantity() const { return quantity; }

private:
    std::string title;
    std::string author;
    std::string genre;
    double price;
    int quantity;
};

class Bookstore {
public:
    void addBook(const Book& book) {
        inventory.push_back(book);
    }

    bool removeBook(const std::string& title) {
        for (auto it = inventory.begin(); it != inventory.end(); ++it) {
            if (it->getTitle() == title) {
                inventory.erase(it);
                return true;
            }
        }
        return false;
    }

    void listBooks() const {
        for (const Book& book : inventory) {
            std::cout << "Title: " << book.getTitle() << ", Author: " << book.getAuthor()
                      << ", Genre: " << book.getGenre() << ", Price: $" << book.getPrice()
                      << ", Quantity: " << book.getQuantity() << std::endl;
        }
    }

private:
    std::vector<Book> inventory;
};

int main() {
    Bookstore myBookstore;

    while (true) {
        std::cout << "\nOptions:" << std::endl;
        std::cout << "1. Add a book to inventory" << std::endl;
        std::cout << "2. Remove a book from inventory" << std::endl;
        std::cout << "3. List all books" << std::endl;
        std::cout << "4. Exit" << std::endl;

        int choice;
        std::cout << "Enter your choice: ";
        std::cin >> choice;

        switch (choice) {
            case 1: {
                std::string title, author, genre;
                double price;
                int quantity;

                std::cin.ignore(); // Clear the newline from previous input
                std::cout << "Enter the book title: ";
                std::getline(std::cin, title);
                std::cout << "Enter the author: ";
                std::getline(std::cin, author);
                std::cout << "Enter the genre: ";
                std::getline(std::cin, genre);
                std::cout << "Enter the price: ";
                std::cin >> price;
                std::cout << "Enter the quantity: ";
                std::cin >> quantity;

                Book book(title, author, genre, price, quantity);
                myBookstore.addBook(book);
                std::cout << "Book added to inventory." << std::endl;
                break;
            }
            case 2: {
                std::cin.ignore(); // Clear the newline from previous input
                std::string title;
                std::cout << "Enter the title of the book to remove: ";
                std::getline(std::cin, title);
                if (myBookstore.removeBook(title)) {
                    std::cout << "Book removed from inventory." << std::endl;
                } else {
                    std::cout << "Book not found in inventory." << std::endl;
                }
                break;
            }
            case 3:
                myBookstore.listBooks();
                break;
            case 4:
                std::cout << "Exiting the bookstore." << std::endl;
                return 0;
            default:
                std::cout << "Invalid choice. Please try again." << std::endl;
        }
    }

    return 0;
}
