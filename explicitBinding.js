//we are doing the Explicit binding example 2 by explicit binding as follows
//Example1
// var printName = function(){
//     console.log(this.name);
//     console.log(this.age);
// };
// var sakib = {
//     name : 'sakib',
//     age : 35
// };
// printName.call(sakib);






//Example 2 using call function we can access multiple objects
// var printName = function(){
//     console.log(this.name);
//     console.log(this.age)
// };
// var sakib = {
//     name: "sakib",
//     age : 35
// };

// var tamimIq ={
//     name : "tamim iqbal khan",
//     age : 33
// };
// printName.call(sakib); //here we didint had to create an object like that of implicit binding
// printName.call(tamimIq);

//we are modifying the exam 1 as follows

// var printName = function(testRuns,odiRuns,t20Runs){
//     console.log(this.name);
//     console.log(`sakib has total ${testRuns}, ${odiRuns} and ${t20Runs} in test , ODI and T20I respectively`);
// };
// var sakib = {
//     name: "sakib",
//     age : 35
// };


// var testRuns = 5000;
// var odiRuns = 7000;
// var t20Runs = 1500;

// printName.call(sakib,testRuns,odiRuns,t20Runs);

//use of apply  function
// we can use apply function in order to take the variable input of testRuns, odiRuns and t20 Runs as an array 
//this code will works as the same as the call method

// var printName = function(testRuns,odiRuns,t20Runs){
//     console.log(this.name);
//     console.log(`sakib has total ${testRuns}, ${odiRuns} and ${t20Runs} in test , ODI and T20I respectively`);
// };
// var sakib = {
//     name: "sakib",
//     age : 35
// };


// var testRuns = 5000;
// var odiRuns = 7000;
// var t20Runs = 1500;

// var v = [testRuns , odiRuns ,t20Runs];

// printName.apply(sakib,v);

// use of bind method
//bind methods are quite samae as the call() methods but here in the bind method
// an instance of the object is formed which we have to keep it in a variable 
// then we call that variable 
// we are doing the same example as before and calling it through the bind methods
var printName = function(testRuns,odiRuns,t20Runs){
    console.log(this.name);
    console.log(`sakib has total ${testRuns}, ${odiRuns} and ${t20Runs} in test , ODI and T20I respectively`);
};
var sakib = {
    name: "sakib",
    age : 35
};


var testRuns = 5000;
var odiRuns = 7000;
var t20Runs = 1500;

var newFunc = printName.bind(sakib,testRuns,odiRuns,t20Runs);
newFunc(); 