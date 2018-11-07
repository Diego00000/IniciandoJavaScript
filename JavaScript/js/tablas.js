
var num1;
var num;
var tab;
var rango;

var num = prompt("Ingrese su numEro");
console.log("su numEro Es El siguiEntE",num);

var rango= prompt("ingrese el numero al cual quiere llegar");

console.log("hasta que numero quiere multiplicar");
for (let num2 = 1; num2<=10; num2++) {
    tab= num*num2;
    document.write("<br>"+num+" * "+num2+" = "+tab+"<br>");
        
}

for (let i = 1; i<=rango; i++) {
   
    document.write("tablas del numero"+ i);
    for (let num1 = 1; num1<=10; num1++) {
        tab= num*num1;
        document.write("<br>"+num+" * "+num1+" = "+tab+"<br>");
            
    }
        
        
    }
 
    
    

