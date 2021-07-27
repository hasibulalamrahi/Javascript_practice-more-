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

async function theMeeting(){
    const ourMeeting = await meeting;
    const calender = await addCalender(ourMeeting);
    console.log(calender);
}
theMeeting();