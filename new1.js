// Define a class called 'Person'
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display person's information
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Instantiate objects from the class
let person1 = new Person("John Doe", 25);
let person2 = new Person("Jane Smith", 30);

// Display information
console.log(person1.getInfo()); // Output: Name: John Doe, Age: 25
console.log(person2.getInfo()); // Output: Name: Jane Smith, Age: 30
