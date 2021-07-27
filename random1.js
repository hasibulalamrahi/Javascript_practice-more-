a =  "Hello";
async function myname(){
    return a;
}
// var b = await myname();
// console.log(b);
myname()
    .then((res)=>{
        console.log(res);
    })