function stopWatch(){
    var starTime = Date.now();

    function getDelay(){
        console.log(Date.now() - starTime);
    }

    return getDelay;
}

var timer = stopWatch();

for(var i=0; i< 100000000; i++){
    var a = Math.random()*10000000;
}
timer();

