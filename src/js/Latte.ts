import {coffee} from "./coffee"

export class Latte extends coffee implements Imilk
{
    CoffeeDrink(): string {
        return "Latte";
    }
    MlMilk(): number {
        return 120;
    }
    Price(): number {
        return 40 - this.discount;
    }
    Strength(): string{return "Weak"}
    
    constructor(discount:number)
    {
        super(discount)
    }

}