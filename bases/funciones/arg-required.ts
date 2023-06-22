(()=>{
    const fullName = (firstName:string , lastName:string ):string => {
        return `${firstName} ${lastName}`
    }
    const name:string = fullName("Luis", "Dominguez");
    console.log(name)
})();