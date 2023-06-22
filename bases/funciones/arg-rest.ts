(()=>{
    const fullName = (firstName:string , ...argRest:string[] ):string => {
       return `${firstName} ${argRest.join(" ")}`
    }
    const name:string = fullName("Luis","Dominguez","Ruiz");
    console.log(name)
})();