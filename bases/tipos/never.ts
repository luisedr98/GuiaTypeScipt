(()=>{

    const error = (message:string, flat:boolean = false):(never | boolean) =>{
        if(flat){
            throw new Error(message)
        }

        return true;
    } 



     console.log(error("Exist and error", true));

})();

