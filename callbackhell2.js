
let payment = ( steps,callback) =>{

    setTimeout(() =>{
        console.log("Balance is checked");
        callback()
    },2000);
};

let enough_balance = () => {
    setTimeout(() =>{
        console.log("Account Validation is checked");
        setTimeout(() =>{
            console.log("Recievers Account is checked")
            setTimeout(()=>{
                console.log("Amount is deduced from the senders profile")
                setTimeout(()=>{
                    console.log("Transaction is in process");
                    setTimeout(() =>{
                        console.log("Transaction is successful");
                    })
                },2000);
            },2000);
        },2000);
    },0000);
};

payment("1",enough_balance);