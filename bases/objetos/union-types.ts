(()=>{
 type hero = {
        name: string;
        age: number;
        powers: number[],
        getName?: () => string
    }

    let myCustomVariable: ( string | number | hero ) ;

    myCustomVariable = "Luis";
    console.log(myCustomVariable)
    
    myCustomVariable = 2;
    console.log(myCustomVariable)
    
    myCustomVariable = {
        name : "Eduardo",
        age:24,
        powers : [1]
    }
    console.log(myCustomVariable)


})();