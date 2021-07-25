// myFunc();
// var myFunc = function(){
//     var language = 'javascript';
//     console.log(language);
// }

//creating object in a primitive way
// let person = {};

// person.name ='jasim';
// person.age =20;

// //adding function in an object 
// person.eat = function (){
//     console.log('Person is eating');
// };

// person.sleeps = function(){
//     console.log('The person sleeps only when he is tiered');
// }

// console.log(person);

 
//We ca do this more smartly by putting everything in a funnction and accessing it 

//  function Person (name,age){
//     let person ={};

//     person.name = name;
//     person.age = age;

//     person.eat = function(){
//         console.log("The person is eating");
//     };

//     person.sleep = function(){
//         console.log("The Function sleeps only when the work is done");
//     }
//     return person;
// }

// const sakib = Person('sakib',35);
// const mushfiq = Person('Mushfiq',32);
// console.log(sakib);



//This common natures like eat and sleep can be shared more easily by the followings

// const personMethods = {
//     eat(){
//         console.log("The Player eats");
//     },
//     sleeps(){
//         console.log("The player sleeps ");
//     }

// };

// function Person(name,age){
//     let person ={};

//     person.name = name;
//     person.age = age ;

//     person.eat = personMethods.eat;
//     person.sleeps = personMethods.sleeps;

//     return person;

// }

// const sakib = Person('sakib',35);
// const mushfiq = Person('Mushfiq',32);
// console.log(sakib);
// console.log(mushfiq);

//in the above object we could access the common properties of the object by placing the object under a common function
//but this process is also a tiring process so we can do the following

// const personMethods = {
//     eat(){
//         console.log("The Player eats");
//     },
//     sleeps(){
//         console.log("The player sleeps ");
//     }

// };

// function Person(name,age){
//     let person = Object.create(personMethods);

//     person.name = name;
//     person.age = age ;

//     // person.eat = personMethods.eat;
//     // person.sleeps = personMethods.sleeps;

//     return person;

// }

// const sakib = Person('sakib',35);
// const mushfiq = Person('Mushfiq',32);
// sakib.sleeps();
// mushfiq.eat();

//Even this process  has some more shortcuts like 


// function Person(name,age){
//   let person =Object.create(Person.prototype);

//     person.name = name;
//     person.age = age ;

   

//     return person;

// }

// Person.prototype = {
//     eat(){
//         console.log("The Player eats");
//     },
//     sleeps(){
//         console.log("The player sleeps ");
//     }

// };


// const sakib = Person('sakib',35);
// const mushfiq = Person('Mushfiq',32);
// sakib.eat();
// sakib.sleeps();
// mushfiq.eat();
// mushfiq.sleeps();
// console.log(sakib);


//We can make this more easy 

function Person(name,age){
   // let person =Object.create(Person.prototype);

    this.name = name;
    this.age = age ;

   

    //return person;

}

Person.prototype = {
    eat(){
        console.log("The Player eats");
    },
    sleeps(){
        console.log("The player sleeps ");
    }

};


const sakib = new Person('sakib',35);
const mushfiq = new  Person('Mushfiq',32);
sakib.eat();
sakib.sleeps();
mushfiq.eat();
mushfiq.sleeps();
console.log(sakib);