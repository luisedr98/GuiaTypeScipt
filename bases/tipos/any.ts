(()=>{

    //* puede tomar cualquier valor 
    // let avenger: any = 123;
    let avenger:any= "123";

    //* casteando para el intellisence
    const pos = (avenger as string).charAt(2);

    console.log(pos);
})();  