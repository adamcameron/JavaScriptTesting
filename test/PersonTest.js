var assert = require('chai').assert;

describe('MyClass tests', function() {
    var Person = require("../myApp/Person");
    describe('Baseline', function () {
        it('should exist and be usable', function () {
            var person = new Person();
            assert.instanceOf(person, Person);
        });
    });
    describe('Method tests', function () {
        describe('getFullName tests', function () {
            it('should return a full name', function () {
                var person = new Person("FIRST_NAME", "LAST_NAME");
                var fullName = person.getFullName();
                assert.equal("FIRST_NAME LAST_NAME", fullName);
            });
        });
    });
});
