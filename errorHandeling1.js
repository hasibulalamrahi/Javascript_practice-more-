//Error handeling --> try , catch , finally , throw
//try , catch handle the run time errors  not any runtime errors


//In this segment we will go through simple error handeling in a try and catch block
try {
    alert("This is a simple alert");
    alert("This is still in the try block");
    alert(a);
} catch(err){
    alert(err.message);
    alert(err.name);
}

finally{
    alert("this block will work always");
}
