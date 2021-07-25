// function takeorder(callback){
//     console.log("Order placed");
//     callback();
// }
// function ProcessOrder(callback){
//     console.log("Order is processed");
//     callback();
// }
// function CompleteOrder(callback){
//     console.log("Order is Delivered");
//    callback();
// }
// function reviewOrder(callback){
//     console.log("Did you liked our order? Give us a feedback ");
    
// }


// takeorder(function(){
//     ProcessOrder(function(){
//         CompleteOrder(function(){
//             reviewOrder();
//         })
//     });
// });

//var msg = "Hi";
//  function hello(){
//   var msg = "Hello World";
//  }
//  hello();
 //console.log(msg);



//Basic Higher order function 

function hello(){
    return function(){
        console.log("Hello");
    };
}

hello()();

