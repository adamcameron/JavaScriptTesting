var assert = require('chai').assert;


describe('MyClass tests', function() {
    var MyClass = require("../myApp/MyClass");
    describe('Baseline', function () {
        it('should exist and be usable', function () {
            var myObj = new MyClass();
            assert.instanceOf(myObj, MyClass, "myObj should be an instance of MyClass");
        });
    });
});
