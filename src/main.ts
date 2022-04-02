import './style.css'

const dialog = document.querySelector("dialog");
const clearFields = document.querySelector(".clearFields")

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
    formData.get("titleInput");
    console.log(formData.get("titleInput"))
    mainElement?.classList.remove("blur");
    hideOverlay()



    const bookBox = document.createElement("div");
    const bookTemplate = document.getElementById("book-template") as HTMLTemplateElement;
    bookBox.appendChild(bookTemplate.content.cloneNode(true))

    document.getElementById("content")?.appendChild(bookBox)

})

clearFields?.addEventListener("click", (e) => {
    function clearField(inputID:string) {
        let inputElement = document.getElementById(inputID) as HTMLInputElement;
        if (inputElement === null) {
            return
        }
        inputElement.value=""
    }
    clearField("titleInput")
    clearField("authorInput")
    clearField("pagesInput")
    clearField("statusInput")

    e.preventDefault()
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




