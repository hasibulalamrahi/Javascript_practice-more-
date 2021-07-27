const hasMeeting = true ;

const meeting = new Promise((resolve,reject)=>{
    if(hasMeeting){
        const meetingDetails = {
            name : "Technical metting ",
            location : "Google Meet",
            time : "10:00 Pm"
        };
        resolve(meetingDetails);
    }

    else {
        reject ( new Error ("meeting has been canceled!"));
    }
});

const addCalender = (meetingDetails) =>{
    return new Promise((resolve , reject) =>{
        const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} , Thank You`;
        resolve(calender);
    })
};

meeting
    .then(addCalender)
    .then((res)=>{
        console.log(res);
    })
    
    .catch((err) =>{
        console.log(err.message)
    })