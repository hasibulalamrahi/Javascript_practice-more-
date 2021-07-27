let stocks = {
    fruits : ["strawberry","grape","Banana","apple"],
    liquid : ["water","ice"],
    toppings : ["choclate","peanutss"],
    holder : ["cone","cup","Box"]

};

let is_shop_open = true;

function time(ms){
    return new Promise((resolve,reject) =>{
        if (is_shop_open){
            setTimeout(resolve,ms);
        }
        else{

            reject(console.log("shop is closed"));
        }
    });
}

async function kitchen() {
    try{
        await time(1000);
        console.log(`${stocks.fruits[0]} is selected`);

        await time(3000);
        console.log("Start the production");

        await time(2000);
        console.log("Cut the fruit");

        await time(1000);
        console.log(`${stocks.liquid[1]} and ${stocks.liquid[0]} was added`);

        await time(1000);
        console.log("Start the machine");

        await time(3000);
        console.log(`${stocks.holder[0]} where ice cream was placed`);

        await time(3000);
        console.log(`${stocks.holder[0]} was selected`);

        await time(1000);
        console.log("Lets Enjoy with the money");
    }
    catch(error){
        console.log("customer left");
    }
    finally{
        console.log("day ended ,shop is closed");
    }
}


kitchen ();
