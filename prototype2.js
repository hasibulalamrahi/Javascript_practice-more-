
//doing everything which was done in prototype.js by using class

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log("The Player eats");
    }
    sleeps(){
        console.log("The player sleeps ");
    }

    
    
}

const sakib = new Person('sakib',35);
const mushfiq = new  Person('Mushfiq',32);
sakib.eat();
sakib.sleeps();
mushfiq.eat();
mushfiq.sleeps();
