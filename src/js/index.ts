import { BlackCoffee } from "./BlackCoffee";
import {Cortado} from "./Cortado"
import { Latte } from "./Latte";

let cortadocoffee: Cortado = new Cortado(0);
let lattecoffee: Latte = new Latte(0);
let normalBlackCoffee: BlackCoffee = new BlackCoffee(0);
let discountedBlackCoffee: BlackCoffee = new BlackCoffee(4);

console.log("Coffee type:"+cortadocoffee.CoffeeDrink()+"\t"+"Price: "
+cortadocoffee.Price()+"kr" + "\tStrength: " + cortadocoffee.Strength());

console.log("Coffee type:"+lattecoffee.CoffeeDrink()+"\t"+"Price: "
+lattecoffee.Price() +"kr"+ "\tStrength: " + lattecoffee.Strength());

console.log("Coffee type:"+normalBlackCoffee.CoffeeDrink()+"\t"+"Price: "
+normalBlackCoffee.Price() +"kr"+ "\tStrength: " + normalBlackCoffee.Strength());
console.log("Coffee type: Cheap "+discountedBlackCoffee.CoffeeDrink()+"\t"+"Price: "
+discountedBlackCoffee.Price() +"kr"+ "\tStrength: " + discountedBlackCoffee.Strength());