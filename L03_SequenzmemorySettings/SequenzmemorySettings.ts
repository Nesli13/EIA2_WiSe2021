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


    function handleload(_event: Event): void {
        console.log("handleload");

        input = <HTMLInputElement>document.getElementById("Textinput");
        input.addEventListener("click", promptInput);

        const targetDiv: HTMLElement = document.getElementById("form");
        const btn: HTMLElement = document.getElementById("Textinput");
        const text: HTMLElement = document.getElementById("title");
        btn.onclick = function (): void {
            if (targetDiv.style.display !== "none") {
                targetDiv.style.display = "none";
                text.style.display = "none";
            } else {
                targetDiv.style.display = "block";
                text.style.display = "block";
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
        let card: HTMLElement = document.createElement("div");

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

    function promptInput(_event: Event): void {
        var a: string = prompt("type a message", "");

        if (a != null) {
            document.getElementById("para").innerHTML = a;

        }

    }



    function main(_event: Event): void {
        /*  let fieldset: HTMLFormElement = <HTMLFormElement>document.querySelector(".fsAdjustment");
          if (fieldset.classList.contains("visible")) {
              fieldset.classList.remove("visible");
              fieldset.classList.add("is-hidden");
          }
          formData = new FormData(document.forms[0]); 
          console.log(formData);
          
          size = Number(formData.get("Slider"));
          backgroundColor = formData.get("BGColor"); 
          cardColor = formData.get("CColor"); 
          fontColor = formData.get("FColor"); 
          font = formData.get("Radiogroup"); 
  
          let pairOfCards: FormDataEntryValue | null = formData.get("Stepper"); 
          if (pairOfCards) {
          numPairs = Number(pairOfCards);
          }
          else {
              numPairs = 5;
          }
  
          for (let i: number = 0; i < numPairs; i++) {
              createCard(input[i]);
              createCard(input[i]);
          }*/
    }

}