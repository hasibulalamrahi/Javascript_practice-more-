
let stocks = {
    fruits : ["strawberry","grape","Banana","apple"],
    liquid : ["water","ice"],
    toppings : ["choclate","peanutss"],
    holder : ["cone","cup","Box"]

};

let is_shop_open = true;

let order = (time ,work) => {
   
    return new Promise ( (resolve ,reject) =>{
        if(is_shop_open){
            
            setTimeout(()=>{
            resolve( work())

            },time)
           
            
        }

        else {
            reject(console.log("Our shop is closed"))

        }
       
    })
}

order(2000,() => console.log(`${stocks.fruits[0]} is selected`))

.then(() =>{
    return order( 0000 ,() => console.log("production has started"));
})

.then(() =>{
    return order(2000,()=> console.log("The fruit was choped"));
})
.then(() =>{
    return order(1000, () => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
    })
})

.then(()=>{
    return order(1000,()=>{
        console.log("start the machine")
    })
})

.then(()=>{
    return order (2000 ,() =>{
        console.log(`ice cream was placed on ${stocks.holder[0]}`)
    })
})

.then (() =>{
    return order (2000, () =>{
        console.log("ice cream was served")
    })
})

.catch (() =>{
    console.log("customer left");
})

.finally(() =>{
    console.log("Day ended ,Shop is closed");
})



