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
	let romanNumeral = '';
	let i = 0;
	
	while (num > 0) {
	    const currentNum = obj[i][1];
	    const currentSymbol = obj[i][0];

	    if (num >= currentNum) {
		    romanNumeral += currentSymbol;
		    num -= currentNum;
		} else {
		    i++;
		}
	}
	return romanNumeral;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
