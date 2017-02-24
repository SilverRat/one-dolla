
// Builder for short API recognizer
function newRecognizer (init) {
	// Initialize recognizer
	var instance = new DollarRecognizer(init)

	// Single function exposed as a shortcut
	function recognizer (points) {
		// Convert arrays into points
		points = points.map(function (point) {
			if (Array.isArray(point)) {
				return new Point(point[0], point[1])
			}
		})

		var result = recognizer.recognize(points)

		if (result.Score === 0) {
			// all results are lowercased strings, 'No match.' should make no difference
			return { name: 'nomatch', score: 0 }
		} else {
			return { name: result.Name, score: result.Score }
		}
	}

	// Camel-case aliases for methods
	recognizer.recognize = instance.Recognize.bind(instance)
	recognizer.addGesture = instance.AddGesture.bind(instance)
	recognizer.deleteUserGestures = instance.DeleteUserGestures.bind(instance)
	recognizer.gestures = instance.Unistrokes

	return recognizer
}

// Export all public classes
newRecognizer.DollarRecognizer = DollarRecognizer
newRecognizer.Point = Point

// Maybe less useful, but let's expose everything previously public
newRecognizer.Rectangle = Rectangle
newRecognizer.Unistroke = Unistroke
newRecognizer.Result = Result
newRecognizer.Resample = Resample
newRecognizer.IndicativeAngle = IndicativeAngle
newRecognizer.RotateBy = RotateBy
newRecognizer.ScaleTo = ScaleTo
newRecognizer.TranslateTo = TranslateTo
newRecognizer.Vectorize = Vectorize
newRecognizer.OptimalCosineDistance = OptimalCosineDistance
newRecognizer.DistanceAtBestAngle = DistanceAtBestAngle
newRecognizer.DistanceAtAngle = DistanceAtAngle
newRecognizer.Centroid = Centroid
newRecognizer.BoundingBox = BoundingBox
newRecognizer.PathDistance = PathDistance
newRecognizer.PathLength = PathLength
newRecognizer.Distance = Distance
newRecognizer.Deg2Rad = Deg2Rad

// Constants too
newRecognizer.NumUnistrokes = NumUnistrokes
newRecognizer.NumPoints = NumPoints
newRecognizer.SquareSize = SquareSize
newRecognizer.Origin = Origin
newRecognizer.Diagonal = Diagonal
newRecognizer.HalfDiagonal = HalfDiagonal
newRecognizer.AngleRange = AngleRange
newRecognizer.AnglePrecision = AnglePrecision
newRecognizer.Phi = Phi

module.exports = newRecognizer
