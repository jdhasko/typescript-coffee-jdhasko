import {Cortado} from "./Cortado"
import { Latte } from "./Latte";

let cortadocoffee: Cortado = new Cortado(0);
let lattecoffee: Latte = new Latte(0);

console.log("Coffee type: Cotado\t"+"Price: "
+cortadocoffee.Price()+"kr" + "\tStrength: " + cortadocoffee.Strength());

console.log("Coffee type: Latte\t"+"Price: "
+lattecoffee.Price() +"kr"+ "\tStrength: " + lattecoffee.Strength());
