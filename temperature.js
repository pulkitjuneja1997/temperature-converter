var v;

function converter(){    

    x = document.getElementById("unit").value;
    console.log(x);
    console.log(typeof(x));

    if(x=="Celcius"){ 
        if(document.getElementById("value").value == ""){
            alert("Please Enter a value");

        }

        else{
            console.log(document.getElementById("value").value);
            v = [(document.getElementById("value").value - 32 )* (5/9)];
        }
    }
    else{
        if(document.getElementById("value").value == ""){
            alert("Please Enter a value");
        }
        else{
            v = [(document.getElementById("value").value * (9/5)) + 32]; 

        }

               
    }
    console.log(v);
    console.log(typeof(v));

    document.getElementById("resultheading").innerHTML = "Result in "  + x + " is:" ;
    document.getElementById("screen").innerHTML = v ;


}