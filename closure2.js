
function bankAccount(initialBalance){
    var balance = initialBalance;
    return function(){
        console.log(balance);
    };
};

var account = bankAccount(100000);
console.log(account());
bankAccount(5000);

