

//Implicit Binding example -1
// var sakib = {
//     name: 'Shakib',
//     age : 35,
//      printPlayerName : function (name){
//         console.log(this.name);
//     }
// };

// sakib.printPlayerName();


// Implicit Binding Example-2

// var printPlayer = function(obj){
//     obj.printPlayer = function(){
//         console.log(this.name);
//     };
// };

// var shakib = {
//     name : "Shakib",
//     age : 35,
// };

// var tamimIq ={
//     name: "Tamim",
//     age : 35,
// };

// printPlayer(shakib);  //creates a reference of sakib in printPlayer function
// printPlayer(tamimIq); //creates a reference of tamim in the printPlayer function
// shakib.printPlayer();
// tamimIq.printPlayer();

//implicit Binding Example - 3
//We can write the above example -2 in a much more smarter way like

// function Person(name,age){
//     return {
//         name: name ,
//         age:age,
//         printPlayerName : function(){
//             console.log(this.name);
//         }
//     }
// };

// var alHasan = Person('sakib',35);
// alHasan.printPlayerName();


//implicit binding example - 4
//we can add another object in the example 3 as follows

// function Person(name,age){
//     return {
//         name: name,
//         age : age,
//         printName : function(){
//             console.log(this.name);
//         },
//         father:{
//             name: "Mr Abdul majid",
//             age:68,
//             printName: function(){
//                 console.log(this.name);
//             },
//         }
//     }
// }

// var alHasan = Person("Shakib",35);
// alHasan.printName();
// console.log(alHasan.age);
// alHasan.father.printName();
// console.log(alHasan.father.age);

//Example - 5 we can take the second object more smartly like

function Person(name,age,name1,age1){
    return {
        name: name,
        age : age,
        printName : function(){
            console.log(this.name);
        },
        father:{
            name: name1,
            age:age1,
            printName: function(){
                console.log(this.name);
            },
        }
    }
}

var alHasan = Person("Shakib",35,"Md.Abdul majid",64);
alHasan.printName();
console.log(alHasan.age);
alHasan.father.printName();
console.log(alHasan.father.age);

