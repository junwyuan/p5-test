while (idx1 < arr1.length && idx2 < arr2.length) {
		if (abs(arr1[idx1].x - arr2[idx2].x) < sampleInterval) {
			err.push(distance(arr1[idx1], arr2[idx2]));
			idx1++;
			idx2++;
		} else if (arr1[idx1] < arr2[idx2]) {
			idx1++;
		} else {
			idx2++;
		}
	}

collect, sample control points, smooth, resample, compare.
