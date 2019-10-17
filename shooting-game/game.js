function goal(txt) {
    let box = document.createElement("div");
    box.className = "box";
    let div = document.createElement("div");
    div.className = "goal";
    div.innerHTML = txt;
    let btn = document.createElement("button");
    btn.innerHTML = "try again!";
    btn.addEventListener("click", () => location.reload());
    box.appendChild(div);
    box.appendChild(btn);
    container.appendChild(box);
}
container.addEventListener("click", function shoot(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    let w = window.innerWidth;
    ball.style.top = `${y - 50}px`;
    ball.style.left = `${x - 50}px`;
    console.log(y, x);
    if (y < 390 && 168 < y && x < 810 && 188 < x) {
        ball.style.transform = "scale(0.5)";
        goal("GOAL!!");
    } else if (y < 390) {
        ball.style.transform = "scale(0.5)";
        goal("MISSED!");
    } else if (y < 450) {
        ball.style.transform = "scale(0.7)";
        goal("MISSED!");
    } else {
        ball.style.transform = "scale(1)";
        goal("MISSED!");
    }
    container.removeEventListener("click", shoot);
});
