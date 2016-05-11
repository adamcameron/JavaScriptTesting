var assert = require('chai').assert;

describe('Person tests', function() {
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
        describe('getAgeInYears tests', function () {
            it('should return the correct age in years', function () {
                var person = new Person("FIRST_NAME", "LAST_NAME", new Date("1970-02-17"));
                var ageInYears = person.getAgeInYears();
                assert.equal(46, ageInYears); // obvious not a very robust test
            });
        });
    });
});
