let cont = document.getElementsByClassName("container")[0];
let l = document.createElement("span");
l.classList.add("loader");
let xhttp = new XMLHttpRequest;
function postDoc(){
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log("your request is posted!");
            cont.removeChild(l  )
        }
        if(this.readyState !== 4){
            cont.appendChild(l);
            
        }
    }
    xhttp.open("POST", "http://rest.learncode.academy/api/johnbob/friends", true);
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(JSON.stringify({name: "Superman", age: 36}))
};
function getDoc(){
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let obj = JSON.parse(this.responseText)
            demo.innerHTML = "Your ID is " + obj[0].id;
            cont.removeChild(l)
        }
        if(this.readyState !== 4){
            cont.appendChild(l)
        }
    }
    xhttp.open("GET", "http://rest.learncode.academy/api/johnbob/friends", true)
    xhttp.send()
};