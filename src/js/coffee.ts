
export abstract class coffee
{

    discount: number;
    abstract Price(): number;
    
    Strength():string {return "Mild"}

    constructor(discount:number)
    {
        this.discount=discount;
    }
}