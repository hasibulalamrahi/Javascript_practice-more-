


let num1 =2 ;
let num2 = 3;   

var sum = function(){
    var num3=4;
    var num4 = 10;
    
    return function(){
        
        return   num1 + num2 + num3 + num4;
          
        
    }
    
};


 var myFunc = sum();

console.dir(myFunc);


// var num1 =2 ;
// var num2 = 3;

// var sum = function(){
    
//         return num1 + num2;
    
    
// };

// console.dir(sum);

