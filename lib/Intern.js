// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Intern = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        super(name,id,email);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;