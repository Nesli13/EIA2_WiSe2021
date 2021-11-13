/*Aufgabe: L.03_SequenmemorySettings
Name: Neslisah Koc
Matrikel: 270155
Datum: 
Quellen: Zusammenarbeit mit Verena Rothweiler */
namespace Sequenzmemory {

    let choosenInput: HTMLInputElement; //Karteninhalt
    let choosenInputArray: HTMLElement[] = [];
    let showLetter: number = 0;
    let showLetterArray: HTMLElement[] = [];
    let checkLastCard: HTMLElement[] = [];
    let formData: FormData;
    let size: number;
    let backgroundColor: FormDataEntryValue | null;
    let cardColor: FormDataEntryValue | null;
    let font: FormDataEntryValue | null;
    let fontColor: FormDataEntryValue | null;
    let gameField: HTMLElement;
    let _input: string;

    window.addEventListener("load", handleload);

    function handleload(_event: Event): void {
        console.log("handleload");

        choosenInput = <HTMLInputElement>document.getElementById("Textinput");
        choosenInput.addEventListener("click", chooseInput);
        // nach der Eingabe verschwindet die div mit der id="form" und  id="memory" erscheint
        const formDiv: HTMLElement = document.getElementById("form");
        const memoryDiv: HTMLElement = document.getElementById("memory");
        const btn: HTMLElement = document.getElementById("Textinput");
        const text: HTMLElement = document.getElementById("title");
        btn.onclick = function (): void {
            if (formDiv.style.display !== "none") {
                formDiv.style.display = "none";
                text.style.display = "none";
                memoryDiv.style.display = "block";


            } else {
                formDiv.style.display = "block";
                text.style.display = "block";
                memoryDiv.style.display = "none";
                
            }


        };
        let game: HTMLElement = <HTMLElement>document.querySelector(".start");
        game.addEventListener("click", startGame);

        function startGame(_event: Event): void {

            shuffleArray(choosenInputArray);
            for (let i: number = 0; i < choosenInputArray.length; i++) {
                let user: HTMLDivElement = <HTMLDivElement>document.getElementById("user");
                user.appendChild(choosenInputArray[i]);

            }
            // tslint:disable-next-line: no-unused-expression
            createGame;
        }
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

        // Handling checkbox
        if (target.type == "checkbox")
            console.log("Checked: " + target.name + " = " + target.checked);

    }

    function createGame(_event: Event): void {
        gameField = document.createElement("div#memory");
        gameField.style.backgroundColor = <string>formData.get("background")?.toString();

        let card: HTMLSpanElement = document.createElement("span");
       

        card.innerHTML = _input;
        card.classList.add("card");
        card.classList.add("hidden");

        choosenInputArray.push(card);
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
        if (showLetterArray[0].innerHTML == choosenInputArray[0].innerHTML) {
            for (let i: number = 0; i < choosenInputArray.length; i++) {
                showLetterArray[i].classList.remove("open");
                showLetterArray[i].classList.add("done");
            }
        } else {
            for (let i: number = 0; i < choosenInputArray.length; i++) {
                showLetterArray[i].classList.remove("open");
                showLetterArray[i].classList.add("hidden");

            }
        }
        choosenInputArray = [];
        showLetter = 0;
        //checkWin();
    }

    // tslint:disable-next-line: no-any
    function shuffle(array: any): any {
        // tslint:disable-next-line: no-any
        var choosenInput: any = array.length, temporaryValue: any, randomIndex: any;
        while (0 !== choosenInput) {
            randomIndex = Math.floor(Math.random() * choosenInput);
            choosenInput -= 1;
            temporaryValue = array[choosenInput];
            array[choosenInput] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function chooseInput(_event: Event): void {
        var choosenInput: string = prompt("type a message", "");


        if (choosenInput != null) {
            //console.log(arr);

            let choosenInputArray: string[] = choosenInput.split("");
            shuffle(choosenInputArray);
           // document.getElementById("para").innerHTML = choosenInputArray;  
            // document.getElementById("para").innerText = arr;
            console.log(choosenInputArray);

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


}