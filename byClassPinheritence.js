class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    static sleeps(){
        console.log(`${this.name} is sleeping`)
    }
}

class Cricketer extends Person {   //connecting the two classes
    constructor(name,age,type,country){
        super(name,age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
}

let sakib = new Cricketer("sakib",35,"Allrounder","Bangladesh");
console.log(sakib);
let tamim = new Person("tamim",32);
console.log(tamim);
sakib.eat();
Person.sleeps();