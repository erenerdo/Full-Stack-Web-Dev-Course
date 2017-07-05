function printReverse(nums){
	for (var i = nums.length -1; i >= 0; i--){
		console.log(nums[i]);
	}	
}

function isUniform(arr){
	for(var i = 0; i < arr.length-1; i++){
		if (arr[i] != arr[i+1])
			return false;
	}
	return true;
}

function sumArray(nums){
	var total = 0; 
	nums.forEach(function(n){
		total += n;
	});
	return total;
}

function max(nums){
	var maxValue = nums[0];

	nums.forEach(function(n){
		if(maxValue < n){
			maxValue= n;
		}
	});
	return maxValue;
}