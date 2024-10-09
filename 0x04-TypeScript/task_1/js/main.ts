interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: unknown;
}

class Teacher implements Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number, additionalAttributes?: {[key: string]: unknown}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        if (yearsOfExperience !== undefined) {
            this.yearsOfExperience = yearsOfExperience;
        }
        if (additionalAttributes) {
            Object.assign(this, additionalAttributes);
        }
    }
}

const teacher3 = new Teacher('John', 'Doe', false, 'London', 26, {concept: false});
console.log(teacher3);