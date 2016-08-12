'use strict';

module.exports =

    /**
     * Takes in a Function and returns the unwrapped function.
     *  
     * @param func {Function}
     */
    function(func) {
        var self = this;
        return function() {
            var args = Array.prototype.slice(arguments);
            args.unshift(this);
            return func.apply(self, args);
        }
    };
    