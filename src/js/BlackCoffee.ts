import { coffee } from "./coffee";

export class BlackCoffee extends coffee 
{
    Price(): number {
        return 20 - this.discount;
    }

    constructor(discount:number)
    {
        super(discount)
    }

} 