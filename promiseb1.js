
//This is the simple context of a promise where we have declared a varialbe as resoleved
// let myFirstPromise = new Promise((resolve , reject)=>{
//     let name = "Twinkle cats";
//     setTimeout(()=>{
//         resolve(name);
//     },3000);
// })
// console.log(myFirstPromise);

// myFirstPromise
//     .then((name)=>{
//         console.log(`we are ${name}`);
//     })

//Using Fetch API to return promise

// let data = fetch('https://jsonplaceholder.typicode.com/todos/1');
// console.log(data);
//This will return a promise

fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
    .then((response)=>{
        console.log(response.json());
    })
    .then((body)=>{
        console.log(body);
    })
    .catch((err)=>{
        
            console.log(err);
    
    })