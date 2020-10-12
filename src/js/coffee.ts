
export abstract class coffee
{

    discount: number;
    abstract Price(): number;
    abstract CoffeeDrink():string;

    Strength():string {return "Strong";}


    constructor(discount:number)
    {
        this.discount=discount;
    }


}