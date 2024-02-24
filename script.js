const sunContainer = document.querySelector(".sunContainer");
const sun1 = document.getElementById("sun1");
const sun2 = document.getElementById("sun2");
const title = document.getElementById("title");
const sunText = document.querySelector(".sunText");
const earthText = document.querySelector(".earthText");
const earthContainer = document.querySelector(".earthContainer");
const moonText = document.querySelector(".moonText");
const moonContainer = document.querySelector(".moonContainer");

let rotationAngle = 0;
let rotationPercentage = 0;
let increasing = true;

const totalRange = 90;

document.addEventListener("wheel", function (event) {
	console.log(event.deltaY);
	rotationAngle += event.deltaY * 0.1;
	animateRotation(sun1, rotationAngle, 35000);
	animateRotation(sun2, rotationAngle, 50000);
	moveContainer(title, 2500);
	moveContainer(sunContainer, 2500);
	moveContainer(sunText, 2500);
	moveContainer(earthText, 2500);
	moveContainer(earthContainer, 2500);
	moveContainer(moonText, 2500);
	moveContainer(moonContainer, 2500);

	calculateRotation();

	animatePlanets(moon1, rotationPercentage, 1000);
	animatePlanets(earth, rotationPercentage, 1000);
});

function animateRotation(element, angle, duration) {
	element.animate(
		{ transform: `rotate(${angle}deg) ` },
		{
			duration: duration,
			fill: "forwards",
		},
	);
}

function moveContainer(element, duration) {
	let location;
	if (element === sunContainer) {
		location = `translate(-50%, -50%)`;
	} else if (element === sunText) {
		location = `translate(-50%, -90%)`;
	} else if (element === title) {
		location = `translate(-100%, -150%)`;
	} else if (element === earthText) {
		location = `translate(-70%, -50%)`;
	} else if (element === earthContainer) {
		location = `translate(100%, -25%)`;
	} else if (element === moonText) {
		location = `translate(-80%, 0%)`;
	} else if (element === moonContainer) {
		location = `translate(-100%, 40%)`;
	}

	element.animate(
		{ transform: location },
		{
			duration: duration,
			fill: "forwards",
		},
	);
}

function animatePlanets(element, rotationPercentage, duration) {
	if (element === moon1) {
		element.animate([{ transform: `translateX(${-rotationPercentage}%)` }], {
			duration: duration,
			fill: "forwards",
		});
	} else if (element === earth) {
		element.animate([{ transform: `translateX(${-rotationPercentage * 0.55}%)` }], {
			duration: duration,
			fill: "forwards",
		});
	}
}

function calculateRotation() {
	if (increasing) {
		rotationPercentage += Math.abs(event.deltaY) / totalRange;
		if (rotationPercentage >= totalRange) {
			rotationPercentage = totalRange;
			increasing = false;
		}
	} else {
		rotationPercentage -= Math.abs(event.deltaY) / totalRange;
		if (rotationPercentage <= 0) {
			rotationPercentage = 0;
			increasing = true;
		}
	}
}
