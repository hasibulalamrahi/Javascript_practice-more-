function hello() {

    return "hello";
}

function world() {

    return "world";
}

let flag = true;

const myPromise = new Promise(
    function (resolve, reject) {
        if (flag) {
            setTimeout(() => {

                return resolve({ name: "hasib", image: "imageUrl" });
            }, 1000);
        }
        else {
            return reject({ message: "failed" });
        }
    }
)

// const value = await myPromise();
// console.log(myPromise);

// myPromise
//     .then(
//         function (value) {
//             console.log(value);
//             return getImageAPI(value.image)
//         }
//     )
//     .then(
//         function (image) {
//             console.log(image)
//         }
//     )
//     .catch(
//         function (err) {
//             console.error(err);
//         }
//     )


function getImageAPI(url) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('image.jpg');
        }, 1000);
    })
}

async function helloWorld() {
    const result = await myPromise;

    const image = await getImageAPI(result.image);
    console.log(result);
    console.log(image);
}

helloWorld();