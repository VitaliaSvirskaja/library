import './style.css'

const dialog = document.querySelector("dialog");

class Book {
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

    bookInfo(): string {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.status;
    };
}

let book1 = new Book("Acotar", "Maas", 365, "not read yet")
console.log(book1.bookInfo());


const createBookButton = document.querySelector("#createBook");
createBookButton?.addEventListener("click", () => {
    dialog?.setAttribute("open", "");
    mainElement?.classList.add("blur");
    showOverlay()
});

const mainElement = document.querySelector("#overlay");
mainElement?.addEventListener("click", () => {
    dialog?.removeAttribute("open");
    mainElement?.classList.remove("blur");
    hideOverlay()
})


const form = document.querySelector("form");
form?.addEventListener("submit", () => {
    const formData = new FormData(form);
    // formData.get("title");
    console.log(formData.get("title"))
})

function showOverlay() {
    let overlay = document.getElementById("overlay");
    if (overlay === null) {
        return;
    }
    overlay.style.display = "block";

}

function hideOverlay() {
    let overlay = document.getElementById("overlay");
    if (overlay === null) {
        return;
    }
    overlay.style.display = "none";
}

