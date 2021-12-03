"use strict";
/*Aufgabe: L.03_SequenmemorySettings
Name: Neslisah Koc
Matrikel: 270155
Quellen: Zusammenarbeit mit Verena Rothweiler .*/
var L09_1_Animals;
(function (L09_1_Animals) {
    let storageLeft = {
        apple: 20,
        meat: 30,
        fish: 15,
        gras: 50,
        hay: 25
    };
    let crc2;
    let allAnimals = [];
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        createAnimals();
        feedTheAnimals();
        soundOfAnimals();
        storageLeft.apple = 20;
        storageLeft.meat = 30;
        storageLeft.fish = 15;
        storageLeft.gras = 50;
        storageLeft.hay = 25;
        document.querySelector("#btn").addEventListener("click", feedTheAnimals);
    }
    function createAnimals() {
        let horse = new L09_1_Animals.Animals("Mr.Horse", "horse", "apple", 5, "Hüühü!");
        let dog = new L09_1_Animals.Animals("Balu", "dog", "meat", 3, "Wuff!");
        let cat = new L09_1_Animals.Animals("Bunny", "cat", "fish", 2, "Meow!");
        let cow = new L09_1_Animals.Animals("BigHead", "cow", "gras", 15, "Muuh!");
        let sheep = new L09_1_Animals.Animals("Fluffy", "sheep", "hay", 10, "Määh!");
        allAnimals.push(horse);
        allAnimals.push(dog);
        allAnimals.push(cat);
        allAnimals.push(cow);
        allAnimals.push(sheep);
        let horseDiv = document.getElementById("horse");
        let dogDiv = document.getElementById("dog");
        let catDiv = document.getElementById("cat");
        let cowDiv = document.getElementById("cow");
        let sheepDiv = document.getElementById("sheep");
        horseDiv.innerHTML = "I'm a big " + horse.type + "<br>";
        dogDiv.innerHTML = "I'm a little " + dog.type + "<br>";
        catDiv.innerHTML = "I'm a cute " + cat.type + "<br>";
        cowDiv.innerHTML = "I'm a fat " + cow.type + "<br>";
        sheepDiv.innerHTML = "I'm a fluffy " + sheep.type + "<br>";
    }
    function feedTheAnimals() {
        let horseDiv = document.getElementById("horse");
        let dogDiv = document.getElementById("dog");
        let catDiv = document.getElementById("cat");
        let cowDiv = document.getElementById("cow");
        let sheepDiv = document.getElementById("sheep");
        horseDiv.innerHTML += "<br>" + "I eat " + allAnimals[0].foodAmount + "kg of " + allAnimals[0].food + "<br>";
        dogDiv.innerHTML += "<br>" + "I eat " + allAnimals[1].foodAmount + "kg of " + allAnimals[1].food + "<br>";
        catDiv.innerHTML += "<br>" + "I eat " + allAnimals[2].foodAmount + "kg of " + allAnimals[2].food + "<br>";
        cowDiv.innerHTML += "<br>" + "I eat " + allAnimals[3].foodAmount + "kg of " + allAnimals[3].food + "<br>";
        sheepDiv.innerHTML += "<br>" + "I eat " + allAnimals[4].foodAmount + "kg of " + allAnimals[4].food + "<br>";
        storage();
    }
    function soundOfAnimals() {
        let horseDiv = document.getElementById("horse");
        let dogDiv = document.getElementById("dog");
        let catDiv = document.getElementById("cat");
        let cowDiv = document.getElementById("cow");
        let sheepDiv = document.getElementById("sheep");
        horseDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm.  " + allAnimals[0].sound + " " + "<br>" + allAnimals[0].sound + "<br>";
        dogDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm.  " + allAnimals[1].sound + " " + "<br>" + allAnimals[1].sound + "<br>";
        catDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm.  " + allAnimals[2].sound + " " + "<br>" + allAnimals[2].sound + "<br>";
        cowDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm.  " + allAnimals[3].sound + " " + "<br>" + allAnimals[3].sound + "<br>";
        sheepDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm.  " + allAnimals[4].sound + " " + "<br>" + allAnimals[4].sound + "<br>";
    }
    function storage() {
        storageLeft.apple -= allAnimals[0].foodAmount;
        storageLeft.fish -= allAnimals[1].foodAmount;
        storageLeft.gras -= allAnimals[2].foodAmount;
        storageLeft.hay -= allAnimals[3].foodAmount;
        storageLeft.meat -= allAnimals[4].foodAmount;
        let storageDiv = document.getElementById("storage");
        storageDiv.innerHTML = "Pay Attention!" + "<br>" + " This is what you have left:" + "<br>" + "<br>" + storageLeft.apple + " kg of apple " + "<br>" + storageLeft.fish + " kg of fish " + "<br>" + storageLeft.gras + " kg of gras " + "<br>" + storageLeft.hay + " kg of hay " + "<br>" + storageLeft.meat + " kg of meat" + "<br>";
    }
})(L09_1_Animals || (L09_1_Animals = {}));
//# sourceMappingURL=Farm.js.map