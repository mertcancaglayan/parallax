const sunContainer = document.querySelector(".sunContainer");
const sun1 = document.getElementById("sun1");
const sun2 = document.getElementById("sun2");
const title = document.getElementById("title");
const sunText = document.querySelector(".sunText");

let rotationAngle = 0;

document.addEventListener("wheel", function (event) {
	console.log(event.deltaY);
	rotationAngle += event.deltaY * 0.1;
	animateRotation(sun1, rotationAngle, 35000);
	animateRotation(sun2, rotationAngle, 50000);
	moveContainer(sunContainer, 2500);
	moveContainer(sunText, 2500);
	moveContainer(title, 2500);
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

	}
	element.animate(
		{ transform: location },
		{
			duration: duration,
			fill: "forwards",
		},
	);
}
