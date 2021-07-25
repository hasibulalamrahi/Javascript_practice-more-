
function Person(name,age){  //Parent Class
    this.name =name;
    this.age = age;
}

function Cricketer(name,age,type,country){  //sub class or Child class
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Person.prototype = {
    eat: function(){
        console.log(`${this.name} is eating`);
    },

};

// Person.prototype.play = function (){
//     console.log("The player is playing");
// };

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor =Cricketer;

let sakib = new Cricketer("sakib",35,"Allrounder","Bangladesh");
console.log(sakib);
let tamim = new Person("tamim",32);
console.log(tamim);
sakib.eat();

// The above Program can be done using a class
