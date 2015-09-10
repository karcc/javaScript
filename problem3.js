//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

function primeFactor (num){
	var isPrime = num;
	var primeList = [];
	var largestFactor = 0;
	for(var i = 2; i <= isPrime; i++){
		if(isPrime % i === 0){
			isPrime /= i;
			largestFactor = i;
			primeList.push(i);
		}
	}
	console.log("The list of prime numbers are " + primeList);
	console.log("The answer is " + largestFactor);
}

primeFactor(600851475143);