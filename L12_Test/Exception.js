"use strict";
var L12_Exception;
(function (L12_Exception) {
    let greets = [{ greet: "Hi" }, { greet: "Hallo" }, { greet: "Servus" }];
    try {
        let input = prompt("Lass dich grüßen!", "Gib hier eine Zahl ein");
        let greet = greets[Number(input)].greet;
        alert(greet);
    }
    catch (_error) {
        alert("Tschüss!");
        console.log(_error);
    }
    console.log("Done");
})(L12_Exception || (L12_Exception = {}));
//# sourceMappingURL=Exception.js.map