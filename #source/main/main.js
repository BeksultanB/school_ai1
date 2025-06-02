



let ad = document.createElement("div");
let label = document.createElement("label");
let cost = document.createElement("span");
label.style.fontSize = "20px";
cost.style.fontSize = "20px";
cost.style.color = "green";

if(true) {
    label.style.color = "red";
    label.innerHTML = "Носки: ";
    cost.innerHTML = "50 сом";
}

    ad.append(label);
    ad.appendChild(cost);

    document.body.appendChild(ad);


// Если user мужчина старше 18 лет в рекламе отображается ноутбук стоимостью 50000 сом
// Если user мужчина младше 18 лет в рекламе отображается футболка стоимостью 500 сом
// Если user женщина старше 18 лет в рекламе отображается чехол для телефона стоимостью 400 сом
// Если user женщина младше 18 лет в рекламе отображается помада стоимостью 100 сом


// let age = +prompt("Enter your age: ");
// let element = document.createElement("div");
// element.innerHTML = "You are an "

// if(age >= 18) {
//     element.innerHTML += "adult";
// }
// else if (age > 12 && age < 18) {
//     element.innerHTML += "teenager";
// }
// else {
//     element.innerHTML += "child";
// }

// document.body.appendChild(element);