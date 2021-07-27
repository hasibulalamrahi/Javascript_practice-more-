const  Promise1 = new Promise((resolve , reject)=>{
    resolve("Promise1 is resolved");
});
const Promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 is resolved");
    },2000);
});

// Promise1
//     .then((res)=>{
//         console.log(res);
//     })
// Promise2
//     .then((res)=>{
//         console.log(res);
//     });
//We can resolve both promises altogether now

// Promise.all([Promise1,Promise2])
//             .then((res)=>{
//                 console.log(res)
//             })

//Use of Promise.race
//It will return the race which will resolve earlier

Promise.race([Promise1,Promise2])
            .then((res)=>{
                console.log(res)
            })
