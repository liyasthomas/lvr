//Generate and Download Screenshot of webpage without lossing the styles https://stackoverflow.com/a/44495166
(function (exports) {
	function urlsToAbsolute(nodeList) {
		if (!nodeList.length) {
			return [];
		}
		var attrName = "href";
		if (nodeList[0].__proto__ === HTMLImageElement.prototype || nodeList[0].__proto__ === HTMLScriptElement.prototype) {
			attrName = "src";
		}
		nodeList = [].map.call(nodeList, function (el, i) {
			var attr = el.getAttribute(attrName);
			if (!attr) {
				return;
			}
			var absURL = /^(https?|data):/i.test(attr);
			if (absURL) {
				return el;
			} else {
				return el;
			}
		});
		return nodeList;
	}

	function screenshotPage() {
		var wrapper = document.getElementById("capture");
		html2canvas(wrapper, {
			onrendered: function (canvas) {
				canvas.toBlob(function (blob) {
					saveAs(blob, "Saap.png");
				});
			}
		});
	}

	function addOnPageLoad_() {
		window.addEventListener("DOMContentLoaded", function (e) {
			var scrollX = document.documentElement.dataset.scrollX || 0;
			var scrollY = document.documentElement.dataset.scrollY || 0;
			window.scrollTo(scrollX, scrollY);
		});
	}

	function saap() {
		screenshotPage();
	}
	exports.screenshotPage = screenshotPage;
	exports.saap = saap;
})(window);

//Is it possible to control the camera light on a phone via a website? https://https://stackoverflow.com/a/47153547
//const SUPPORTS_MEDIA_DEVICES = "mediaDevices" in navigator;
//
//if (SUPPORTS_MEDIA_DEVICES) {
//	navigator.mediaDevices.enumerateDevices().then(devices => {
//
//		const cameras = devices.filter((device) => device.kind === "videoinput");
//
//		if (cameras.length === 0) {
//			throw "No camera found on this device.";
//		}
//		const camera = cameras[cameras.length - 1];
//
//		navigator.mediaDevices.getUserMedia({
//			video: {
//				deviceId: camera.deviceId,
//				facingMode: ["user", "environment"],
//				height: {
//					ideal: 1080
//				},
//				width: {
//					ideal: 1920
//				}
//			}
//		}).then(stream => {
//			const track = stream.getVideoTracks()[0];
//
//			const imageCapture = new ImageCapture(track)
//			const photoCapabilities = imageCapture.getPhotoCapabilities().then(() => {
//
//				const btn = document.querySelector(".flash");
//				btn.addEventListener("click", function () {
//					var flag = !flag || true;
//					track.applyConstraints({
//						advanced: [{
//							torch: flag
//						}]
//					});
//				});
//			});
//		});
//	});
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

var p = document.getElementById("capture"),
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
};

function resetS() {
	var bri = bRange.value,
		con = cRange.value,
		opa = oRange.value;
	p.style.filter = "brightness(" + bri + "%) saturate(100%) contrast(" + con + "%) opacity(" + opa + "%)";
	document.getElementById("s").value = 100;
	document.getElementById("sPointSize").value = 100 + "٪";
};

function resetC() {
	var bri = bRange.value,
		sat = sRange.value,
		opa = oRange.value;
	p.style.filter = "brightness(" + bri + "%) saturate(" + sat + "%) contrast(100%) opacity(" + opa + "%)";
	document.getElementById("c").value = 100;
	document.getElementById("cPointSize").value = 100 + "٪";
};

function resetO() {
	var bri = bRange.value,
		sat = sRange.value,
		con = cRange.value;
	p.style.filter = "brightness(" + bri + "%) saturate(" + sat + "%) contrast(" + con + "%) opacity(100%)";
	document.getElementById("o").value = 100;
	document.getElementById("oPointSize").value = 100 + "٪";
};

function resetZ() {
	p.style.transform = "scale3d(1,1,1)";
	document.getElementById("z").value = 1;
	document.getElementById("zPointSize").value = 1 + "×";
};

//Toggle grid
function toggleGrid() {
	var e = document.getElementById("grid");
	e.classList.toggle("hidden");
}
