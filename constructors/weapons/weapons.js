//Constructor

function Weapon(name, caliber, length, emptyWeight, fireRate, fireRange, feedSystem) {
    this.name = name;
    this.caliber = caliber;
    this.length = length;
    this.emptyWeight = emptyWeight;
    this.fireRate = fireRate;
    this.fireRange = fireRange;
    this.feedSystem = feedSystem;
    this.addList = () => {
        let stats = [
            "Name",
            "Caliber",
            "Length",
            "Empty weight",
            "Rate of fire",
            "Firing range",
            "Feed system"
        ];
        let txt = document.querySelector(`.${this.name}~.text`);
        let wpn = document.querySelector(`.${this.name}`).parentElement.parentElement;
        let list1 = document.createElement("ul");
        let list2 = document.createElement("ul");
        txt.appendChild(list1);
        txt.appendChild(list2);
        let ul = document.querySelectorAll(`.${this.name}~div>ul`);
        if (wpn.className === "weapon flip") {
            for (let i of stats) {
                let li = document.createElement("li");
                li.innerHTML = i;
                ul[0].appendChild(li);
            }
            for (let i of arguments) {
                let li = document.createElement("li");
                li.innerHTML = i;
                ul[1].appendChild(li);
            }
        } else {
            txt.removeChild(ul[0]);
            txt.removeChild(ul[1]);
        }
    };
}
const flip = (x, y) => {
    let wpn = document.querySelectorAll(".weapon");
    wpn[x].classList.toggle("flip");
    y.addList();
};

//   Class

// class Weapon {
//     constructor(name, caliber, length, emptyWeight, fireRate, fireRange, feedSystem) {
//         this.name = name;
//         this.caliber = caliber;
//         this.length = length;
//         this.emptyWeight = emptyWeight;
//         this.fireRate = fireRate;
//         this.fireRange = fireRange;
//         this.feedSystem = feedSystem;
//     }
//     addlist() {
//         let stats = [
//             "Name",
//             "Caliber",
//             "Length",
//             "Empty weight",
//             "Rate of fire",
//             "Firing range",
//             "Feed system"
//         ];
//         let txt = document.querySelector(`.${this.name}~.text`);
//         let wpn = document.querySelector(`.${this.name}`).parentElement.parentElement;
//         let list1 = document.createElement("ul");
//         let list2 = document.createElement("ul");
//         txt.appendChild(list1);
//         txt.appendChild(list2);
//         let ul = document.querySelectorAll(`.${this.name}~div>ul`);
//         if (wpn.className === "weapon flip") {
//             for (let i of stats) {
//                 let li = document.createElement("li");
//                 li.innerHTML = i;
//                 ul[0].appendChild(li);
//             }
//             for (let i of Object.values(this)) {
//                 let li = document.createElement("li");
//                 li.innerHTML = i;
//                 ul[1].appendChild(li);
//             }
//         } else {
//             txt.removeChild(ul[0]);
//             txt.removeChild(ul[1]);
//         }
//     }
// }
// function flip(x, y) {
//     let wpn = document.querySelectorAll(".weapon");
//     wpn[x].classList.toggle("flip");
//     y.addlist();
// }

let ak74Stats = {
    name: "ak74",
    caliber: "5.45x39 mm",
    length: "940 mm",
    emptyWeight: "3.3 kg",
    fireRate: "600 rounds/min",
    fireRange: "1000 m",
    feedSystem: "30/45 box magazine"
};
let svdStats = {
    name: "svd",
    caliber: "7.62x54 mm",
    length: "1225 mm",
    emptyWeight: "4.3 kg",
    fireRate: "40 rounds/min",
    fireRange: "1500 m",
    feedSystem: "10 box magazine"
};
let pkmStats = {
    name: "pkm",
    caliber: "7.62x54 mm",
    length: "1192 mm",
    emptyWeight: "9 kg",
    fireRate: "800 rounds/min",
    fireRange: "1000 m",
    feedSystem: "250 ammunition boxes"
};

let ak74 = new Weapon(...Object.values(ak74Stats));
let svd = new Weapon(...Object.values(svdStats));
let pkm = new Weapon(...Object.values(pkmStats));
