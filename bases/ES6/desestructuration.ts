(()=>{
    type Avenger = {
        name: string;
        actor: string;
        age: number;
        active: boolean;
    }

    const thor: Avenger = {
        name : "Thor",
        actor: "Unknow",
        age: 25,
        active: true
    }

    //* desestructuracion

    const printAvenger = ( {name, ...rest}: Avenger):void => {
        console.log(name);
        console.log(rest)
    }

    //? uso de la funcion
    // printAvenger(thor);



    //* desestructuracion de arreglos
    const avengerArr: [ string, number, boolean ] = [ "Hulk", 12, true ];

    const [ name ] = avengerArr;
    // console.log({name});

    const [ , power , ] = avengerArr;
    // console.log({power});

    const [ , , active ] = avengerArr;
    // console.log({active});

})();