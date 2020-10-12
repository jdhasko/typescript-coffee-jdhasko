
export abstract class coffee
{

    discount: number;
    abstract Price(): number;
    
    Strength():string {return "Strong"}

    constructor(discount:number)
    {
        this.discount=discount;
    }
}