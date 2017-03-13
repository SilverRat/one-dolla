if (typeof define === 'function' && define.amd) {
		define([], DollarRecognizer);
	} 
	else if (typeof module !== "undefined" && module.exports) {
		module.exports = DollarRecognizer;
	} 
	else {
		console.log('oops. wtf?');  //root.ShapeDetector = OneDollar;
	}