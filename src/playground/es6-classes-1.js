
class Person {
     
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
     //   return 'Hi ' + this.name;
        return `Hi, Im ${this.name}`;  //templatable strings! awesome shit
    }

    getDescription() {
        return `Hi, Im ${this.name} who is ${this.age} years old`
    }
}


class Student extends Person {
    constructor (name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ` who studies ${this.major}`;
        }

        return description;
    }
} 

class Traveler extends Person{
    constructor(name,age, home){
        super(name,age);
        this.home = home;
    }

    getGretting(){
        let greeting = super.getGretting();
        
        if(this.home) {
            greeting = greeting + ` from ${this.home}`
        }

        return greeting;
    }
}

const me = new Traveler('Mad Scientist', 12, 'Computer Science');

console.log(me.getGretting());