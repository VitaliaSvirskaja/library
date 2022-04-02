import './style.css'

const dialog = document.querySelector("dialog");
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

const createBookButton = document.querySelector("#createBook");

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

    const bookBox = document.createElement("div");
    const bookTemplate = document.getElementById("book-template") as HTMLTemplateElement;
    bookBox.appendChild(bookTemplate.content.cloneNode(true))

    bookBox.querySelector(".title")!.textContent = "Title: " + formData.get("title");
    bookBox.querySelector(".author")!.textContent = "Author: " + formData.get("author");
    bookBox.querySelector(".pages")!.textContent = "Number of Pages: " + formData.get("pages");
    bookBox.querySelector(".status")!.textContent = "Status: " + formData.get("status");

    document.getElementById("content")?.appendChild(bookBox)
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




