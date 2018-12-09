// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
var dinerNumbers = ['39', '38'];
var dinerLength = [14];

var americNumbers = ['34', '37'];
var americLength = [15];

var visaNumbers = ['4'];
var visaLength = [ 13, 16, 19];

var masterNumbers = ['51', '52', '53', '54', '55'];
var masterLength = [16];

var discoverNumbers = ['6011', '644', '645', '646', '647', '648', '649', '65' ];
var discoverLength = [16, 19];

var maestroNumbers = ['5018', '5020', '5038', '6304'];
var maestroLength = [12, 13, 14, 15, 16, 17, 18, 19];

var switchNumbers = ['4903', '4905', '4911', '4936', '6333', '6759', '564182', '633110']
var switchLength = [16, 18, 19];

var chinaNumbers = ['62'];
var chinaLength = [16, 17, 18, 19];

function addToUnion () {
  for (var i = 622126; i <=  622925; i++) {
    chinaNumbers.push(i.toString())
  };
  for (var n = 6282; n <= 6288; n++) {
    chinaNumbers.push(n.toString())
  }

  for (var j = 624; j<=626; j++) {
    chinaNumbers.push(j.toString())
  }
  return chinaNumbers;
}
addToUnion();


function detectNetwork (cardNumber) {

  if(cardNumber.length >=12 && cardNumber!==undefined ) {
 var card ='';
 var prefixOf1 = cardNumber.slice(0,1);
 var prefixOf2 = cardNumber.slice(0,2);
 var prefixOf3 = cardNumber.slice(0,3);
 var prefixOf4 = cardNumber.slice(0,4)
 var prefixOf6 = cardNumber.slice(0,6)
 var numLength = cardNumber.length;



 if ( dinerNumbers.indexOf(prefixOf2) > -1 && dinerLength.indexOf(numLength) > -1) {
  return card = 'Diner\'s Club';
 }

    else if (americNumbers.indexOf(prefixOf2) > -1 && americLength.indexOf(numLength) > -1) {
   return card ='American Express';
}
    else if (masterNumbers.indexOf(prefixOf2) > -1 && numLength === 16) {
   return card = 'MasterCard';
}
    else if (prefixOf1 === '4' && switchNumbers.indexOf(prefixOf4) === -1 && visaLength.indexOf(numLength) > -1) {
  return card = 'Visa';
}
    else if (discoverNumbers.indexOf(prefixOf4) > -1 && discoverLength.indexOf(numLength) > -1 || discoverNumbers.indexOf(prefixOf3) > -1 && discoverLength.indexOf(numLength) > -1 || discoverNumbers.indexOf(prefixOf2) > -1 && discoverLength.indexOf(numLength) > -1  ) {
  return card = 'Discover';
 }
    else if (maestroNumbers.indexOf(prefixOf4) > -1 && maestroLength.indexOf(numLength) > -1) {
  return card = 'Maestro';
 }
    else if (switchNumbers.indexOf(prefixOf4) > -1 && switchLength.indexOf(numLength) > -1 || switchNumbers.indexOf(prefixOf6) > -1 && switchLength.indexOf(numLength) > -1) {
  return card ='Switch';
 }
    else if (chinaNumbers.indexOf(prefixOf6) > -1 && chinaLength.indexOf(numLength) > -1|| chinaNumbers.indexOf(prefixOf4) > -1 && chinaLength.indexOf(numLength) > -1 || chinaNumbers.indexOf(prefixOf3) > -1 && chinaLength.indexOf(numLength) > -1) {
  return card = 'China UnionPay';
 }
}
    else {
  return 'Wow, that is not a valid card number, check again!'
}
};
