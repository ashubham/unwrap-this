'use strict';

var unwrap = require('../index.js');

describe('Unwrap this', function() {
    it('should pass current this context as a parameter', function () {
        var test = {
            value: 'test',
            myFunc: function(ctx) {
                return ctx.value;
            }
        };
        var unwrappedFn = unwrap(test.myFunc).bind({value: 'context'});

        expect(unwrappedFn()).toBe('context');
    })
});