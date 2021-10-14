namespace RandomPoem {
    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore" ];
    let praedikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", " zerstört" ];
    let objekte: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren" ];
   // console.log(subjekte, praedikate, objekte);


    for (let i: number = subjekte.length; i >= 1 ; i--) {
      //console.log(i);

      let werteAusgeben: string = getVerse(subjekte,  praedikate, objekte);
      console.log(werteAusgeben);
        
    }

    function getVerse(_subjekte: string[], _praedikate: string[], _objekte: string[]): string {
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