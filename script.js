let sections = document.querySelectorAll("section.languageDetails");
let buttons = document.querySelectorAll("button.languageButton");
let closeButtons = document.querySelectorAll(".close");
let footer = document.querySelector("footer");
let main = document.querySelector("main");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let lang = button.getAttribute("data-lang");
        sections.forEach((section) => {
            if (section.id === lang) {
                section.classList.add("active");
                main.classList.add("active");
                footer.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });
});

closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
        sections.forEach((section) => {
            main.classList.remove("active");
            footer.classList.remove("active");
            section.classList.remove("active");
        });
    });
});

let languageDetails = document.querySelectorAll(".languageDetails");
languageDetails.forEach((detail) => {
    detail.addEventListener("click", (event) => {
        if (event.target === detail) {
            detail.classList.remove("active");
        }
    });
});