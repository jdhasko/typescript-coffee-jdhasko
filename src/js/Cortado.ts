import { coffee } from "./coffee";

 export class Cortado extends coffee implements Imilk
 {
     MlMilk(): number {
         return 25;
     }
     Price()
     {
         return 25 - this.discount;
     }
     Strength()
     {
         return "Weak";
     }

     constructor(discount:number)
     {
        super(discount);
     }

 }