function call(e){
    e.preventDefault();
    var e1 = document.getElementById("name").value.length;
    var e2 = document.getElementById("pwd").value.length;

    if((e1>20) && (e2>20)){
        document.getElementById("ename").style.color = "red";
        document.getElementById("epwd").style.color = "red";
        document.getElementById("name").style.boxShadow = "2px 2px 10px 0px red";
        document.getElementById("pwd").style.boxShadow = "2px 2px 10px 0px red";
        document.getElementById("iname").innerHTML = "Name too long";
        document.getElementById("ipass").innerHTML = "Password too long";
        alert("Please check the form");
        return false;
        
    }

    else if((e1>20) && (e2<20)){
        document.getElementById("ename").style.color = "red";
        document.getElementById("name").style.boxShadow = "2px 2px 10px 0px red";
        document.getElementById("epwd").style.color = "green";
        document.getElementById("pwd").style.boxShadow = "2px 2px 10px 0px green";
        document.getElementById("iname").innerHTML = "Name too long";
        document.getElementById("ipass").innerHTML = "";
        alert("Please check the form");
        return false;
        
    }

    else if((e1<20) && (e2>20)){
        document.getElementById("ename").style.color = "green";
        document.getElementById("name").style.boxShadow = "2px 2px 10px 0px green";
        document.getElementById("epwd").style.color = "red";
        document.getElementById("pwd").style.boxShadow = "2px 2px 10px 0px red";
        document.getElementById("iname").innerHTML = "";
        document.getElementById("ipass").innerHTML = "Passwod too long";
        alert("Please check the form");
        return false;
        
    }

    else{
        document.getElementById("ename").style.color = "green";
        document.getElementById("name").style.boxShadow = "2px 2px 10px 0px green";
        document.getElementById("epwd").style.color = "green";
        document.getElementById("pwd").style.boxShadow = "2px 2px 10px 0px green";
        document.getElementById("iname").innerHTML = "";
        document.getElementById("ipass").innerHTML = "";
        alert("Form submitted successfuly!");
        return true;
    }

}