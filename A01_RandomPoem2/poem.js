"use strict";
var RandomPoem2;
(function (RandomPoem2) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate = ["braut", "liebt", "studiert", "hasst", "zaubert", " zerstört"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //let nums: number[] = [1, 2, 3, 4, 5, 6];
    //let results: string [] = [];
    for (let i = subjekte.length; i >= 1; i--) {
        let result = createCall(subjekte, praedikate, objekte);
        //results.push(result);
        console.log(result);
    }
    //console.log(results);
    function createCall(subjekte, praedikate, objekte) {
        let wert1 = Math.floor(Math.random() * subjekte.length);
        let wert2 = Math.floor(Math.random() * praedikate.length);
        let wert3 = Math.floor(Math.random() * objekte.length);
        let werte = subjekte[wert1] + "  " + praedikate[wert2] + "  " + objekte[wert3];
        subjekte.splice(wert1, 1);
        praedikate.splice(wert2, 1);
        objekte.splice(wert3, 1);
        return werte;
    }
})(RandomPoem2 || (RandomPoem2 = {}));
//# sourceMappingURL=poem.js.map