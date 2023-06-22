(()=>{
    const fullName = (firstName:string , lastName?:string , uppercase:boolean = true ):string => {
        if(uppercase)
        return `${firstName} ${lastName || "optional string"}`.toUpperCase();
        else
        return `${firstName} ${lastName || "optional string"}`.toLowerCase();
    }
    const name:string = fullName("Luis","Dominguez", false);
    console.log(name)
})();