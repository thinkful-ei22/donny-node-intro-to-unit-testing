'use strict';

// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

//unit tests for our fizzBuzz function

describe('fizzBuzzer', function() {
//test cases
  //tests if it is a number
  it('Should raise error if args are not a number', function(){  
    const badInputs = [
      'a',
      '1',
      false
    ];

    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });

  //it should return fizz-buzz if number is divisible by 15



  it('Should return fizz-buzz if number is divisible by 15', function(){ 
    const divisible= [15, 30, 45];
    divisible.forEach( function() {
      expect(fizzBuzzer(15)).to.equal('fizz-buzz')
    });
  });

  //it should return buzz if number is divisible by 5

  it('Should return buzz if number is divisible by 5', function(){ 
    const divisible= [5, 10, 15];
    divisible.forEach( function() {
      expect(fizzBuzzer(5)).to.equal('buzz');
    });
  });

  //it should return fizz if number is divisible by 3
  it('Should return fizz if number is divisible by 3', function(){ 

    expect(fizzBuzzer(3)).to.equal('fizz');

  });

  //it should return a number if number is none of them
  it('Should return a number if the number is not divisible by 3,5,15', function(){ 

    expect(fizzBuzzer(22)).to.equal(22);

  });


});


