// Base class (Parent)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Subclass (Child)
class Employee extends Person {
    constructor(name, age, job, salary) {
        // Call the parent class constructor
        super(name, age);
        this.job = job;
        this.salary = salary;
    }

    // Override getInfo method to include job and salary information
    getInfo() {
        return `${super.getInfo()}, Job: ${this.job}, Salary: ${this.salary}`;
    }

    // Additional method specific to Employee class
    setSalary(newSalary) {
        this.salary = newSalary;
    }
}

// Instantiate the Person class
let person1 = new Person("Megs Bars", 24);
console.log(person1.getInfo()); // Output: Name: Megs Bars, Age:  24

// Instantiate the Employee class
let employee1 = new Employee("Meghan Theriz Rautraut Barcibal", 23, "IT-Student", 50000);
console.log(employee1.getInfo()); // Output: Name: Meghan Theriz Rautraut Barcibal, Age: 23, Job: IT-Student, Salary: 50000

// Update the salary
employee1.setSalary(60000);
console.log(employee1.getInfo()); // Output: Name: Meghan Theriz Rautraut Barcibal, Age: 23, Job: IT-Student, Salary: 60000
