

//Implicit Binding example -1
var sakib = {
    name: 'Shakib',
    age : 35,
     printPlayerName : function (name){
        console.log(this.name);
    }
};

sakib.printPlayerName();


