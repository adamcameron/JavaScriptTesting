var Person = function(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
};

Person.prototype.getFullName = function(){
    return this.firstName + " " +this.lastName;
};

Person.prototype.getAgeInYears = function(){
    return new Date().getFullYear() - this.dateOfBirth.getFullYear();
};

module.exports = Person;
