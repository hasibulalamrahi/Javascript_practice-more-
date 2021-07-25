//normally we call a function like as follows

// function number(){
//     console.log("Hello");

// }

// number();

//we can call the same above function as follows using a array function
var number = ()=>{
    console.log("hello");
}
number();


//Why should we be using the Arrow function? The reason is to remove the confusion between this keyword used in a function
//In the following code we can have an actual aspect of using this 

// var javascript = {
//     name:"javascript",
//     libraries:["React","Angular","Vue"],
//     printLibraries : function(){
//         this.libraries.forEach(function(a){
//             console.log(`${this.name} has a library called ${a}`);
//         });  
//     },

// };

// javascript.printLibraries();

//Expected ouput was : javascript has a library called React , javascript has a library called Angular , javascript has a library called Vue 
//Obtained output is : has a library called React , has a library called Angular , has a library called Vue
//The reason behind this problems was that we used this keyword which could not idenfify the "name" because forEach() function changes this
//we can  get rid of the following confusion like this 

// var javascript = {
//     name:"javascript",
//     libraries:["React","Angular","Vue"],
//     printLibraries : function(){
//         var self= this;
//         this.libraries.forEach(function(a){
//             console.log(`${self.name} has a library called ${a}`);
//         });  
//     },

// };

// javascript.printLibraries();

// as forEach changes the keyword this we have kept our this reference in a variable called self
//then we used the reference of self in our program to get rid of this problem 
//we will get our expected output here but yet it is not the fisible solution for us 
// so here we will be using the arrow function to get rid of this problem easily 

var Language = {
    name:"javascript",
    libraries:["React","Angular","Vue"],
    printLibraries : function(){
        this.libraries.forEach((a) =>{
            console.log(`${this.name} has a library called ${a}`);
        });  
    },

};

Language .printLibraries();

//we will be using our desired ouput now without any confusions