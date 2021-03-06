import './style.css'

function initData() {
    const allBooks = getAllBooks()
    renderBooks(allBooks)
    setCount(allBooks.length)
    countBooksRead(allBooks)
    countBooksNotRead(allBooks)
}

initData()
const dialog = document.querySelector("dialog");
const createBookButton = document.querySelector("#createBook");
const clearFieldsButton = document.querySelector("#clearFields")


function changeOverlay(string: "none" | "block") {
    let overlay = document.getElementById("overlay");
    if (overlay === null) {
        return;
    }
    overlay.style.display = string;
}

function clearField(inputID: string) {
    let inputElement = document.getElementById(inputID) as HTMLInputElement;
    if (inputElement === null) {
        return
    }
    inputElement.value = ""
}


function clearAllFields() {
    clearField("titleInput")
    clearField("authorInput")
    clearField("pagesInput")
    clearField("statusInput")
}

createBookButton?.addEventListener("click", () => {
    clearAllFields();
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
    const newBook: BookInterface = {
        title: formData.get("title") as string,
        author: formData.get("author") as string,
        numberOfPages: parseInt(formData.get("pages") as string),
        status: formData.get("status") as string
    }
    addAnotherBook(newBook)
    mainElement?.classList.remove("blur");
    hideOverlay()
})


clearFieldsButton?.addEventListener("click", (e) => {
    clearAllFields()
    e.preventDefault()
})


function showOverlay() {
    changeOverlay("block")
}


function hideOverlay() {
    changeOverlay("none");
}

interface BookInterface {
    title: string
    author: string
    numberOfPages: number
    status: string
}


function renderBooks(books: BookInterface[]) {
    const contentContainer = document.querySelector("#content")
    contentContainer!.innerHTML = "";
    const bookTemplate = document.querySelector("#book-template") as HTMLTemplateElement
    books.forEach((book,bookIndex) => {
        const bookBox = document.createElement("div")
        bookBox.appendChild(bookTemplate.content.cloneNode(true))
        bookBox.querySelector(".title")!.textContent = "Title: " + book.title
        bookBox.querySelector(".author")!.textContent = "Author: " + book.author
        bookBox.querySelector(".pages")!.textContent = "Number of pages: " + book.numberOfPages.toString()
        bookBox.querySelector(".status")!.textContent = "Status: " + book.status
        contentContainer?.appendChild(bookBox)
        const deleteBookButton = bookBox.querySelector(".deleteBook")
        deleteBookButton?.addEventListener("click", () => {
            deleteBook(bookIndex)
        })
    })
}


function saveAllBooks(books: BookInterface[]) {
    const stringifiedBooks = JSON.stringify(books);
    localStorage.setItem("books", stringifiedBooks)
}

function getAllBooks(): BookInterface[] {
    const stringifiedBooks = localStorage.getItem("books")
    if (stringifiedBooks === null) {
        return []
    }
    return JSON.parse(stringifiedBooks);
}

function addAnotherBook(book: BookInterface) {
    const allBooks = getAllBooks()
    allBooks.push(book)
    saveAllBooks(allBooks)
    renderBooks(allBooks)
    setCount(allBooks.length)
    countBooksRead(allBooks)
    countBooksNotRead(allBooks)
}

function setCount(count: number) {
    const bookCount = document.querySelector("#bookCount");
    bookCount!.innerHTML = "Total books count: " + count
}

function countBooksRead(books: BookInterface[]) {
    const booksReadCount = document.querySelector("#booksReadCount");
    const booksRead = books.filter((book) => book.status === "read")
    booksReadCount!.innerHTML = "Read: " + booksRead.length
}


function countBooksNotRead(books: BookInterface[]) {
    const booksNotReadCount = document.querySelector("#booksNotReadCount")
    const booksNotRead = books.filter((book) => book.status === "not-read")
    booksNotReadCount!.innerHTML = "Not read: " + booksNotRead.length
}


function deleteBook (bookIndex:number) {
    const books = getAllBooks()
    books.splice(bookIndex,1)
    saveAllBooks(books)
    renderBooks(books)
}


