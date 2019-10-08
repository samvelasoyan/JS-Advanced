function Weapon(){
    let addList = () => {
        let rows = document.querySelectorAll(`.${this.name}~div tr`);
        for(let i = 0; i < 7; i++){
          let td = document.createElement("td")
          rows[i].appendChild(td);
          td.innerHTML = Object.values(this)[i];
        };
    };
    return addList()
}
let ak74 = {
    name: "ak74",
    caliber: "5.45x39 mm",
    length: "940 mm",
    emptyWeight: "3.3 kg",
    fireRate: "600 rounds/min",
    fireRange: "1000 m",
    feedSystem: "30/45-round box magazine"
};
let svd = {
    name: "svd",
    caliber: "7.62x54 mm",
    length: "1225 mm",
    emptyWeight: "4.3 kg",
    fireRate: "40 rounds/min",
    fireRange: "1500 m",
    feedSystem: "10-round box magazine"
}
let pkm = {
    name: "pkm",
    caliber: "7.62x54 mm",
    length: "1192 mm",
    emptyWeight: "9 kg",
    fireRate: "800 rounds/min",
    fireRange: "1000 m",
    feedSystem: "200/250-round ammunition boxes"
}
const akStats = Weapon.bind(ak74);
const svdStats = Weapon.bind(svd);
const pkmStats = Weapon.bind(pkm);
akStats()
svdStats()
pkmStats()
const flip = (x) => {
  document.querySelectorAll(".weapon")[x].classList.toggle("flip")
}