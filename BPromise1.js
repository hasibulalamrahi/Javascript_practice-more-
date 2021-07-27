//Baic Promise syntax
// let flag = true;
// const myPromise = new Promise((resolved,reject)=>{
//     if(flag){
//         resolved(['We won!',"Hello"])
//     }
//     else{
//         reject(new Error("We got a Error"))
//     }
    
// })

// myPromise
// .then((res)=>{
//     console.log(res)
// })

// .catch ((err)=>{
//     console.log("We got an Error");
// })

//Using set time out using Promise

// let flag = true;
// const myPromise = new Promise((resolved,reject)=>{
//     if(flag){
//         setTimeout(()=>{
//             resolved(['We won!',"Hello"])
//         },3000)
//     }
//     else{
//         reject(new Error("We got a Error"))
//     }
    
// })

// myPromise
// .then((res)=>{
//     console.log(res)
// })

// .catch ((err)=>{
//     console.log("We got an Error");
// })

//Passing the value of one promise to another 


// const inAPromise1 = () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hi");
//         },3000)
//     })
// }

// const inAPromise2 = ((res) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(res + ': we got 2nd data by fetching');
//         },1500)
//     })
// })

// inAPromise1()
//     .then(res =>{
//         inAPromise2(res)
//             .then((res) =>{
//                 console.log(res)
//             })
//     })
//     .catch((err) =>{
//         console.log(err);
//     })

//We can do it in a more better way 

const inAPromise1 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hi");
        },3000)
    })
}

const inAPromise2 = ((res) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(res + ': we got 2nd data by fetching');
        },1500)
    })
})

inAPromise1()
    .then(res =>{
        return inAPromise2(res)
    })
    .then((res) =>{
         console.log(res)
    })
   
    .catch((err) =>{
        console.log(err);
    })