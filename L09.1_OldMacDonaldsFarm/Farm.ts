/*Aufgabe: L.03_SequenmemorySettings
Name: Neslisah Koc
Matrikel: 270155
Quellen: Zusammenarbeit mit Verena Rothweiler .*/
namespace L09_1_Animals {


    interface Storage {
        apple: number;
        meat: number;
        fish: number;
        gras: number;
        hay: number;

    }

    let storageLeft: Storage = {
        apple: 20,
        meat: 30,
        fish: 15,
        gras: 50,
        hay: 25

    };


    let crc2: CanvasRenderingContext2D;
    let allAnimals: Animals[] = [];

    window.addEventListener("load", hndLoad);

    function hndLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log(canvas);

        crc2 = canvas.getContext("2d")!;
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

    function createAnimals(): void {
        let horse: Animals = new Animals("Mr.Horse", "horse", "apple", 5, "Hüühü!");
        let dog: Animals = new Animals("Balu", "dog", "meat", 3, "Wuff!");
        let cat: Animals = new Animals("Bunny", "cat", "fish", 2, "Meow!");
        let cow: Animals = new Animals("BigHead", "cow", "gras", 15, "Muuh!");
        let sheep: Animals = new Animals("Fluffy", "sheep", "hay", 10, "Määh!");

        allAnimals.push(horse);
        allAnimals.push(dog);
        allAnimals.push(cat);
        allAnimals.push(cow);
        allAnimals.push(sheep);

        let horseDiv: HTMLElement = document.getElementById("horse");
        let dogDiv: HTMLElement = document.getElementById("dog");
        let catDiv: HTMLElement = document.getElementById("cat");
        let cowDiv: HTMLElement = document.getElementById("cow");
        let sheepDiv: HTMLElement = document.getElementById("sheep");

        horseDiv.innerHTML = "I'm a big " + horse.type + "<br>";
        dogDiv.innerHTML = "I'm a little " + dog.type + "<br>";
        catDiv.innerHTML = "I'm a cute " + cat.type + "<br>";
        cowDiv.innerHTML = "I'm a fat " + cow.type + "<br>";
        sheepDiv.innerHTML = "I'm a fluffy " + sheep.type + "<br>";

    }

    function feedTheAnimals(): void {
        let horseDiv: HTMLElement = document.getElementById("horse");
        let dogDiv: HTMLElement = document.getElementById("dog");
        let catDiv: HTMLElement = document.getElementById("cat");
        let cowDiv: HTMLElement = document.getElementById("cow");
        let sheepDiv: HTMLElement = document.getElementById("sheep");

        horseDiv.innerHTML += "<br>" + "I eat " + allAnimals[0].foodAmount + "kg of " + allAnimals[0].food + "<br>";
        dogDiv.innerHTML += "<br>" + "I eat " + allAnimals[1].foodAmount + "kg of " + allAnimals[1].food + "<br>";
        catDiv.innerHTML += "<br>" + "I eat " + allAnimals[2].foodAmount + "kg of " + allAnimals[2].food + "<br>";
        cowDiv.innerHTML += "<br>" + "I eat " + allAnimals[3].foodAmount + "kg of " + allAnimals[3].food + "<br>";
        sheepDiv.innerHTML += "<br>" + "I eat " + allAnimals[4].foodAmount + "kg of " + allAnimals[4].food + "<br>";

        storage();
    }

    function soundOfAnimals(): void {
        let horseDiv: HTMLElement = document.getElementById("horse");
        let dogDiv: HTMLElement = document.getElementById("dog");
        let catDiv: HTMLElement = document.getElementById("cat");
        let cowDiv: HTMLElement = document.getElementById("cow");
        let sheepDiv: HTMLElement = document.getElementById("sheep");

        horseDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm.  " + allAnimals[0].sound + " " + "<br>" + allAnimals[0].sound + "<br>";
        dogDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm.  " + allAnimals[1].sound + " " + "<br>" + allAnimals[1].sound + "<br>";
        catDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm.  " + allAnimals[2].sound + " " + "<br>" + allAnimals[2].sound + "<br>";
        cowDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm.  " + allAnimals[3].sound + " " + "<br>" + allAnimals[3].sound + "<br>";
        sheepDiv.innerHTML += "<br>" + "Old Mc Donalds had a farm.  " + allAnimals[4].sound + " " + "<br>" + allAnimals[4].sound + "<br>";

    }
    function storage(): void {
        storageLeft.apple -= allAnimals[0].foodAmount;
        storageLeft.fish -= allAnimals[1].foodAmount;
        storageLeft.gras -= allAnimals[2].foodAmount;
        storageLeft.hay -= allAnimals[3].foodAmount;
        storageLeft.meat -= allAnimals[4].foodAmount;

        let storageDiv: HTMLElement = document.getElementById("storage");
        storageDiv.innerHTML = "Pay Attention!" + "<br>" + " This is what you have left:" + "<br>" + "<br>" + storageLeft.apple + " kg of apple " + "<br>" + storageLeft.fish + " kg of fish " + "<br>" + storageLeft.gras + " kg of gras " + "<br>" + storageLeft.hay + " kg of hay " + "<br>" + storageLeft.meat + " kg of meat" + "<br>";
    }
}