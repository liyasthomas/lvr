//Video Feed
//var constraints = {
//	audio: true,
//	video: {
//		width: 1280,
//		height: 720
//	}
//};
//
//navigator.mediaDevices.getUserMedia(constraints)
//	.then(function (mediaStream) {
//		var video = document.querySelector('video');
//		video.srcObject = mediaStream;
//		video.onloadedmetadata = function (e) {
//			video.play();
//		};
//	})
//	.catch(function (err) {
//		console.log(err.name + ": " + err.message);
//	});
//function snap() {
//	document.querySelector('a-scene').components.screenshot.capture('perspective');
//}

//Toggle more
function toggleMore() {
	var e = document.getElementById("more");
	e.classList.toggle("closed");
}
//Toggle brightness
function toggleBrightness() {
	var e = document.getElementById("bslider");
	e.classList.toggle("closed");
}
//Toggle saturate
function toggleSaturate() {
	var e = document.getElementById("sslider");
	e.classList.toggle("closed");
}
//Toggle contrast
function toggleContrast() {
	var e = document.getElementById("cslider");
	e.classList.toggle("closed");
}
//Toggle opacity
function toggleOpacity() {
	var e = document.getElementById("oslider");
	e.classList.toggle("closed");
}
//Toggle scale
function toggleScale() {
	var e = document.getElementById("zslider");
	e.classList.toggle("closed");
}
//Toggle grid
function toggleGrid() {
	var e = document.getElementById("grid");
	e.classList.toggle("hidden");
}
//Toggle flip
function toggleFlip() {
	var e = document.getElementById("app");
	e.classList.toggle("flip");
}
var p = document.getElementById("app"),
	bRange = document.getElementById("b"),
	sRange = document.getElementById("s"),
	cRange = document.getElementById("c"),
	oRange = document.getElementById("o"),
	zRange = document.getElementById("z");

bRange.addEventListener("input", function () {
	var sat = sRange.value,
		con = cRange.value,
		opa = oRange.value;
	p.style.filter = "brightness(" + this.value + "%) saturate(" + sat + "%) contrast(" + con + "%) opacity(" + opa + "%)";
	document.getElementById("bPointSize").value = this.value + "٪";
}, false);

sRange.addEventListener("input", function () {
	var bri = bRange.value,
		con = cRange.value,
		opa = oRange.value;
	p.style.filter = "brightness(" + bri + "%) saturate(" + this.value + "%) contrast(" + con + "%) opacity(" + opa + "%)";
	document.getElementById("sPointSize").value = this.value + "٪";
}, false);

cRange.addEventListener("input", function () {
	var bri = bRange.value,
		sat = sRange.value,
		opa = oRange.value;
	p.style.filter = "brightness(" + bri + "%) saturate(" + sat + "%) contrast(" + this.value + "%) opacity(" + opa + "%)";
	document.getElementById("cPointSize").value = this.value + "٪";
}, false);

oRange.addEventListener("input", function () {
	var bri = bRange.value,
		sat = sRange.value,
		con = cRange.value;
	p.style.filter = "brightness(" + bri + "%) saturate(" + sat + "%) contrast(" + con + "%) opacity(" + this.value + "%)";
	document.getElementById("oPointSize").value = this.value + "٪";
}, false);

zRange.addEventListener("input", function () {
	p.style.transform = "scale3d(" + this.value + "," + this.value + "," + this.value + ")";
	document.getElementById("zPointSize").value = this.value + "×";
}, false);

//Reset
function resetB() {
	var sat = sRange.value,
		con = cRange.value,
		opa = oRange.value;
	p.style.filter = "brightness(100%) saturate(" + sat + "%) contrast(" + con + "%) opacity(" + opa + "%)";
	document.getElementById("b").value = 100;
	document.getElementById("bPointSize").value = 100 + "٪";
}

function resetS() {
	var bri = bRange.value,
		con = cRange.value,
		opa = oRange.value;
	p.style.filter = "brightness(" + bri + "%) saturate(100%) contrast(" + con + "%) opacity(" + opa + "%)";
	document.getElementById("s").value = 100;
	document.getElementById("sPointSize").value = 100 + "٪";
}

function resetC() {
	var bri = bRange.value,
		sat = sRange.value,
		opa = oRange.value;
	p.style.filter = "brightness(" + bri + "%) saturate(" + sat + "%) contrast(100%) opacity(" + opa + "%)";
	document.getElementById("c").value = 100;
	document.getElementById("cPointSize").value = 100 + "٪";
}

function resetO() {
	var bri = bRange.value,
		sat = sRange.value,
		con = cRange.value;
	p.style.filter = "brightness(" + bri + "%) saturate(" + sat + "%) contrast(" + con + "%) opacity(100%)";
	document.getElementById("o").value = 100;
	document.getElementById("oPointSize").value = 100 + "٪";
}

function resetZ() {
	p.style.transform = "scale3d(1,1,1)";
	document.getElementById("z").value = 1;
	document.getElementById("zPointSize").value = 1 + "×";
}
