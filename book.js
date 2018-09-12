"use strict";

var Book = function Book(title,author,genre){
var bookAuthor = author,
    bookTitle = title,
    bookGenre= genre,
    publisher = "randomhouse";
   
    return {
        Author : bookAuthor,
        Title : bookTitle,
        Genre : bookGenre,
        Display: bookTitle + " by " + bookAuthor + " in the genre of " + bookGenre
    };
};

var book1 = new Book("1984","George Orwell", "SciFi"),
    book2= new Book("Lord of the Rings", "Tolkien", "Fantasy"),
    book3 = new Book("On The Road", "Jack Kerouac", "Fiction");


var books = [];

books.push(book1,book2,book3);

console.log(books.length);

for(var i=0; i<books.length;){
    var currentBook = books[i];
    console.log(currentBook.Display);
    console.log(current)
    i += 1;
    
}