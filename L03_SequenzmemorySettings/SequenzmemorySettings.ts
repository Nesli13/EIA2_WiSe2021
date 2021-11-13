/*Aufgabe: L.03_SequenmemorySettings
Name: Neslisah Koc
Matrikel: 270155
Datum: 
Quellen: Zusammenarbeit mit Verena Rothweiler */
namespace Sequenzmemory {

    window.addEventListener("load", handleload);

    let input: HTMLInputElement; //Karteninhalt
    let inputArray: HTMLElement[] = [];
    let showLetter: number = 0;
    let showLetterArray: HTMLElement[] = [];
    let checkLastCard: HTMLElement[] = [];
    let gameField: HTMLDivElement;


    function handleload(_event: Event): void {
        console.log("handleload");

        input = <HTMLInputElement>document.getElementById("Textinput");
        input.addEventListener("click", promptInput);




        const targetDiv: HTMLElement = document.getElementById("form");
        const otherDiv: HTMLElement = document.getElementById("#memory");
        const btn: HTMLElement = document.getElementById("Textinput");
        const text: HTMLElement = document.getElementById("title");
        btn.onclick = function (): void {
            if (targetDiv.style.display !== "none") {
                targetDiv.style.display = "none";
                text.style.display = "none";

            } else {
                targetDiv.style.display = "block";
                text.style.display = "block";
                if (otherDiv.style.display == "none") {
                    otherDiv.style.display = "block";

                }
                else {
                    otherDiv.style.display = "none";
                }
            }


        };



        let createGame: HTMLElement = <HTMLElement>document.querySelector(".start");
        createGame.addEventListener("click", main);


        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");

        // Install listeners on fieldsets
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log();
        if (_event.type == "change")
            console.warn("Change: " + target.name + " = " + target.value, _event);
        else
            console.log("Input: " + target.name + " = " + target.value, _event);

    }

    let formData: FormData;
    let size: number;
    let backgroundColor: FormDataEntryValue | null;
    let cardColor: FormDataEntryValue | null;
    let font: FormDataEntryValue | null;
    let fontColor: FormDataEntryValue | null;

    function createCard(_input: string): void {
        gameField = document.createElement("div");
        gameField.style.backgroundColor = <string>formData.get("background")?.toString();
        let card: HTMLSpanElement = document.createElement("span");

        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.appendChild(gameField);


        card.innerHTML = _input;
        card.classList.add("card");
        card.classList.add("hidden");

        inputArray.push(card);
        checkLastCard.push(card);
        card.addEventListener("click", clickCards);

        card.style.width = size + "px";
        card.style.height = size + "px";
        if (backgroundColor) {
            card.style.backgroundColor = backgroundColor.toString();
        }

        if (cardColor) {
            card.style.background = cardColor.toString();
        }

        if (fontColor) {
            card.style.color = fontColor.toString();
        }

        if (font) {
            card.style.fontFamily = font.toString();
        }

    }
    function clickCards(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.classList.contains("card")) {
            showLetter++;
            if (!(showLetter > 2) && target.classList.contains("hidden") && target != showLetterArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("choosenCard");
                    showLetterArray.push(target);
                }
            } else {
                showLetter--;
            }
            if (showLetter == 2) {
                setTimeout(checkCards, 500);
            }
        }
    }
    function checkCards(): void {
        if (showLetterArray[0].innerHTML == inputArray[0].innerHTML) {
            for (let i: number = 0; i < inputArray.length; i++) {
                showLetterArray[i].classList.remove("open");
                showLetterArray[i].classList.add("done");
            }
        } else {
            for (let i: number = 0; i < inputArray.length; i++) {
                showLetterArray[i].classList.remove("open");
                showLetterArray[i].classList.add("hidden");

            }
        }
        inputArray = [];
        showLetter = 0;
        checkWin();
    }

    // tslint:disable-next-line: no-any
    function shuffle(array: any): any {
        // tslint:disable-next-line: no-any
        var currentIndex: any = array.length, temporaryValue: any, randomIndex: any;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function promptInput(_event: Event): void {
        var a: string = prompt("type a message", "");


        if (a != null) {
            //console.log(arr);
            // document.getElementById("para").innerText = a;  
            let arr: string[] = a.split("");
            shuffle(arr);

            // document.getElementById("para").innerText = arr;
            console.log(arr);

        }

    }



    function shuffleArray(_arr: any[]): any[] {
        for (var i: number = _arr.length - 1; i > 0; i--) {
            var j: number = Math.floor(Math.random() * (i + 1));
            var temp: number = _arr[i];
            _arr[i] = _arr[j];
            _arr[j] = temp;
        }
        return _arr;
    }
    function main(_event: Event): void {

        shuffleArray(inputArray);
        for (let i: number = 0; i < inputArray.length; i++) {
            let user: HTMLDivElement = <HTMLDivElement>document.getElementById("user");
            user.appendChild(inputArray[i]);

        }
    }



}