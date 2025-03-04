console.log("Getting Ready");
import testName from "./library";

class Library {
  constructor(name) {
    (this.name = name), (this.book = []);
  }

  addBook(book) {
    this.book.push(book);
  }

  listBook() {
    return this.book;
  }
}

class Ebook extends Library {
  constructor(name, format) {
    super(name);
    this.format = format;
  }

  getFormat() {
    return this.format;
  }
  getName() {
    return this.name;
  }
}

const myLibrary = new Library("Best Library");
myLibrary.addBook("Best Javascript Class Pratices");
myLibrary.addBook("Atomic Habit");
console.log(myLibrary.listBook());

const myEbook = new Ebook("Best Pratices", "PDF");
console.log(myEbook.getFormat());
console.log(myEbook.getName());

console.log(testName);
