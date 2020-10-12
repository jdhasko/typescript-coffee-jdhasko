import { BlackCoffee } from "./BlackCoffee";
import {Cortado} from "./Cortado"
import { Latte } from "./Latte";
import {coffee} from "./coffee"

let elementIndex:number=0;
let cortadocoffee: Cortado = new Cortado(0);
let lattecoffee: Latte = new Latte(0);
let normalBlackCoffee: BlackCoffee = new BlackCoffee(0);
let discountedBlackCoffee: BlackCoffee = new BlackCoffee(4);

/*console.log("Coffee type:"+cortadocoffee.CoffeeDrink()+"\t"+"Price: "
+cortadocoffee.Price()+"kr" + "\tStrength: " + cortadocoffee.Strength());

console.log("Coffee type:"+lattecoffee.CoffeeDrink()+"\t"+"Price: "
+lattecoffee.Price() +"kr"+ "\tStrength: " + lattecoffee.Strength());

console.log("Coffee type:"+normalBlackCoffee.CoffeeDrink()+"\t"+"Price: "
+normalBlackCoffee.Price() +"kr"+ "\tStrength: " + normalBlackCoffee.Strength());
console.log("Coffee type: Cheap "+discountedBlackCoffee.CoffeeDrink()+"\t"+"Price: "
+discountedBlackCoffee.Price() +"kr"+ "\tStrength: " + discountedBlackCoffee.Strength());
*/

//Method for printing out coffee object info.
function printInfo(c : coffee) :void
{
    console.log(`Kaffedrik: ${c.CoffeeDrink()}`);
    console.log(`Rabat: ${c.discount}`);
    console.log( `Styrke: ${c.Strength()}`);
    console.log(`Pris: ${c.Price()}`);   
    console.log('__________________\n\n'); 
}


let CoffeeMenu : coffee[] = new Array(cortadocoffee,lattecoffee,discountedBlackCoffee)
let OrderList : coffee[] = new Array();
CoffeeMenu.forEach(element => { printInfo(element)});

if(OrderList.length == 0)
{
    document.getElementById("Orders").hidden = true;
}

document.getElementById("TitleCortado").innerText = cortadocoffee.CoffeeDrink();
document.getElementById("TitleLatte").innerText = lattecoffee.CoffeeDrink();
document.getElementById("TitleBlack").innerText = discountedBlackCoffee.CoffeeDrink();

//Not responsible solution.
document.getElementById("buttonCortado").addEventListener("click", (e:Event) => onClick("Cortado"))
document.getElementById("buttonLatte").addEventListener("click", (e:Event) => onClick("Latte"))
document.getElementById("buttonBlack").addEventListener("click", (e:Event) => onClick("Black"))

function CheckOrderListLenght():boolean
{
    if(OrderList.length <1) return false;
    else return true;
}



function RemoveProduct(table:HTMLTableElement, row : HTMLTableRowElement, index:number)
{
    table.deleteRow(row.rowIndex);
    delete OrderList[index]
    let totalcell:HTMLTableCellElement = <HTMLTableCellElement> document.getElementById("TotalPrice")   
    totalcell.innerText = TotalPrice().toString();

}




function addRow(c:coffee):void
{
    let newID = elementIndex
    var table: HTMLTableElement = <HTMLTableElement> document.getElementById("OrderList");
    let lastrow: HTMLTableRowElement = <HTMLTableRowElement> document.getElementById("tableFooter")
    var row:HTMLTableRowElement = table.insertRow(lastrow.rowIndex)
    row.addEventListener("click",(e:Event)=>RemoveProduct(table,row,newID))
    
    var newCell1 = row.insertCell(0)
    var newCell2 = row.insertCell(1)
    var newCell3 = row.insertCell(2)

    newCell1.appendChild(document.createTextNode(c.CoffeeDrink()));
    newCell2.appendChild(document.createTextNode(c.Strength()));
    newCell3.appendChild(document.createTextNode(c.Price().toString()));

    OrderList[newID] = c;
    elementIndex++;
    let totalcell:HTMLTableCellElement = <HTMLTableCellElement> document.getElementById("TotalPrice")   


    totalcell.innerText = TotalPrice().toString();

}


function onClick(coffee:string) 
{
    switch(coffee){
        case "Cortado":
        {
            addRow(cortadocoffee)
            if(CheckOrderListLenght && document.getElementById("Orders").hidden ==true) document.getElementById("Orders").hidden = false;

            
            break;
        }
        case "Black":
            {
                addRow(discountedBlackCoffee)
                if(CheckOrderListLenght && document.getElementById("Orders").hidden ==true) document.getElementById("Orders").hidden = false;

                break;
            }
    
        case "Latte":
        {
            addRow(lattecoffee)
            if(CheckOrderListLenght && document.getElementById("Orders").hidden ==true) document.getElementById("Orders").hidden = false;

            break;
        }
    
    

    }
}

function TotalPrice() :number
{
   let total : number = 0;

    OrderList.forEach(product => 
        {
        total += product.Price();
    });
    return total;
}


