import {coffee} from "./coffee"

export class Latte extends coffee implements Imilk
{
    MlMilk(): number {
        return 120;
    }
    Price(): number {
        return 40;
    }
    Strength(): string{return "Weak"}
    
    constructor(discount:number)
    {
        super(discount)
    }

}