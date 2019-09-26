
let show = document.getElementsByClassName("show");
let hide = document.getElementsByClassName("hide");
let list = document.getElementsByClassName("list");
let xhttp = new XMLHttpRequest();
function loadId(x){
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            let obj = JSON.parse(this.responseText)
            for(let i = 0; i < 5; i++){
                let li = document.createElement("li");
                li.innerHTML = obj[i].id;
                list[x].appendChild(li)
            }
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
    show[x].style.display = "none";
    hide[x].style.display = "block";
}
function dropId(x){
    list[x].classList.toggle("drop")
}