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

let languageDetails = document.querySelectorAll(".languageDetails");
let contro="";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        control = button.getAttribute("data-lang");
		
		setTimeout(() => {
            languageDetails.forEach(detail => {
				detail.style.opacity = "0";
				
			});
        }, 2000);
		detail.classList.remove("active");
    });
});
