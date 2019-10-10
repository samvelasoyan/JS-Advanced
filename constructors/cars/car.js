class RollsRoyce{
    constructor(model, price){
        this.name = "Rolls-Royce";
        this.model = model;
        this.price = price
    }
    present(){
        let text = document.querySelector(`.${this.model}>.text`);
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let li4 = document.createElement("li");
        let list1 = document.createElement("ul");
        list1.className = "name";
        li1.innerHTML = this.name;
        li2.innerHTML = this.model;
        list1.appendChild(li1);
        list1.appendChild(li2);
        let list2 = document.createElement("ul");
        list2.className = "price";
        li3.innerHTML = "price";
        li4.innerHTML = "$" + this.price;
        list2.appendChild(li3);
        list2.appendChild(li4);
        text.appendChild(list1);
        text.appendChild(list2);
    }
}

let phantom = new RollsRoyce("phantom", 452000);
let ghost = new RollsRoyce("ghost", 325000);
let wraith = new RollsRoyce("wraith", 322000);
let dawn = new RollsRoyce("dawn", 349000);
let cullinan = new RollsRoyce("cullinan", 327000);
let blackbadge = new RollsRoyce("black-badge", 325000);

let arr = [phantom, ghost, wraith, dawn, cullinan, blackbadge]

for(let i of arr){
    i.present()
}