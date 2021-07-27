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

myPromise
    .then((res)=>{
        console.log(JSON.stringify(res));
    })

    .catch((err)=>{
        console.log(err);
    })