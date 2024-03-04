const head = document.querySelector(".head");
const para = document.querySelector(".para");
const primary = document.querySelector(".primary");
const secondary = document.querySelector(".secondary");

const updateColor = function () {
	const primaryColor = primary.value;
	const secondaryColor = secondary.value;
	document.documentElement.style.setProperty("--primary-color", primaryColor);
	document.documentElement.style.setProperty(
		"--secondary-color",
		secondaryColor
	);
};

primary.addEventListener("input", updateColor);
secondary.addEventListener("input", updateColor);
