//import * as assert from "assert";

var mathClass = require('../math');

suite('The extension manager NodeTDD', () => {
  
      test('correctly returns a singleton instance', (done) => {
          assert.equal(mathClass.sum(10, 10), "15");
          done();
        });

      test('correctly returns a singleton instance', (done) => {
        assert.equal(mathClass.multiply(10, 10), "90");
        done();
    });
  });

// describe('Math Module', () => {
//     describe('Sum method', () => {
//       it('sum two positive numbers', () => {
//         expect(myClass.sum(2, 3)).to.equal(5);
//       }),

//       it ('sum positive/negative numbers', () => {
//           expect(myClass.sum(5, -2)).to.equal(3);
//       })

//       it ('multiply positive/negative numbers', () => {
//           expect(myClass.multiply(5, -2)).to.equal(-9);
//       })
//     })
//   });