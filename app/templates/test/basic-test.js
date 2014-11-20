/* globals describe, it, assert */

'use strict';

var customElement = document.querySelector('<%= elementName %>');

describe('<<%= elementName %>>', function() {

    describe('test/basic-test.js', function() {
        it('should have real tests filled out', function() {
            assert.equal(customElement, customElement);
        });

    });

});
