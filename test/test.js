#!/usr/bin/env node

var assert = require("assert");

describe('Array', function() {

	describe('#indexof()', function() {

		it('should return -1 when the value is not present', function() {
			assert.equal(-1, [1, 2, 3].indexOf(5));

			assert.equal(-1, [1, 2, 3].indexOf(0));
		});		

	});


	describe('#reduce()', function() {
	
		it("should iterate an array from left to right concatenating initializing value, 'i', to subsequent array elements", function() {
			var result = 
				['a', 'b', 'c'].reduce(function(p, c, i, a){
					return p + c;
				}, 'i');

			assert.equal("iabc", result);
		});

	});


	describe('#reduceRight()', function() {

		it("should iterate an array from right to left concatenating initializing value, 'i', to subsequent array elements", function() {
			var result = 
				['t','a','c'].reduceRight(function(p, c, i, a) {
					return p + c;					
				}, 'i');

			assert.equal("icat", result);
		});



	});

});


