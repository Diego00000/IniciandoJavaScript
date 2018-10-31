/* realizar un script que pida al usuario dos numeros,
 diga cual de los numeros es mayor y identificar
  si los dos numeros son iguales */

 /*console.log("este es su primer numero",numero);
alert(numero);
var numero2= prompt("ingrese segundo numero");
console.log("este es su segundo numero",numero2);
alert(numero2);

if(numero>numero2){
    numero>numero2
    console.log("el numero mayor es",numero);
}

else if(numero<numero2){
    numero<numero2
    console.log("el numero mayor es",numero2);
}

else{
console.log("los numeros son iguales");
}
var numero= prompt("ingrese primer numero"); */ 

/* ingresar por pantalla la edad de una persona 
si la persona es mayor de 18 años indicar que es 
mayor de eedasd de lo contrario sera menor de edad 
si tiene la edad menor o igual a 33 escribir eres milenia
si es mayor a 33 y menor de 70 no es milenia
si es mayor o igual a 70 eres un anciano*/

/*var edad = prompt("ingrese su edad");
console.log("esta es su edad",edad);
alert(edad);

if(edad>18){
   
    console.log("la persona es mayor de edad");
}
else if(edad<=33){
    
    console.log("es mille");

}
if(edad>33){
    
    console.log("eres milenia");

}
if(edad>33){
    
    console.log("no es milenia");

}
if(edad>70){
    
    console.log("eres anciano");

} /*


///** operadores de comparacion */

var a= 5;
var b=5;
if(a==b){
    console.log("a y b son iguales");
}
if(a===b){
    console.log("a y b son iguales en tipo y en valor");
}
else{
    console.log("a y b no son iguales en tipo en valor");
}

///** operador ternario */
var aux=0;
if(a==b){
     aux=5;
    console.log(aux);
}
else{
    aux=10;
    console.log(aux);
}
var result= a==b?10 : 20;
console.log(result);

var year=prompt("introduzca un año");
var resultado= year != 2018? true: false;

///** Switch */

var day= prompt("introduzca un dia de la semana");
function Set_Day(day){
switch(day){
    case "sabado":
    console.log("voy a ir al cine");
    break;
    case "domingo":
    console.log("voy a hacer deporte");
    break;
    case "lunes":
    console.log("voy a trabajar");
    break;
    default:
    console.log("no es un dia valido");
}
}
Set_Day(day);
Set_Day("domingo");
Set_Day(13);