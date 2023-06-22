(()=>{
    const fullName = (firstName:string , lastName?:string ):string => {
        return `${firstName} ${lastName || "optional string"}`
    }
    const name:string = fullName("Luis",);
    console.log(name)
})();