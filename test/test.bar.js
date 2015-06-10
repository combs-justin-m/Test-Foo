/* global describe, it */

(function () {
  'use strict';

   describe("Bar", function() {
      var bar;

    beforeEach(function() {
      bar = new Bar();
    });

    describe('square', function() {
      it('should square a number', function () {
        expect(bar.squared(2)).to.equal(4);
      });
    });

    describe('cube', function() {
      it('should cube a number', function () {
        expect(bar.cubed(3)).to.equal(27);
      });
    });

    describe('exponent', function() {
      it('should output number with given power', function () {
        var square = bar.exponentOf(2);
        expect(square(4)).to.equal(16);
      });
    });

    describe('Reverse String', function() {
      it('should output a string in reverse', function () {
        expect(bar.reverseString('abc')).to.equal('cba');
      });
    });

    describe('cipher', function() {
      it('should cipher a string', function() {
        expect(bar.cipher('justin')).to.equal('ÎÙ×ØÍÒ');
      });
    });

    describe('decipher', function() {
      it('should decipher a string', function() {
        expect(bar.decipher('ÎÙ×ØÍÒ')).to.equal('justin');
      });
    });


    describe('rot13', function() {
      it('should turn a sentence into a character code string', function() {
        expect(bar.rot13('justin combs')).to.equal('whfgva pbzof');
      });
    });

  });

})();