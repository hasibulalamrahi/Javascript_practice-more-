//here we will use throw keyword

var num = prompt("Enter a number : ");
try{
    if(num < 5)
    {
        throw "number is too low"
    } else if(num>12){
        throw "input is large"
    }

} catch(err) {
    console.log(err);
}