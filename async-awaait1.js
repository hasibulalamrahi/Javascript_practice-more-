let stocks = {
    fruits : ["strawberry","grape","Banana","apple"],
    liquid : ["water","ice"],
    toppings : ["choclate","peanutss"],
    holder : ["cone","cup","Box"]

};

let is_shop_open = true ;

let toppings_choice = () => {
    return new Promise((resolve ,reject) =>{
        setTimeout(() =>{
            resolve(
                console.log("which Toppings would you love?")
            )
           
        },3000)
    });
}

async function  kitchen () {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");

    await toppings_choice()
    console.log(" D ");
    console.log(" E ");
}

kitchen();

console.log("Cleaning the dishes ");
console.log("Cleaning the  table ");
console.log("taking the other orders ");