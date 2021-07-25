// function one(callback){
   
//     console.log("Step 1 is complete , Please call the step 2");
//     callback();
//     console.log("Processing into the step 2");
//     console.log("Step 2 is completed");
// }

// function two(){
//     console.log('Step 2');
    
// }

// one(two);

const takeOrder = (customer ,callback) => {
    console.log(`Taking order for the customer ${customer}`);
    callback(customer);
    console.log("Hi");
};

const processOrder =(customer,callback) => {
    console.log(`Proocessing the order for the ${customer}`);
    
    setTimeout(()=>{
        console.log("Cooking Completed");
        console.log(`Order Processed for the ${customer}`);
        callback(customer);
    },3000);
  
};



const completeOrder = (customer,callback) => {
    console.log(`Completed Order for the customer ${customer}`);
    callback(customer);
};
const deliverOrder = (customer) =>{
    console.log(`Order Delivered / Served to the ${customer}`);
};


takeOrder("customer 1",(customer)=>{
    processOrder(customer,(customer)=>{
        completeOrder(customer,(customer)=>{
            deliverOrder(customer);
        });
       
    });
});

console.log("Here execution is stopped");
console.log("Lets wait for some few more time ");
