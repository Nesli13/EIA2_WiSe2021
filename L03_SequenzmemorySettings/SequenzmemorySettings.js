"use strict";
/*Aufgabe: L.03_SequenmemorySettings
Name: Neslisah Koc
Matrikel: 270155
Datum:
Quellen: Zusammenarbeit mit Verena Rothweiler */
var Sequenzmemory;
(function (Sequenzmemory) {
    window.addEventListener("load", handleload);
    let input; //Karteninhalt
    let inputArray = [];
    let showLetter = 0;
    let showLetterArray = [];
    let checkLastCard = [];
    function handleload(_event) {
        console.log("handleload");
        input = document.getElementById("Textinput");
        input.addEventListener("click", promptInput);
        const targetDiv = document.getElementById("form");
        const btn = document.getElementById("Textinput");
        const text = document.getElementById("title");
        btn.onclick = function () {
            if (targetDiv.style.display !== "none") {
                targetDiv.style.display = "none";
                text.style.display = "none";
            }
            else {
                targetDiv.style.display = "block";
                text.style.display = "block";
            }
        };
        let createGame = document.querySelector(".start");
        createGame.addEventListener("click", main);
        let fieldsets = document.querySelectorAll("fieldset");
        // Install listeners on fieldsets
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        console.log();
        if (_event.type == "change")
            console.warn("Change: " + target.name + " = " + target.value, _event);
        else
            console.log("Input: " + target.name + " = " + target.value, _event);
    }
    let formData;
    let size;
    let backgroundColor;
    let cardColor;
    let font;
    let fontColor;
    function createCard(_input) {
        let card = document.createElement("div");
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
    function clickCards(_event) {
        let target = _event.target;
        if (target.classList.contains("card")) {
            showLetter++;
            if (!(showLetter > 2) && target.classList.contains("hidden") && target != showLetterArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("choosenCard");
                    showLetterArray.push(target);
                }
            }
            else {
                showLetter--;
            }
            if (showLetter == 2) {
                setTimeout(checkCards, 500);
            }
        }
    }
    function checkCards() {
        if (showLetterArray[0].innerHTML == inputArray[0].innerHTML) {
            for (let i = 0; i < inputArray.length; i++) {
                showLetterArray[i].classList.remove("open");
                showLetterArray[i].classList.add("done");
            }
        }
        else {
            for (let i = 0; i < inputArray.length; i++) {
                showLetterArray[i].classList.remove("open");
                showLetterArray[i].classList.add("hidden");
            }
        }
        inputArray = [];
        showLetter = 0;
        checkWin();
    }
    function promptInput(_event) {
        var a = prompt("type a message", "");
        if (a != null) {
            document.getElementById("para").innerHTML = a;
        }
    }
    function main(_event) {
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
})(Sequenzmemory || (Sequenzmemory = {}));
//# sourceMappingURL=SequenzmemorySettings.js.map