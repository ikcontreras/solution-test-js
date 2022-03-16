# Ejercicio 1

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no 
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que 
nos devuelve el código es el mismo valor en cada iteración. 

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script? ¿Cuál es el motivo?
2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… 
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

```
    > 0
    > 1
    > 2
    > 3
    > 4
```

## Respuesta

La método setTimeOut es una función que ejecuta el código después de un determinado
tiempo. Por esta razón cuando se ejecuta el setTimeOut el `for` ya habrá hecho su 
recorrido mostrando siempre el valor final de la operacion. Que es `5`

Para poder controlar la ejecución y que el setTimeOut entre el ciclo del `for` se tendría 
que utilizar un clousure alrededor de `i` de esta forma.
```
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(() => {
            console.log(i)
        }, 1000);
    })(i);
}
```
Sin embargo esta solución no satisface la necesidad de imprimir el numero cada segundo para
lo cual la solución mas sencilla yo creo que se debería utilizar el setInterval, usado de esta
forma.

```
  let a = 0;
  let interval = setInterval( x => {
  if ( a != 5 ) {
     console.log(a++)
  } else {
     clearInterval(interval)
  }}, 1000)
```