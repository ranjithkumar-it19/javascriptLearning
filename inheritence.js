//Inheretance

class Cricket{
    india;
    australia;
    constructor(india,australia)
    {
        this.australia=australia;
        this.india=india;
    }
    display()
    {
        console.log(this.india,this.australia);
    }
}
class Batsman extends Cricket{
    runs;
    constructor(india,australia,runs)
    {
        //calling super constructor
         super(india,australia);
         this.runs=runs;
    }
   // overiding -display function runs over parent display function
    display()
    {
        console.log(this.india,this.australia);
        console.log(this.runs);
    }
}

let batsman =new Batsman("Viratkohli","stevesmith",100);
console.log(batsman);