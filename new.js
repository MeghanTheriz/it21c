class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    // Correctly formatted getInfo method
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`;
    }

    // Method to update job
    setJob(newJob) {
        this.job = newJob;
    }
}

// Instantiate and interact with the object
let person1 = new Person("Alice Brown", 28, "Software Developer");
console.log(person1.getInfo()); // Output: Name: Alice Brown, Age: 28, Job: Software Developer

// Update the job
person1.setJob("Senior Developer");
console.log(person1.getInfo()); // Output: Name: Alice Brown, Age: 28, Job: Senior Developer
