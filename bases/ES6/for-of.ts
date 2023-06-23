(()=>{

    type Avenger = {
        name: string,
        weapon: string
    }

    const thor:Avenger = {
        name : "thor",
        weapon: "wjirlo"
    }

    const captainAmerica:Avenger = {
        name : "Captian America",
        weapon: "shield"
    }

    const avengersArr:Avenger[] = [ thor, captainAmerica];

    for (const avenger of avengersArr) {
        // console.log(avenger.name, avenger.weapon)
    }


})();

