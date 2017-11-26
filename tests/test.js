var myClass = require('../app/math');
var chai = require('chai');
var expect = chai.expect;

describe('Math Module', () => {
    describe('Sum method', () => {
      it('sum two positive numbers', () => {
        expect(myClass.sum(2, 3)).to.equal(5);
      }),

      it ('sum positive/negative numbers', () => {
          expect(myClass.sum(5, -2)).to.equal(3);
      })

      it ('multiply positive/negative numbers', () => {
          expect(myClass.multiply(5, -2)).to.equal(-10);
      })
    })
  });