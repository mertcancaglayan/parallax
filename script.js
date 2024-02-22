const sun1 = document.getElementById("sun1");
const sun2 = document.getElementById("sun2");


let rotationAngle = 0;


document.addEventListener("wheel", function (event) {
	rotationAngle += event.deltaY * 0.1;
	animateRotation(sun1, rotationAngle, 35000);
	animateRotation(sun2, rotationAngle, 50000);

});

function animateRotation(element, angle, duration) {
	element.animate(
		{ transform: `rotate(${angle}deg)` },
		{
			duration: duration,
			fill: "forwards",
		},
	);
}
