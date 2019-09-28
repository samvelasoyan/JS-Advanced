let main = document.getElementsByClassName("main")[0]
let cont = document.getElementsByClassName("container")[1];
let l = document.createElement("span");
let alert = document.createElement("div");
let btn = document.createElement("button");
alert.innerHTML = "Your request is posted"
btn.innerHTML = "ok"
alert.classList.add("alert");
alert.appendChild(btn)
l.classList.add("loader");
let xhttp = new XMLHttpRequest;
function postDoc(){
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            cont.removeChild(l);
            main.classList.remove("load");
            main.appendChild(alert);
            post.disabled = true;
            get.disabled = true;
            post.className = "disable";
            get.className = "disable";
        }
        if(this.readyState !== 4){
            cont.appendChild(l);
            main.classList.add("load");
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
            cont.removeChild(l);
            main.classList.remove("load");
        }
        if(this.readyState !== 4){
            cont.appendChild(l);
            main.classList.add("load")
        }
    }
    xhttp.open("GET", "http://rest.learncode.academy/api/johnbob/friends", true)
    xhttp.send()
};
btn.addEventListener("click", function(){
    main.removeChild(alert);
    post.disabled = false;
    get.disabled = false;
    post.classList.remove("disable");
    get.classList.remove("disable");
})