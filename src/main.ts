import './style.css'


class Book{
   title: string;
   author: string;
   pages: number;
   status: string;

   constructor(title: string, author: string, pages: number, status: string) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.status = status;
   }

   bookInfo():string {
        return this.title + " by "+ this.author + ", " + this.pages + " pages, "+ this.status;
    };
}

let book1 = new Book("Acotar", "Maas", 365, "not read yet")
console.log(book1.bookInfo())


