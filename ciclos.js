/*var rep=prompt("ingrese el numero de repeticiones");
for (let index = 0; index <= rep; index++) {
    console.log(index);
   
    
}
 */
//**leer 10 numeros por teclado e imprimir si son pares y si es multiplo de 3 */
/*for (let index = 0; index <10 ; index++) {
    var num=prompt("ingrese repeticiones");
    if (num*3==0){
        console.log("es multiplo de tres",num);   
    }
    if (num*2==0) {
        console.log("son pares",num);
    }
    else{
        console.log("no es par ni multiplo de tres",num);
    }
  
    
}*/

///** ciclo while */
/* realizar la sumatoria de numeros ingresados por pantalla,
 cuando el numero sea igual a cero le debe imprimir
  el resultado de la sumatoria */

  var sum=0;
  debugger;
  do {
    var numer=prompt("ingrese el numero");
      sum+=numer;
     
            
  }
while (numer!=0);  
