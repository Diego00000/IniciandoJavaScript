///** tipos de variantes */
/*var name="Fernando";
console.log("el tipo de name es: ", typeof name);
var age=20;
console.log("el tipo de age es: ", typeof age);
var active= true;
console.log("el tipo de active es: ", typeof active);*/

///** conversiones numericas */
/*var age2=parseInt(prompt("ingrese su edad"));
if(isNaN(age2)){
    alert("valor incorrecto");
}
else{
    alert("su edad es"+age2);
}
*/

///** ejercicio 1 */
/* mostrar la sumatoria y el promedio de los numeros introducidos por pantalla hasta que el nuimero sea negativo 
variable sumatoria, variable media, parseint, preguntar si es numero*/
/*var sum=0;
var average=0;
var count=0;
var num=25;
debugger;
while (num>0) {
    count++
   
    num=parseInt(prompt("ingrese su numero"));
    if(!isNaN(num) && num>=0){
         sum+=num;
         count++;
    }
}
average=sum/count;
alert("La sumatoria es" +sum+"\n"+ "El promedio es"+ average); */

///** mostrar todos los numeros que hay entre un rango inicial y un rango final suministrado por el usuario */
/*var rank=parseInt(prompt("ingrese el primer rango"));
var rank2=parseInt(prompt("ingrese el segundo rango"));
if (!isNaN(rank) && !isNaN(rank2) && rank>0 && rank2>0 && rank<rank2) {
    document.write("<h1> De "+ rank+" Hasta "+rank2+" Existen los siguientes numeros: </h1>")
    for (let index = rank; index <= rank2; index++) {
        console.log(index);
        document.write("<b>"+index+"</b><br>")
    }
    
}*/
///** pedir numeros por pantalla y decir cuales son los divisores */
/*var val=parseInt(prompt("ingrese el numero"));
console.log("el numero ingresado es: ",val);
for (let index = 0; index                                                                                                                         <=val; index++) {   
}
if (val%index==0) {
    document.write("<b>"+index+"</b><br>")
    
}*/


///** ejercicio 2 */
var rank2=parseInt(prompt("ingrese su numero"));

var num=prompt("ingrese el numero");
if (num*1==0) {
    console.log("son impares",num);
}
if (num*2==0) {
    console.log("son pares",num);
}



