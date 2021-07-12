function one(callback){
    callback();
    console.log("Step 1 is complete , Please call the step 2");
}

function two(){
    console.log('Step 2');
}

one(two);