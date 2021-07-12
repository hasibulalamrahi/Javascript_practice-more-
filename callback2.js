
let order = (callback) =>{
    console.log("order Placed , Please call the production");
    callback()
};

let production = () => {
    console.log("Order recieved ,Starting production");
};

order(production);