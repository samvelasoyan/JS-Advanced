
let show = document.getElementsByClassName("show");
let hide = document.getElementsByClassName("hide");
let list = document.getElementsByClassName("list");
let xhttp = new XMLHttpRequest();
function loadId(){
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            let obj = JSON.parse(this.responseText)
            for(let i = 0; i < 5; i++){
                let li = document.createElement("li");
                li.innerHTML = obj[i].id;
                list[0].appendChild(li);
                list[0].classList.add("drop");
                hide[0].classList.remove("load")
            }
        };
        if (this.readyState !== 4) {
            hide[0].classList.add("load")
        }
        };
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhttp.send();
        show[0].style.display = "none";
        hide[0].style.display = "block";
};
function loadTitle(){
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            let obj = JSON.parse(this.responseText)
            for(let i = 0; i < 5; i++){
                let li = document.createElement("li");
                li.innerHTML = obj[i].title;
                list[1].appendChild(li);
                list[1].classList.add("drop");
                hide[1].classList.remove("load")
            }
        };
        if (this.readyState !== 4) {
            hide[1].classList.add("load")
        }
        };
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhttp.send();
        show[1].style.display = "none";
        hide[1].style.display = "block";
};
function loadBody(){
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            let obj = JSON.parse(this.responseText)
            for(let i = 0; i < 5; i++){
                let li = document.createElement("li");
                li.innerHTML = obj[i].body;
                list[2].appendChild(li);
                list[2].classList.add("drop");
                hide[2].classList.remove("load");
            }
        };
        if (this.readyState !== 4) {
            hide[2].classList.add("load")
        }
        };
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhttp.send();
        show[2].style.display = "none";
        hide[2].style.display = "block";
};
function dropContent(x){
    list[x].classList.toggle("drop")
};