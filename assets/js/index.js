let arr = [];
for (let i = 0; i < 7; i++) {
	let image = "figure" + (i + 1).toString();
	let marker = "marker" + (i + 1).toString();
	arr.push({ image: image, marker: marker });
}

var app = new Vue({
	el: "#app",
	data: {
		markerData: arr
	}
});

function resizeCanvas(origCanvas, width, height) {
	let resizedCanvas = document.createElement("canvas");
	let resizedContext = resizedCanvas.getContext("2d");

	resizedCanvas.height = height;
	resizedCanvas.width = width;

	resizedContext.drawImage(origCanvas, 0, 0, width, height);
	return resizedCanvas.toDataURL();
}

document.getElementById("snap-button").addEventListener("click", function() {
	let aScene = document
		.querySelector("a-scene")
		.components.screenshot.getCanvas("perspective");
	let frame = captureVideoFrame("video", "png");
	aScene = resizeCanvas(aScene,frame.width,frame.height);
	frame = frame.dataUri
	mergeImages([frame, aScene]).then(b64 => {
		let link = document.getElementById("download-link", "png");
		link.setAttribute("download", "AR.png");
		link.setAttribute("href", b64);
		link.click();
	});
});
