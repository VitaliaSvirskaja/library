function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.bookInfo = function ():string {
        return title + " by "+ author + ", " + pages + " pages, "+status;
    };
}

const book1 = new Book("acotar", "maas", 365, "not read yet")
console.log(book1.bookInfo())


