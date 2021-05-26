function binarySearch(sortedArray, target) {
	let startIndex = 0;
	let endIndex = sortedArray.length - 1;

	while (startIndex <= endIndex) {
		let middleIndex = Math.floor((start + end) / 2);

		if (sortedArray[middleIndex] === target) {
			return middleIndex;
		} else if (sortedArray[middleIndex] < target) {
			startIndex = middleIndex + 1;
		} else {
			endIndex = middleIndex - 1;
		}
	}

	return -1;
}

// const a = 1;
console.log(binarySearch);
