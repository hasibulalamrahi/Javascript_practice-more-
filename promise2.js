
let enough_balance = true ;

let payment = (time , steps) => {
    return new Promise ((resolve ,reject ) =>{
        if(enough_balance ){
            setTimeout (() => {
                resolve (steps())
            },time)
        }
        else {
            reject(console.log("Your Payment is failed"))
        }
    })
}

payment(2000,() => console.log("Balace is checked"))

.then (() =>{
    return payment(0000 ,() => console.log("Account validation is checked"));
})

.then(() =>{
    return payment(2000, ()=> console.log("Reciever account is checked"));
})
.then(()=>{
    return payment(2000,() => console.log("Amount is deduced from senders profile"));
})
.then(()=>{
    return payment(2000,()=> console.log("Transaction in process"));

})

.then(() =>{
    return payment(3000,() => console.log("Transaction is Successful"));
})

.catch(() =>{
    console.log("Error has occured , please try again later")
})

.finally(() =>{
    console.log("Thank you for the transaction ");
})