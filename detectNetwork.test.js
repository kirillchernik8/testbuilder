
var FILL_ME_IN = 'Fill this value in';
//

var expect = chai.expect;

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});


function generate (prefix, i) {
  function randoms() {return Math.floor(Math.random() * 1000000000000000000000).toString().slice(0, i- prefix.length)};
  return prefix+=randoms();
  };


describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork(generate ('38', 14)) !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork(generate ('39', 14)) !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork(generate ('34', 15)) === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork(generate ('37', 15)) === 'American Express');
  });
});

describe('Visa', function() {
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork(generate ('4', 13)) === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork(generate ('4', 16)) === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork(generate ('4', 19)) === 'Visa');
  });
});

describe('MasterCard', function() {
  for (let prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        expect(detectNetwork(generate(prefix.toString(), 16))).to.equal('MasterCard')
      });
  }) (prefix)
}
});

// var discoverNumbers = ['6011', '644', '645', '646', '647', '648', '649', '65' ];

function generateDis16 (arr){
    return arr.map(x => generate (x, 16))
};

function generateDis19  (arr){
    return arr.map(x => generate (x, 19))
}


describe('Discover', function() {


     for (let i = 0; i < discoverNumbers.length; i++) {
        (function(i) {
   it('has a prefix of ' + discoverNumbers[i] + ' and a length of 16', function(){
     for (let j =0; j < generateDis19(discoverNumbers).length; j++){
       expect(detectNetwork(generateDis16(discoverNumbers)[j])).to.equal('Discover');
   }});
    it('has a prefix of ' + discoverNumbers[i] + ' and a length of 19' , function(){
      for (let j =0; j < generateDis19(discoverNumbers).length; j++){
      expect(detectNetwork(generateDis19(discoverNumbers)[j])).to.equal('Discover');
   }});
 }) (i)
}
});



describe('Maestro', function() {
  for (let i = 12; i < 20 ; i++) {
    (function(i) {
    it('has a prefix of 5018 and a length of ' + i, function(){
        expect(detectNetwork(generate('5018', i))).to.equal('Maestro');
      });
    it('has a prefix of 5020 and a length of ' + i, function(){
        expect(detectNetwork(generate('5020', i))).to.equal('Maestro');
      });
    it('has a prefix of 5038 and a length of '+i ,function(){
        expect(detectNetwork(generate('5038', i))).to.equal('Maestro');
      });
    it('has a prefix of 6304 and a length of ' + i, function(){
        expect(detectNetwork(generate('6304', i))).to.equal('Maestro');
      });
    }) (i);
  }
});


describe('China UnionPay', function() {

  for (let prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        expect(detectNetwork(generate(prefix.toString(), 16))).to.equal('China UnionPay')
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        expect(detectNetwork(generate(prefix.toString(), 17))).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18',  function(){
        expect(detectNetwork(generate(prefix.toString(), 18))).to.equal('China UnionPay');
      })
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        expect(detectNetwork(generate(prefix.toString(), 19))).to.equal('China UnionPay');
      })
     }) (prefix)
   };

   for (let prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
       it('has a prefix of ' + prefix + ' and a length of 16', function(){
         expect(detectNetwork(generate(prefix.toString(), 16))).to.equal('China UnionPay')
       });
       it('has a prefix of ' + prefix + ' and a length of 17', function(){
         expect(detectNetwork(generate(prefix.toString(), 17))).to.equal('China UnionPay');
       });
       it('has a prefix of ' + prefix + ' and a length of 18',  function(){
         expect(detectNetwork(generate(prefix.toString(), 18))).to.equal('China UnionPay');
       })
       it('has a prefix of ' + prefix + ' and a length of 19',  function(){
         expect(detectNetwork(generate(prefix.toString(), 19))).to.equal('China UnionPay');
       })
         }) (prefix)
     }

  for (let prefix = 622126; prefix <=  622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        expect(detectNetwork(generate(prefix.toString(), 16))).to.equal('China UnionPay');
      })
      it('has a prefix of ' + prefix + ' and a length of 17',  function(){
        expect(detectNetwork(generate(prefix.toString(), 17))).to.equal('China UnionPay');
      })
      it('has a prefix of ' + prefix + ' and a length of 18',  function(){
        expect(detectNetwork(generate(prefix.toString(), 18))).to.equal('China UnionPay');
      })
      it('has a prefix of ' + prefix + ' and a length of 19',  function(){
        expect(detectNetwork(generate(prefix.toString(), 19))).to.equal('China UnionPay');
      })
    }) (prefix)
  }

});



 var switchNumbers = ['4903', '4905', '4911', '4936', '6333', '6759', '564182', '633110'];

  function generateSixtn (arr) {
      return arr.map(x => generate (x, 16))
   };
  function generateEightn (arr) {
      return arr.map(x => generate (x, 18))
   };
  function generateNintn (arr) {
      return arr.map(x => generate (x, 19))
   };

 describe('Switch', function() {
   for (let i = 0; i < switchNumbers.length; i++) {
     (function(i) {

       it('has a prefix of ' + switchNumbers[i] + ' and a length of 16', function(){
         for (let j =0; j < generateSixtn(switchNumbers).length; j++){
         expect(detectNetwork(generateSixtn(switchNumbers)[j])).to.equal('Switch');
       }});

       it('has a prefix of ' + switchNumbers[i] + ' and a length of 18', function(){
          for (let j =0; j < generateEightn(switchNumbers).length; j++){
         expect(detectNetwork(generateEightn(switchNumbers)[j])).to.equal('Switch');
       }});
       it('has a prefix of ' + switchNumbers[i] + ' and a length of 19', function(){
          for (let j =0; j < generateNintn(switchNumbers).length; j++){
         expect(detectNetwork(generateNintn(switchNumbers)[j])).to.equal('Switch');
       }});
     }) (i)
   }
 })

5466272519847674491
