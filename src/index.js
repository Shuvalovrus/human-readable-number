module.exports = function toReadable(n) {
    let numbersArr = n.toString().split('')
    let dozensInHundred;
    
    let primeNumbers = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve'
    ]
  
    let dozens = [
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen'
    ]
  
    let fullDozens = [
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',
    ];
  
  
  
  if(n > 9){
   dozensInHundred = Number(numbersArr[1].toString() + numbersArr[2]);
  } 
  
    if (n == 0){
      return 'zero';
    } else if(n <= 12) {
    return primeNumbers[n - 1];
  } else if(n <= 19){
    return dozens[n - 13];
  } else if(n < 100 && numbersArr[1] == 0) {
    return fullDozens[numbersArr[0] - 2];
  } else if(n < 100 && numbersArr[1] != 0){
    return fullDozens[numbersArr[0] - 2] + " " + primeNumbers[numbersArr[1] - 1];
  } else if (n < 1000 && numbersArr[1] == 0 && numbersArr[2] == 0) {
    return primeNumbers[numbersArr[0] - 1] + " " + "hundred"
  } else if (n < 1000 && dozensInHundred <= 12){
    return primeNumbers[numbersArr[0] - 1] + " " + "hundred" + " " + primeNumbers[dozensInHundred - 1]
  } else if (n < 1000 && dozensInHundred <= 19){
    return primeNumbers[numbersArr[0] - 1] + " " + "hundred" + " " + dozens[dozensInHundred - 13];
  } else if (n < 1000 && dozensInHundred < 100 && numbersArr[2] == 0) {
    return primeNumbers[numbersArr[0] - 1] + " " + "hundred" + " " + fullDozens[numbersArr[1] - 2]
  } else if (n < 1000 && dozensInHundred < 100 && numbersArr[numbersArr[1]] != 0) {
    return primeNumbers[numbersArr[0] - 1] + " " + "hundred" + " " + fullDozens[numbersArr[1] - 2] + " " + primeNumbers[numbersArr[2] - 1]
  }
  
  }