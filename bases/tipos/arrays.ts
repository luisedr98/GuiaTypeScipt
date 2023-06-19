(() => {


    const numbers:number[] = [ 1,2,3,4,5,6,7,8,9,];

    numbers.forEach( number => console.log(number));


    let villans:string[] = ["Iron man", "Batman", "Spiderman"];

    villans = villans.map( v => v.concat(" super"));
    console.log(villans);
})();