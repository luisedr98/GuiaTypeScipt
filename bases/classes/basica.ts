(()=>{

    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string;

        static avgAge: number = 35;

        //* definicion y asignación en una sola linea 
        constructor( private name: string, private team: string, public realName?:string ){
            // this.name = name;
            // this.team = team;
            // this.realName = realName
        }

        public bio = ():string => {
            return `${this.name} (${this.team}) !!!`
        } 
    }

    const hulk :Avenger = new Avenger("Hulk", "Avengers");
    // console.log(hulk.bio())



})();

