(function () {
	console.log("initial");
	var drawing = document.getElementById('canvas');

	//get 2d drawing context
	// if (drawing.getContext) {
	// 	var context = drawing.getContext('2d');

	// 	context.strokeStyle = "blue";
	// 	context.fillStyle = "#0000ff";
	// 	context.fillRect(10, 10, 50, 50);

	// 	// console.log('after draw blue rectange');
	// 	// console.log(context);

	// 	context.fillStyle = "rgba(0, 0, 255, 0.5)";
	// 	context.fillRect(30, 30, 50, 50);
	// 	// console.log('after draw 0.5 opcity rectange');
	// 	console.log(context);

	// 	// clear canvas
	// 	context.clearRect(40, 40, 10, 10);

	// 	//draw red retc
	// 	context.strokeStyle = "#ff0000";
	// 	context.strokeRect(20, 20, 50, 50);

	// 	// blue 0.5 opcity rect, 边框的宽度由lineWidth控制， lineCap确定线条末端是否为平头还是("butt", round, square),
	// 	// lineJoin控制线条相交的方式是否是圆交，斜交，斜接(round bevel miter)
	// 	context.strokeStyle = "rgba(0, 0, 255, 0.5)";
	// 	context.lineCap = "round";
	// 	context.lineWidth = "3";
	// 	context.lineJoin = "bevel";
	// 	context.strokeRect(40, 40, 50, 50);

	// 	// paint path,  the api is very stable now
	// 	// before create path: beginPath
	// 	//method: arc, arcTo bezierCurveTo lineTo moveTo quadraticCurveTo rect
	// 	// after create path: using closePath fill(fillStyle) stroke(strokeStyle) clip(剪切)

	// 	context.beginPath();

	// 	// big circle
	// 	context.arc(100, 100, 99, 0, 2 * Math.PI, false);

	// 	// small circle
	// 	context.moveTo(194, 100);
	// 	context.arc(100, 100, 94, 0, 2 * Math.PI, false);

	// 	//minute hand
	// 	context.moveTo(100, 100);
	// 	context.lineTo(100, 15);

	// 	// hour hand
	// 	context.moveTo(100, 100);
	// 	context.lineTo(35, 100);

	// 	if (context.isPointInPath(22, 100)) {
	// 		console.log('point (56, 100) is on the path line from (35, 100) to (100, 100).');
	// 	} else {
	// 		console.log('no');
	// 	}

	// 	// stroke path
	// 	context.stroke();

	// 	// paint text,  the api is jitter now
	// 	// API: fillText strokeText
	// 	// params: str x y maxPixelWidth(not support in all browsers)
	// 	// @font @textAlign @textBaseline all has default values
	// 	// using fillText(actully using fillStyle) to paint text and strokeText(actually using strokeStyle)
	// 	context.font = "bold 14px Arial";
	// 	context.textAlign = "center";
	// 	context.textBaseline = "middle";
	// 	context.fillText("12", 100, 10);
	// 	// test textAlign
	// 	context.textAlign = "start";
	// 	context.fillText("12", 100, 40);

	// 	context.textAlign = "end";
	// 	context.fillText("12", 100, 60);

	// 	// measureText() return TextMetrics object which only has width property and may has more property in the future
	// 	// actully measure use font textAlign and textBaselin to calculate the size of text, usage as follows
	// 	var fontsize = 100;
	// 	context.font = fontsize + "px Arial";
	// 	while(context.measureText("hello world").width > 140) {
	// 		fontsize--;
	// 		context.font = fontsize + "px Arial";
	// 	}

	// 	context.fillText("hello world", 10, 10);
	// 	context.fillText("Font size is " + fontsize + "px", 10, 50);


	// 	context.font = "bold 14px Arial";
	// }

	// if (drawing.getContext) {
	// 	var context = drawing.getContext('2d');
	// 	// transformation, simple and complex
	// 	// method：rotate(angle) scale(scalex, scaley) translate(x, y) transform(m1_1, m1_2, m2_1, m2_2, dx, dy) setTransform(m1_1, m1_2, m2_1, m2_2, dx, dy)
	// 	// using transform
	// 	context.beginPath();

	// 	// big circle
	// 	context.arc(100, 100, 99, 0, 2 * Math.PI, false);

	// 	// small circle
	// 	context.moveTo(194, 100);
	// 	context.arc(100, 100, 94, 0, 2 * Math.PI, false);

	// 	// tranform origin
	// 	context.translate(100, 100);

	// 	context.rotate(1);

	// 	//minute hand
	// 	context.moveTo(0, 0);
	// 	context.lineTo(0, -85);

	// 	// hour hand
	// 	context.moveTo(0, 0);
	// 	context.lineTo(-65, 0);
	// 	// stroke path
	// 	context.stroke();

	// }

	// context back and forward
	// if (drawing.getContext) {
	// 	var context = drawing.getContext('2d');
	// 	// save the previous context to stack and restore is pop the stack, that is to say, back the previous context
	// 	context.fillStyle = "#ff0000";
	// 	context.save();

	// 	context.fillStyle = "#00ff00";
	// 	context.translate(100, 100);
	// 	context.save();

	// 	context.fillStyle = "#0000ff";
	// 	context.fillRect(0, 0, 100, 200);

	// 	context.restore();
	// 	context.fillRect(10, 10, 100, 200);

	// 	context.restore();
	// 	context.fillRect(0, 0, 100, 200);
	// }

	// paint image
	if (drawing.getContext) {
		var context = drawing.getContext('2d'),
			image = document.getElementById("zhihu-avatar");

		// method drawImage(imgObj, destx, desty)
		// method drawImage(imgObj, destx, desty, destsizex, destsizey)
		// method drawImage(imgObj, originx, originy, originsizex, originsizey, destx, desty, destsizex, destsizey)
		context.drawImage(image, 50, 10);

		// method drawImage(canvasObj), to paint one canvas on another canvas

	}


	//show image
	// var imageURI = drawing.toDataURL('image/png'); // the canvas image could not come from the other domain
	// var image = document.createElement('img');
	// image.src = imageURI;
	// document.body.appendChild(image);

}).call(this);