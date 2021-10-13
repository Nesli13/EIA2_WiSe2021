 namespace RandomPoem2 {
    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore" ];
    let praedikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", " zerstört" ];
    let objekte: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren" ];
    

    //let nums: number[] = [1, 2, 3, 4, 5, 6];
    //let results: string [] = [];

    for (let i: number = subjekte.length ; i >= 1 ; i--) {
      
      let result: string = getVerse (subjekte, praedikate, objekte);
    

      //results.push(result);
      console.log(result);
    }
    //console.log(results);


    function getVerse(subjekte: string[], praedikate: string[], objekte: string[]): string {
        let wert1: number = Math.floor(Math.random() * subjekte.length);
        let wert2: number = Math.floor(Math.random() * praedikate.length);
        let wert3: number = Math.floor(Math.random() * objekte.length);
        let werte: string = subjekte[ wert1 ] + "  " + praedikate[wert2] + "  " + objekte[wert3];
        subjekte.splice(wert1, 1);
        praedikate.splice(wert2,  1);
        objekte.splice(wert3,  1);
        return werte;  
    }
}