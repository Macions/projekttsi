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

let languageDetails = document.querySelectorAll("section.languageDetails");

buttons.forEach(button => {
	button.addEventListener("click", () => {
		let control = button.getAttribute("data-lang");

		languageDetails.forEach(detail => {
			if (detail.id === control) {
				detail.style.opacity = "1";
				detail.style.transform = "translateX(0)";

				let timeoutId = setTimeout(() => {
					detail.style.transform = "translateX(200%)";
					detail.style.opacity = "0";
				}, 20000);

				detail.addEventListener("mouseenter", () => {
					clearTimeout(timeoutId);
					detail.classList.add("resume");
				});

				detail.addEventListener("mouseleave", () => {
					detail.classList.remove("resume");
					timeoutId = setTimeout(() => {
						detail.style.transform = "translateX(200%)";
						detail.style.opacity = "0";
					}, 20000);
				});

			} else if (detail.style.opacity === "1") {
				detail.style.transform = "translateX(200%)";
				setTimeout(() => {
					detail.style.opacity = "0";
				}, 500);
			}
		});
	});
});