const container = document.querySelector(".container")

const cars = [
    {name: "Oracle Red Bull Racing", image: "img/rb2.avif"},
    {name: "Mercedes-AMG Petronas Formula One Team", image: "img/mamg2.avif"},
    {name: "Scuderia Ferrari", image: "img/fe2.avif"},
    {name: "Aston Martin Aramco Cognizant Formula One Team", image: "img/am2.avif"},
    {name: "McLaren Formula 1 Team", image: "img/ml2.avif"},
    {name: "Alpine F1 Team", image: "img/al2.avif"},
    {name: "Williams Racing", image: "img/wi2.avif"},
    {name: "MoneyGram Haas F1 Team", image: "img/ha2.avif"},
    {name: "Alfa Romeo F1 Team Stake", image: "img/ar2.avif"},
    {name: "Scuderia AlphaTauri", image: "img/at2.avif"},
]

//<!--<img class="card-avatar" src=${image} />-->

const showCars =() => {
    let output =""

    cars.forEach(
        ( {name, image} ) => 
            (output += `
                <div class="card">
                    <img class="card-avatar" src=${image} loading="lazy" />
                    <h1 class="card-title"> ${name}</h1>
                </div>
            
            `)
    )

    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCars)

if ("serviceWorker" in navigator){
    console.log("si funciona")
    window.addEventListener("load", function(){
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("Service Worker Registrado"))
            .catch(err => console.log("Service Worker No Registrado"))
    }

    );
}

