//***pedir datos por teclado***//

var nombre = prompt("Ingrese su nombre");

console.log("Este es mi nombre",nombre);
alert(nombre);

var edad = prompt("ingrese su edad");
console.log("esta es mi edad",edad);
alert(edad);


//** variables numericas */
var num = 5;
console.log("num",num);

//** variables de texto */
var palabras = "palabras";
console.log("palabras",palabras);

//**variables boleanas */
var activo = true;
console.log("activo",activo);

//** variables tipo arreglo */
var colores = ["red","cyan",activo,num];
console.log("colores",colores);

//** variables tipo objeto u object */
var vehiculo = {
    tipo:"automovil",
    modelo:2018,
    usado:true,
};
console.log("vehiculo",vehiculo);
console.log("tipo de vehiculo",vehiculo.tipo);




//** diferencias entre var y let */

var apellido = "maria";
console.log("apellido",apellido);
apellido = 25;
console.log("apellido num",apellido);
 if(true){
     apellido = "ruiz";
     console.log("apelido dentro del if",apellido);
 }
 console.log("apellido fuera del if",apellido);

 var cantidad = 22;
 console.log("cantidad",cantidad);
 if(true){
     let cantidad =35;
     console.log("cantidad dentro del if",cantidad);
 }
 console.log("cantidad  fuera del if",cantidad);


 //** Constantes */
 
const edad1=15;
/*
console.log("edad cons",edad);
edad= 25;
console.log("edad",edad);


//** concatenacion de variables */
var anio= 2000;
var promedio="25";
console.log("la concatenacion de "+ anio + "y" + promedio + "es" ,anio+Number(promedio));

let numero1=50;
let numero2=158;
console.log("la concatenacion es ",String(numero1)+String(numero2) );

//** ventanas */
//** alertas */
alert("la concatenacion es ");
//** prompt */
var modelo=prompt("el modelo del carro es",1901);
//** conf */
var conf= confirm("desea salir de la app")
console.log("confirmacion",conf);
