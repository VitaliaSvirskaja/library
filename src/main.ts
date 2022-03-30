import './style.css'
const dialog = document.querySelector(".dialog");

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
console.log(book1.bookInfo());


const createBookButton = document.querySelector("#createBook");
createBookButton?.addEventListener("click", () => {
   dialog?.classList.add("visible");
   mainElement?.classList.add("blur");
});

const mainElement = document.querySelector("main");
mainElement?.addEventListener("click", () => {
   dialog?.classList.remove("visible");
   mainElement?.classList.remove("blur");
})

