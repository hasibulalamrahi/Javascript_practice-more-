//Call back hell
let stocks = {
    fruits : ["strawberry","grape","Banana","apple"],
    liquid : ["water","ice"],
    toppings : ["choclate","peanutss"],
    holder : ["cone","cup","Box"]

};

let order = (fruit_name, callback) =>{
   
    setTimeout(() =>{
        
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        callback()
    
    },2000);
    
};

let production = () => {
    setTimeout(() =>{
        console.log("Production has started");

        setTimeout(() =>{
            console.log("The fruits has been choped");
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(()=>{
                    console.log("The machine has been started");
                    setTimeout(()=>{
                        console.log(`${stocks.holder[0]} was selected`);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was selected`);
                        },2000);
                    },2000);
                },1000);
            },1000);

        },2000);
    },0000); 
};

order("1",production);

