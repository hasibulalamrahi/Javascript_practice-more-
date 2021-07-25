

var num2 = 3;
var num1 =2 ;


var sum = function(){
   
    var num3=4;
    return function(){
        return num1 + num2 + num3;
    }
    
};

var myFunc = sum();
console.dir(myFunc);
console.log(num3);


// var num1 =2 ;
// var num2 = 3;

// var sum = function(){
    
//         return num1 + num2;
    
    
// };

// console.dir(sum);
