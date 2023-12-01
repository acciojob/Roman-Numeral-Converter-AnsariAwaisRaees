function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

	//your code here
	let result = '';
	let currentNum = num;
	for (let i = 0; i < 7; i++) {
		let count = Math.floor(currentNum / obj[i][1]);
		if (count > 0) {
		    result += obj[i][0].repeat(count);
		    currentNum %= obj[i][1];
		}
	    if (i % 2 === 0 && i < 6 && currentNum >= obj[i + 2][1] - obj[i + 2][1] / 10) {
		    result += obj[i + 2][0] + obj[i][0];
		    currentNum -= obj[i + 2][1] - obj[i];
		}
	    if (i % 2 === 1 && i < 5 && currentNum >= obj[i + 1][1] - obj[i + 1][1] / 10) {
		    result += obj[i + 1][0] + obj[i - 1][0];
		    currentNum -= obj[i + 1][1] - obj[i - 1][1];
		}
	}
	return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
