var binary = "101";
var arr = binary.split("");
var integer = 0;

for(var i = 0; i<arr.length; i++){

    if(arr[0] == "1"){
        integer += 8;
    }
    else if(arr[0] =="0"){
        integer += 0;
    }
    if(arr[1] =="1"){
        integer += 4;
    }
    else if(arr[1] =="0"){
        integer+=0;
    }
    if(arr[2] == "1"){
        integer+= 2;
    }
    else if(arr[2] =="0"){
        integer+=0;
    }
    if(arr[3] == "1"){
        integer +=1
    }
    else if(arr[3] =="0"){
        integer+=0;
    }

}
console.log(integer);